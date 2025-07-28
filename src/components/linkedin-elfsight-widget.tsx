'use client'

import { useEffect } from 'react'

export function LinkedInElfsightWidget() {
  useEffect(() => {
    // Load Elfsight platform script
    const script = document.createElement('script')
    script.src = 'https://static.elfsight.com/platform/platform.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="w-full">
      <div 
        className="elfsight-app-d5e97976-4937-4d1e-a77f-393da25a2c28" 
        data-elfsight-app-lazy
      ></div>
    </div>
  )
}