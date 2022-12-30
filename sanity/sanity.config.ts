import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { deskTool } from 'sanity/desk'
import schemaTypes from './schema/schema'

export default defineConfig({
  name: 'default',
  title: 'Spike Gastby Sanity',
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
