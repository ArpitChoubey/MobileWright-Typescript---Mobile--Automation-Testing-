import { test, expect } from '@mobilewright/test';

test(' WebView', async ({ screen }) => {
//login to application
await screen.getByLabel('test-Username').fill('standard_user');
await screen.getByLabel('test-Password').fill('secret_sauce');
await screen.getByLabel('test-LOGIN').tap();

await screen.getByLabel('test-Menu').tap();
await screen.getByLabel('test-WEBVIEW').tap();
await screen.getByLabel('test-enter a https url here...').fill('https://www.google.com');
await screen.getByLabel('test-GO TO SITE').tap();

const page = await screen.getByWebView().page();
console.log('page title is : ', await page.title());

});
