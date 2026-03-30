import { type Metadata } from 'next'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

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
        title="Join us in shaping memorable hospitality experiences."
      >
        <p className="text-xl">
          We are always looking for thoughtful, dedicated people who care about
          quality, culture, and creating places guests return to again and
          again.
        </p>
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
    </RootLayout>
  )
}
