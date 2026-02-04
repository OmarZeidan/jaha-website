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
      <Container className="mt-12 lg:mt-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-8">
          <SectionIntro
            eyebrow="Service architecture"
            title="Designed as chapters, delivered as a full experience."
          >
            <p>
              From first concept to mature operations, we organize our services
              into focused chapters. Each one is designed to elevate quality,
              sharpen performance, and protect your brand as it scales.
            </p>
          </SectionIntro>
          <FadeIn className="mx-auto w-full max-w-xl">
            <div className="relative">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-jahaDark/50 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-jaha/70 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.75rem] border border-black/10 bg-white/70 p-3">
                <div className="relative overflow-hidden rounded-[2.25rem]">
                  <Image
                    src={imageServices}
                    sizes="(min-width: 1024px) 36rem, 26rem"
                    className="h-[420px] w-full object-cover"
                    alt=""
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                  <div className="absolute right-0 bottom-0 left-0 p-6 text-white">
                    <p className="text-xs tracking-[0.35em] text-white/70 uppercase">
                      Jahangir Services
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      Curated hospitality experiences, built to last.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>

      <Container className="mt-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {serviceChapters.map((chapter, index) => (
            <FadeIn key={chapter.title}>
              <div className="relative h-full overflow-hidden rounded-4xl bg-white/70 shadow-[0_10px_24px_rgba(26,24,20,0.06)] ring-1 ring-black/5">
                <div className="absolute -top-12 -left-10 h-32 w-32 rounded-full bg-jaha/60 blur-3xl" />
                <div className="relative p-8 sm:p-10">
                  <div className="flex items-center gap-4 text-xs font-semibold tracking-[0.35em] text-rumiPrimary/70 uppercase">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <span className="h-px flex-1 bg-black/10" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-black">
                    {chapter.title}
                  </h3>
                  <p className="mt-3 text-sm text-black/70">{chapter.lead}</p>
                  <div className="mt-8 grid gap-4">
                    {chapter.items.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-3xl border border-black/5 bg-jaha/70 px-5 py-4"
                      >
                        <p className="text-base font-semibold text-black">
                          {item.title}
                        </p>
                        <p className="mt-2 text-sm text-black/70">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
