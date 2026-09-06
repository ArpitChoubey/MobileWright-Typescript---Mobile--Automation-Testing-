import { test, expect } from '@mobilewright/test';

test('Assertions ', async ({ screen, device }) => {

       console.log("This is the Sample Test For Assertions"); 

    await expect(screen.getByText('WEBDRIVER')).toHaveText('WEBDRIVER');

    await screen.getByLabel('Forms-screen').tap();

    await expect(screen.getByLabel('text-input')).toHaveValue('Arpit');

    await expect(screen.getByText('Forms')).not.toBeVisible();

   await expect(screen.getByLabel('test-Username')).not.toBeEnabled();

   await expect(screen.getByLabel('test-Username')).not.toBeFocused();

   test.setTimeout(10000);

   await expect(screen.getByLabel('test-Username')).not.toBeDisabled();
   await expect(screen.getByLabel('test-Username')).not.toBeSelected();

    });