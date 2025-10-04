import imageServices from '@/images/image-2.webp'
import imageNCA from '@/images/image-3.webp'
import { type Metadata } from 'next'
import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { loadBrands } from '@/lib/mdx'
import { GridPattern } from '@/components/GridPattern'

import IconCheckFilled from '@/images/icons/check-filled.svg'
import IconStar from '@/images/icons/star.svg'
import IconLeaf from '@/images/icons/leaf.svg'
import IconUsersGroup from '@/images/icons/users-three-fill.svg'
import IconFingerPrint from '@/images/icons/fingerprint-fill.svg'

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
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
      <div className="absolute inset-x-0 top-0 -z-10 h-[1182px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
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
          <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
              <span className="size-3 shrink-0 rounded-full bg-gray-600"></span>

              <div className="-mt-2">
                <time className="text-xs/none font-medium text-gray-700">
                  2011
                </time>

                <h3 className="text-lg font-bold text-gray-900">
                  Launch of Oliva
                </h3>

                <p className="mt-0.5 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  officiis tempora ipsum adipisci tenetur sunt quae
                  exercitationem sed pariatur porro!
                </p>
              </div>
            </div>

            <div aria-hidden="true"></div>
          </li>

          <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
              <span className="size-3 shrink-0 rounded-full bg-gray-600"></span>

              <div className="-mt-2">
                <time className="text-xs/none font-medium text-gray-700">
                  2013
                </time>

                <h3 className="text-lg font-bold text-gray-900">
                  Launch of Rumi
                </h3>
              </div>
            </div>

            <div aria-hidden="true"></div>
          </li>

          <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
              <span className="size-3 shrink-0 rounded-full bg-gray-600"></span>

              <div className="-mt-2">
                <time className="text-xs/none font-medium text-gray-700">
                  2014
                </time>

                <h3 className="text-lg font-bold text-gray-900">
                  Opening of Rumi at Darat al Funun
                </h3>

                <p className="mt-0.5 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  officiis tempora ipsum adipisci tenetur sunt quae
                  exercitationem sed pariatur porro!
                </p>
              </div>
            </div>

            <div aria-hidden="true"></div>
          </li>

          <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
              <span className="size-3 shrink-0 rounded-full bg-gray-600"></span>

              <div className="-mt-2">
                <time className="text-xs/none font-medium text-gray-700">
                  2015
                </time>

                <h3 className="text-lg font-bold text-gray-900">
                  Opening of Rumi at Abdul Hameed Shoman Foundation
                </h3>
              </div>
            </div>

            <div aria-hidden="true"></div>
          </li>

          <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
              <span className="size-3 shrink-0 rounded-full bg-gray-600"></span>

              <div className="-mt-2">
                <time className="text-xs/none font-medium text-gray-700">
                  2022
                </time>

                <h3 className="text-lg font-bold text-gray-900">
                  Opening of Oliva in Shmeisani{' '}
                </h3>

                <p className="mt-0.5 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  officiis tempora ipsum adipisci tenetur sunt quae
                  exercitationem sed pariatur porro!
                </p>
              </div>
            </div>

            <div aria-hidden="true"></div>
          </li>

          <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
              <span className="size-3 shrink-0 rounded-full bg-gray-600"></span>

              <div className="-mt-2">
                <time className="text-xs/none font-medium text-gray-700">
                  2023
                </time>

                <h3 className="text-lg font-bold text-gray-900">
                  Established the Central Kitchen
                </h3>

                <p className="mt-0.5 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  officiis tempora ipsum adipisci tenetur sunt quae
                  exercitationem sed pariatur porro!
                </p>
              </div>
            </div>

            <div aria-hidden="true"></div>
          </li>
          <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
              <span className="size-3 shrink-0 rounded-full bg-gray-600"></span>

              <div className="-mt-2">
                <time className="text-xs/none font-medium text-gray-700">
                  2024
                </time>

                <h3 className="text-lg font-bold text-gray-900">
                  Launch of Bahi
                </h3>
              </div>
            </div>

            <div aria-hidden="true"></div>
          </li>
          <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
              <span className="size-3 shrink-0 rounded-full bg-gray-600"></span>

              <div className="-mt-2">
                <time className="text-xs/none font-medium text-gray-700">
                  2025
                </time>

                <h3 className="text-lg font-bold text-gray-900">
                  Opening of Rumi Deli
                </h3>

                <p className="mt-0.5 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  officiis tempora ipsum adipisci tenetur sunt quae
                  exercitationem sed pariatur porro!
                </p>
              </div>
            </div>

            <div aria-hidden="true"></div>
          </li>
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
        alt="TODO:"
        src={imageServices}
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
        alt=""
        src={imageNCA}
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
        title="We don't just create places; we crete experiences!"
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
            Our portfolio includes Rumi Café, one of Amman’s most iconic
            destinations for tea and coffee culture; Oliva Italian Restaurant,
            known for authentic Italian cuisine and a welcoming family
            atmosphere; and Bahi Café, a new concept inspired by the city’s
            golden era of elegance and community. Each brand reflects a
            different story, but all are built on the same foundation of
            culinary excellence, operational strength, and cultural relevance.
          </p>
          <p>
            At Jahangir, we specialize in transforming ideas into successful
            businesses. Our expertise covers the full cycle of food and beverage
            management, including concept design, menu development, operational
            systems, staff training, and long-term brand building. This
            combination of creativity and discipline has allowed us to sustain
            businesses that continue to thrive in a highly competitive market.
          </p>
          <p>
            With a track record of creating spaces that shape Amman’s dining
            landscape, Jahangir remains committed to delivering memorable
            experiences while setting benchmarks for hospitality in Jordan.
          </p>
        </div>
      </PageIntro>

      <CoreBelief />

      <TimeLine />
      <Values />

      <NCA />

      <PageLinks title="Discover Our Brands" pages={brands} />

      <ContactSection />
    </RootLayout>
  )
}
