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

import { List, ListItem } from '@/components/List'

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
        <div className="lg:flex lg:items-center lg:justify-end lg:pt-16">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-full flex-none lg:w-120">
              <Image
                src={imageServices}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
                alt=""
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Concept Design and Development">
              We turn ideas into hospitality brands, covering everything from
              market research and menu planning to design direction and customer
              journey.
            </ListItem>
            <ListItem title="Operational Management">
              Our team builds and manages systems that improve efficiency,
              ensure consistency, and secure profitability across day-to-day
              operations.
            </ListItem>
            <ListItem title="Systems Building and Staff Training">
              We design standard operating procedures and customized training
              programs that equip teams to deliver high-quality service and
              maintain lasting standards.
            </ListItem>
            <ListItem title="Business Turnaround and Growth">
              We support underperforming businesses through restructuring, cost
              control, and strategy updates that restore competitiveness and
              drive growth.
            </ListItem>
            <ListItem title="Brand Expansion">
              From opening new branches to entering new markets, we guide
              restaurants and cafés through sustainable scaling and brand
              development.
            </ListItem>
          </List>
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
