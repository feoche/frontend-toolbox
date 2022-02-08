import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/home/feoche/dev/feoche/toolbox/node_modules/nuxt3/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}