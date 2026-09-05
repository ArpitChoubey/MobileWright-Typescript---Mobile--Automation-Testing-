import { test, expect } from '@mobilewright/test';

test('Locators Types', async ({ screen, device }) => {
  await screen.getByRole('list', { name: 'test-Login' }).tap();

  await screen.getByLabel('test-LOGIN').tap();

  // await screen.getByText('India Women').tap();

  await screen.getByTestId('android:id/statusBarBackground').tap();

  // await screen.getByPlaceholder('Search...')

  // await screen.getByType('TextField')


});