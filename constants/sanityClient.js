import { createClient } from 'next-sanity';
import { draftMode } from "next/headers";
import { token } from '../sanity/lib/token';

export const client = createClient({
  projectId: 'jqz6a7h3',
  dataset: 'production',
  apiVersion: '2025-05-22',
  useCdn: true,
  stega: { studioUrl: "https://sanity-v3-demo.sanity.studio", enabled: false }
});

export async function sanityFetch({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}) {
  const isDraftMode = draftMode().isEnabled;
  if (isDraftMode && !token) {
    throw new Error("Missing environment variable SANITY_API_READ_TOKEN");
  }

  let dynamicRevalidate = revalidate;
  if (isDraftMode) {
    // Do not cache in Draft Mode
    dynamicRevalidate = 0;
  } else if (tags.length) {
    // Cache indefinitely if tags supplied, purge with revalidateTag()
    dynamicRevalidate = false;
  }

  return client.fetch(query, params, {
    ...(isDraftMode &&
      ({
        token: token,
        perspective: "previewDrafts",
        stega: true,
      })),
    next: {
      revalidate: dynamicRevalidate,
      tags,
    },
  });
}

export default sanityFetch;