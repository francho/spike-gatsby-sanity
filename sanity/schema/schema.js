import category from './documents/category'
import link from './objects/link'
import simpleBlockContent from './objects/simpleBlockContent'
import webImage from './objects/webImage'
import person from './documents/person'
import movie from './documents/movie'

const schemaTypes = [
  // documents
  person,
  category,
  movie,
  // objects
  link,
  webImage,
  simpleBlockContent,
]

export default schemaTypes
