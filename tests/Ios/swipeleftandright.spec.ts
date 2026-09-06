import { test, expect } from '@mobilewright/test';
import { Device } from 'mobilewright';

test(' Swipe Left / Right 2 in Verve on IOS', async ({ screen, device }) => {
  await screen.getByLabel('onboarding_img1').swipe({direction: 'left'});
  await screen.getByLabel('onboarding_img2').swipe({direction: 'right'});

  await device.terminateApp('com.verveapp.ios');
});

test.only(' Swipe Left/ Right 1 in Lebyy on IOS', async ({ screen, device }) => {
  await screen.getByTestId('test-Username').fill('demo_user');
  await screen.getByTestId('test-Password').fill('demo_pass');
  await screen.getByLabel('LOGIN').tap();
  await screen.getByLabel('Not Now').tap();

  await screen.getByLabel('Menu').tap();
  await screen.getByLabel('Swipe Left / Right').tap();
  await screen.getByLabel('course').swipe({direction: 'left'});
  await screen.getByLabel('course').swipe({direction: 'left'});
  await screen.getByLabel('course').swipe({direction: 'left'});
  await screen.getByLabel('course').swipe({direction: 'left'});

  await screen.getByLabel('course').swipe({direction: 'right'});
  await screen.getByLabel('course').swipe({direction: 'right'});

  
  await device.terminateApp('com.demo.lebyy');  


});
