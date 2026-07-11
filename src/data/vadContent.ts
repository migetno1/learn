export const vadMeta = {
  jurisdiction: 'New South Wales',
  currentAsAt: '12 July 2026',
  act: 'Voluntary Assisted Dying Act 2022 (NSW)',
}

export type SourceId = keyof typeof vadSources

export const vadSources = {
  S1: {
    short: 'VAD Act 2022 (NSW)',
    title: 'Voluntary Assisted Dying Act 2022 No 17 — current in-force consolidation',
    href: 'https://legislation.nsw.gov.au/view/whole/html/inforce/current/act-2022-017',
  },
  S2: {
    short: 'NSW Clinical Practice Handbook',
    title: 'NSW Voluntary Assisted Dying Clinical Practice Handbook, version 2.0',
    href: 'https://www.health.nsw.gov.au/voluntary-assisted-dying/Publications/practitioner-handbook.pdf',
  },
  S3: {
    short: 'NSW Health policy',
    title: 'Policy Directive PD2023_037 — Voluntary Assisted Dying',
    href: 'https://www1.health.nsw.gov.au/pds/ActivePDSDocuments/PD2023_037.pdf',
  },
  S4: {
    short: 'Healthcare worker obligations',
    title: 'NSW Health — Obligations of healthcare workers',
    href: 'https://www.health.nsw.gov.au/voluntary-assisted-dying/Pages/healthcare-worker-obligations.aspx',
  },
  S5: {
    short: 'Request process',
    title: 'NSW Health — What is the request process for voluntary assisted dying?',
    href: 'https://www.health.nsw.gov.au/voluntary-assisted-dying/Pages/process.aspx',
  },
  S6: {
    short: 'First-request guide',
    title: 'NSW Health — First request patient information guide',
    href: 'https://www.health.nsw.gov.au/voluntary-assisted-dying/Pages/first-request-patient-guide.aspx',
  },
  S7: {
    short: 'NSW Care Navigator',
    title: 'NSW Voluntary Assisted Dying Care Navigator Service',
    href: 'https://www.health.nsw.gov.au/voluntary-assisted-dying/Pages/navigator.aspx',
  },
  S8: {
    short: 'WNSWLHD Navigation Service',
    title: 'Western NSW LHD — Voluntary Assisted Dying Navigation Service',
    href: 'https://engage.wnswlhd.health.nsw.gov.au/voluntary-assisted-dying/voluntary-assisted-dying-navigation-service',
  },
  S9: {
    short: 'AJGP first conversations',
    title: 'First conversations about voluntary assisted dying in general practice',
    href: 'https://www1.racgp.org.au/getattachment/d3237af0-92ca-4882-89f6-33dbceed0612/First-conversations-about-voluntary-assisted-dying.aspx',
  },
  S10: {
    short: 'Good medical practice',
    title: 'Medical Board of Australia — Good medical practice',
    href: 'https://www.medicalboard.gov.au/Codes-Guidelines-Policies/Code-of-conduct.aspx',
  },
  S11: {
    short: 'Board annual report',
    title: 'NSW Voluntary Assisted Dying Board Annual Report 2024–25',
    href: 'https://www.health.nsw.gov.au/voluntary-assisted-dying/Publications/annual-report-2024-2025.pdf',
  },
  S12: {
    short: 'Legislative review',
    title: 'NSW VAD Act legislative review background paper',
    href: 'https://www.health.nsw.gov.au/voluntary-assisted-dying/Pages/background-paper-legislative-review.aspx',
  },
  S13: {
    short: 'End-of-life decisions',
    title: 'NSW Health — Making decisions about end of life care',
    href: 'https://www.health.nsw.gov.au/voluntary-assisted-dying/Pages/end-of-life.aspx',
  },
  S14: {
    short: 'IPTAAS',
    title: 'IPTAAS — Voluntary assisted dying travel assistance',
    href: 'https://www.iptaas.health.nsw.gov.au/for-patients/voluntary-assisted-dying',
  },
} as const

