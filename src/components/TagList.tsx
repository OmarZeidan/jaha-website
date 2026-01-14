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
        'inline-flex w-fit rounded-full border border-neutral-900/10 bg-white px-4 py-1.5 text-sm font-medium text-neutral-700 shadow-[0_1px_0_rgba(0,0,0,0.04)]',
        className,
      )}
    >
      {children}
    </li>
  )
}
