import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { env } from "../../../../lib/env";
import { sanityClient } from "../../../../lib/sanity";

if (!env.sanity.projectId || !env.sanity.readToken) {
  console.warn("NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_READ_TOKEN are required for Sanity Presentation and draft mode.");
}

const draftModeHandler = env.sanity.projectId && env.sanity.readToken
  ? defineEnableDraftMode({
      client: sanityClient.withConfig({ token: env.sanity.readToken })
    }).GET
  : () => new Response("NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_READ_TOKEN are required for Sanity Presentation and draft mode.", { status: 500 });

export const GET = draftModeHandler;
