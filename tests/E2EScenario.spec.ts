import { test, expect } from '@mobilewright/test';

test('E2E Scenario', async ({ screen }) => {
  
  
  await screen.getByText('Login').tap();
  await screen.getByText('Sign up').tap();
  await screen.getByLabel('input-email').fill("choubeyarpit963@gmail.com");
  await screen.getByLabel('input-password').fill('Arpit@12');
  await screen.getByLabel('input-repeat-password').fill('Arpit@12');
  //hide the keyboard
  await screen.pressButton('BACK');
  await screen.getByLabel('button-SIGN UP').tap({ timeout: 20000 });
  
  await screen.getByTestId('android:id/button1').tap();
  await screen.getByText('Login').tap();
  await screen.getByText('LOGIN').tap();
  await screen.getByTestId('android:id/button1').tap();
});
