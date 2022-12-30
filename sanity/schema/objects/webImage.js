export default {
  name: 'webImage',
  type: 'image',
  title: 'Image with title',
  options: {
    hotspot: true,
  },
  validation: (Rule) =>
    Rule.custom((fields) => {
      if (fields?.title && !fields?.asset) {
        return 'You must upload or select an image'
      }
      return true
    }),
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Alternative text',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'title',
    },
  },
}
