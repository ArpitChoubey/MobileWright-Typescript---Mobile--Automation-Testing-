import { test, expect } from '@mobilewright/test';

test('Swipe Left and Right  ', async ({ screen, device }) => {

 await screen.getByLabel('Swipe').tap();

    await screen.getByLabel('card').swipe({ direction: 'left' });
    await screen.getByLabel('card').swipe({ direction: 'left' });
    await screen.getByLabel('card').swipe({ direction: 'left' });
    await screen.getByLabel('card').swipe({ direction: 'left' });

    await screen.getByLabel('card').swipe({ direction: 'right' });
    await screen.getByLabel('card').swipe({ direction: 'right' });

});

  