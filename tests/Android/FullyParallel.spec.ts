import { test, expect } from '@mobilewright/test';

test(' Fully parallel', async ({ screen, device }) => {
await screen.getByLabel('test-Username').fill('demo_user');
await screen.getByLabel('test-Password').fill('demo_pass');
await screen.getByLabel('test-LOGIN').tap();

});
// Change fullyparallel as true in config file to run this test in parallel 
