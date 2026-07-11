import { LandingPage } from './pages/LandingPage'
import { VadPage } from './pages/VadPage'
import { VadPresentationPage } from './pages/VadPresentationPage'

export function App() {
  const path = window.location.pathname.replace(/\/+$/, '')
  const isVadPresentation = path.endsWith('/topics/voluntary-assisted-dying/presentation')
  const isVad = path.endsWith('/topics/voluntary-assisted-dying')

  if (isVadPresentation) return <VadPresentationPage />
  if (isVad) return <VadPage />
  return <LandingPage />
}
