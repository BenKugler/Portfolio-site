<template>
  <div id="portfolio">
    <div class="portfolio-divider">
      <Home class="portfolio-sections" v-intersect="onIntersectHome">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </Home>
    </div>
    <div class="portfolio-divider add-padding">
      <Projects class="portfolio-sections" v-intersect="onIntersectPortfolio">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </Projects>
    </div>
    <div class="portfolio-divider add-padding">
      <About class="portfolio-sections" v-intersect="onIntersectAbout">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </About>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import goTo from 'vuetify/es5/services/goto';
const IProject = () => import('@/models/project.interface');
const Projects = () => import('@/components/Projects.vue');
const Home = () => import('@/components/Home.vue');
const About = () => import('@/components/About.vue');

@Component({
  components: {
    Projects,
    Home,
    About,
  },
})
export default class Portfolio extends Vue {
  private options: object = {
    easing: 'easeInQuad',
    duration: '500',
  };

  private onIntersectHome(entries, observer) {
    if (entries[0].isIntersecting && !this.$store.getters.isScrollingByNav) {
      goTo(this.$store.getters.homeSelector(true), this.options);
    }
  }

  private onIntersectPortfolio(entries, observer) {
    if (entries[0].isIntersecting && !this.$store.getters.isScrollingByNav) {
      goTo(this.$store.getters.projectsSelector(true), this.options);
    }
  }

  private onIntersectAbout(entries, observer) {
    if (entries[0].isIntersecting && !this.$store.getters.isScrollingByNav) {
      goTo(this.$store.getters.aboutSelector(true), this.options);
    }
  }
}
</script>

<style scoped>
.portfolio-divider {
  height: 100vh;
}

.portfolio-sections {
  padding-top: 120px;
  height: 100vh;
}

.add-padding {
  margin-top: 15px;
}
</style>
