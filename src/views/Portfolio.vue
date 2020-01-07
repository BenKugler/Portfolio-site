<template>
  <div id="portfolio">
    <Projects></Projects>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { IProject } from '@/models/project.interface';
import Projects from '@/components/Projects.vue';

@Component({
  components: {
    Projects,
  },
})

export default class Portfolio extends Vue {}
</script>

<style scoped>
#portfolio {
  margin-top: 125px;
}
</style>