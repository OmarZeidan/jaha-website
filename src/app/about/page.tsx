import imageAbout from '@/images/about-1.jpg'
import imageAbout2 from '@/images/about-2.jpg'
import { type Metadata } from 'next'
import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { loadBrands } from '@/lib/mdx'

import IconCheckFilled from '@/images/icons/check-filled.svg'
import IconFingerPrint from '@/images/icons/fingerprint-fill.svg'
import IconLeaf from '@/images/icons/leaf.svg'
import IconStar from '@/images/icons/star.svg'
import IconUsersGroup from '@/images/icons/users-three-fill.svg'

import logoBahi from '@/images/logo-bahi.svg'
import logoOliva from '@/images/logo-oliva.svg'
import logoRumi from '@/images/logo-rumi.svg'

const milestones = [
  {
    year: 2011,
    title: 'Launch of Oliva Pizza and Pasta',
    description:
      'Oliva opened its doors in Jabal Al-Lweibdeh in 2011, introducing a new take on authentic Italian dining in Amman. From its first days, Oliva built a sense of community around its tables, turning a simple idea into a beloved part of the neighborhood.',
  },
  {
    year: 2013,
    title: 'Launch of Rumi Café',
    description:
      'In 2013 we opened Rumi Café in Jabal Al-Lweibdeh. It was one of the very first neighborhood café concepts in Amman, designed to feel open and connected to the street. Over time it became a destination in itself, where people from the area and beyond came to enjoy its atmosphere, share tea and coffee, and linger in conversation.',
  },
  {
    year: 2014,
    title: 'Opening of Rumi at Darat al Funun',
    description:
      'In 2014 we opened a small Rumi outpost at Darat al-Funun. Set among historic houses and gardens, it offered visitors a quiet spot to pause, drink tea or coffee, and enjoy art and conversation before or after exhibitions. It became a gentle extension of Rumi’s spirit in one of Amman’s most beautiful cultural spaces.',
  },
  {
    year: 2015,
    title: 'Opening of Rumi Café at Abdul Hameed Shoman Foundation',
    description:
      'In 2015 we opened a Rumi inside one of Amman’s most important libraries at the Abdul Hameed Shoman Foundation. Surrounded by books, it became a calm spot for students, researchers, and visitors to pause, share tea or coffee, and continue their conversations.',
  },
  {
    year: 2022,
    title: 'Opening of Oliva in Shmeisani',
    description:
      'In 2022 we opened Oliva in Shmeisani, a district with a nostalgic, retro character that still carries the charm of old Amman. This second location allowed Oliva to grow and expand its experience and menu, bringing our neighbourhood pizzeria feeling into a new setting. With its welcoming terrace, it quickly became a familiar place for people from the area and beyond to enjoy fresh Italian food and spend time together.',
  },
  {
    year: 2023,
    title: 'Established a New Central Kitchen',
    description:
      'In 2023 we opened a new Central Kitchen in a larger location, taking our operations to an entirely new scale. Purpose-built, highly equipped and run with strict quality standards, it became the heart of Jahangir’s brands. This is where ingredients are prepared, recipes perfected, and consistency maintained before reaching every café and restaurant.',
  },
  {
    year: 2024,
    title: 'Launch of Bahi Café',
    description:
      'In 2024 we opened Bahi Café in Shmeisani next to our Oliva location. Bahi draws on the retro character of the area and reinterprets it through a contemporary design with soft colours and thoughtful details. Many of its elements were custom made or specially designed to fit the space, from furniture to fixtures, and the art selection was curated to echo the café’s atmosphere and story. It was created as a calm and elegant space for tea, coffee and light meals, with a menu built around a carefully curated selection of teas and seasonal dishes. Together with Oliva it offers two distinct yet connected experiences in the same neighbourhood.',
  },
  {
    year: 2025,
    title: 'Opening of Rumi Deli',
    description:
      'In 2025, Rumi Deli opened its doors in Jabal Al-Lweibdeh as a new destination for freshly baked breads, sourdough manaqeesh, traditional Zaatar Mutabbaq, and locally inspired sandwiches. It’s an interactive and casual space centered around the craft of daily baking and honest, simple food. Behind the glass kitchen, everything is made fresh each morning — from the dough to the fillings — offering visitors a glimpse into the rhythm of the deli. Rooted in the same spirit that shaped Rumi Café, Rumi Deli stands on its own as a vibrant place that celebrates good bread, local ingredients, and the beauty of everyday food.',
  },
]

