import { createClient } from "next-sanity";
import { env } from "./env";

export const sanityClient = createClient({
  apiVersion: env.sanity.apiVersion,
  dataset: env.sanity.dataset,
  projectId: env.sanity.projectId || "8d60h862",
  stega: {
    studioUrl: env.sanity.studioUrl
  },
  useCdn: process.env.NODE_ENV === "production"
});
