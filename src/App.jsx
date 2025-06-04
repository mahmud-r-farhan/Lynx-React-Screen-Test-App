import { useCallback, useEffect, useState } from '@lynx-js/react'
import './App.css'

export function App(props) {
  const [colorIndex, setColorIndex] = useState(0)
  const maxColors = 26 // Set the maximum number of colors

  useEffect(() => {
    props.onMounted?.()
  }, [])

  const onTap = useCallback(() => {
    setColorIndex((prev) => (prev + 1) % maxColors)
  }, [])

  return (
    <view className={`Screen color-${colorIndex}`} bindtap={onTap}>
      <text className="Instruction">Tap to change colors</text>
    </view>
  )
}
