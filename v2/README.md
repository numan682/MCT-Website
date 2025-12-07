# MCT Department Website

This is a single-page website for the Multimedia & Creative Technology Department. It blends static content with a few small data-driven bits (faculty and courses) to keep things lively without needing a backend. The goal is to showcase programs, labs, people, and admissions info in one scrollable story.

## What’s inside (file by file)
- `index.html`: All content blocks live here. Each major section is a semantic `<section>` with Bootstrap classes for layout. Anchor IDs on the sections match the navbar links so scrolling is smooth.
- `assets/css/styles.css`: Custom theme tokens, gradients, glassmorphism effects, and responsive tweaks. Bootstrap handles the base grid, but the look and feel come from this file.
- `assets/js/app.js`: Small scripts to render faculty and course data, wire up filters, animate the hero, and handle basic form validation.
- `assets/images/`: Local images, including faculty portraits and the favicon. External image URLs were downloaded so the page isn’t pulling assets from other domains.

## Libraries and where they’re used
- **Bootstrap 5.3**: Grid, navbar behavior, spacing utilities, and form styling. The navbar collapse, button styles, and layout columns all rely on Bootstrap classes.
- **Swiper**: Powers the hero carousel (`.hero-swiper`). Pagination dots and autoplay are configured in `initSwiper()` in `assets/js/app.js`.
- **AOS (Animate on Scroll)**: Fade/slide effects when sections enter the viewport. Initialized once in `initAOS()`; data attributes on sections drive the effect.
- **GSAP**: Handles the entrance sequence for the hero text, stats, and floating chips in `initGSAP()`. Keeps motion smooth without heavy configuration.
- **Remix Icon**: Icon font for social links and small UI glyphs referenced in `index.html`.

## How the data-driven parts work
- **Faculty grid**: `facultyData` in `assets/js/app.js` lists each person with name, role, contact info, and a local photo path. `renderFaculty()` builds cards and filters them as you type in the search box.
- **Course listing**: `courseData` in `assets/js/app.js` organizes courses by semester. Chips at the top set the active semester, and the search box filters titles, codes, and descriptions. `renderCourses()` groups and counts the results on the fly.

## Layout and section details
- **Hero**: The Swiper visual stack sits on the left; headline, CTAs, and stats sit on the right. GSAP animates both halves on load.
- **Highlights**: Top row is a wide Industry Collaboration card plus an Alumni Spotlight card (text-only, no avatar). Second row has the three feature tiles from the original layout.
- **About**: Two-column layout with vision/mission pills and a grid of “studio culture” cards. CSS handles the soft borders and light gradients.
- **Faculty**: Dynamic grid populated by JS. The search input sits in the section header.
- **Courses**: Semester chips across the top, a search bar, and a live course count. Cards render as simple tables inside scrollable wrappers.
- **Tuition & Eligibility**: Uses custom glass cards to call out credit hours, fees, and eligibility bullets. Buttons link out to official pages.
- **News & Events**: Vertical timeline with badges for category tags.
- **FAQs**: Bootstrap accordion for common questions; content is in `index.html`.
- **Contact**: Left column lists address, phone, and email plus a Google Maps embed. Right column has a form with light client-side validation in `handleForm()` (empty fields and basic email pattern).
- **Footer**: Department description, quick links, and social icons using Remix Icon.

## Styling approach
- Theme tokens live at the top of `assets/css/styles.css` (`:root`) for colors, shadows, and radius. v2 uses a teal + amber palette with a mint/sand background gradient and slightly larger corner radius.
- Cards use “glass” and “glass-liquid” classes for the translucent effect. Shared utilities like `.pill`, `.badge`, and `.link-more` keep spacing and typography consistent.
- Responsive tweaks are included at the bottom of the CSS to adjust paddings, hide floating accents on small screens, and simplify the navbar.

## Interaction and motion
- Swiper handles the hero slides with autoplay and pagination on the left-side carousel.
- AOS fades sections in as the user scrolls.
- GSAP animates the hero headline, CTAs, stats, and floating chips.
- A back-to-top button appears after scrolling; `handleHeaderScroll()` toggles it and the header shadow.
- The navbar closes automatically on mobile when a link is tapped (`handleNavCollapse()`).

## Form handling
- The contact form uses native validation cues with a small custom check in `handleForm()`. Empty required fields get an invalid state, the email is matched against a simple pattern, and a status message is shown inline. No submission is sent; it’s a front-end-only demo.

## Assets and hosting notes
- All faculty photos and the favicon are stored locally under `assets/images/` to avoid broken external links. The remaining images used in the hero and cards are also local files in `assets/images/`.
- CDN links are used for third-party libraries (Bootstrap, Swiper, AOS, GSAP, Remix Icon) to keep the repository light.
