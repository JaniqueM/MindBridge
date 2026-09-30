# South African support-contact source notes

Checked on **30 September 2026** while preparing the MindBridge capstone demo. These links support the contact names and numbers shown in `src/content.js` and the Emergency Support screen. The prototype is not an emergency service; readers should check each organization for current availability.

| Contact | Used in prototype | Source finding | Source |
|---|---|---|---|
| Cellphone emergency | 112 | Western Cape Government lists “Cell Phone Emergency 112” for MTN, Vodacom, Cell C and Telkom. Its page also cautions that South Africa does not have one single number for every emergency. | [Western Cape Government: Know who you can call in an emergency](https://www.westerncape.gov.za/know-who-you-can-call-emergency) |
| Suicide crisis support | 0800 567 567 | SADAG lists the Suicide Crisis Helpline under its 24-hour toll-free emergency helplines. | [South African Depression and Anxiety Group (SADAG)](https://www.sadag.org/) |
| National counselling/crisis line | 0861 322 322 | LifeLine South Africa identifies 0861-322-322 as its National Counselling Line. South African Government's help-line directory describes 0861 322 322 as the National Crisis Line, a 24-hour telephonic counselling service. | [LifeLine South Africa](https://lifelinesa.co.za/); [South African Government: Government call centres and help lines](https://www.gov.za/about-government/government-call-centres-and-help-lines) |

## Scope notes

- The app uses `tel:` links only; those open a device's phone handler and do not connect from every desktop/browser configuration.
- No contact call is tracked, no location is collected, no notification is sent, and no service is represented as monitoring the site.
- The trusted-contact action is explicitly a simulation.
