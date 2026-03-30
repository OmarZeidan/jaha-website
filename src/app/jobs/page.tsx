import { type Metadata } from 'next'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'

const jobsUrl =
  'https://hunt.kayanhr.com/CareerSite/Index/YUNoMVZuNWxXa24xRXksY2xkaGVVUmhXV3BGWkZWdWQxQjBZbFJQYWtGRFVUMDk%3D'

function ArrowUpRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        d="M6.25 13.75 13.75 6.25M8 6.25h5.75V12"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Jobs',
  description:
    'Explore career opportunities at Jahangir and view our latest openings on our hiring platform.',
  alternates: {
    canonical: '/jobs',
  },
}

export default function JobsPage() {
  return (
    <RootLayout>
      <PageIntro
        eyebrow="Jobs"
        title="Come Work With Us"
      >
        <p className="text-xl leading-relaxed">
          Jahangir Restaurant Management and Operation Company was established
          in 2011 and is a leading Jordanian company in the food and beverage
          sector. We are known for innovation, high-quality service, and a
          commitment to creating exceptional dining experiences.
        </p>
        <div className="mt-8 max-w-3xl space-y-6 text-base leading-relaxed text-neutral-600">
          <p>
            Alongside our guest experience, we focus on developing the work
            environment and supporting young Jordanians through training and
            qualification opportunities.
          </p>
          <p>
            Jahangir is home to Oliva Pizza &amp; Pasta, Rumi Cafe, Bahi, and
            our own Central Kitchen.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-16 sm:mt-20 lg:mt-24">
        <FadeIn>
          <div className="max-w-3xl rounded-3xl bg-neutral-50 px-8 py-10 ring-1 ring-neutral-950/5 sm:px-10">
            <p className="max-w-2xl text-base leading-relaxed text-neutral-600">
              View our current opportunities on our hiring platform. Openings
              will open in a new tab.
            </p>
            <div className="mt-8">
              <Button href={jobsUrl} target="_blank" rel="noreferrer">
                <span className="flex items-center gap-2">
                  View open positions
                  <ArrowUpRightIcon className="h-4 w-4" />
                </span>
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>

      <SectionIntro
        className="mt-16 sm:mt-20 lg:mt-24"
        eyebrow="Our Culture"
        title="The Workplace & People"
      >
        <p className="text-lg leading-relaxed">
          With a team of dedicated individuals, Jahangir&apos;s success is
          powered by its people. We invest heavily in training, providing an
          average of 200 hours of hands-on experience for every new hire.
        </p>
      </SectionIntro>

      <Container className="mt-10">
        <FadeIn>
          <div className="max-w-4xl rounded-3xl bg-neutral-50 px-8 py-10 ring-1 ring-neutral-950/5 sm:px-10">
            <div className="space-y-6 text-base leading-relaxed text-neutral-600">
              <p>
                By fostering a collaborative and growth-oriented environment,
                Jahangir ensures its employees thrive while contributing to its
                mission. Each person brings something special to the table,
                from our kitchen staff to our operations managers to our
                community engagement champions.
              </p>
              <p>
                Together, we work seamlessly to make every experience
                extraordinary. And with a team that is 100% Jordanian, we are
                proud to support local talent, create opportunities, and build
                a workforce that reflects the spirit of our country.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
