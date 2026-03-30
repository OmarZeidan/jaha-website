import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'
import { Offices } from './Offices'

const navigation = [
  {
    title: 'Brands',
    links: [
      { title: 'Rumi', href: '/brands/rumi' },
      { title: 'Oliva', href: '/brands/oliva' },
      { title: 'Bahi', href: '/brands/bahi' },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/brands',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Brands', href: '/brands' },
      { title: 'Services', href: '/services' },
      { title: 'Jobs', href: '/jobs' },
      { title: 'Contact us', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <div>
              <h2 className="font-display text-base font-semibold text-neutral-950">
                Our offices
              </h2>

              <Offices className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2" />
            </div>
          </div>
        </div>
        <div className="mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12 pb-12 md:mb-12 md:pb-0">
          <Link href="/" aria-label="Home">
            <Logo className="h-4" fillOnHover />
          </Link>
          <p className="hidden text-sm text-neutral-700 md:block">
            © JAHANGIR.
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
