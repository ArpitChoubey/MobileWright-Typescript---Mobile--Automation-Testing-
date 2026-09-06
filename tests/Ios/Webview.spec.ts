import { test, expect } from '@mobilewright/test';


test(' WebView  on IOS', async ({ screen , device}) => {
  await screen.getByTestId('test-Username').fill('demo_user');
  await screen.getByTestId('test-Password').fill('demo_pass');
  await screen.getByLabel('LOGIN').tap();
  await screen.getByLabel('Not Now').tap();

  await screen.getByLabel('Menu').tap();
  await screen.getByLabel('Forms').swipe({direction: 'up'});
  await screen.getByLabel('Web Browser').tap();

  await screen.getByRole('textfield').fill('https://www.lebyy.com');
  await screen.getByLabel('GO TO SITE').tap();

   const page = await screen.getByWebView().page();
   console.log(await page.title());

   await device.terminateApp('com.demo.lebyy');

  

  
  


});
