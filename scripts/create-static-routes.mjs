import { mkdir, readFile, writeFile } from 'node:fs/promises'

const routes = [
  'topics/voluntary-assisted-dying',
  'topics/voluntary-assisted-dying/presentation',
  'topics/technologies-in-general-practice',
  'topics/technologies-in-general-practice/presentation',
  'topics/ai-in-medicine',
  'topics/ai-in-medicine/presentation',
]
const rootHtml = await readFile('dist/index.html', 'utf8')

for (const route of routes) {
  const depth = route.split('/').length
  const prefix = '../'.repeat(depth)
  const routeHtml = rootHtml.replaceAll('./assets/', `${prefix}assets/`)
  await mkdir(`dist/${route}`, { recursive: true })
  await writeFile(`dist/${route}/index.html`, routeHtml)
}
