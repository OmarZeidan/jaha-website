import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { Testimonial } from '@/components/Testimonial'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { SocialMedia } from '@/components/SocialMedia'
import logoRumi from '@/images/logo-rumi.svg'
import logoBahi from '@/images/logo-bahi.svg'
import logoOliva from '@/images/logo-oliva.svg'
import logoJahangir from '@/images/jahangir-logo-english.webp'
import imageServices from '@/images/rumi-1.jpg'
import { type Brand, type MDXEntry, loadBrands } from '@/lib/mdx'

function OurBrandsFeatureBox() {
  const brands = [
    {
      name: 'Rumi',
      logo: logoRumi,
      url: 'https://rumijordan.com/',
    },
    {
      name: 'Oliva',
      logo: logoOliva,
      url: 'https://www.olivajordan.com/',
    },
    {
      name: 'Bahi',
      logo: logoBahi,
      url: 'https://bahijordan.com/',
    },
  ]

  return (
    <div className="relative mt-24 bg-jaha px-6 py-12">
      <Container>
        <FadeIn>
          <h2 className="font-display text-3xl font-medium text-balance text-black sm:text-4xl">
            Our Brands
          </h2>
        </FadeIn>
        <Border className="mt-6" />
        <FadeInStagger faster>
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8 lg:gap-12">
            {brands.map((brand) => (
              <FadeIn key={brand.name}>
                <a
                  href={brand.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex items-center justify-center rounded-2xl p-6 transition-all duration-300"
                  aria-label={`Visit ${brand.name} website`}
                >
                  <div className="flex h-15 w-full items-center justify-center sm:h-20">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="h-full w-auto max-w-full object-contain opacity-75 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
                      unoptimized
                    />
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Brands({ brands }: { brands: Array<MDXEntry<Brand>> }) {
  return (
    <>
      <SectionIntro title="A Family of Stories" className="mt-24">
        <p>
          Whether it is tea and conversation at{' '}
          <span className="font-black text-rumiPrimary"> Rumi</span>, pizza at
          <span className="font-black text-olivaPrimary"> Oliva</span>, fresh
          breads and sandwiches at{' '}
          <span className="font-black text-rumiPrimary"> Rumi Deli</span>, or
          the retro charm of{' '}
          <span className="font-black text-bahiPrimary"> Bahi</span>, our brands
          share one spirit: celebrating culture, community, and presence.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {brands.map((brand) => (
            <FadeIn key={brand.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-jaha sm:p-8">
                <h3>
                  <Link href={brand.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <span>Established in: </span>
                  <time
                    dateTime={brand.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {brand.date.split('-')[0]}
                  </time>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {brand.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {brand.description}
                </p>
                <Border className="mt-4 pt-4">
                  Find us on:{' '}
                  <SocialMedia profiles={brand.profiles} className="mt-2" />
                </Border>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Our Services"
        title="We turn food and beverage concepts into thriving realities."
        className="mt-24"
      >
        <p>
          At <strong>Jahangir</strong> for Restaurants Operations and
          Management, we provide full-cycle support for the food and beverage
          industry in Amman and across the region. With over 15 years of
          experience, we help cafés, restaurants, and hospitality ventures
          develop strong concepts, refine their operations, and achieve
          long-term success.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
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
  description:
    'We specialize in transforming ideas into successful businesses. Concept design, menu development, operational systems, staff training, and long-term brand building',
}

export default async function Home() {
  let brands = await loadBrands()

  return (
    <RootLayout>
      <Container className="mt-24">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            A leading hospitality company in Amman...
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            At <strong>Jahangir</strong>, we specialize in transforming ideas
            into successful businesses. Our expertise covers the full cycle of
            food and beverage management, from concept design and menu
            development to operational systems, staff training, and long-term
            brand building.
          </p>
        </FadeIn>
        <FadeIn>
          <Button href={'/about'} aria-label={`Read more`} className="mt-8">
            Learn more
          </Button>
        </FadeIn>
      </Container>

      <OurBrandsFeatureBox />

      <Services />

      <Testimonial
        className="mt-24"
        forceClientInfo
        client={{
          name: 'Ayman Taqatqa',
          role: 'Founder of Jahangir',
          logo: logoJahangir,
        }}
      >
        I’ve always been fascinated by the idea of breathing life into spaces
        that feel forgotten or overlooked. It’s about reviving the soul of a
        neighborhood and creating places where people can reconnect with each
        other and their surroundings.
      </Testimonial>

      <Brands brands={brands} />

      <ContactSection />
    </RootLayout>
  )
}
