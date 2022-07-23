import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react'

// create context

interface IScrollY {
  id: string | null
  position: number
}
interface ISidebarContext {
  isSidebarOpen: boolean
  currentIndex: number
  scrollY: IScrollY
  closeSidebar: () => void
  toggleSidebar: () => void
  saveScroll: (el: HTMLElement | null) => void
  setCurrentItem: (idx: number) => void
}

const SidebarContext = React.createContext<ISidebarContext>({
  isSidebarOpen: false,
  currentIndex: 0,
  scrollY: { id: null, position: 0 },
  closeSidebar: () => {},
  toggleSidebar: () => {},
  saveScroll: (el: HTMLElement | null) => {},
  setCurrentItem: (idx: number) => {},
})

interface ISidebarPovider {
  children: React.ReactNode
}

export const SidebarProvider = ({ children }: ISidebarPovider) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  function toggleSidebar() {
    console.log('toggleSidebar')
    setIsSidebarOpen(!isSidebarOpen)
  }

  function closeSidebar() {
    setIsSidebarOpen(false)
  }

  const defaultScrollY = useMemo(() => {
    return { id: null, position: 0 }
  }, [])

  const storageScrollY = useCallback(() => {
    return JSON.parse(
      localStorage.getItem('sidebarScrollY') || JSON.stringify(defaultScrollY)
    )
  }, [defaultScrollY])

  const [scrollY, setScrollY] = useState<IScrollY>(
    typeof window ? storageScrollY() : defaultScrollY
  )

  function saveScroll(el: HTMLElement | null) {
    const id = el?.id || null
    const position = el?.scrollTop || 0
    setScrollY({ id, position })
  }

  function setCurrentItem(idx: number) {
    setCurrentIndex(idx)
  }

  useEffect(() => {
    if (typeof window) {
      localStorage.setItem('sidebarScrollY', JSON.stringify(scrollY))
    }
  }, [scrollY])

  useLayoutEffect(() => {
    if (typeof window) {
      const { id, position } = storageScrollY()
      document.getElementById(id)?.scrollTo(0, position)

      if (isSidebarOpen) {
        document.getElementById(id)?.scrollTo(0, position)
      }
    }
  }, [scrollY, storageScrollY, isSidebarOpen])

  const context = {
    isSidebarOpen,
    currentIndex,
    scrollY,
    toggleSidebar,
    closeSidebar,
    saveScroll,
    setCurrentItem,
  }

  return (
    <SidebarContext.Provider value={context}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContext
