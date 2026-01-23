import { test, expect } from '@playwright/test'
import { GetApp } from './helpers'

app = window = input = output = null
test.beforeAll ->
  app = await GetApp()
  window = await app.firstWindow()
  input = await window.locator '#input'
  output = await window.locator '#output'
test.afterAll ->
  await app.close()

test "it contains the word 'Electron'", ->
  expect(window.getByText 'Electron').toBeVisible()

test 'it produces the output', ->
  await input.pressSequentially "console.log 'a string'", delay: 100
  expect(output).toContainText "console.log('a string')"

test 'it clears the input when Ctrl+u is pressed', ->
  expect(input).toHaveValue "console.log 'a string'"

  await window.keyboard.press 'Control+u'
  expect(input).toHaveValue ''

  await input.pressSequentially "console.log console.log", delay: 100
  expect(output).toContainText 'console.log(console.log)'
