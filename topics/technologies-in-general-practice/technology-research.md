# Technologies in General Practice — research dossier

> **Research status:** targeted rapid review for selection and teaching design. Current as at 12 July 2026 (Australia). This is not a systematic review, product comparison, procurement recommendation, or individual clinical, legal, privacy or cyber-security advice. Clinical, consumer, legal/privacy and Aboriginal and Torres Strait Islander review remain required before publication.

## Agreed brief

- **Primary audience:** Australian GPs and GP registrars.
- **Narrative premise:** how AI and adjacent technology can help patients, not whether AI will replace doctors.
- **Case:** retain Michael as a continuous fictional patient, but redesign his details after the technologies for the guide have been selected.
- **Structure under consideration:** before the consultation, during the consultation, after the consultation, and future care.
- **Teaching unit:** one technology category per section. A named product may illustrate the category without endorsement.
- **Required content for each category:** tool name, how it works, effect on GP workflow, likely patient benefit, application to Michael, evidence and maturity, failure modes, and clinician oversight.
- **Inclusion approach:** include weakly evidenced uses when they are relevant, but label them as exploratory and distinguish technical plausibility from safe, evidence-supported clinical use.
- **Priority order:** patient benefit and safety first; then GP workflow, equity, accessibility and system efficiency.
- **Future horizon:** approximately 3–10 years, grounded in research, trials, validated prototypes or credible deployment rather than unconstrained speculation.

## Method and evidence boundaries

This was a targeted rapid review rather than a systematic review. It built on `research.md` and searched current Australian regulator, safety, professional, digital-health and product sources, followed by peer-reviewed reviews and prospective or randomised studies for the proposed categories. Product pages are used only to describe a product's stated function and data practices; they do not establish patient benefit, safety or comparative effectiveness.

Three labels are used throughout:

- **Current:** available in, or directly applicable to, Australian general practice now.
- **Emerging:** in prospective evaluation, limited deployment or early implementation, without enough Australian general-practice evidence for routine recommendation.
- **Research horizon:** a credible 3–10-year direction, but not a current care promise.

