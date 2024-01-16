import React from 'react'
import ReactDOM from 'react-dom/client'
import { CircularCarouselWrapper } from 'components/CircularCarouselWrapper.tsx'
import { data } from 'data/data'
import { CustomSlideComponent } from 'components/Slide/Slide.tsx'
import { FramerTransitions } from 'types'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CircularCarouselWrapper
      customControls={false}
      slideComponent={CustomSlideComponent}
      mediaPool={data}
      slideWidth={800}
      slideGap={50}
      animationType={FramerTransitions.tween}
    />
  </React.StrictMode>,
)
