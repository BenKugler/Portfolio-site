<template>
  <div id="portfolio">
    <div class="portfolio-divider">
      <Home class="portfolio-sections" v-intersect="onIntersectHome" />
    </div>
    <div class="portfolio-divider add-padding">
      <Projects class="portfolio-sections" v-intersect="onIntersectPortfolio" />
    </div>
    <div class="portfolio-divider add-padding">
      <About class="portfolio-sections" v-intersect="onIntersectAbout" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { IProject } from '@/models/project.interface';
import Projects from '@/components/Projects.vue';
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import goTo from 'vuetify/es5/services/goto';

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
    duration: '500'
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
