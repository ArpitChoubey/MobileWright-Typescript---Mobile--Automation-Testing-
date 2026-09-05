import { test, expect } from '@mobilewright/test';

test(' Swipe up & down', async ({ screen, device }) => {
await screen.getByText('Views').tap();
await screen.getByText('Grid').swipe({direction: 'up'})
await screen.getByText('Grid').swipe({direction: 'up'})

await screen.getByText('Progress Bar').swipe({direction: 'down'})
await screen.getByText('Grid').swipe({direction: 'down'})



});
