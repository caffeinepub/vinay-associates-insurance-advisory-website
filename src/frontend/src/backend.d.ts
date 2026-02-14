import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface UserApprovalInfo {
    status: ApprovalStatus;
    principal: Principal;
}
export interface CallbackRequest {
    id: bigint;
    fullName: string;
    message: string;
    preferredTime: string;
    timestamp: bigint;
    phone: string;
}
export interface ContactForm {
    id: bigint;
    fullName: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface InsuranceEnquiry {
    id: bigint;
    additionalInfo: string;
    insuranceType: string;
    contactMethod: string;
    fullName: string;
    timestamp: bigint;
}
export interface UserProfile {
    name: string;
}
export interface Testimonial {
    id: bigint;
    name: string;
    approved: boolean;
    message: string;
    timestamp: bigint;
    rating: bigint;
    videoUrl?: string;
}
export enum ApprovalStatus {
    pending = "pending",
    approved = "approved",
    rejected = "rejected"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    deleteTestimonial(id: bigint): Promise<void>;
    getAllCallbackRequests(): Promise<Array<CallbackRequest>>;
    getAllContactForms(): Promise<Array<ContactForm>>;
    getAllEnquiries(): Promise<Array<InsuranceEnquiry>>;
    getAllTestimonials(): Promise<Array<Testimonial>>;
    getApprovedTestimonials(): Promise<Array<Testimonial>>;
    getAverageRating(): Promise<bigint>;
    getCallbackRequest(id: bigint): Promise<CallbackRequest>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getContactForm(id: bigint): Promise<ContactForm>;
    getEnquiry(id: bigint): Promise<InsuranceEnquiry>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    isCallerApproved(): Promise<boolean>;
    listApprovals(): Promise<Array<UserApprovalInfo>>;
    requestApproval(): Promise<void>;
    requestCallback(fullName: string, phone: string, preferredTime: string, message: string): Promise<void>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    setApproval(user: Principal, status: ApprovalStatus): Promise<void>;
    submitContactForm(fullName: string, phone: string, email: string, message: string): Promise<void>;
    submitEnquiry(fullName: string, contactMethod: string, insuranceType: string, additionalInfo: string): Promise<void>;
    submitTestimonial(name: string, message: string, videoUrl: string | null, rating: bigint): Promise<Testimonial>;
}
