# Banked Code Exercise

This repo provides the basis for a test framework using Cypress.
It aims to validate that the data returned back from the Open Weather Map orgs API is correctly presented within the UI of the webpage.

## Prereqs

- Node.js v16
- NPM

## Setup

- Run `npm install`
- Duplicate the `.sample-env` file, rename it to `.env` and add in your OpenWeather API Key
  - You'll need to create an account with Open Weather and then verify it in order to get an API Key.
  - Once, you've done those things, you can find the key [here](https://home.openweathermap.org/api_keys). Make sure you remove any trailing whitespaces from it.
- You then have a choice of scripts to run:
  - `npm run cypress` to run headlessly,
  - `npm run cypress:headed` to run in a browser window,
  - `npm run cypress:open` to open the Cypress runner locally and allow you to run the test from within there.
