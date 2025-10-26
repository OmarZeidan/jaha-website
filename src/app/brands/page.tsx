import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { formatDate } from '@/lib/formatDate'
import { type Brand, type MDXEntry, loadBrands } from '@/lib/mdx'

function Brands({ brands }: { brands: Array<MDXEntry<Brand>> }) {
  return (
    <Container className="mt-24">
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {brands.map((brand) => (
          <FadeIn key={brand.name}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      className="h-32 w-32 flex-none"
                      unoptimized
                    />
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] sm:text-lg lg:mt-2 lg:after:hidden">
                      {brand.service}
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      <span>Established in </span>
                      <time dateTime={brand.date}>
                        {formatDate(brand.date)}
                      </time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="hidden font-display text-4xl font-medium text-neutral-950">
                    <Link href={brand.href}>{brand.title}</Link>
                  </p>
                  <div className="mt-6 max-w-full overflow-hidden rounded-3xl">
                    <Image src={brand.image.src} alt={brand.name} />
                  </div>
                  <div className="mt-6 space-y-1 text-base text-neutral-600">
                    {brand.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex">
                    <Button
                      href={brand.href}
                      aria-label={`Read more: ${brand.name}`}
                    >
                      Read more
                    </Button>
                  </div>
                  {brand.review && (
                    <Blockquote author={brand.review.author} className="mt-12">
                      {brand.review.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Our Brands',
  description: 'List of Brands under Jahangir',
}

export default async function Work() {
  let brands = await loadBrands()

  return (
    <RootLayout>
      <PageIntro
        eyebrow="Our brands"
        title="Brands shaped with intention and care."
      >
        <p>
          Our work goes beyond food and drink; it is about crafting experiences
          that feel personal, grounded, and timeless, where design, community,
          and culture come together naturally to create places people return to
          again and again.
        </p>
      </PageIntro>

      <Brands brands={brands} />

      <ContactSection />
    </RootLayout>
  )
}
