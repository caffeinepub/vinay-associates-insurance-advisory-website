# Specification

## Summary
**Goal:** Replace the About Us page founder picture with the user-provided reference photo while keeping the existing asset path unchanged.

**Planned changes:**
- Crop and resize the provided reference photo to a centered 3:4 portrait and replace the image file at `/assets/generated/founder-photo.dim_300x400.jpg`.
- Verify the About Us (Founder's Message) section renders the updated image without any layout regressions on mobile or desktop.

**User-visible outcome:** The About Us page shows the new founder photo in the Founder's Message section, loading from the same existing image path.
