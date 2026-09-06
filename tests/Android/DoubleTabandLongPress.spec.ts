import { test, expect } from '@mobilewright/test';

test.only(' Double tap', async ({ screen, device }) => {
await screen.getByText('App').tap();
await screen.getByText('Activity').tap();
await screen.getByText('Presentation').tap();
await screen.getByText('Show all displays').doubleTap();

});


test(' Long press', async ({ screen, device }) => {
await screen.getByText('Views').tap();
await screen.getByText('Expandable Lists').tap();
await screen.getByText('1. Custom Adapter').tap();
// await screen.getByText('People Names').longPress();
await screen.getByText('People Names').longPress({duration: 4000});


});
