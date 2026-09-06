import { test, expect } from '@mobilewright/test';

test(' buttons on IOS', async ({ screen, device }) => {

await screen.getByLabel('Sign up').tap();
await screen.getByLabel('Continue with Apple').tap();

await device.terminateApp('com.verveapp.ios');


});
