import { test, expect } from '@mobilewright/test';

test('Fills and Clears Text', async ({ screen, device }) => {
await screen.getByLabel('test-Username').fill('A');

await screen.getByLabel('test-Username').clear();

await screen.getByLabel('test-Username').fill('Choubey');

});