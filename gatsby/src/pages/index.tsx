import { graphql, PageProps } from 'gatsby'
import * as React from 'react'

import MoviePreview from '../components/Movies/MoviePreview'

const IndexPage = ({ data }: PageProps<Queries.AllMoviesQuery>) => {
  const { nodes: movies } = data.allSanityMovie
  return (
    <main>
      <section>
        <h2>Top movies</h2>
        {movies?.map(({ _id, title, poster, slug, score }) => (
          <li key={_id}>
            <MoviePreview title={title} poster={poster} url={slug?.current} score={score} />
          </li>
        ))}
      </section>
    </main>
  )
}

export default IndexPage

export const query = graphql`
  query AllMovies {
    allSanityMovie(filter: { _id: { regex: "/^(?!drafts.).*/" } }, sort: { fields: [score], order: DESC }) {
      nodes {
        _id
        title
        slug {
          current
        }
        score
        poster {
          ...WebImageFragment
        }
      }
    }
  }
`
