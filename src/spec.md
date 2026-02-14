# Specification

## Summary
**Goal:** Fix the About Us founder photo so it displays correctly using the provided uploaded image, and add a short founder bio below the founder title.

**Planned changes:**
- Process the uploaded founder photo into a center-cropped 3:4 portrait at exactly 300x400 and save it as `frontend/public/assets/generated/founder-photo.dim_300x400.jpg`, ensuring the About Us page loads it at runtime from `/assets/generated/founder-photo.dim_300x400.jpg` without a broken/blank image.
- Add the provided English founder bio text beneath the founder role/title in the About Us founder section, with spacing/styling consistent with the page.

**User-visible outcome:** The About Us page shows the founder photo (not a blank/question-mark image) and displays a short founder bio under the founder title.
