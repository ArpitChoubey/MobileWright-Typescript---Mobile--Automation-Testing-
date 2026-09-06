import { test, expect } from '@mobilewright/test';

test(' Fill & Clear on IOS', async ({ screen, device }) => {
console.log("this is sample program")
await screen.getByTestId('test-Username').fill('demo_user');
await screen.getByTestId('test-Password').fill('demo_pass');

await screen.getByTestId('test-Username').clear();
await screen.getByTestId('test-Password').clear();
});
