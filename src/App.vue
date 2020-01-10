<template>
  <v-app>
    <canvas id="canvas"></canvas>
    <v-container id="container-override">
      <NavigationBar />
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import NavigationBar from '@/components/NavigationBar.vue';
import { Component } from 'vue-property-decorator';
import 'victormono';

@Component({
  components: {
    NavigationBar,
  },
})
export default class App extends Vue {
  private mounted() {
    require('./scripts/flow');
  }
}
</script>

<style>
.theme--dark.v-application {
  background: #212529 !important;
}

body {
  width: 100vw;
  height: 100vh;
}

#canvas {
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
}

#container-override {
  padding: 0px !important;
}

.subtitle-font {
  font-family: 'Titillium Web', sans-serif !important;
  font-weight: 300;
  opacity: 0.7;
}

.headline-custom {
  font-size: 1.5rem !important;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: normal !important;
  font-family: 'Victor Mono', sans-serif !important;
  color: #9c4d40;
}

.v-btn__content {
  font-family: 'Titillium Web', sans-serif !important;
}
</style>
