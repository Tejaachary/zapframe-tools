import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "xex7hxdn",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
