<template>
  <v-container :id="this.$store.getters.homeSelector()">
    <v-row align="center" justify="center">
      <font class="headline-custom">Home</font>
      <!-- <canvas id="game-of-life-wasm-canvas" height="150" width="150" /> -->
      <v-container class="d-flex justify-center" style="padding-top: 100px">
        <v-card class="temp-gif">
          <v-img class="temp-gif" src="../assets/GenOutputG1000W750.gif" />
        </v-card>
      </v-container>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  private gameOfLife: any;

  private mounted() {
    // this.load().then(() => {});
  }

  // private game_of_life_wasm(): typeof import('../wasm/game_of_life_wasm_bg') {
  //   return this.gameOfLife;
  // }

  // private async load() {
  //   this.start(await import('../wasm/game_of_life_wasm_bg'));
  // }

  // private start(gameOfLife: typeof import('../wasm/game_of_life_wasm_bg')) {
  //   this.gameOfLife = gameOfLife;
  // }
}
</script>

<style scoped>
.temp-gif {
  width: 600px;
}
</style>
