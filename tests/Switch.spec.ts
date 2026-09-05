import { test, expect } from '@mobilewright/test';

test(' Switch', async ({ screen, device }) => {
await screen.getByText('Views').tap();
await screen.getByText('Grid').swipe({direction: 'up'})
await screen.getByText('Grid').swipe({direction: 'up'})

await screen.getByText('Switches').tap();
await screen.getByText('Standard switch').tap();
await screen.getByText('Monitored switch').tap();

await screen.getByText('Customized text').tap();


});
