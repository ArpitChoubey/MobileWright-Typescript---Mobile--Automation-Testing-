import { test, expect } from '@mobilewright/test';



test(' doubletap in Lebyy on IOS', async ({ screen , device}) => {
  await screen.getByLabel('DOUBLE TAP ME').doubleTap();
  await screen.getByLabel('Double tap done').isVisible();
  await screen.getByLabel('Dismiss').tap();
  await device.terminateApp('com.demo.lebyy');


  
  


});
