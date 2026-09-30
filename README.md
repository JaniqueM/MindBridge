# MindBridge

MindBridge is a university capstone website that offers people aged **13 and older** a gentle place to check in, reflect, explore wellbeing resources and find pathways toward human support. It is an early-support bridge, not a substitute for a clinician, diagnosis or treatment.

## Project links

- **Live website:** Pending managed publication.
- **Public GitHub repository:** Pending the requested canonical repository connection and public-access verification.
- **SRS:** Use the assignment document supplied separately; add an authorized share link in the required course submission document.

## Run locally

MindBridge is a static HTML, CSS and browser-JavaScript application. It has no framework or package dependencies; Node.js and `npm install` are not required.

1. Clone the public repository: `git clone <public-repository-url>`.
2. Enter the cloned project folder: `cd <cloned-folder>`.
3. Open `index.html` in a current browser, or run `python3 -m http.server 8000` from the project root and open `http://localhost:8000`.
4. Keep JavaScript enabled. A network connection is needed for Google-hosted fonts and the hosted landing illustration; local CSS and SVG fallbacks remain available.
5. With a local server, the route manifest is at `http://localhost:8000/manus-routes.json`.
6. Mood, journal, reading-plan and appointment-preview information can be removed from **Settings → Clear saved information**. Use fictional content only.

## Explore MindBridge

- Start with **Continue anonymously** or the account-access screens. The role views (Young person, Professional and Administrator) are local examples; they do not create real accounts or access permissions.
- The Home page links to the support guide, wellbeing check, **Journal**, mood tracker, resources, optional faith section, professional directory and urgent-help screen. Journal is available as its own navigation item and Home shortcut.
- The support guide uses scripted responses and local keyword matching; it is not an AI model or a reliable crisis detector. It does not monitor messages or alert staff.
- The five-question wellbeing check is educational and screening-style only. It is not a validated clinical instrument, diagnosis or assurance that a concern is absent.
- Journal and mood tools save locally in the current browser. Local storage is not encrypted and may be visible to other people using that browser.
- Professional profiles, availability, booking/referral steps, administrator statistics and publish/approval controls are illustrative examples. No real appointment or referral is sent, and listed profiles are not verified.
- Faith-based content is optional and complementary; it never replaces professional support.

## Safety, privacy and limitations

This is a **front-end-only student prototype**. There is no online account service, password recovery, clinical monitoring, live AI, licensed-provider directory, real booking, email/SMS, referral transmission, encrypted database or emergency dispatch. The site cannot verify a visitor's age: its **13+** age statement is self-attested. Do not enter real passwords, names, contact details or sensitive health information.

User-entered chat, mood, journal, screening and contact content is not sent to an application API. Browser-local information is not encrypted; use **Clear saved information** in Settings to remove it. The page requests fonts and landing artwork from external hosts; those providers may receive ordinary request metadata such as an IP address.

Referral previews appear only after explicit consent and contain minimal anonymous information. The Professional and Administrator views are not production access controls. MindBridge does not claim POPIA compliance, confidentiality, clinical validation or effectiveness. If there is immediate danger, use the real support contacts below; no one monitors this website.

## South African support contacts and sources

Contact details were checked against the linked sources on 30 September 2026. Availability can change; confirm with the service itself when possible.

- [SADAG](https://www.sadag.org/) — Suicide Crisis Helpline: **0800 567 567**.
- [LifeLine South Africa](https://lifelinesa.co.za/) — National Counselling Line: **0861 322 322**.
- [Western Cape Government emergency-number guidance](https://www.westerncape.gov.za/know-who-you-can-call-emergency) — **112** from a mobile phone on the listed South African networks.
- [South African Government call centres and help lines](https://www.gov.za/about-government/government-call-centres-and-help-lines).
- Source notes: [`docs/contact-source-notes.md`](docs/contact-source-notes.md).

## Course submission reminders

The website, source README, eventual public repository and live URL support the technical rubric deliverables. The learner still needs to record a clear 5–10 minute product walkthrough video and prepare the course Google Doc with the video, GitHub, SRS and website links. Verify each link using an assessor-accessible account and do not submit placeholders.
