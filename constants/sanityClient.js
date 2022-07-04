import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'jqz6a7h3',
  dataset: 'production',
  apiVersion: '2022-07-01',
  useCdn: false,
});

export default client;