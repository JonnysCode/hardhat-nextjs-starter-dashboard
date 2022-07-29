import { useEffect, useState } from 'react'

interface Props {
  title: string
}

const PageTitle = ({ title }: Props) => {
  const [clientWindowHeight, setClientWindowHeight] = useState(0)

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY)
    console.log('scrollY: ' + window.scrollY)
  }

  window.addEventListener('scroll', handleScroll)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div className="sticky top-2 z-30">
      <h1 className="text-4xl font-bold">{title}</h1>
    </div>
  )
}

export default PageTitle
