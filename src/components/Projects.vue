<template>
  <v-container>
    <v-layout text-center wrap>
        <h1>&lt;!--Projects Component--&gt;</h1>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { IProject } from '@/models/project.interface';

@Component
export default class Projects extends Vue {
  // @Prop() private projectinfo!: IProject;
}
</script>

<style scoped>

</style>
