# LadderFrame Website Mockup — Developer Handoff

## Purpose
This is a high-fidelity content/layout mock for the production website. It is based on the approved LadderFrame website narrative and current holding-site visual language. It is NOT a final coded production site.

## Primary navigation
Home | Services | About | Contact | Let’s Talk

“Let’s Talk” is a persistent CTA linking to the Contact page’s `#start` conversation section. Contact and Let’s Talk are therefore one destination, with different roles: Contact = navigation; Let’s Talk = conversion CTA.

## Brand system
- Primary canvas: white / light neutral
- Navy: #12213A
- Accent red: #E31E2D
- Body: Inter / approved equivalent
- Display/headings: Montserrat-style / approved equivalent
- Generous whitespace and thin neutral rules
- Red used selectively for CTA, labels, key numbers and the six-bar brand device
- Use the approved LadderFrame logo; do not redraw the logo

## Home = Landing page
The Home page is the professional landing page. There is no separate landing page.
Sequence:
1. Hero with structural image
2. Operating proof strip
3. Who we work with
4. Growth inflection / six business questions
5. Proposition
6. Six capabilities
7. Selected anonymised work
8. How we engage
9. Final CTA

## Services block logic
Each of the six services uses exactly THREE blocks, in this order:
1. Advisory Focus
2. What We Work Through
3. Typical Outcome

A selected-evidence strip follows each capability. Do not add more than three core boxes unless the production UX requires it.

## Case studies
Customer names remain anonymised:
- Pharma Distribution Company
- IT Services Company
- Agri-Tech & Rural Impact Company
- Data & AI Platform Company

Pharma case: ₹2.65 Cr / 6 weeks.
Active engagements use “current outcome focus” and should not imply completed client outcomes.

## Positioning
Keep the firm clearly positioned as an ADVISORY business. The language should use advisory, judgement, guidance, enablement, challenge, coaching and practical support. Avoid generic consulting-firm language.

## Commercial language
Do not surface pricing model, retainership, deliverables, fee mechanics or outcome-linked fee language on the website. These are commercial contracting matters, not positioning copy.

## Content density
The Word narrative is the content master. The live site should show the decision-relevant layer first, using short blocks and progressive disclosure. Avoid paragraph-heavy layouts.

## Responsive behaviour
Desktop target: 1440px wide. Tablet and mobile layouts are included in CSS. The six capability blocks collapse from 3 columns to 2 and then 1.

## Developer notes
- Replace local asset paths with production CDN/static asset paths.
- Replace placeholder structural image with the approved production image if a different licensed image is selected.
- Load the exact approved brand fonts if available.
- Preserve spacing and hierarchy rather than copying pixel dimensions literally.
- The six red bars should be incorporated as a subtle brand device in the final production design.
- All CTA buttons should lead to Contact / conversation.
