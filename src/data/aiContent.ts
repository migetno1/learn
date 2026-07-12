export const aiMeta = {
  currentAsAt: '12 July 2026',
  jurisdiction: 'Australia',
  status: 'Teaching draft — further review required',
}

export type AiSourceId = keyof typeof aiSources

export const aiSources = {
  S1: { short: 'ACSQHC', title: 'AI Clinical Use Guide, version 1.0', href: 'https://www.safetyandquality.gov.au/resources/ai-clinical-use-guide', kind: 'Established guidance' },
  S2: { short: 'Ahpra', title: 'Meeting your professional obligations when using Artificial Intelligence in healthcare', href: 'https://www.ahpra.gov.au/Resources/Artificial-Intelligence-in-healthcare.aspx', kind: 'Established guidance' },
  S3: { short: 'TGA', title: 'Artificial intelligence and medical device software regulation', href: 'https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence-ai/manufacturing/artificial-intelligence-ai-and-medical-device-software-regulation', kind: 'Regulator guidance' },
  S6: { short: 'OAIC', title: 'Guidance on privacy and commercially available AI products', href: 'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products', kind: 'Privacy guidance' },
  S7: { short: 'RACGP', title: 'Artificial intelligence scribes', href: 'https://www.racgp.org.au/running-a-practice/technology/artificial-intelligence-ai/artificial-intelligence-ai-scribes', kind: 'Professional guidance' },
  S9: { short: 'eBioMedicine', title: 'Impact of AI-powered voice-to-text technology on quality of care', href: 'https://doi.org/10.1016/j.ebiom.2025.105861', kind: 'Systematic review' },
  S10: { short: 'Applied Clinical Informatics', title: 'Clinical Implementation of Artificial Intelligence Scribes in Health Care', href: 'https://doi.org/10.1055/a-2597-2017', kind: 'Systematic review' },
  S11: { short: 'NEJM AI', title: 'Ambient AI Scribes in Clinical Practice: A Randomized Trial', href: 'https://doi.org/10.1056/AIoa2501000', kind: 'Randomised trial' },
  S12: { short: 'JAMA Network Open', title: 'Use of Ambient AI Scribes to Reduce Administrative Burden and Professional Burnout', href: 'https://doi.org/10.1001/jamanetworkopen.2025.34976', kind: 'Quality-improvement study' },
  S13: { short: 'JAMA', title: 'Testing and Evaluation of Health Care Applications of Large Language Models', href: 'https://doi.org/10.1001/jama.2024.21700', kind: 'Systematic review' },
  S14: { short: 'JAMA Network Open', title: 'Large Language Model Influence on Diagnostic Reasoning', href: 'https://doi.org/10.1001/jamanetworkopen.2024.40969', kind: 'Randomised vignette trial' },
  S17: { short: 'PLOS Digital Health', title: 'Bias in medical AI: Implications for clinical decision-making', href: 'https://doi.org/10.1371/journal.pdig.0000651', kind: 'Review' },
  S18: { short: 'CSIRO and partners', title: 'AI for Healthcare in Australian Indigenous Communities', href: 'https://www.csiro.au/-/media/News-releases/2025/October/CSIRO-report-highlights-need-for-Indigenous-led-approach-to-AI-in-healthcare/25_00144_HB_REPORT_AIHealthcareIndigenousCommunities_WEB_250801.pdf', kind: 'Indigenous-led scoping project' },
  S20: { short: 'EQUATOR', title: 'Artificial intelligence and machine-learning reporting guidelines', href: 'https://www.equator-network.org/reporting-guidelines-study-design/artificial-intelligence-machine-learning-studies/', kind: 'Reporting-guideline index' },
  S21: { short: 'Australian Government', title: 'Artificial intelligence in health care', href: 'https://www.health.gov.au/topics/health-technologies-and-digital-health/what-we-do/artificial-intelligence-ai-in-health-care', kind: 'Official overview' },
  S22: { short: 'MedLuma', title: 'MedLuma: Clinical AI for Australian clinicians', href: 'https://www.medluma.ai/', kind: 'First-party product description' },
  S23: { short: 'Lyrebird Health', title: 'Lyrebird Health Australia', href: 'https://www.lyrebirdhealth.com/au', kind: 'First-party product description' },
  S24: { short: 'Internal Medicine Journal', title: 'Can artificial intelligence improve patient educational material readability?', href: 'https://doi.org/10.1111/imj.16607', kind: 'Systematic review' },
  S25: { short: 'Medical Science Educator', title: 'Integrating Generative AI in Health Education', href: 'https://doi.org/10.1007/s40670-025-02578-3', kind: 'Scoping review' },
  S26: { short: 'JMIR Medical Education', title: 'Anki Tagger: A Generative AI Tool for Aligning Resources to Curriculum', href: 'https://doi.org/10.2196/48780', kind: 'Development report' },
} as const

export const workflow = ['Define', 'Protect', 'Generate', 'Verify', 'Own'] as const

export const chapters = [
  ['question', 'Will AI take our jobs?'],
  ['michael', 'Meet Michael'],
  ['scribe', 'During the consultation'],
  ['thinking', 'Thinking partner'],
  ['evidence', 'Finding evidence'],
  ['patient-info', 'Patient information'],
  ['education', 'After clinic'],
  ['landscape', 'Beyond this workflow'],
  ['future', 'Three horizons'],
  ['human', 'What remains human'],
  ['sources', 'Sources and review'],
] as const

export const taskLens = [
  ['T', 'Task', 'What exact job is this version meant to do?'],
  ['A', 'Appraise', 'What evidence supports it for this population and workflow?'],
  ['S', 'Share and safeguard', 'Explain its role, protect information and preserve a fallback.'],
  ['K', 'Keep responsibility', 'Verify, decide, document and monitor.'],
] as const

export const horizons = {
  now: {
    label: 'Now', status: 'Established current use',
    items: ['Consultation documentation', 'Evidence retrieval', 'Educational and patient-information drafting', 'Narrow, validated decision support in defined settings'],
  },
  emerging: {
    label: 'Emerging', status: 'Research and early deployment',
    items: ['Longitudinal record synthesis', 'Multimodal support across history, images and investigations', 'Communication adapted to language and health literacy', 'Remote monitoring for meaningful change'],
  },
  possible: {
    label: 'Possible future', status: 'Speculative possibility',
    items: ['Proactive coordination across a care journey', 'Continuously updated personalised models', 'Semi-autonomous routine follow-up within governed boundaries', 'Faster research translation and treatment discovery'],
  },
} as const
