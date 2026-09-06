import { test, expect } from '@mobilewright/test';

test(' Alerts7 on IOS', async ({ screen, device }) => {

await screen.getByLabel('Alert Views').tap();
await screen.getByLabel('Simple').tap();
await screen.getByLabel('OK').tap();

await device.terminateApp('com.lucky.UICatalog2026');

});
test(' Alerts6 on IOS', async ({ screen, device }) => {

await screen.getByLabel('Alert Views').tap();
await screen.getByLabel('Simple').tap();
await screen.getByLabel('OK').tap();

await device.terminateApp('com.lucky.UICatalog2026');

});
test(' Alerts5 on IOS', async ({ screen, device }) => {

await screen.getByLabel('Alert Views').tap();
await screen.getByLabel('Simple').tap();
await screen.getByLabel('OK').tap();

await device.terminateApp('com.lucky.UICatalog2026');

});

test(' Alerts4 on IOS', async ({ screen, device }) => {

await screen.getByLabel('Alert Views').tap();
await screen.getByLabel('Simple').tap();
await screen.getByLabel('OK').tap();

await device.terminateApp('com.lucky.UICatalog2026');

});

test(' Alerts3 on IOS', async ({ screen, device }) => {

await screen.getByLabel('Alert Views').tap();
await screen.getByLabel('Other').tap();
await screen.getByLabel('Choice One').tap();

await device.terminateApp('com.lucky.UICatalog2026');

});

test(' Alerts2 on IOS', async ({ screen, device }) => {

await screen.getByLabel('Alert Views').tap();
await screen.getByLabel('Okay / Cancel').tap();
await screen.getByLabel('Cancel').tap();

await device.terminateApp('com.lucky.UICatalog2026');

});

test(' Alerts1 on IOS', async ({ screen, device }) => {

await screen.getByLabel('Alert Views').tap();
await screen.getByLabel('Simple').tap();
await screen.getByLabel('OK').tap();

await device.terminateApp('com.lucky.UICatalog2026');

});
