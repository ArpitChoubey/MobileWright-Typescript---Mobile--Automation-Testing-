import { test, expect } from '@mobilewright/test';

test('Get Text From Element', async ({ screen, device }) => {
await screen.getByLabel('test-Username').fill('123');

const text = await screen.getByLabel('test-Username').getValue();

console.log(text);

});