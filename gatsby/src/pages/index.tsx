import { graphql, PageProps } from 'gatsby'
import * as React from 'react'

import Layout from '../components/Layout/Layout'
import MoviePreview from '../components/Movies/MoviePreview'

const IndexPage = ({ data }: PageProps<Queries.AllMoviesQuery>) => {
  const { nodes: movies } = data.allSanityMovie
  return (
    <Layout>
      <section className="section">
        <h2 className="title">Top 5 movies</h2>
        <div className="columns is-multiline is-desktop">
          {movies?.map(({ _id, title, poster, slug, score }) => (
            <div key={_id} className="column is-one-quarter-desktop ">
              <MoviePreview title={title} poster={poster} url={slug?.current} score={score} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query AllMovies {
    allSanityMovie(filter: { _id: { regex: "/^(?!drafts.).*/" } }, sort: { fields: [score], order: DESC }, limit: 5) {
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
