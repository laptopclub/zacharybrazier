import { homePageQuery } from "@laptopclub/foundation-cms/queries";
import { BlockRenderer, type PageBlock } from "@laptopclub/foundation-ui";
import type { Metadata } from "next";
import Image from "next/image";
import type { PageBySlugQueryResult } from "../lib/sanity-query-types";
import { ParallaxController } from "../components/parallax-controller";
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
      <ParallaxController />
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-20 md:px-10 lg:px-16">
        <div aria-hidden="true" className="absolute inset-0 z-10 mx-auto w-full max-w-7xl">
          <div className="absolute right-0 top-[16vh] aspect-[1122/1402] w-[48vw] max-w-[17rem] md:top-[14vh] md:w-[18vw] md:max-w-[19rem]">
            <div className="parallax-motion relative size-full" data-parallax-speed="0.06">
              <Image
                alt="Zachary Brazier in chef whites"
                className="size-full object-contain"
                fill
                priority
                sizes="(min-width: 768px) 18vw, 48vw"
                src="/images/zacharychef3.png"
              />
            </div>
          </div>
          <div className="absolute left-1/2 top-1/2 aspect-[1122/1402] w-[52vw] max-w-[23rem] translate-x-[20%] -translate-y-1/2 md:w-[28vw] md:max-w-[27.5rem]">
            <div className="parallax-motion relative size-full" data-parallax-speed="0.18">
              <Image
                alt="Zachary Brazier standing in chef whites"
                className="size-full object-contain"
                fill
                priority
                sizes="(min-width: 768px) 28vw, 52vw"
                src="/images/zacharychef2.png"
              />
            </div>
          </div>
        </div>
        <h1 className="sr-only">Zachary Brazier</h1>
        <div className="relative z-30 mx-auto w-full max-w-7xl">
          <div aria-hidden="true" className="pointer-events-none">
            <div className="watermark-title parallax-motion" data-parallax-speed="-0.06" />
          </div>
          <p className="mt-8 max-w-xl text-2xl leading-9 tracking-[-0.03em] text-stone-700 md:text-3xl">
            Considered food for private tables, collaborations and thoughtful hospitality projects.
          </p>
        </div>
      </section>

      <section id="about" className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.55fr_1fr]">
          <div>
            <h2 className="parallax-motion mt-5 text-4xl font-semibold tracking-[-0.05em] text-stone-950 md:text-6xl" data-parallax-speed="0.05">Seasonal, precise, generous.</h2>
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

      <section id="cooking" className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_0.6fr] lg:items-end lg:justify-between">
            <div>
              <h2 className="parallax-motion mt-5 text-4xl font-semibold tracking-[-0.05em] text-stone-950 md:text-6xl" data-parallax-speed="0.05">Plates, produce and process.</h2>
            </div>
            <p className="max-w-lg text-lg leading-8 text-stone-600">
              A simple gallery area for now, ready for Zachary’s own food photography when final assets are available.
            </p>
          </div>
          <div className="parallax-motion grid gap-4 md:grid-cols-3" data-parallax-speed="0.07">
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

      <section id="experience" className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.65fr_1fr] lg:items-start">
          <div>
            <h2 className="parallax-motion mt-5 text-4xl font-semibold tracking-[-0.05em] text-stone-950 md:text-6xl" data-parallax-speed="0.05">Calm, capable cooking for the room.</h2>
          </div>
          <div className="divide-y divide-stone-200">
            {experienceItems.map((item) => (
              <p className="py-6 text-2xl leading-8 tracking-[-0.03em] text-stone-800" key={item}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="parallax-motion mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-stone-50 p-8 md:p-12 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:p-16" data-parallax-speed="0.05">
          <div>
            <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-stone-950 md:text-7xl">
              Let’s cook something memorable.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-stone-600">
              Share the date, guest count and style of meal you have in mind. Social links and booking details will be
              added once Zachary’s preferred contact channels are ready.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
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
