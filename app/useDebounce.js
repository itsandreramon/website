import { useState, useEffect } from 'react'

export default function useDebounce(value, delay) {
  let _delay = 0 // skip initial delay
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      console.log('setting debounced value')
      setDebouncedValue(value)
      _delay = delay
    }, _delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}