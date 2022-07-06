import { GatsbyImage } from 'gatsby-plugin-image'
import { GatsbyImageDataArgs, getGatsbyImageData } from 'gatsby-source-sanity'
import React, { FC } from 'react'

import * as SanitySchema from '../../types/sanity-schema'

const SanityConfig = {
  projectId: process.env.GATSBY_SANITY_STUDIO_API_PROJECT_ID || `CONFIG_NOT_SET`,
  dataset: process.env.GATSBY_SANITY_STUDIO_API_DATASET || `CONFIG_NOT_SET`,
}

export interface FigureProps {
  webImage: SanitySchema.WebImage
  args?: GatsbyImageDataArgs
  className?: string
}

const Figure: FC<FigureProps> = ({ webImage, args, className }) => {
  if (!webImage?.asset) {
    return <></>
  }
  let imageData = getGatsbyImageData(webImage, { ...args }, SanityConfig)
  let alt = webImage?.title || ''
  return (
    <figure className={className || undefined}>
      {imageData && <GatsbyImage image={imageData} alt={alt} />}
      {!imageData && <figcaption>{alt}</figcaption>}
    </figure>
  )
}

export default Figure
