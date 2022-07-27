import { useTheme } from 'next-themes'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Logo({ isMobile }) {
  const { resolvedTheme } = useTheme()
  return (
    <div
      className={classNames(
        isMobile ? '' : 'h-24',
        'flex flex-shrink-0 items-center px-5 '
      )}
    >
      <img
        className="h-8 w-auto"
        src={`https://tailwindui.com/img/logos/workflow-logo-indigo-${
          resolvedTheme == 'light' ? '600-mark-gray-800' : '500-mark-white'
        }-text.svg`}
        alt="Workflow"
      />
    </div>
  )
}
