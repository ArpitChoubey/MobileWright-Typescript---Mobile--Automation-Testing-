import { test, expect } from '@mobilewright/test';



test(' LongPresss  on IOS', async ({ screen , device}) => {
  await screen.getByLabel('LONG PRESS ME').longPress({duration: 8000});
  await device.terminateApp('com.demo.lebyy');


  
  


});
