export default {
  name: 'movie',
  title: 'Movie',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required().min(1888).max(new Date().getFullYear()),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) => `movie/${input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)}`,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'genres',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'score',
      title: 'Score',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).max(10),
    },
    {
      name: 'poster',
      title: 'Poster',
      type: 'webImage',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'synopsis',
      title: 'Synopsis',
      type: 'simpleBlockContent',
    },
    {
      name: 'director',
      title: 'Director',
      type: 'reference',
      to: { type: 'person' },
    },
    {
      name: 'stars',
      title: 'Stars',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'person' } }],
    },
  ],

  preview: {
    select: {
      title: 'title',
      year: 'year',
      genre0: 'genres.0.title', // https://www.sanity.io/docs/previews-list-views
      genre1: 'genres.1.title',
      genre2: 'genres.2.title',
      media: 'poster',
    },
    prepare({ genre0, genre1, genre2, title, year, media }) {
      const genres = [genre0, genre1, genre2].filter(Boolean).join(' ')
      return {
        title: `${title} (${year})`,
        subtitle: genres,
        media: media,
      }
    },
  },
}
