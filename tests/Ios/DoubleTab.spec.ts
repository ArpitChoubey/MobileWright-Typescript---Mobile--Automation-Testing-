import { test, expect } from '@mobilewright/test';



test(' doubletap  on IOS', async ({ screen , device}) => {
  //tap
  await screen.tap(24,539);
  await screen.getByLabel('Invalid credentials. Use demo_user / demo_pass').isVisible();

  //double tap
  await screen.doubleTap(24,751);
  await screen.getByLabel('Double tap done').isVisible();
  await screen.getByLabel('Dismiss').tap();

  //longpress
  await screen.longPress(24,685,8000);
  await screen.getByLabel('Long press done').isVisible();
  await screen.getByLabel('Dismiss').tap();


  await device.terminateApp('com.demo.lebyy');


  
  


});
