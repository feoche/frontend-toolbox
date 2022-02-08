<template>
  <span class="block w-screen">
    <input v-model="text"
           class="w-full m-5 p-2 box-border border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
    <span class="card-container grid grid-cols-5 grid-flow-row gap-3 mx-5">
      <a v-for="card in filter(cards)"
         class="card link px-5 py-3 border rounded-lg hover:bg-gray-100 hover:text-gray-900 hover:border-gray-300 cursor-pointer flex flex-col justify-start items-center text-center gap-2"
         :href="card.href">
        <span class="block text-lg font-bold"
              v-html="card.title">
        </span>
        <span class="block text-sm text-justify text-gray-700"
              v-html="card.content">
        </span>
        <span class="card-footer">
          <span v-for="keyword in card.keywords"
                class="keyword inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-1 text-xs font-semibold cursor-pointer hover:bg-gray-400"
                @click.prevent="filterByKeyword(keyword)"
                v-html="keyword">
          </span>
        </span>
      </a>
    </span>
  </span>
</template>
<script>
import '../assets/css/tailwind.css';

export default {
  methods: {
    filter(arr) {
      return arr.filter(card =>
        card.title.includes(this.text) ||
        card.content.includes(this.text) ||
        (card.keywords && card.keywords.some(keyword => keyword.includes(this.text)))
      );
    },
    filterByKeyword(keyword) {
      this.text = keyword;
    }
  },
  data: () => ({
    text: "",
    cards: [
      {
        href: "https://omatsuri.app/triangle-generator",
        title: "Triangle generator",
        content: "Generate css triangles styles for elements and pseudo-elements",
        keywords: ["triangle", "css"]
      },
      {
        href: "https://omatsuri.app/color-shades-generator",
        title: "Color shades generator",
        content: "Generate tints and shades of a given color",
        keywords: ["color", "shades"]
      },
      {
        href: "https://omatsuri.app/gradient-generator",
        title: "Gradient generator",
        content: "Generate linear and radial css gradients",
        keywords: ["color", "gradient", "css"]
      },
      {
        href: "https://omatsuri.app/page-dividers",
        title: "Page dividers",
        content: "Tool to generate page dividers with css and svg images",
        keywords: ["page", "dividers", "css", "svg"]
      },
      {
        href: "https://omatsuri.app/svg-compressor",
        title: "SVG compressor",
        content: "Compress SVG images with SVGO tool, convert to react component immediately after if needed",
        keywords: ["svg", "compress", "react"]
      },
      {
        href: "https://omatsuri.app/svg-to-jsx",
        title: "SVG → JSX Convert",
        content: "SVG icons and illustrations to react components (or components for other libraries with JSX support)",
        keywords: ["svg", "react", "jsx"]
      },
      {
        href: "https://omatsuri.app/b64-encoding",
        title: "Base64 encoding",
        content: "Convert images or files to base64, generate styles to use as background image",
        keywords: ["base64", "image", "css"]
      },
      {
        href: "https://omatsuri.app/fake-data-generator",
        title: "Fake data generator",
        content: "Generate wide variety of realistic fake data: address, avatars, names, phones...",
        keywords: ["data"]
      },
      {
        href: "https://omatsuri.app/html-symbols",
        title: "Symbols collection",
        content: "Collection of commonly used html symbols: arrows, marks, currency signs and many others",
        keywords: ["symbols", "html"]
      },
      {
        href: "https://omatsuri.app/lorem-ipsum",
        title: "Lorem ipsum",
        content: "Generate different kinds of lorem ipsum text",
        keywords: ["lorem", "ipsum", "text"]
      },
      {
        href: "https://omatsuri.app/css-cursors",
        title: "CSS cursors",
        content: "All existing CSS cursor property values collection",
        keywords: ["cursor", "css"]
      },
      {
        href: "https://omatsuri.app/events-keycode",
        title: "Keyboard events codes",
        content: "JavaScript events keycode values",
        keywords: ["keycode", "event"]
      }
    ]
  })
}
</script>

<style>

</style>
