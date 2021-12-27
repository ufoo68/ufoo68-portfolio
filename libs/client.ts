import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'ufoo68-portfolio',
  apiKey: process.env.API_KEY,
});
