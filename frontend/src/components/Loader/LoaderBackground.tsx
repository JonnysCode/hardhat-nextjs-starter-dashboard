interface Props {
  children?: any
}

const LoaderBackground = (props: Props) => {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-800 md:pl-60">
      <div className="h-16"></div>
      <div className="mx-3 mb-3 block flex-grow rounded-2xl bg-gray-100 dark:bg-gray-900">
        <div className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default LoaderBackground
