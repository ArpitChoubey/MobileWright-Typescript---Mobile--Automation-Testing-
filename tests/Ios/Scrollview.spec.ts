import { test, expect } from '@mobilewright/test';



test('Scroll Into View in Lebyy on IOS', async ({ screen , device}) => {
  await screen.getByTestId('test-Username').fill('demo_user');
  await screen.getByTestId('test-Password').fill('demo_pass');
  await screen.getByLabel('LOGIN').tap();
  await screen.getByLabel('Not Now').tap();

  await screen.getByLabel('Menu').tap();
  await screen.getByLabel('Forms').tap();

  await screen.getByLabel('Select an item...').tap();
  await screen.getByLabel('Lebyy is awesome').tap();

  await device.terminateApp('com.demo.lebyy');


  
  


});
