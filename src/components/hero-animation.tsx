'use client'

import Lottie from 'lottie-react'
import { useEffect, useState } from 'react'

export function HeroAnimation() {
  const [animationData, setAnimationData] = useState(null)

  useEffect(() => {
    // Using a construction/equipment themed animation from LottieFiles
    // Alternative animations you can try:
    // Construction crane: https://lottie.host/e3b3a5f6-9e87-4d41-a115-1739a0b3d3e5/lXkt5K2UMk.json
    // Construction site: https://lottie.host/f9d5c6a8-9a63-4f3a-8daa-d98c4e3f9f63/7XzfSsxT5c.json
    // Tools animation: https://lottie.host/2d5f2a5a-f4e5-4bb7-a742-fbd88bb1f8e1/w3fcUuMdBV.json
    fetch('https://lottie.host/e3b3a5f6-9e87-4d41-a115-1739a0b3d3e5/lXkt5K2UMk.json')
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error('Failed to load animation:', err))
  }, [])

  if (!animationData) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl animate-pulse" />
    )
  }

  return (
    <Lottie 
      animationData={animationData}
      loop={true}
      className="w-full h-full"
    />
  )
}