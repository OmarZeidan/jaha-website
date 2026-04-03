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
    'Explore career opportunities across Oliva, Rumi Cafe & Deli, Bahi, and Jahangir’s Central Kitchen.',
  alternates: {
    canonical: '/jobs',
  },
}

export default function JobsPage() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Jobs" title="Come Work With Us">
        <p className="text-xl leading-relaxed">
          Join the teams behind Oliva, Rumi Café &amp; Deli, Bahi, and our
          Central Kitchen, spaces shaped by care, consistency, and attention to
          detail.
        </p>
        <div className="mt-8 max-w-3xl space-y-6 text-base leading-relaxed text-neutral-600">
          <p>
            At Jahangir, we focus on the people behind the experience. We create
            a work environment where individuals can learn, grow, and take pride
            in what they do every day.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-16 sm:mt-20 lg:mt-24">
        <FadeIn>
          <div className="max-w-3xl rounded-3xl bg-neutral-50 px-8 py-10 ring-1 ring-neutral-950/5 sm:px-10">
            <p className="max-w-2xl text-base leading-relaxed text-neutral-600">
              Explore our latest openings across the Jahangir group on our
              hiring platform. Positions open in a new tab.
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
        eyebrow="Why Join Jahangir"
        title="A Place To Learn, Contribute, And Grow"
      >
        <p className="text-lg leading-relaxed">
          We care about building teams that support one another and create space
          for meaningful growth from the very beginning.
        </p>
      </SectionIntro>

      <Container className="mt-10">
        <FadeIn>
          <div className="max-w-4xl rounded-3xl bg-neutral-50 px-8 py-10 ring-1 ring-neutral-950/5 sm:px-10">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Hands-on experience from day one',
                'Real training and development opportunities',
                'A supportive, team-driven environment',
                'Opportunities to grow within the company',
                'Work that is visible, valued, and meaningful',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white px-5 py-4 text-base leading-relaxed text-neutral-600 ring-1 ring-neutral-950/5"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
