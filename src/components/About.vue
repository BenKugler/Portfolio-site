<template>
  <v-container :id="this.$store.getters.aboutSelector()">
    <v-row align="center" justify="center">
      <font class="headline-custom">&lt;!--About Me--&gt;</font>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class About extends Vue {}
</script>

<style scoped></style>
