import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from 'sanity-codegen'

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
}

/**
 * Person
 *
 *
 */
export interface Person extends SanityDocument {
  _type: 'person'

  /**
   * Name — `string`
   *
   *
   */
  name?: string

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: 'slug'; current: string }

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Bio — `array`
   *
   *
   */
  bio?: Array<SanityKeyed<SanityBlock>>
}

/**
 * Category
 *
 *
 */
export interface Category extends SanityDocument {
  _type: 'category'

  /**
   * Title — `string`
   *
   *
   */
  title?: string
}

/**
 * Movie
 *
 *
 */
export interface Movie extends SanityDocument {
  _type: 'movie'

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Year — `number`
   *
   *
   */
  year?: number

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: 'slug'; current: string }

  /**
   * Categories — `array`
   *
   *
   */
  genres?: Array<SanityKeyedReference<Category>>

  /**
   * Score — `number`
   *
   *
   */
  score?: number

  /**
   * Poster — `webImage`
   *
   *
   */
  poster?: WebImage

  /**
   * Synopsis — `simpleBlockContent`
   *
   *
   */
  synopsis?: SimpleBlockContent

  /**
   * Director — `reference`
   *
   *
   */
  director?: SanityReference<Person>

  /**
   * Stars — `array`
   *
   *
   */
  stars?: Array<SanityKeyedReference<Person>>
}

export type Link = {
  _type: 'link'
  /**
   * URL — `url`
   *
   *
   */
  href?: string
}

export type WebImage = {
  _type: 'webImage'
  asset: SanityReference<SanityImageAsset>
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot

  /**
   * Alternative text — `string`
   *
   *
   */
  title?: string
}

export type SimpleBlockContent = Array<SanityKeyed<SanityBlock> | SanityKeyed<WebImage>>

export type Documents = Person | Category | Movie
