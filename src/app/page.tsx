import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { Testimonial } from '@/components/Testimonial'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { SocialMedia } from '@/components/SocialMedia'
import logoJahangir from '@/images/jahangir-logo-english.webp'
import logoBahi from '@/images/logo-bahi.svg'
import logoOliva from '@/images/logo-oliva.svg'
import logoRumi from '@/images/logo-rumi.svg'
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
        title="A refined service suite for hospitality leaders."
        className="mt-24"
      >
        <p>
          Strategic guidance for concepts, operations, people, and performance
          with a focus on brand integrity and long-term growth.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex justify-center lg:w-1/2 lg:justify-start lg:pr-12">
            <FadeIn className="w-full flex-none lg:w-120">
              <Image
                src={imageServices}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
                alt=""
              />
            </FadeIn>
          </div>
          <div className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <FadeIn>
              <p className="text-base text-black/70">
                We guide hospitality brands through every stage: concept,
                operations, technology, and people. Our work balances creative
                direction with operational rigor, ensuring the brand story,
                guest experience, and profitability stay aligned as you grow.
              </p>
            </FadeIn>
            <FadeIn className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'Concept & Brand',
                  description: 'Positioning, identity, and guest journey.',
                },
                {
                  title: 'Operations',
                  description: 'Systems, efficiency, and performance controls.',
                },
                {
                  title: 'Technology & Finance',
                  description: 'ERP, reporting, and financial clarity.',
                },
                {
                  title: 'People & Culture',
                  description: 'Hiring, training, and high standards.',
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-jaha/70 px-5 py-4 ring-1 ring-black/5"
                >
                  <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.35em] text-rumiPrimary/70 uppercase">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <span className="h-px flex-1 bg-black/10" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-black/70">
                    {item.description}
                  </p>
                </div>
              ))}
            </FadeIn>
            <FadeIn className="mt-8">
              <Button href="/services">Explore full services</Button>
            </FadeIn>
          </div>
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
