import { IconMoonStars, IconSun } from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeSwitch = ({ iconSize = 16 }) => {
  const [mounted, setMounted] = useState(true)
  const { resolvedTheme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button className='text-neutral-700 dark:text-neutral-300 cursor-pointer' onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} aria-label='Toggle theme'>
      {resolvedTheme === 'dark' ? <IconMoonStars size={iconSize} /> : <IconSun size={iconSize} />}
    </button>
  )
}

export default ThemeSwitch