function Values() {
  return (
    <div className="relative mt-24 pt-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-221 overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Guided by quality, culture, and authenticity."
      >
        <p>
          Our work is grounded in values that shape every decision we make —
          from the way we design spaces to the flavors we put on the table.
          These principles guide how we grow, create, and connect with our
          communities.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Quality" icon={IconCheckFilled}>
            At the heart of everything we do is a commitment to delivering the
            finest products and services. Every dish, drink, and interaction is
            designed to exceed expectations.
          </GridListItem>
          <GridListItem title="Excellence" icon={IconStar}>
            We strive to achieve the highest standards of professionalism,
            creativity, and performance, setting benchmarks in the industry.
          </GridListItem>
          <GridListItem title="Sustainability" icon={IconLeaf}>
            Dedicated to environmental stewardship and long-term growth, we
            prioritize local sourcing, eco-friendly practices, and the
            well-being of our community.
          </GridListItem>
          <GridListItem title="Culture" icon={IconUsersGroup}>
            We value the importance of a strong internal culture, where
            teamwork, communication, and collaboration create an environment
            where employees thrive and customers feel at home.
          </GridListItem>
          <GridListItem title="Authenticity" icon={IconFingerPrint}>
            Staying true to our roots, we honor traditional flavors,
            craftsmanship, and the stories that define our communities, creating
            experiences that are as genuine as they are memorable.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function TimeLine() {
  return (
    <div className="relative pt-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-295.5 overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="The Road So Far"
        title="Not just projects, but a shared journey"
      ></SectionIntro>
      <Container className="mt-16">
        <ol className="relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-200">
          {milestones.map((milestone) => {
            return (
              <li
                className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3"
                key={milestone.year}
              >
                <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
                  <span className="size-3 shrink-0 rounded-full bg-rumiPrimary"></span>

                  <div className="-mt-2">
                    <time className="text-xs/none font-black text-gray-700 underline">
                      {milestone.year}
                    </time>

                    <h3 className="text-lg font-bold text-gray-900">
                      {milestone.title}
                    </h3>

                    <p className="mt-0.5 text-sm text-gray-700">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                <div aria-hidden="true"></div>
              </li>
            )
          })}
        </ol>
      </Container>
    </div>
  )
}

function CoreBelief() {
  return (
    <section className="gradient-bg-light mt-24 overflow-hidden py-6 lg:grid lg:grid-cols-2 lg:items-center lg:py-0">
      <SectionIntro
        eyebrow="Quality with Heart, Impact with Purpose"
        title="Our Core Beliefs"
      >
        <p className="lg:text-lg">
          At the heart of Jahangir’s success lies a philosophy that combines
          passion with authenticity. We believe in the power of quality in
          everything we do, from the ingredients we use to the service we
          provide. Our commitment goes beyond just delivering excellence – we
          are dedicated to empowering Jordanian youth, offering opportunities
          for growth and development. It’s about creating lasting experiences
          and making a positive impact on the future of our community and its
          people.
        </p>
      </SectionIntro>

      <Image
        alt="About Image - Jaha Website"
        src={imageAbout}
        className="mt-6 h-full w-full object-cover lg:mt-0"
      />
    </section>
  )
}

function NCA() {
  return (
    <section className="gradient-bg-light mt-24 overflow-hidden py-6 lg:grid lg:grid-cols-2 lg:items-center lg:py-0">
      <SectionIntro
        eyebrow="Designed to Belong"
        title="Where Neighborhoods Come Alive"
      >
        <p className="lg:text-lg">
          One of the things that sets Jahangir apart is our commitment to
          fitting into the fabric of the neighborhoods we call home. Whether
          it’s Oliva, Rumi, or Bahi, our spaces are carefully designed to
          reflect the essence of their surroundings.
        </p>
        <p className="lg:text-lg">
          Our identity is quietly woven into the space itself. The music, the
          décor, the vibe—it all tells a story without ever being too loud or
          intrusive.
        </p>
      </SectionIntro>

      <Image
        alt="Oliva image - Jaha.co"
        src={imageAbout2}
        className="mt-6 h-full w-full object-cover lg:mt-0"
      />
    </section>
  )
}

export const metadata: Metadata = {
  title: 'About Us – Hospitality & F&B Experts',
  description:
    'Learn about Jahangir, a leading F&B consulting and hospitality company in Amman with 15+ years of experience creating standout cafés and restaurants',
}

export default async function About() {
  let brands = (await loadBrands()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro
        eyebrow="About Us"
        title="We don't just create places; we create experiences!"
      >
        <p className="text-xl">
          Jahangir for Restaurants Operations and Management is a leading
          hospitality company in Amman, Jordan, with over 15 years of proven
          experience in the food and beverage sector. Since 2011, we have been
          at the forefront of developing restaurant and café concepts that stand
          out for their quality, design, and consistency.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            At Jahangir, we specialize in transforming ideas into successful
            businesses. Our expertise covers the full cycle of food and beverage
            management, including concept design, menu development, operational
            systems, staff training, and long-term brand building. This
            combination of creativity and discipline has allowed us to sustain
            businesses that continue to thrive in a highly competitive market.
          </p>
          <p>
            With a track record of creating spaces that shape Amman&apos;s
            dining landscape, Jahangir remains committed to delivering memorable
            experiences while setting benchmarks for hospitality in Jordan.
          </p>
        </div>
      </PageIntro>

      {/* Brand Portfolio Cards */}
      <Container className="mt-16">
        <h3 className="text-center text-sm font-semibold tracking-wider text-neutral-500 uppercase">
          Our Portfolio
        </h3>
        <p className="mx-auto mt-2 max-w-2xl text-center text-lg text-neutral-600">
          Each brand reflects a different story, but all are built on the same
          foundation of culinary excellence, operational strength, and cultural
          relevance.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Rumi Café Card */}
          <a
            href="https://www.rumijordan.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-950/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  'linear-gradient(135deg, rgba(139, 99, 57, 0.03) 0%, rgba(139, 99, 57, 0.08) 100%)',
              }}
            />
            <div className="relative">
              <div className="mb-4 h-10">
                <Image
                  src={logoRumi}
                  alt="Rumi Café"
                  className="h-full w-auto"
                  unoptimized
                />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                One of Amman&apos;s most iconic destinations for tea and coffee
                culture, where tradition meets contemporary hospitality.
              </p>
              <div
                className="mt-4 inline-flex items-center text-sm font-medium transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: '#8b6339' }}
              >
                Visit website
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </a>

          {/* Oliva Card */}
          <a
            href="https://www.olivajordan.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-950/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  'linear-gradient(135deg, rgba(115, 124, 76, 0.03) 0%, rgba(115, 124, 76, 0.08) 100%)',
              }}
            />
            <div className="relative">
              <div className="mb-4 h-10">
                <Image
                  src={logoOliva}
                  alt="Oliva Italian Restaurant"
                  className="h-full w-auto"
                  unoptimized
                />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Known for authentic Italian cuisine and a welcoming family
                atmosphere that feels like home.
              </p>
              <div
                className="mt-4 inline-flex items-center text-sm font-medium transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: '#737c4c' }}
              >
                Visit website
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </a>

          {/* Bahi Café Card */}
          <a
            href="https://www.bahijordan.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-950/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:col-span-2 lg:col-span-1"
          >
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  'linear-gradient(135deg, rgba(178, 53, 53, 0.03) 0%, rgba(178, 53, 53, 0.08) 100%)',
              }}
            />
            <div className="relative">
              <div className="mb-4 h-10">
                <Image
                  src={logoBahi}
                  alt="Bahi Café"
                  className="h-full w-auto"
                  unoptimized
                />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                A new concept inspired by the city&apos;s golden era of elegance
                and community, blending nostalgia with modern comfort.
              </p>
              <div
                className="mt-4 inline-flex items-center text-sm font-medium transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: '#b23535' }}
              >
                Visit website
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </Container>

      <CoreBelief />

      <TimeLine />
      <Values />

      <NCA />

      <PageLinks title="Discover Our Brands" pages={brands} />

      <ContactSection />
    </RootLayout>
  )
}
