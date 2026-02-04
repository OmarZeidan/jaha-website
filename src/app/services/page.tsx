import { type Metadata } from 'next'
import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import imageServices from '@/images/rumi-1.jpg'
import { loadBrands } from '@/lib/mdx'

const serviceChapters = [
  {
    title: 'Concept & Brand Development',
    lead: 'We design the vision, shape the brand, and build the customer journey before the doors open.',
    items: [
      {
        title: 'Brand Expansion',
        description:
          'Guiding restaurants and cafés through opening new branches or entering new markets while maintaining high brand standards.',
      },
      {
        title: 'Concept Design & Development',
        description:
          'We turn ideas into hospitality brands, covering market research, menu planning, design direction, and the full customer journey.',
      },
      {
        title: 'Digital Presence & Brand Management',
        description:
          'Managing online brand image through professional photography, content updates, and platform optimization.',
      },
    ],
  },
  {
    title: 'Operations Development',
    lead: 'We build the engine behind the experience: systems, supply chains, and performance controls.',
    items: [
      {
        title: 'Business Turnaround & Growth',
        description:
          'Supporting underperforming businesses through restructuring, cost control, and strategy updates to restore competitiveness and growth.',
      },
      {
        title: 'Kitchen & Bar Workflow Design',
        description:
          'Designing efficient floor plans to optimize staff movement, eliminate bottlenecks, and improve service speed.',
      },
      {
        title: 'Quality Control & Performance Audits',
        description:
          'Implementing systems to monitor waste, service speed, and guest satisfaction to protect quality and profit margins.',
      },
      {
        title: 'Supply Chain & Vendor Management',
        description:
          'Managing supplier negotiations, purchasing strategies, and inventory rules to secure premium ingredients at optimal costs.',
      },
      {
        title: 'Menu Engineering & Profitability',
        description:
          'Analyzing menu performance to maximize revenue, control food costs, and highlight high-margin items.',
      },
      {
        title: 'Bakery & Pastry Supply',
        description:
          'Delivering fresh, handcrafted breads and pastries daily, enabling premium offerings with zero extra labor.',
      },
    ],
  },
  {
    title: 'Technology & Financials',
    lead: 'We connect operations to data and financial clarity for sharper decisions.',
    items: [
      {
        title: 'ERP Systems & Odoo Consulting',
        description:
          'Implementing ERP solutions to automate operations, centralize data, and improve overall business efficiency.',
      },
      {
        title: 'Financial Reporting & Analysis',
        description:
          'Providing clear financial tools and reports to track budgets, manage costs, and assess business performance.',
      },
    ],
  },
  {
    title: 'People & Performance',
    lead: 'We build teams, culture, and standards that scale without losing soul.',
    items: [
      {
        title: 'HR Strategy & Company Culture',
        description:
          'Designing salary structures, recruitment plans, performance evaluations, and retention systems to build high-performing teams.',
      },
      {
        title: 'Staff Training',
        description:
          'We build SOPs and training programs that ensure efficiency, consistency, and high-quality service across daily operations.',
      },
    ],
  },
]

function Culture() {
  return (
    <div className="rounded-4x gradient-bg-light mt-24 py-24">
      <SectionIntro eyebrow="" title="Our Purpose & Values">
        <p>
          Grounded in our mission and guided by our core values, we’re creating
          the future we believe in.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="VISION">
            Shaping spaces that feel like home, we blend local culture,
            authenticity, and community in every experience. Our goal is to be a
            symbol of connection, bringing people together and creating
            meaningful moments in the neighborhoods we touch.
          </GridListItem>
          <GridListItem title="MISSION">
            Driven by a passion for connection, innovation, and sustainability,
            we aim to deliver exceptional food and beverage experiences that
            celebrate culture and make a positive social and economic impact,
            both locally and globally.
          </GridListItem>
          <GridListItem title="CORE BELIEFS">
            At the heart of Jahangir’s success lies a philosophy that combines
            passion with authenticity. We believe in the power of quality in
            everything we do, from the ingredients we use to the service we
            provide.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Services() {
  return (
    <>
      {/* Hero: editorial lux band */}
      <div className="mt-16 bg-[linear-gradient(180deg,var(--color-jaha)_0%,var(--color-jaha/0.4)_50%,transparent_100%)] pt-2 pb-20 lg:mt-28 lg:pb-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-20">
            <SectionIntro
              eyebrow="Service architecture"
              title="Designed as chapters, delivered as a full experience."
            >
              <p className="max-w-xl text-lg leading-relaxed text-neutral-600">
                From first concept to mature operations, we organize our
                services into focused chapters. Each one is designed to elevate
                quality, sharpen performance, and protect your brand as it
                scales.
              </p>
            </SectionIntro>
            <FadeIn className="mx-auto w-full max-w-[28rem] lg:max-w-none">
              <div className="overflow-hidden rounded-[2rem] border border-neutral-200/90 bg-white/80 shadow-[0_32px_64px_-16px_rgba(26,24,20,0.08),0_0_0_1px_rgba(0,0,0,0.02)]">
                <div className="relative aspect-[4/5] min-h-[380px]">
                  <Image
                    src={imageServices}
                    sizes="(min-width: 1024px) 42rem, 28rem"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute right-0 bottom-0 left-0 p-8 text-white">
                    <p className="text-[11px] font-medium tracking-[0.32em] text-white/80 uppercase">
                      Jahangir Services
                    </p>
                    <p className="mt-3 text-lg font-medium tracking-tight text-white/95">
                      Curated hospitality experiences, built to last.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </div>

      {/* Chapters: calm cards, subtle structure */}
      <Container className="mt-6 lg:mt-0">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-16">
          {serviceChapters.map((chapter, index) => (
            <FadeIn key={chapter.title}>
              <article className="relative h-full rounded-[1.75rem] border border-neutral-200/80 bg-white/90 p-10 shadow-[0_24px_48px_-12px_rgba(26,24,20,0.06)] sm:p-12">
                <header>
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-[2.5rem] font-medium tracking-tight text-rumiPrimary/35 tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="h-px min-w-0 flex-1 self-center bg-neutral-200/90" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-neutral-950 sm:text-[1.75rem]">
                    {chapter.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-neutral-600">
                    {chapter.lead}
                  </p>
                </header>
                <ul className="mt-10 space-y-0">
                  {chapter.items.map((item) => (
                    <li
                      key={item.title}
                      className="group border-l-2 border-rumiPrimary/20 py-4 pl-6 transition-colors duration-300 first:pt-0 last:pb-0 hover:border-rumiPrimary/40"
                    >
                      <p className="text-[0.9375rem] font-semibold tracking-tight text-neutral-950">
                        {item.title}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  title: 'Our Services – Restaurant Consulting & F&B Experts',
  description:
    'Discover expert restaurant consulting, concept design, staff training, and operational support from Jahangir – hospitality specialists in Amman, Jordan',
}

export default async function OurServices() {
  let brands = (await loadBrands()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro
        eyebrow="Our services"
        title="From Concept to Legacy: We Build Hospitality That Lasts."
      >
        <p className="text-xl">
          At Jahangir for Restaurants Operations and Management, we provide
          full-cycle support for the food and beverage industry in Amman and
          across the region. With over 15 years of experience, we help cafés,
          restaurants, and hospitality ventures develop strong concepts, refine
          their operations, and achieve long-term success.
        </p>
      </PageIntro>

      <Services />

      <Culture />

      <PageLinks className="mt-24" title="Discover Our Brands" pages={brands} />

      <ContactSection />
    </RootLayout>
  )
}
