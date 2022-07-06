import { Link } from 'gatsby'
import React from 'react'

import * as SanitySchema from '../../types/sanity-schema'
import Figure from '../Figure/Figure'

export interface MoviePreviewProps {
  url: string | null | undefined
  poster: SanitySchema.WebImage | null | undefined
  title: string | null
  score: number
}

const MoviePreview: React.FC<MoviePreviewProps> = ({ url, poster, title, score }) => {
  return (
    <div>
      <Link to={url || '#'}></Link>
      {poster && <Figure webImage={poster} args={{ width: 200, height: 200 }} />}
      <h2>
        {title} ⭐ {score}
      </h2>
    </div>
  )
}

export default MoviePreview
