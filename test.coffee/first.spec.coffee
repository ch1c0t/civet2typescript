import { test, expect } from '@playwright/test'
import { _electron as e } from 'playwright'

test "it contains the word 'Electron'", ->
  app = await e.launch executablePath: "./dist/civet2typescript-1.0.0.AppImage"
  window = await app.firstWindow()

  expect(window.getByText 'Electron').toBeVisible()