export const eligibilityCriteria = [
  ['Adult', 'The person is 18 years or older.'],
  ['Connection to Australia', 'An Australian citizen or permanent resident, or resident in Australia continuously for at least three years when making the first request.'],
  ['NSW residence', 'Ordinarily resident in NSW for at least 12 months when making the first request, subject to the statutory exemption pathway.'],
  ['Qualifying condition', 'At least one advanced, progressive disease, illness or medical condition that will cause death.'],
  ['Prognosis', 'Expected on the balance of probabilities to cause death within six months, or 12 months for a neurodegenerative condition.'],
  ['Suffering', 'Causing suffering that cannot be relieved in a way the person considers tolerable.'],
  ['Capacity', 'Decision-making capacity in relation to voluntary assisted dying.'],
  ['Voluntariness', 'Acting voluntarily, without pressure or duress, with an enduring request.'],
] as const

export const firstRequestDuties = [
  {
    timing: 'At the consultation',
    title: 'Recognise the legal trigger',
    detail: 'A first request is the patient’s clear and unambiguous request to a medical practitioner, made during a medical consultation. General enquiries are not first requests.',
    section: 's 19',
  },
  {
    timing: 'Immediately',
    title: 'Refuse if ineligible to coordinate',
    detail: 'A practitioner who is not eligible to act as coordinating practitioner must immediately decide to refuse. A conscientious objector must immediately tell the patient of the refusal.',
    section: 's 21(3), (5)',
  },
  {
    timing: 'Within 2 business days',
    title: 'Communicate the decision and approved information',
    detail: 'Unless refusing because of conscientious objection, tell the patient whether the request is accepted or refused and give the Secretary-approved information.',
    section: 's 21(4)',
  },
  {
    timing: 'In the medical record',
    title: 'Document the request and response',
    detail: 'Record the request, the decision, any reason for refusal, and whether the approved information was given.',
    section: 's 22',
  },
  {
    timing: 'Within 5 business days of the decision',
    title: 'Notify the Board',
    detail: 'Complete the First Request Form and give a copy to the Voluntary Assisted Dying Board, whether the request was accepted or refused.',
    section: 's 23',
  },
] as const

export const capacityElements = [
  'Understand the information or advice required to be provided',
  'Remember it to the extent necessary to make the decision',
  'Understand the matters involved and the effect of the decision',
  'Weigh the relevant factors',
  'Communicate the decision in some way',
] as const

export const misconceptions = [
  {
    claim: 'Any request to die is a formal VAD first request.',
    verdict: 'Incorrect',
    correction: 'The patient must make a clear and unambiguous request during a medical consultation. Information-seeking and ambiguous distress require clarification.',
    sources: ['S1', 'S4', 'S9'] as SourceId[],
  },
  {
    claim: 'Dementia or mental illness automatically excludes a person.',
    verdict: 'Incorrect',
    correction: 'Neither diagnosis automatically qualifies or excludes. Every eligibility criterion must be met, including VAD-specific capacity; a mental health impairment or dementia is not sufficient by itself.',
    sources: ['S1', 'S2'] as SourceId[],
  },
  {
    claim: 'A GP can ignore a first request if they conscientiously object.',
    verdict: 'Incorrect',
    correction: 'The GP must refuse immediately, document the request and notify the Board. Ordinary care must not be withdrawn because the patient requested VAD.',
    sources: ['S1', 'S4', 'S10'] as SourceId[],
  },
  {
    claim: 'A family member or advance care directive can request VAD.',
    verdict: 'Incorrect',
    correction: 'Only the patient can make the request. A substitute decision-maker or advance care directive cannot activate or continue the VAD process for the patient.',
    sources: ['S1', 'S13'] as SourceId[],
  },
] as const

export const bathurstPathway = [
  {
    title: 'Start with the patient’s consultation',
    detail: 'Only the patient can make the formal first request. With consent, the GP can provide a warm connection to navigation services while continuing ordinary care.',
  },
  {
    title: 'Western NSW LHD Navigation Service',
    detail: '1800 684 283 · Monday–Friday, 9 am–3 pm, excluding public holidays. The service provides information and can coordinate appointments with a VAD practitioner.',
  },
  {
    title: 'Statewide Care Navigator Service',
    detail: '1300 802 133 · Monday–Friday, 8:30 am–4:30 pm, excluding public holidays · NSLHD-VADCareNavigator@health.nsw.gov.au',
  },
  {
    title: 'Keep parallel care active',
    detail: 'Continue GP, specialist, palliative, symptom, psychosocial, cultural and mental-health care. Do not promise a practitioner, eligibility, timing or an entirely telehealth pathway.',
  },
] as const
