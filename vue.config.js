import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin';

export default {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    plugins: [
      new VuetifyLoaderPlugin()
    ],
  },
}