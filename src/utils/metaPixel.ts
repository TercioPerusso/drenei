declare global {
  interface Window {
    fbq: (command: string, event: string, params?: any) => void;
  }
}

const CHECKOUT_URLS = [
  'https://ritual.drenei.com.br/cart/51012506616093:1',
  'https://ritual.drenei.com.br/cart/51031061070109:1',
  'https://ritual.drenei.com.br/cart/10128967368989:1'
];

const PURCHASE_BUTTON_TEXTS = [
  'comprar',
  'comprar agora',
  'começar meu ritual',
  'garantir kit'
];

export const initMetaPixelTracking = () => {
  if (typeof window === 'undefined' || !window.fbq) {
    console.warn('Meta Pixel (fbq) not found');
    return;
  }

  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const button = target.closest('button');

    if (!button) return;

    const buttonText = button.textContent?.toLowerCase().trim() || '';
    const isPurchaseButton = PURCHASE_BUTTON_TEXTS.some(text =>
      buttonText.includes(text)
    );

    if (isPurchaseButton) {
      window.fbq('track', 'InitiateCheckout');
      console.log('Meta Pixel: InitiateCheckout event fired');

      const buttonOnClick = button.getAttribute('onclick');
      const isCheckoutRedirect = CHECKOUT_URLS.some(url => {
        if (buttonOnClick?.includes(url)) return true;

        const parentLink = button.closest('a');
        if (parentLink?.href && CHECKOUT_URLS.some(checkoutUrl =>
          parentLink.href.includes(checkoutUrl)
        )) return true;

        return false;
      });

      if (isCheckoutRedirect) {
        window.fbq('track', 'AddToCart');
        console.log('Meta Pixel: AddToCart event fired');
      }
    }
  });
};
