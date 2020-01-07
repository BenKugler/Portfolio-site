<template>
  <v-container id="nav-container">
    <v-col id="nav-container-background">
      <v-row align="center" justify="center">
        <div class="subtitle-font .overline">Benjamin Kugler - Software Engineer</div>
      </v-row>
      <v-row align="center" justify="center">
        <div class="nav-btn">
          <v-btn text x-large width="300">Home</v-btn>
        </div>
        <div class="nav-btn">
          <v-btn text x-large width="300">Projects</v-btn>
        </div>
        <div class="nav-btn">
          <v-btn text x-large width="300">About Me</v-btn>
        </div>
      </v-row>
    </v-col>
    <div id="opaque-bar"></div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class NavigationBar extends Vue {}
</script>

<style scoped>
#nav-container {
  position: fixed;
  width: 100%;
  margin-top: -25px;
}

#nav-container-background {
  background: #212529;
  padding: 5px 0 0 0;
}

#opaque-bar {
  background: linear-gradient(to top, transparent, #212529);
  width: 100%;
  margin-top: -5px;
  height: 60px;
}

.nav-btn {
  margin: 5px 0px;
}
</style>