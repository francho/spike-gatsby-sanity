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
    <Link to={url || '#'}>
      <div className="card">
        <div className="card-image">{poster && <Figure webImage={poster} args={{ width: 1000, height: 200 }} />}</div>
        <div className="card-content">
          <p className="title">{title}</p>
          <p>⭐ {score}</p>
        </div>
      </div>
    </Link>
  )
}

export default MoviePreview
