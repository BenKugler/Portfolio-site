<template>
  <v-container :id="this.$store.getters.aboutSelector()">
    <v-row align="center" justify="center">
      <font class="headline-custom">About Me</font>
      <v-container class="d-flex justify-center align-center" style="padding-top: 300px">
        <h3>Under Construction!</h3>
      </v-container>
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
