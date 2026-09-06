import { test, expect } from '@mobilewright/test';

test('Handling Dropdown', async ({ screen, device }) => {

   await screen.getByLabel('Forms').tap();

   await screen.getByText('Select an item...').tap();

   await screen.getByText('Appium is awesome').tap();

    });