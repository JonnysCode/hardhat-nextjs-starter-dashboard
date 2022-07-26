function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Logo({ isMobile }) {
  return (
    <div
      className={classNames(
        isMobile ? '' : 'h-24',
        'flex flex-shrink-0 items-center px-5 '
      )}
    >
      <img
        className="h-8 w-auto"
        src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
        alt="Workflow"
      />
    </div>
  )
}
