import { createClient } from 'microcms-js-sdk';

export const micrecmsClient = createClient({
  serviceDomain: 'ufoo68-portfolio',
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});
