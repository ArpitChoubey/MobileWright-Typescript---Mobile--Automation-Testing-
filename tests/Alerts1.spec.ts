import { test, expect } from '@mobilewright/test';

test('Alerts 12', async ({ screen, device }) => {
await screen.getByText('App').tap();
await screen.getByText('Alert Dialogs').tap();
await screen.getByTestId('demo.fun.com.apis:id/two_buttons_old_school').tap();
await screen.getByTestId('android:id/button1').tap();


});

test('Alerts 11', async ({ screen, device }) => {
await screen.getByText('App').tap();
await screen.getByText('Alert Dialogs').tap();
await screen.getByTestId('demo.fun.com.apis:id/text_entry_button').tap();
await screen.getByTestId('demo.fun.com.apis:id/username_edit').fill('123');
await screen.getByText('OK').tap();


});


test('Alerts 10', async ({ screen, device }) => {
await screen.getByText('App').tap();
await screen.getByText('Alert Dialogs').tap();
await screen.getByTestId('demo.fun.com.apis:id/checkbox_button2').tap();
await screen.getByText('Mom').tap();


});

test('Alerts 9', async ({ screen, device }) => {
await screen.getByText('App').tap();
await screen.getByText('Alert Dialogs').tap();
await screen.getByTestId('demo.fun.com.apis:id/checkbox_button').tap();
await screen.getByText('Every Monday').tap();
await screen.getByText('OK').tap();

});

test('Alerts 8', async ({ screen, device }) => {
await screen.getByText('App').tap();
await screen.getByText('Alert Dialogs').tap();
await screen.getByTestId('demo.fun.com.apis:id/radio_button').tap();
await screen.getByText('Satellite').tap();
await screen.getByTestId('android:id/button1').tap();

});

test('Alerts 7', async ({ screen, device }) => {
await screen.getByText('App').tap();
await screen.getByText('Alert Dialogs').tap();
await screen.getByTestId('demo.fun.com.apis:id/progress_button').tap();
await screen.getByTestId('demo.fun.com.apis:id/screen').tap();

});

test('Alerts 6', async ({ screen, device }) => {
await screen.getByText('App').tap();
await screen.getByText('Alert Dialogs').tap();
await screen.getByTestId('demo.fun.com.apis:id/select_button').tap();
await screen.getByText('Command four').tap();

});

test('Alerts 5', async ({ screen, device }) => {
await screen.getByText('App').tap();
await screen.getByText('Alert Dialogs').tap();
await screen.getByTestId('demo.fun.com.apis:id/two_buttons2ultra').tap();
await screen.getByTestId('android:id/button2').tap();

});


test.skip(' Alerts 4', async ({ screen, device }) => {
await screen.getByText('App').tap();
await screen.getByText('Alert Dialogs').tap();
await screen.getByTestId('demo.fun.com.apis:id/two_buttons2').tap();
await screen.getByTestId('android:id/button3').tap();

});


test.skip('Alerts 3', async ({ screen, device }) => {
await screen.getByText('App').tap();
await screen.getByText('Alert Dialogs').tap();
await screen.getByTestId('demo.fun.com.apis:id/two_buttons').tap();
console.log(await screen.getByTestId('android:id/alertTitle').getText())
await screen.getByTestId('android:id/button1').tap();

});

test.skip('Alerts 2', async ({ screen, device }) => {
await screen.getByText('Forms').tap();
await screen.getByText('Active').tap();
const text = await screen.getByTestId('android:id/message').getText();
console.log(text);

await screen.getByTestId('android:id/button3').tap();

})

test.skip('Alerts 1', async ({ screen, device }) => {

await screen.getByText('Forms').tap();
await screen.getByText('Active').tap();
await screen.getByTestId('android:id/button2').tap();


});


