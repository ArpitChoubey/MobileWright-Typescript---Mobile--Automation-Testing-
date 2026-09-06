import { test, expect } from '@mobilewright/test';

test('Assertions and Timeout ', async ({ screen, device }) => {

    console.log("This is the Sample Test For Assertions and Timeout");

    await expect(screen.getByText('Forms')).toBeVisible();

   await expect(screen.getByLabel('test-Username')).toBeEnabled();

   await expect(screen.getByLabel('test-Username')).toBeFocused();

   test.setTimeout(10000);

   await expect(screen.getByLabel('test-Username')).toBeDisabled();
   await expect(screen.getByLabel('test-Username')).toBeSelected();

  await screen.getByLabel('test-Username').waitFor({
  state: 'visible',
  timeout: 10000
});

    await expect(screen.getByText('CANCEL')).toBeChecked();


});