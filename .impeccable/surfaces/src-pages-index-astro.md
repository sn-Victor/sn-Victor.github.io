---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

Scope: the portfolio home page (src/pages/index.astro), the whole site. Visitor mode: Experience (the work leads from the first viewport).

Audience and job: recruiters and hiring managers screening Victor for SWE internships and roles; one or two minutes; outcome is an email or a case study opened.

Constraints: not themed around or tied to Settlemyre (employer named only as fact); no phone number; graduation Dec 2027; static Astro on GitHub Pages; three 22-second demo videos with posters in public/media.

Chosen direction: the category standard, executed at the craft level of rauno.me, emilkowal.ski and paco.me (user picked canon, then confirmed these references).

Memorable moment: a demo video that grows from its place in the list into a full-screen player and settles back when closed.

## Direction contract

THESIS: A quiet, type-led portfolio where shipped work speaks first: three production systems as large, video-led entries. It refuses the dark gradient hero, skill-pill clouds and equal project cards of the old site.

OWN-WORLD: Warm near-white ground with true ink, a stepped gray scale for secondary text, and one restrained blue used only for links and focus, and one semantic green used only for live status (the availability dot and "In production"/"Live"). Geist for text, Geist Mono only for dates, runtimes and metrics. Hairline separators, no cards, no boxes except the media frames. Automatic dark mode from the system setting.

STORY: The visitor reads who Victor is and that he is available, watches a real demo within the first screen, skims three case studies with their decisions and numbers, and emails him in one click.

FIRST VIEWPORT: A narrow 640px reading column. Name, role, a one-sentence pitch and the availability line with Email, GitHub and LinkedIn in the top third. The first case study's title row (name, kind, status, and a Watch with sound button) sits above its frame on the 640px column, and the video, 16:9 at about 960px wide, begins in the lower half, autoplaying muted; the title moved above the frame so the first viewport names the project without anything drawn over the footage. Email is the primary action, in the header line.

FORM: canon at the level of rauno.me / emilkowal.ski / paco.me; picked from the safer re-roll round; seed:ccc7b6fa25574b74. Signature interaction: the video expands from its frame into a full-screen player (View Transitions, with a fallback), then returns to its frame. Motion grammar: custom ease-out, under 300ms for interface feedback, one staggered entrance on load, press scale on controls, nothing animates under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
