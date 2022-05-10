import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

const Feature = defineNestedType(() => ({
  name: "Feature",
  fields: {
    icon: {
      type: "string",
      description: "The icon of the Feature",
      required: true,
    },
    title: {
      type: "string",
      description: "The title of the Feature",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the Feature",
      required: true,
    },
  },
}));

const FeatureList = defineDocumentType(() => ({
  name: "FeatureList",
  filePathPattern: "features.md",
  fields: {
    features: {
      type: "list",
      of: Feature,
      required: true,
    },
  },
}));

const Slide = defineNestedType(() => ({
  name: "Slide",
  fields: {
    title: {
      type: "string",
      description: "The title of the slide",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the slide",
      required: true,
    },
  },
}));

const SlideList = defineDocumentType(() => ({
  name: "SlideList",
  filePathPattern: "slides/**/*.md",
  fields: {
    imageUrl: {
      type: "string",
      description: "The image Url for the slide",
      required: true,
    },
    slides: {
      type: "list",
      of: Slide,
      required: true,
    },
  },
}));

const Hero = defineDocumentType(() => ({
  name: "Hero",
  filePathPattern: "hero.md",
  fields: {
    title: {
      type: "string",
      description: "The title of the hero",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the hero",
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [SlideList, Hero, FeatureList],
});
