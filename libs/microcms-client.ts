import { createClient } from 'microcms-js-sdk';

export const micrecmsClient = createClient({
  serviceDomain: 'ufoo68-portfolio',
  apiKey: process.env.MICROCMS_API_KEY,
});
