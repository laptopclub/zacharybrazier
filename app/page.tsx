import { homePageQuery } from "@laptopclub/foundation-cms/queries";
import { BlockRenderer, type PageBlock } from "@laptopclub/foundation-ui";
import type { Metadata } from "next";
import Image from "next/image";
import type { PageBySlugQueryResult } from "../lib/sanity-query-types";
import { siteBlockRegistry } from "../lib/blocks";
import { env } from "../lib/env";
import { sanityFetch } from "../lib/live";
import { getSiteSettings } from "../lib/site";

type PageData = NonNullable<PageBySlugQueryResult>;

const cookingImages = [
  {
    alt: "A composed seasonal dish on a white plate",
    src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=85&w=1200"
  },
  {
    alt: "Fresh produce being prepared for service",
    src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=85&w=1200"
  },
  {
    alt: "A long table set with shared seasonal dishes",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=85&w=1400"
  }
];

const experienceItems = [
  "Private dinners and intimate celebrations",
  "Seasonal menu development and event cooking",
  "Restaurant collaborations and pop-up projects",
  "Hospitality support for considered food-led experiences"
];

const fallbackBlocks: PageBlock[] = [];

async function getHomePage({ stega = true }: { stega?: boolean } = {}): Promise<PageData | null> {
  if (!env.sanity.projectId) {
    return null;
  }

  const { data } = await sanityFetch({ query: homePageQuery, stega });
  return data as PageBySlugQueryResult;
}

export async function generateMetadata(): Promise<Metadata> {
  const [page, site] = await Promise.all([getHomePage({ stega: false }), getSiteSettings({ stega: false })]);

  return {
    description: page?.seo?.description ?? site.description,
    robots: page?.seo?.noIndex ? { follow: false, index: false } : undefined,
    title: page?.seo?.title ?? page?.title ?? site.title
  };
}

function BespokeHome() {
  return (
    <div className="chef-site bg-white text-stone-950">
      <section className="flex min-h-screen items-center px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.45em] text-stone-500">Private chef / seasonal cooking</p>
            <h1 className="max-w-5xl text-[clamp(4.5rem,13vw,12rem)] font-semibold leading-[0.85] tracking-[-0.09em] text-stone-950">
              Zachary Brazier
            </h1>
          </div>
          <div className="max-w-xl border-t border-stone-200 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="text-2xl leading-9 tracking-[-0.03em] text-stone-700 md:text-3xl">
              Considered food for private tables, collaborations and thoughtful hospitality projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
                href="mailto:hello@zacharybrazier.com"
              >
                Enquire now
              </a>
              <a
                className="inline-flex rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-950"
                href="#about"
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-stone-200 px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.55fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-stone-500">About me</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-stone-950 md:text-6xl">Seasonal, precise, generous.</h2>
          </div>
          <div className="grid gap-8 text-lg leading-8 text-stone-600 md:grid-cols-2">
            <p>
              Zachary cooks with a produce-led approach, bringing restaurant technique into warm, personal settings.
              Menus are shaped around the occasion, the season and the people at the table.
            </p>
            <p>
              The work spans private dining, creative collaborations and hospitality projects that need food to feel
              polished, memorable and quietly confident.
            </p>
          </div>
        </div>
      </section>

      <section id="cooking" className="border-t border-stone-200 px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_0.6fr] lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-stone-500">My cooking</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-stone-950 md:text-6xl">Plates, produce and process.</h2>
            </div>
            <p className="max-w-lg text-lg leading-8 text-stone-600">
              A simple gallery area for now, ready for Zachary’s own food photography when final assets are available.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {cookingImages.map((image, index) => (
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-100" key={image.src}>
                <Image
                  alt={image.alt}
                  className="size-full object-cover"
                  fill
                  priority={index === 0}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  src={image.src}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-t border-stone-200 px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.65fr_1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-stone-500">Experience</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-stone-950 md:text-6xl">Calm, capable cooking for the room.</h2>
          </div>
          <div className="divide-y divide-stone-200 border-y border-stone-200">
            {experienceItems.map((item) => (
              <p className="py-6 text-2xl leading-8 tracking-[-0.03em] text-stone-800" key={item}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-stone-200 px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-stone-50 p-8 md:p-12 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:p-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-stone-500">Contact</p>
            <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-stone-950 md:text-7xl">
              Let’s cook something memorable.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-stone-600">
              Share the date, guest count and style of meal you have in mind. Zachary will respond with availability and
              a simple proposal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700" href="mailto:hello@zacharybrazier.com">
                Email Zachary
              </a>
              <a className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-950" href="https://instagram.com" rel="noreferrer" target="_blank">
                Instagram
              </a>
              <a className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-950" href="https://linkedin.com" rel="noreferrer" target="_blank">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default async function HomePage() {
  const page = await getHomePage();
  const imageConfig = { dataset: env.sanity.dataset, projectId: env.sanity.projectId };

  if (page?.blocks?.length) {
    return <BlockRenderer blocks={page.blocks as PageBlock[]} imageConfig={imageConfig} registry={siteBlockRegistry} />;
  }

  if (fallbackBlocks.length) {
    return <BlockRenderer blocks={fallbackBlocks} imageConfig={imageConfig} registry={siteBlockRegistry} />;
  }

  return <BespokeHome />;
}
