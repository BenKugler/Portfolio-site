<template>
  <v-container id="nav-container">
    <v-col id="nav-container-background">
      <v-row align="center" justify="center">
        <div class="subtitle-font .overline">
          Benjamin Kugler - Software Engineer
        </div>
      </v-row>
      <v-row align="center" justify="center">
        <div class="nav-btn">
          <v-btn
            text
            x-large
            width="300"
            :ripple="{ class: 'accent--text' }"
            @click="GotoSection(home)"
            >Home</v-btn
          >
        </div>
        <div class="nav-btn">
          <v-btn
            text
            x-large
            width="300"
            :ripple="{ class: 'accent--text' }"
            @click="GotoSection(projects)"
            >Projects</v-btn
          >
        </div>
        <div class="nav-btn">
          <v-btn
            text
            x-large
            width="300"
            :ripple="{ class: 'accent--text' }"
            @click="GotoSection(about)"
            >About Me</v-btn
          >
        </div>
      </v-row>
    </v-col>
    <div id="opaque-bar"></div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import goTo from 'vuetify/es5/services/goto';

@Component
export default class NavigationBar extends Vue {
  private home: string = this.$store.getters.homeSelector(true);
  private projects: string = this.$store.getters.projectsSelector(true);
  private about: string = this.$store.getters.aboutSelector(true);
  private options: object = {
    easing: 'easeInOutQuint',
  };

  private GotoSection(section: object) {
    this.$store.state.scrollByNav = true;
    goTo(section, this.options).then(
      () => (this.$store.state.scrollByNav = false),
    );
  }
}
</script>

<style scoped>
#nav-container {
  position: fixed;
  width: 100%;
  margin-top: -10px;
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
