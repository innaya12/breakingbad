require('expect-puppeteer');
const puppeteer = require('puppeteer');
let page; 

describe('Breaking Bad Flow', () => {
  beforeAll(async () => {
    const browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it('running on the localholst - check the title - should be "Breaking Bad"', async () => {
    await page.goto('http://localhost:3000');
    await expect(page).toMatch('Breaking Bad');
  });

  it('waiting to "Cancer Man" episode (gets from api call) and clicking it', async () => {
    await page.waitForSelector("[id='4']");
    await page.click("[id='4']");
  });

  it('moving to episdoe page - title should be "Episode Page"', async () => {
    await expect(page).toMatch('Episode Page');
  });
  
  it('waiting to first charater name (gets from api call) and clicking it', async () => {
    await page.waitForSelector("[id='0']");
    await page.click("[id='0']");
  });

  /// time added to test since the 5 sec isn't inaf
  it('moving to character page - title should be "Walter White" (gets from api call)', async () => {
    await expect(page).toMatch('Walter White', { timeout: 6000 });
  });
}); 