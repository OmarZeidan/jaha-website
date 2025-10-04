import Link from 'next/link'
import clsx from 'clsx'
import { ExternalLinkIcon, LinkedInIcon, LocationPinIcon } from './icons'

export const socialMediaProfiles = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/company/jahaoperations/',
    icon: LinkedInIcon,
  },
  {
    title: 'Our Location',
    href: 'https://maps.app.goo.gl/Jxobx2NzJRs9k63PA',
    icon: LocationPinIcon,
  },
]

export function SocialMedia({
  className,
  invert = false,
  profiles = socialMediaProfiles,
}: {
  className?: string
  invert?: boolean
  profiles?: typeof socialMediaProfiles
}) {
  return (
    <ul
      role="list"
      className={clsx(
        'flex gap-x-4',
        invert ? 'text-white' : 'text-neutral-950',
        className,
      )}
    >
      {profiles.map((socialMediaProfile) => (
        <li key={socialMediaProfile.title}>
          <Link
            href={socialMediaProfile.href}
            aria-label={socialMediaProfile.title}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              'transition',
              invert ? 'hover:text-neutral-200' : 'hover:text-neutral-700',
            )}
          >
            <socialMediaProfile.icon className="h-6 w-6" />
          </Link>
        </li>
      ))}
    </ul>
  )
}
