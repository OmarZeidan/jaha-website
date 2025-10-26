import clsx from 'clsx'

export function TagList({
  children,
  className,
  stacked,
}: {
  children: React.ReactNode
  className?: string
  stacked?: boolean
}) {
  return (
    <ul
      role="list"
      className={clsx(
        className,
        stacked ? 'flex flex-col items-start gap-4' : 'flex flex-wrap gap-4',
      )}
    >
      {children}
    </ul>
  )
}

export function TagListItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <li
      className={clsx(
        'inline-flex w-fit rounded-full bg-jahaDark px-4 py-1.5 text-base text-neutral-900',
        className,
      )}
    >
      {children}
    </li>
  )
}
