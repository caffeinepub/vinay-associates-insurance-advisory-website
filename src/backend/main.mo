import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";

import AccessControl "authorization/access-control";
import UserApproval "user-approval/approval";
import MixinAuthorization "authorization/MixinAuthorization";
import MixinStorage "blob-storage/Mixin";

// Use migration module on upgrades

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  let approvalState = UserApproval.initState(accessControlState);
  include MixinStorage();

  // Persistent Storage
  let contactForms = Map.empty<Nat, ContactForm>();
  let callbackRequests = Map.empty<Nat, CallbackRequest>();
  let insuranceEnquiries = Map.empty<Nat, InsuranceEnquiry>();
  let testimonials = Map.empty<Nat, Testimonial>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  var nextContactFormId = 1;
  var nextCallbackRequestId = 1;
  var nextEnquiryId = 1;
  var nextTestimonialId = 1;

  // Types
  type ContactForm = {
    id : Nat;
    fullName : Text;
    phone : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  type CallbackRequest = {
    id : Nat;
    fullName : Text;
    phone : Text;
    preferredTime : Text;
    message : Text;
    timestamp : Int;
  };

  type InsuranceEnquiry = {
    id : Nat;
    fullName : Text;
    contactMethod : Text;
    insuranceType : Text;
    additionalInfo : Text;
    timestamp : Int;
  };

  public type Testimonial = {
    id : Nat;
    name : Text;
    message : Text;
    videoUrl : ?Text;
    timestamp : Int;
    approved : Bool;
    rating : Nat;
  };

  public type UserProfile = {
    name : Text;
  };

  // User Approval System
  public query ({ caller }) func isCallerApproved() : async Bool {
    AccessControl.hasPermission(accessControlState, caller, #admin) or UserApproval.isApproved(approvalState, caller);
  };

  public shared ({ caller }) func requestApproval() : async () {
    UserApproval.requestApproval(approvalState, caller);
  };

  public shared ({ caller }) func setApproval(user : Principal, status : UserApproval.ApprovalStatus) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    UserApproval.setApproval(approvalState, user, status);
  };

  public query ({ caller }) func listApprovals() : async [UserApproval.UserApprovalInfo] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    UserApproval.listApprovals(approvalState);
  };

  // User Profile Management
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Public Update Methods - No authorization required (public forms)
  public shared func submitContactForm(
    fullName : Text,
    phone : Text,
    email : Text,
    message : Text,
  ) : async () {
    let id = nextContactFormId;
    let timestamp = Time.now();

    let contactForm : ContactForm = {
      id;
      fullName;
      phone;
      email;
      message;
      timestamp;
    };

    contactForms.add(id, contactForm);
    nextContactFormId += 1;
  };

  public shared func requestCallback(
    fullName : Text,
    phone : Text,
    preferredTime : Text,
    message : Text,
  ) : async () {
    let id = nextCallbackRequestId;
    let timestamp = Time.now();

    let callbackRequest : CallbackRequest = {
      id;
      fullName;
      phone;
      preferredTime;
      message;
      timestamp;
    };

    callbackRequests.add(id, callbackRequest);
    nextCallbackRequestId += 1;
  };

  public shared func submitEnquiry(
    fullName : Text,
    contactMethod : Text,
    insuranceType : Text,
    additionalInfo : Text,
  ) : async () {
    let id = nextEnquiryId;
    let timestamp = Time.now();

    let enquiry : InsuranceEnquiry = {
      id;
      fullName;
      contactMethod;
      insuranceType;
      additionalInfo;
      timestamp;
    };

    insuranceEnquiries.add(id, enquiry);
    nextEnquiryId += 1;
  };

  // Update submitTestimonial to take & store rating
  public shared func submitTestimonial(
    name : Text,
    message : Text,
    videoUrl : ?Text,
    rating : Nat,
  ) : async Testimonial {
    if (rating < 1 or rating > 5) {
      Runtime.trap("Rating must be between 1 and 5");
    };

    let id = nextTestimonialId;
    let timestamp = Time.now();

    let testimonial : Testimonial = {
      id;
      name;
      message;
      videoUrl;
      timestamp;
      approved = true;
      rating;
    };

    testimonials.add(id, testimonial);
    nextTestimonialId += 1;
    testimonial;
  };

  public shared ({ caller }) func deleteTestimonial(id : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete testimonials");
    };

    switch (testimonials.get(id)) {
      case (null) { Runtime.trap("Testimonial not found") };
      case (?_) {
        testimonials.remove(id);
      };
    };
  };

  // Admin-Only Query Methods - Sensitive customer data
  public query ({ caller }) func getContactForm(id : Nat) : async ContactForm {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view contact forms");
    };

    switch (contactForms.get(id)) {
      case (null) { Runtime.trap("Contact form not found") };
      case (?form) { form };
    };
  };

  public query ({ caller }) func getCallbackRequest(id : Nat) : async CallbackRequest {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view callback requests");
    };

    switch (callbackRequests.get(id)) {
      case (null) { Runtime.trap("Callback request not found") };
      case (?request) { request };
    };
  };

  public query ({ caller }) func getEnquiry(id : Nat) : async InsuranceEnquiry {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view enquiries");
    };

    switch (insuranceEnquiries.get(id)) {
      case (null) { Runtime.trap("Enquiry not found") };
      case (?enquiry) { enquiry };
    };
  };

  public query ({ caller }) func getAllContactForms() : async [ContactForm] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all contact forms");
    };

    contactForms.values().toArray();
  };

  public query ({ caller }) func getAllCallbackRequests() : async [CallbackRequest] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all callback requests");
    };

    callbackRequests.values().toArray();
  };

  public query ({ caller }) func getAllEnquiries() : async [InsuranceEnquiry] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all enquiries");
    };

    insuranceEnquiries.values().toArray();
  };

  public query ({ caller }) func getAllTestimonials() : async [Testimonial] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all testimonials");
    };
    testimonials.values().toArray();
  };

  // Public Query Methods
  public query func getApprovedTestimonials() : async [Testimonial] {
    testimonials.values().filter(
      func(t) { t.approved }
    ).toArray();
  };

  // Calculate average testimonial rating (1–5, or 0 if none)
  public query func getAverageRating() : async Nat {
    let approved = testimonials.values().filter(
      func(t) { t.approved }
    ).toArray();

    if (approved.size() == 0) { return 0 };

    let sum = approved.foldLeft(
      0,
      func(acc, t) { acc + t.rating },
    );
    sum / approved.size();
  };
};

