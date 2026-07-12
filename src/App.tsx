import { LandingPage } from './pages/LandingPage'
import { TechnologiesInGeneralPracticePage } from './pages/TechnologiesInGeneralPracticePage'
import { TechnologiesInGeneralPracticePresentationPage } from './pages/TechnologiesInGeneralPracticePresentationPage'
import { VadPage } from './pages/VadPage'
import { VadPresentationPage } from './pages/VadPresentationPage'

export function App() {
  const path = window.location.pathname.replace(/\/+$/, '')
  const isVadPresentation = path.endsWith('/topics/voluntary-assisted-dying/presentation')
  const isVad = path.endsWith('/topics/voluntary-assisted-dying')
  const isTechnologyPresentation = path.endsWith('/topics/technologies-in-general-practice/presentation') || path.endsWith('/topics/ai-in-medicine/presentation')
  const isTechnology = path.endsWith('/topics/technologies-in-general-practice') || path.endsWith('/topics/ai-in-medicine')

  if (isTechnologyPresentation) return <TechnologiesInGeneralPracticePresentationPage />
  if (isTechnology) return <TechnologiesInGeneralPracticePage />
  if (isVadPresentation) return <VadPresentationPage />
  if (isVad) return <VadPage />
  return <LandingPage />
}