The central regulatory distinction is the task, not the presence of AI. Software intended to diagnose, predict, monitor or recommend treatment may be a medical device; Australian supply generally requires ARTG inclusion unless an exclusion or exemption applies. AI-enabled clinical decision support does not qualify for the specific electronic clinical decision-support exemption. Documentation-only scribes usually sit outside the medical-device definition, but adding diagnostic or treatment recommendations can change the intended purpose and regulatory position. See the [TGA overview of AI and medical-device software](https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence-ai/manufacturing/artificial-intelligence-ai-and-medical-device-software-regulation) and [TGA guidance on clinical decision-support software](https://www.tga.gov.au/resources/guidance/understanding-clinical-decision-support-system-software-regulation).

## Selection summary

| Journey stage | Technology category | Example | Maturity for Australian GP teaching | Recommendation |
| --- | --- | --- | --- | --- |
| Before | Digital pre-consultation history | BetterConsult | Current, non-generative digital health; product benefit evidence limited | **Include** |
| During | Ambient documentation | Lyrebird and other AI scribes | Current; promising workflow evidence, incomplete safety and patient-outcome evidence | **Include** |
| During | Evidence-based clinical prompts | Primary Sense; Future Health Today | Current, mostly rules/algorithms rather than generative AI | **Include** |
| During | Generative clinical decision support | AI Consult as a research example | Emerging; first real-world trials, no Australian GP product recommendation | **Include as emerging** |
| During/after | Clinician-reviewed patient information | General-purpose or governed LLM drafting workflow | Feasible now; evidence mixed; publication requires human and consumer review | **Include with boundaries** |
| After | Evidence retrieval and synthesis | MedLuma | Current Australian product; independent clinical-effectiveness evidence not identified | **Include** |
| After | AI-assisted flashcard generation | Anki plus a generative tool | Feasible now; direct evidence for AI-authored card quality or outcomes is weak | **Optional / education-only** |
| After | Differential-diagnosis brainstorming | General-purpose LLM; research systems such as AMIE | Exploratory; evidence does not support routine patient-specific use of public tools | **Include as a critical appraisal case** |
| Ongoing | Preventive-care identification and recalls | Primary Sense; clinical information-system prompts; NCSR integration | Much of the identification task is current and not AI | **Include; correct the “future” label** |
| Ongoing | Remote and longitudinal monitoring | Australian RPM programs; future AI triage layer | Remote monitoring current; reliable AI prioritisation and closed-loop action emerging | **Include** |
| Ongoing | Communication adapted to health literacy | Clinician-reviewed LLM rewriting | Drafting current; outcome evidence and non-English evaluation limited | **Include with boundaries** |
| Ongoing | Communication across languages | Professional interpreters plus translated-resource libraries; AI translation in research | AI translation is not a safe replacement for an interpreter | **Include as future/guardrail** |
| Future | Individualised treatment optimisation | PERSONAL trial and treatment-effect modelling research | Research horizon; disease-specific, not general GP automation | **Include as future** |
| During/ongoing | Narrow AI-assisted screening | Automated retinal photography with AI analysis | Australian prospective GP studies; deployment and pathway limitations remain | **Strong additional candidate** |

## Before the consultation

### 1. Digital pre-consultation history

**Category name:** adaptive digital pre-consultation questionnaire  
**Named example:** BetterConsult  
**Technology type:** adjacent digital health; it should not be presented simply as generative AI  
**Maturity:** current in Australia

#### How it works

Before the appointment, the patient completes a questionnaire on a phone, tablet or computer. BetterConsult states that it captures the presenting concern, symptoms, medicines and other relevant information, adapts questions to the patient's responses, and converts the submitted information into concise pre-consultation notes for the clinician. It may also include structured instruments such as K10 or DASS-21. The product terms emphasise that the patient-entered data are provided for the practitioner to assess and that the platform is not a diagnostic service. ([BetterConsult product description](https://www.healthsharedigital.com/solutions/betterconsult/); [patient terms](https://au.betterconsult.com/terms-of-use/patient/))

The questionnaire can be sent after an appointment is made regardless of whether booking occurred online, by telephone or in person. ([BetterConsult support documentation](https://au.betterconsult.support/hc/en-us/articles/360017720693-How-does-BetterConsult-integrate-with-online-bookings))

#### GP workflow and patient benefit

The credible workflow benefit is **agenda discovery before the room**, not a promise that the software diagnoses or saves a fixed number of minutes. A structured account may let the GP see that the patient has more than one concern, identify history that needs clarification, and use consultation time for discussion rather than first-pass data entry. For the patient, completing the history privately and at their own pace may help them remember concerns that are difficult to introduce in a short appointment.

The trade-off is that the patient performs work before the consultation. Non-completion, low digital access, disability, limited English, low literacy, distress or an urgent presentation must not become barriers to care. A normal consultation must remain available.

#### Michael connection

Michael books for “urinary symptoms”. The adaptive questionnaire also elicits nocturia, thirst, fatigue, sleep disruption and the effect on work. The benefit is not that BetterConsult diagnoses diabetes. It gives Michael more ways to state his agenda and gives the GP an earlier chance to notice that the story is broader than known BPH.

#### Evidence and limitations

No independent trial demonstrating improved patient outcomes from BetterConsult itself was identified in this rapid search. A 2026 Australian protocol uses BetterConsult to deliver digital self-screening before GP appointments in the BREATHE SMART trial, showing that the platform is being used as research infrastructure, but a protocol is not an effectiveness result. ([BREATHE SMART protocol](https://doi.org/10.1136/bmjopen-2025-110702))

Product pages describe millions of completed questionnaires and perceived benefits, but these are vendor claims and should not be used to establish effectiveness. Other practical failure modes are incomplete or inaccurate patient entry, a summary that suppresses nuance, false reassurance that the “history has been taken”, sensitive information being viewed out of context, and digital exclusion. The GP must still invite Michael's account, verify material details and assess urgency independently.

#### Teaching verdict

**Include.** It is an excellent opening example because it keeps the focus on helping Michael express what matters and shows that valuable technology does not have to be labelled AI. Teach it as structured preparation, not diagnosis.

## During the consultation

### 2. Ambient AI documentation

**Category name:** ambient clinical documentation  
**Named example:** Lyrebird; other Australian AI scribes may be acknowledged without comparison  
**Technology type:** speech recognition plus generative summarisation  
**Maturity:** current in Australia

#### How it works

With the clinician's activation and the required patient consent, the software captures spoken conversation, converts speech to text, and uses a language model to generate a draft note or related document. Lyrebird describes its intended scope as documentation and administrative drafting rather than diagnosis or treatment recommendation; its own terms require clinician review and acknowledge that generated text may be inaccurate or incomplete. ([Lyrebird functional scope](https://www.lyrebirdhealth.com/au/privacy-policy); [Lyrebird terms](https://www.lyrebirdhealth.com/au/policies/terms-of-service))

#### GP workflow and patient benefit

The potential workflow gain is less typing and less after-hours documentation. The patient-facing hypothesis is more attention, eye contact and conversational continuity. That benefit is not automatic: an unfamiliar microphone, consent script, poor transcription, a long note or burdensome checking can add friction, and the presence of a recorder may change what a patient is willing to disclose.

#### Michael connection

The GP can stay visibly engaged while Michael explains the effect of nocturia on sleep, work and confidence. After the consultation, the GP must check whether the draft preserved these priorities, correctly separated reported symptoms from examination findings, and documented the assessment, investigations, safety-net and follow-up. A useful teaching error is an invented normal abdominal examination or omission of the thirst and fatigue.

#### Evidence and limitations

Systematic reviews report promising signals for documentation time, task load and clinician experience in some outpatient settings, but studies are heterogeneous, manual edits are common, and patient experience and safety are incompletely evaluated. Most evidence is from the United States rather than Australian general practice. ([2025 implementation systematic review](https://pubmed.ncbi.nlm.nih.gov/40306686/); [RACGP guidance for AI scribes](https://www.racgp.org.au/running-a-practice/technology/artificial-intelligence-ai/artificial-intelligence-ai-scribes))

Failure modes include mishearing, omission, fabrication, incorrect attribution or chronology, excessive boilerplate, failure to capture non-verbal information, and carrying an error into a referral, care plan or billing document. Consent and recording law vary by jurisdiction. The GP remains responsible for the final record and needs a workable manual fallback.

#### Teaching verdict

**Include.** This is the strongest current AI workflow for the guide, provided the patient benefit is framed as a possibility to be tested locally rather than a guaranteed effect.

### 3. Evidence-based clinical prompts

**Category name:** electronic clinical decision support and population-health analytics  
**Named examples:** Primary Sense and Future Health Today  
**Technology type:** structured data extraction, rules, risk stratification and evidence-linked algorithms; not necessarily generative AI  
**Maturity:** current Australian implementation

#### How it works

Primary Sense extracts selected general-practice data, de-identifies data before it leaves the practice, applies evidence-based algorithms and risk stratification, and returns point-of-care medication alerts, patient-care prompts and population reports. Individuals are re-identified only inside the practice for authorised alerts, prompts and reports. ([Primary Sense overview](https://www.primarysense.org.au/); [Primary Sense FAQ](https://www.primarysense.org.au/faqs-og))

Future Health Today scans electronic records for patients at risk of, or living with, defined chronic conditions and presents guideline-linked recommendations at the point of care and in practice-level reports. It has been implemented and studied across Australian practices for chronic kidney disease, cardiovascular disease, type 2 diabetes and possible undiagnosed cancer. ([Future Health Today overview](https://medicine.unimelb.edu.au/research-groups/general-practice-and-primary-care-research/data-for-decisions/future-health-today2))

#### GP workflow and patient benefit

These systems can surface a defined care gap without asking the GP to remember every guideline for every patient in every short consultation. The patient benefit is the possibility that a missing test, unsafe medicine combination, overdue preventive activity or elevated risk becomes visible at a useful moment.

The key design issue is whether the prompt is accurate, timely, actionable and uncommon enough to deserve attention. Too many low-value prompts create alert fatigue; incomplete coding or missing external results can create false positives and false negatives.

#### Michael connection

When Michael's record is opened, a governed system might identify missing diabetes monitoring, overdue cardiovascular risk assessment or a medicine-safety issue using structured data and transparent guideline logic. It should not silently infer a diagnosis from his conversation. The GP can explain the prompt, check whether the underlying data are correct and decide with Michael what action is appropriate.

#### Evidence and limitations

Primary Sense was live-tested in nine practices with 42 GPs plus practice staff; teams used reports to target people with outstanding care needs, but the study primarily established feasibility and user acceptance rather than patient outcomes. ([Primary Sense evaluation](https://pubmed.ncbi.nlm.nih.gov/32527370/))

A pragmatic cluster randomised Australian study of Future Health Today for patients at risk of undiagnosed cancer supports evaluating the whole implementation, not merely the algorithm. Broader systematic-review evidence shows that disease-detection decision support in primary care faces adoption, workflow and implementation challenges. ([Future Health Today cancer trial](https://pmc.ncbi.nlm.nih.gov/articles/PMC12010534/); [2025 implementation systematic review](https://pubmed.ncbi.nlm.nih.gov/40671071/))

#### Teaching verdict

**Include.** This category is more clinically mature than open-ended generative “decision aids” and gives learners a valuable contrast: constrained, evidence-linked systems can be less glamorous and more useful.

### 4. Generative clinical decision support

**Category name:** workflow-integrated LLM clinical decision support  
**Research example:** AI Consult 2.0  
**Technology type:** an LLM analyses structured and free-text encounter data and produces constrained diagnostic or treatment feedback  
**Maturity:** emerging; not a recommendation for Australian GP practice

#### How it works

In a 2026 pragmatic cluster randomised trial, AI Consult was embedded in a cloud electronic medical record across 16 Kenyan primary-care clinics. During documentation, it analysed the entered encounter data against instructions aligned to Kenyan guidance and produced green, yellow or red feedback. Clinicians could accept, modify or ignore suggestions. ([Nature Medicine trial](https://www.nature.com/articles/s41591-026-04503-6))

This differs from asking a public chatbot an unstructured question. It is integrated into the record, constrained by a defined clinical context and guideline framework, version controlled, and evaluated as part of a clinician–tool workflow.

#### GP workflow and patient benefit

The intended function is a second check: identify a possible missed diagnosis, incomplete plan, inappropriate prescription or missing escalation before the consultation closes. The patient benefit would be fewer consequential omissions and more guideline-concordant care. The danger is that a persuasive incorrect prompt shifts the clinician away from a sound assessment, or that silence is interpreted as reassurance.

#### Michael connection

After the GP has assessed Michael and entered the history and plan, a future Australian-governed tool might flag that thirst and fatigue are not explained by BPH or that a proposed plan lacks appropriate assessment. It should function as a safety net after independent reasoning, not as the author of Michael's diagnosis.

#### Evidence and limitations

The Kenyan trial included 9,691 patients and found no statistically significant difference in 14-day treatment failure. Documentation quality improved on reviewed encounters, but the study was conducted in one private network, primarily involved clinical officers rather than Australian GPs, excluded routine wellness visits, and was not powered for rare serious harms. It therefore establishes an important real-world research milestone, not transferability to Australia.

An earlier randomised vignette study found that giving physicians access to GPT-4 did not significantly improve diagnostic-reasoning performance over conventional resources, despite stronger model-alone performance. Access to a capable model is not the same as a safe clinical system. ([JAMA Network Open trial](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2825395))

In Australia, generative diagnostic or treatment support is likely to be regulated as medical-device software and requires product-specific evidence, intended-purpose review, ARTG checking, local governance and post-deployment monitoring.

#### Teaching verdict

**Include as emerging.** It is the best-supported way to discuss “AI decision aids in development”. Do not name it as a tool an Australian GP should adopt; use it to show what credible development and evaluation look like.

### 5. AI-assisted patient information

**Category name:** clinician-reviewed generation and simplification of patient information  
**Named example:** no preferred product; use a governed LLM workflow and authoritative Australian source material  
**Technology type:** generative drafting, rewriting and summarisation  
**Maturity:** feasible now as a drafting process; not safe for autonomous publication

#### How it works

The clinician selects authoritative sources, defines the audience, reading level, purpose and required actions, and asks a language model to produce a draft or alternative explanation. Every clinical claim, qualifier and link is then checked against the source. The draft also needs readability, accessibility, cultural, safety-netting and consumer review before it becomes patient material.

#### GP workflow and patient benefit

The tool can reduce the blank-page burden and produce alternative phrasings quickly. The patient benefit is a shorter, clearer explanation aligned with the actual decision and with accessible next steps. The output may nevertheless become easier to read by deleting an essential qualification, inventing a fact or making an action ambiguous.

#### Michael connection

After Michael is diagnosed with type 2 diabetes, the GP could produce a one-page explanation of what happens next, based on selected Australian sources and Michael's questions. Michael receives only the reviewed version. A useful teaching comparison would show an attractive raw draft beside the final clinician- and consumer-reviewed sheet, with the substantive edits made visible.

#### Evidence and limitations

An Australian-led systematic review of 20 studies found potential for improved readability and user satisfaction, but accuracy, reliability and comprehensiveness were mixed, especially for complex topics. ([Systematic review](https://pubmed.ncbi.nlm.nih.gov/39720869/)) A 2025 scoping review of 69 studies found that most work assessed accuracy and readability, few studies used retrieval-augmented knowledge bases, and almost all prompting was in English. ([Scoping review](https://pubmed.ncbi.nlm.nih.gov/40223858/))

Readability formulae are not comprehension, actionability, cultural safety or informed choice. The model should not receive identifiable information through an inappropriate public product, and generated material should never displace a conversation or teach-back.

#### Teaching verdict

**Include.** This directly serves the patient-facing premise, but the “tool” is the controlled editorial workflow rather than the model alone.

## After the consultation

### 6. Evidence retrieval with cited sources

**Category name:** retrieval-augmented clinical evidence assistant  
**Named example:** MedLuma  
**Technology type:** question answering over a curated clinical knowledge base, with citations to source documents  
**Maturity:** current Australian product; effectiveness evidence not established

#### How it works

MedLuma states that an Australian clinician can ask a clinical question and receive a generated answer drawn from a curated collection of Australian guidelines, professional content and selected literature, with clickable citations to the underlying sources. It advises users not to enter identifiable patient information and says data are hosted in Australia. ([MedLuma product description](https://www.medluma.ai/))

#### GP workflow and patient benefit

The workflow advantage is faster source discovery and an initial synthesis. The patient benefit arises only if the GP opens the original guidance or paper, checks that it supports the answer, and translates the evidence into a discussion that reflects the patient's values and circumstances.

#### Michael connection

Michael asks how well a proposed procedure works. The GP defines what “works” means to him, uses MedLuma to locate relevant Australian guidance and evidence, opens the cited sources, checks population, comparator, outcomes and follow-up, and returns with a shared-decision conversation. The generated paragraph is neither the evidence nor the final explanation.

#### Evidence and limitations

No independent peer-reviewed evaluation of MedLuma's accuracy, retrieval completeness, clinical utility or patient outcomes was identified in this rapid search. Its curated corpus and citations are useful design features, not proof that every answer is current or correct. Retrieval systems can omit a key source, cite a source that only partly supports the claim, flatten disagreement, or use an outdated document. The corpus, update process and answer still require appraisal.

#### Teaching verdict

**Include.** It is a credible example of a safer clinical research pattern than a public chatbot, provided the guide states plainly that the current evidence for this particular product is first-party functionality, not demonstrated benefit.

### 7. AI-assisted Anki cards

**Category name:** generative learning-resource drafting  
**Named example:** Anki plus a generative model  
**Technology type:** an LLM transforms selected source material into retrieval questions or cloze cards; Anki schedules later review using spaced repetition  
**Maturity:** feasible now; evidence for the AI-generation step is weak

#### How it works

The GP supplies already selected, non-identifiable learning material and requests one testable learning point per card. Each question, answer, qualifier and source is checked before importing it into Anki. Anki then schedules retrieval according to the learner's performance; the scheduling system, not the LLM, provides the spaced-repetition function.

#### GP workflow and patient benefit

AI can speed the mechanical drafting of cards. The patient benefit is indirect: a GP may retain guideline knowledge more reliably. Faster production can also create a large deck of plausible but low-value or incorrect cards, consuming learning time and reinforcing error.

#### Michael connection

After reviewing a diabetes guideline prompted by Michael's care, the GP creates a small set of source-linked cards on monitoring, medicine safety or follow-up. No clinical details from Michael enter the tool. The cards test general knowledge rather than memorialising a patient.

#### Evidence and limitations

A 2025 scoping review found broad use and satisfaction with electronic flashcards in health-professions education but limited evidence about development and delivery choices. ([Electronic flashcards review](https://pubmed.ncbi.nlm.nih.gov/39774058/)) Generative-AI education reviews describe resource-generation potential alongside accuracy, bias, reliability and academic-integrity concerns. ([2026 health-professions education review](https://pubmed.ncbi.nlm.nih.gov/41477967/)) A published Anki Tagger development report demonstrates feasibility of AI-assisted resource alignment but does not show that AI-authored cards are accurate or improve clinical practice. ([Anki Tagger report](https://doi.org/10.2196/48780))

#### Teaching verdict

**Optional.** Retain only if the guide wants to include GP learning as an indirect patient-safety tool. It is less tightly aligned with “how technology helps Michael” than the clinical and communication categories.

### 8. Differential-diagnosis brainstorming

**Category name:** LLM-generated diagnostic possibilities for education or structured reflection  
**Named example:** a general-purpose LLM for fictional/de-identified education; AMIE as a research system  
**Technology type:** generative clinical reasoning and list production  
**Maturity:** exploratory

#### How it works

The clinician gives a clinical representation and asks for possible diagnoses, discriminating findings or missing questions. A safer educational sequence is independent human reasoning first, AI challenge second, and authoritative verification third. Public general-purpose tools should not receive identifiable patient information.

#### GP workflow and patient benefit

The intended benefit is cognitive forcing: surface a possibility the clinician did not initially consider. The same list can produce anchoring, availability effects, false reassurance, irrelevant testing, invented facts or over-weighting of rare diagnoses. A fluent rationale can make these failures harder to notice.

#### Michael connection

After independently recognising that Michael's fatigue and thirst do not fit BPH, the learner compares their differential with a pre-generated synthetic response. They ask what the response added, omitted or over-weighted and which investigations are actually justified. This is a learning exercise, not the moment at which a chatbot diagnoses Michael.

#### Evidence and limitations

In the 2024 randomised diagnostic-reasoning trial, LLM access did not significantly improve physician performance over conventional resources. ([JAMA Network Open trial](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2825395)) By contrast, an experimental system optimised for diagnostic reasoning improved differential-list quality in a controlled reader study, demonstrating that task-specific systems and interface design may matter. It does not establish routine safety in Australian general practice. ([AMIE study](https://pubmed.ncbi.nlm.nih.gov/40205049/))

The evidence therefore supports neither a blanket dismissal nor routine patient-specific use of a public chatbot. Evaluation must concern the clinician–tool team, real workflow, patient outcomes, subgroup performance and errors of omission as well as model-alone benchmark scores.

#### Teaching verdict

**Include as a critical appraisal case, not a recommended clinical tool.** It can teach learners why “helpful possibility generator” and “validated decision support” are not interchangeable.

## Ongoing and future care

### 9. Preventive-care prompts and semi-autonomous follow-up

**Category name:** population-health identification, reminders, recalls and future closed-loop outreach  
**Named examples:** Primary Sense, clinical information-system prompts and National Cancer Screening Register integration  
**Technology type:** mostly rules-based analytics and messaging today; AI-generated prioritisation or dialogue is emerging  
**Maturity:** patient identification is current; safe semi-autonomous follow-up is future

#### How it works now

Australian clinical information systems already support reminders and recalls. Primary Sense reports can identify patients missing bowel, breast or cervical screening, influenza vaccination and other care; its release notes show continuing maintenance of eligibility logic and prompt rules. ([Primary Sense report resources](https://www.practiceassist.com.au/programs-tools/primary-sense/); [release notes](https://www.primarysense.org.au/releasenotes)) The National Cancer Screening Register can integrate with supported clinical software to exchange bowel, cervical and lung screening information. ([NCSR provider information](https://www.ncsr.gov.au/content/ncsr/en/healthcare-providers.html))

RACGP distinguishes reminders, recalls and prompts and emphasises a robust, fail-safe process. A reminder offers preventive care; a recall is proactive follow-up when attendance is important; a prompt draws attention during care. ([RACGP Green Book](https://www.racgp.org.au/getattachment/2ba9e40f-fe33-44bf-8967-8bf6f18a1c1a/Putting-prevention-into-practice-Guidelines-for-the-implementation-of-prevention-in-the-general-practice-setting.aspx))

#### What remains future

A semi-autonomous system could reconcile data across sources, determine likely eligibility, select a communication channel, draft a tailored invitation, converse about simple barriers, schedule an appointment and escalate exceptions. Each extra action introduces new failure modes: wrong-person contact, incorrect eligibility, ignored contraindications, coercive repetition, privacy breaches, inequitable exclusion, and failure to escalate a concerning response.

#### GP workflow and patient benefit

Current reports can turn an invisible care gap into a worklist for the practice team. Patients may receive preventive care even when they attend for unrelated problems or do not attend regularly. Automation could reduce manual searches and messaging, but responsibility for the recall system, exception handling and clinical follow-up remains with the practice.

#### Michael connection

Michael's practice can already identify whether bowel screening, vaccination, diabetes monitoring or other preventive activities are due. In a future workflow, the system might send a plain-language invitation and offer an appointment, but uncertain data, non-response or a clinically significant reply must route to a person. Michael needs a way to decline, correct the record and choose how he is contacted.

#### Teaching verdict

**Include, but split “now” from “next”.** The guide should not imply that automatic eligibility alerts are futuristic AI. The genuinely future step is reliable, governed, two-way action with appropriate escalation.

### 10. Longitudinal and remote monitoring

**Category name:** remote patient monitoring with longitudinal trend detection  
**Named examples:** Australian remote patient monitoring programs; Future Health Today for record-based longitudinal risk  
**Technology type:** connected devices, patient-reported measures, record integration and threshold/risk algorithms; AI may prioritise patterns  
**Maturity:** monitoring is current; AI-driven prediction and autonomous response are emerging

#### How it works

Remote patient monitoring collects measurements such as blood pressure, weight, oxygen saturation, glucose or symptoms outside the clinic and transfers them to a care team. Australian Digital Health Agency standards describe integration with electronic records and the need for identity, interoperability and cyber-security controls. ([ADHA remote patient monitoring standards](https://www.digitalhealth.gov.au/healthcare-providers/initiatives-and-programs/digital-health-standards/digital-health-standards-guidelines/get-started/5-standards-for-systems-and-technologies/remote-patient-monitoring))

NSW Health currently uses loaned Bluetooth devices and an app in remote-monitoring programs for conditions including type 2 diabetes, heart failure and COPD; the care team reviews measurements and may contact the patient when change is detected. ([NSW remote patient monitoring](https://www.nsw.gov.au/health-and-wellbeing/virtual-care-hub/about/how-to-use-virtual-care/remote-patient-monitoring))

An emerging AI layer could learn a patient's baseline, combine device data with medicines, pathology and symptoms, and prioritise a meaningful change rather than a single threshold crossing.

#### GP workflow and patient benefit

The potential patient benefit is earlier, more convenient support between visits and less travel, especially for rural patients. The workflow benefit is a prioritised view of change rather than a raw stream of measurements. The counter-risk is surveillance without capacity to respond: false alarms, missing data, alert fatigue, device inequity, anxiety, unclear responsibility after hours and delayed care when the system is silent.

#### Michael connection

After a diabetes diagnosis, Michael could choose to share home measurements and brief symptom reports for a defined period. The care plan specifies who reviews them, how often, which changes trigger contact, what Michael should do when unwell, and what happens when the technology fails. Future AI may summarise the trend, but a safe service cannot make Michael guess whether anyone is watching.

#### Teaching verdict

**Include.** It is a strong patient-centred future section if the guide distinguishes the already deployed monitoring infrastructure from the still-emerging predictive layer.

### 11. Communication adapted to health literacy

**Category name:** personalised plain-language explanation and multimodal education  
**Named example:** no preferred product  
**Technology type:** LLM rewriting, summarisation and potentially text-to-speech or visual generation  
**Maturity:** drafting feasible now; reliable personalisation and outcome evidence emerging

#### How it works

A governed system receives clinician-approved facts and produces alternative explanations at a specified reading level, length and format. More advanced systems could use a patient's stated preferences and demonstrated understanding to alter examples, sequence, modality and pacing. The source content must remain traceable and locked against unsupported additions.

#### GP workflow and patient benefit

The aim is not merely a lower readability score. It is information Michael can understand, act on and discuss. A useful workflow may create a short explanation, a question prompt and a teach-back check from the same approved source. A poor system may patronise, remove risk information, infer literacy from demographic proxies, or produce an accessible but inaccurate answer.

#### Michael connection

Michael receives a short, clinician-approved plan in the format he prefers: what was found, what to do this week, when to seek help and when follow-up occurs. The GP still checks understanding through conversation or teach-back rather than assuming the generated format worked.

#### Evidence and limitations

The patient-education reviews cited above support promise but show mixed accuracy and limited evaluation of actionability, patient outcomes, retrieval-grounding and non-English use. Health literacy is contextual and relational; a model cannot safely infer that a person needs “simpler” language solely from age, postcode, diagnosis or education.

#### Teaching verdict

**Include.** It is directly aligned with helping the patient, but it should be taught as source-grounded communication design with patient testing, not automated simplification.

### 12. Communication across languages

**Category name:** AI-assisted translation and multilingual communication  
**Named current alternatives:** TIS National/professional interpreters and Health Translations; no AI product recommended  
**Technology type:** machine translation and multilingual language models  
**Maturity:** consumer technology exists; safe substitution for professional clinical interpreting is not established

#### How it works

Multilingual models can translate written or spoken text quickly. In low-stakes administration they may help draft a message for certified translation or locate an existing translated resource. Clinical language, consent, ambiguity, culture, dialect and emotional meaning make high-stakes use substantially harder.

#### GP workflow and patient benefit

The potential is faster access to information in a patient's preferred language and better continuity after the consultation. The failure modes include mistranslated negation, dose or timing; loss of uncertainty; culturally inappropriate wording; poor performance in under-represented languages; and no accountable interpreter to clarify ambiguity.

Australian good-practice guidance requires practical steps to meet language and communication needs and supports using professional interpreting services where necessary. RACGP warns that complex medical conversations require accuracy and that informal translation does not assure confidentiality, impartiality or accuracy. ([Ahpra shared code of conduct](https://www.ahpra.gov.au/Resources/Code-of-conduct/Shared-Code-of-conduct); [RACGP interpreter guidance](https://www.racgp.org.au/getattachment/a4ea853a-3823-4d59-ae84-80f4775e66b1/Interpreter-use-in-general-practice-Information-for-GPs.aspx))

Health Translations provides reviewed Australian material in more than 130 languages and requires resources to be translated by a NAATI-certified translator and/or consumer tested. ([Health Translations](https://www.healthtranslations.vic.gov.au/about-us); [resource criteria](https://www.healthtranslations.vic.gov.au/register-your-resources))

#### Michael connection

If Michael prefers a language other than English, the GP uses a professional interpreter for the clinical conversation and consent. AI may later help draft a source-grounded take-home summary, but it needs appropriate translation quality assurance and should supplement rather than replace the interpreted consultation.

#### Teaching verdict

**Include as a future opportunity with a firm current boundary.** Do not demonstrate a public chatbot as a substitute interpreter.

### 13. Individualised treatment optimisation

**Category name:** prediction of individual treatment benefit and harm  
**Research example:** PERSONAL trial for antiseizure medicine selection; heterogeneous-treatment-effect modelling  
**Technology type:** machine learning combines clinical features, biomarkers or longitudinal data to estimate how different treatments may perform for an individual  
**Maturity:** research horizon

#### How it works

Instead of predicting only overall risk, a treatment-selection model attempts to predict the difference in outcome under two or more treatment options for a particular patient. This is harder than predicting prognosis: the model must learn credible treatment-effect differences and be externally validated, calibrated and tested in a decision workflow.

The Australian PERSONAL randomised trial is evaluating an AI tool against usual practice for selecting a first antiseizure medicine. It is a concrete example of treatment optimisation under prospective evaluation, not evidence for a general-purpose prescribing engine. ([Monash PERSONAL trial](https://www.monash.edu/medicine/translational/neuroscience/research/kwan-group/personal-trial))

Methodological reviews show growing use of machine learning to model heterogeneous treatment effects, while emphasising the need for appropriate validation and performance measures. ([Treatment-effect modelling review](https://pubmed.ncbi.nlm.nih.gov/39305940/); [performance methods](https://pubmed.ncbi.nlm.nih.gov/40207416/))

#### GP workflow and patient benefit

The hoped-for benefit is a better-informed choice when several guideline-supported treatments exist: identify who is more likely to benefit, experience harm or need closer review. The danger is false precision from biased, incomplete or non-representative data; recommendations may reproduce inequity, ignore patient preferences or become obsolete as circumstances change.

#### Michael connection

A future diabetes tool might compare reasonable treatment options using Michael's comorbidities, medicines, renal function, priorities and longitudinal response, then show the estimated trade-offs and uncertainty. Michael and the GP would still decide together. No current general Australian GP system should be portrayed as able to optimise his treatment autonomously.

#### Teaching verdict

**Include as future research.** It is credible and clinically important, but the guide must avoid a product demo or a claim that personalised recommendations are ready for routine general practice.

## Strong additional candidate

### 14. Narrow AI-assisted retinal screening

**Category name:** automated image acquisition and task-specific image classification  
**Research example:** automated retinal photography with AI analysis in Australian general practice  
**Technology type:** a camera captures retinal images; a trained image model estimates whether the image shows a defined referable condition  
**Maturity:** emerging Australian primary-care implementation

#### How it works

In a prospective Australian study, adults attending two Victorian general practices used an automated fundus camera with audio positioning prompts. Captured images were analysed immediately by a task-specific AI system for glaucoma risk. Of 414 participants, 277 had analysable images; real-world sensitivity was 65.0% and specificity 94.6%, with image acquisition limitations contributing to non-analysis. ([Prospective Australian glaucoma screening study](https://www.nature.com/articles/s41746-025-01768-y))

Australian research has also evaluated AI-assisted diabetic-retinopathy screening in endocrinology and Aboriginal Medical Service settings. ([Australian real-world diabetic-retinopathy study](https://pmc.ncbi.nlm.nih.gov/articles/PMC8339059/))

#### GP workflow and patient benefit

The technology could bring a defined screening task closer to routine care and identify people who need confirmatory assessment or specialist referral. It is not a general diagnostic chatbot. The pathway still needs equipment, image-quality handling, referral capacity, governance, patient consent, suitable reimbursement and a plan for ungradable or discordant results.

#### Michael connection

Once Michael has diabetes, opportunistic retinal imaging at or near his general practice could reduce the friction of completing recommended eye screening. The AI classifies an image for a narrow purpose; the GP does not tell Michael that the software has ruled out all eye disease.

#### Teaching verdict

**Strongly consider adding.** It is one of the clearest examples of AI potentially helping Michael directly, is grounded in Australian general-practice research, and contrasts usefully with generative text tools. Its current status should be labelled emerging rather than universally available.

## Recommended guide architecture after technology selection

This research supports a patient-journey structure that is independent of the presentation:

1. **Meet Michael** — establish his life, goals and access needs before introducing technology.
2. **Before the consultation: help Michael tell the whole story** — BetterConsult/pre-consultation history.
3. **During the consultation: preserve attention and the record** — ambient scribe.
4. **During the consultation: surface a defined care gap** — current evidence-linked prompts such as Primary Sense or Future Health Today.
5. **During the consultation: the emerging second check** — workflow-integrated generative decision support, clearly labelled as research.
6. **After the consultation: answer Michael's question from sources** — MedLuma/evidence retrieval.
7. **After the consultation: explain the plan in a usable form** — clinician-reviewed patient information and health-literacy adaptation.
8. **Between consultations: do not lose Michael to follow-up** — current preventive-care reports and future semi-autonomous outreach.
9. **Between consultations: notice meaningful change** — remote and longitudinal monitoring.
10. **Future treatment: choose more precisely, decide together** — individualised treatment optimisation.
11. **Optional concrete AI chapter:** retinal screening after diabetes, if Michael's redesigned story includes a newly recognised screening gap.
12. **Optional clinician-learning appendix:** Anki and diagnostic brainstorming. These are weaker fits for the patient-centred main arc and may work better as “how the GP prepares to care better” rather than equal patient-journey chapters.

## Implications for redesigning Michael

Do not finalise Michael until the technology list is chosen. A coherent redesign could give him:

- an appointment booked for worsening urinary frequency, with thirst, fatigue, sleep disruption and work impact surfaced before the consultation;
- a known condition that creates anchoring risk without making the vignette a diagnostic puzzle led by AI;
- a question requiring evidence retrieval and shared decision-making;
- a new type 2 diabetes diagnosis that naturally creates patient-information, preventive-care, retinal-screening and longitudinal-monitoring opportunities;
- a stated communication preference or health-literacy need without using a demographic stereotype;
- a reason that travel, time, cost or continuity matters, making remote monitoring or local screening genuinely patient-centred;
- permission to refuse a tool, correct data and choose a non-digital pathway.

Michael should not be burdened with every possible technology. Select a small number that form a credible care journey, and use other categories as short comparisons or future horizons.

## Cross-cutting safety and governance requirements

Every eventual section should answer:

1. What exact task does this version perform?
2. Is it current, emerging or a research horizon?
3. What evidence supports the clinician–tool workflow, not merely the model alone?
4. What data enter the system, where are they processed and retained, and are they used for training or secondary purposes?
5. Is the use within the manufacturer's intended purpose, and is ARTG inclusion required or confirmed?
6. How is the patient told, what choice do they have, and what non-digital alternative remains?
7. What must the GP verify before an output changes the record or care?
8. What happens when the output is wrong, absent, ungradable or unavailable?
9. Who monitors corrections, overrides, incidents, refusal, subgroup performance and model changes?
10. Does the workflow improve access for Michael, or merely move work and risk onto him?

Authoritative Australian foundations include the [ACSQHC AI Clinical Use Guide](https://www.safetyandquality.gov.au/resources/ai-clinical-use-guide), [Ahpra guidance on professional obligations when using AI](https://www.ahpra.gov.au/Resources/Artificial-Intelligence-in-healthcare.aspx), [OAIC guidance on commercially available AI](https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products), and the [Australian Government overview of AI in health care](https://www.health.gov.au/topics/health-technologies-and-digital-health/what-we-do/artificial-intelligence-ai-in-health-care).

## Claims not supported for the guide

- BetterConsult is proven to improve diagnosis or patient outcomes.
- Any named scribe will reliably save a particular amount of time, prevent burnout or improve the therapeutic relationship.
- A public general-purpose chatbot is an appropriate patient-specific diagnostic or prescribing tool.
- MedLuma's citations make every generated answer correct or complete.
- AI-generated patient information is safe to publish without claim checking and consumer review.
- AI-authored Anki cards improve clinician competence or patient outcomes.
- Remote monitoring means a clinician is continuously watching.
- Machine translation can replace a professional interpreter for consent or complex clinical communication.
- Current general-practice software can autonomously optimise Michael's treatment.
- ARTG inclusion, where applicable, proves local clinical utility or removes clinician responsibility.

## Open review and research items

- Recheck every named product's version, intended purpose, Australian availability, ARTG status where relevant, data flows and terms immediately before guide implementation.
- Seek independent evidence or local audit data before making workflow-benefit claims for BetterConsult, Lyrebird or MedLuma.
- Decide whether Primary Sense, Future Health Today or both best illustrate current constrained decision support; avoid turning the guide into a vendor catalogue.
- Confirm the current deployment and referral pathway before presenting AI retinal screening as available to Michael.
- Obtain legal/privacy or MDO review for consent, recording, cross-border data and automated-contact wording.
- Obtain consumer review of the redesigned Michael journey and all patient-facing examples.
- Obtain Aboriginal and Torres Strait Islander review and, where Indigenous data or communities are in scope, engage appropriate Aboriginal Community Controlled Health Organisations with genuine authority over design and governance.
- Evaluate digital exclusion, disability access, language, rural connectivity, cost and the workload shifted to the patient for every technology.
- Research the eventual clinical details of Michael's conditions separately; this file does not establish diabetes, BPH, screening or treatment guidance.
