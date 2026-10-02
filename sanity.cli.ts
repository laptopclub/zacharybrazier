import { defineCliConfig } from "sanity/cli";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "2tqfm27r";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineCliConfig({
  api: {
    dataset,
    projectId
  },
  deployment: undefined,
  typegen: {
    generates: "./sanity.types.ts",
    path: ["./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
    schema: "./schema.json"
  }
});
