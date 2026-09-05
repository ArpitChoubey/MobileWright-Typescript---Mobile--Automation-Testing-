import { test, expect } from '@mobilewright/test';

test('Alert ', async ({ screen, device }) => {

    await screen.getByText('Forms').tap();

    await screen.getByText('Active').tap();

    await screen.getByText('CANCEL').tap();


});