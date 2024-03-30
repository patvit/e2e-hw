/* eslint-disable jest/expect-expect */
import puppeteer from 'puppeteer';
import { fork } from 'child_process';

describe('Card Form', () => {
  let browser;
  let page;
  let server;

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
      // headless: true,
      // slowMo: 100,
      // devtools: false,
    });
    page = await browser.newPage();
  });

  jest.setTimeout(200000);
  test.each([
    ['.success-msg', 'valid', '4556765265954626'],
    ['.error-msg', 'invalid', '4556765265954621'],
    ['.error-msg', 'invalid', '45567'],
    ['.error-msg', 'invalid', ''],
  ])('should add %s class if card number is %s', async (msg, _, cardNumber) => {
    await page.goto('http://localhost:9000', { waitUntil: 'load' });
    await page.waitForSelector('#form');

    const form = await page.$('#form');
    const input = await form.$('.input');
    const button = await form.$('.button');

    await input.type(cardNumber);
    await button.click();

    await page.waitForSelector(msg);
  });

  afterAll(async () => {
    await page.close();
    await browser.close();
    server.kill();
  });
});
