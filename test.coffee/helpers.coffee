import fs from 'fs'
{ version } = JSON.parse fs.readFileSync './package.json', 'utf8'
executablePath = "./dist/civet2typescript-#{version}.AppImage"

import { _electron as e } from 'playwright'

GetApp = ->
  e.launch { executablePath }

export { GetApp }
