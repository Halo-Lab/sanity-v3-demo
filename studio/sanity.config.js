import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {schemaTypes} from './schemas'
import { structureTool } from "sanity/structure";
import { structure } from "./structure";
import { visionTool } from "@sanity/vision";
import { presentationTool } from 'sanity/presentation'
import { resolve } from '../sanity/presentation/resolve';

import { defineConfig } from "sanity";

export default defineConfig({
  name: "default",
  title: "sanity-v3-demo",
  projectId: 'jqz6a7h3',
  dataset: 'production',

  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
    internationalizedArray({
      languages: [
        {id: 'en', title: 'English'},
        {id: 'fr', title: 'French'}
      ],
      defaultLanguages: ['en'],
      fieldTypes: ['string', 'text'],
    }),
    presentationTool({
      resolve,
      previewUrl: {
        origin:
          process.env.NODE_ENV === "development"
            ? "http://localhost:3000"
            : process.env.SANITY_STUDIO_PREVIEW_URL,
            previewMode: {
          enable: "/api/draft-mode/enable",
          disable: "/api/draft-mode/disable",
        },
      },
    }),
  ],

  schema: { types: schemaTypes },
});

