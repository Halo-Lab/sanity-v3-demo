import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {schemaTypes} from './schemas'
import { structureTool } from "sanity/structure";
import { structure } from "./structure";
import { visionTool } from "@sanity/vision";

import { defineConfig } from "sanity";

export default defineConfig({
  name: "default",
  title: "sanity-v3-demo",
  projectId: 'jqz6a7h3',
  dataset: 'production',

  plugins: [
    structureTool({
      structure
    }),
    visionTool(),
    internationalizedArray({
      languages: [
        {id: 'en', title: 'English'},
        {id: 'fr', title: 'French'}
      ],
      defaultLanguages: ['en'],
      fieldTypes: ['string', 'text'],
    })
  ],

  schema: { types: schemaTypes },
});

