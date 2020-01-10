<template>
  <v-container :id="this.$store.getters.projectsSelector()">
    <v-row align="center" justify="center">
      <font class="headline-custom">&lt;!--Projects--&gt;</font>
      <v-container id="projects-container">
        <v-row align="center">
          <v-col>
            <v-window v-model="window" class="elevation-4" vertical>
              <v-window-item v-for="n in length" :key="n">
                <v-card flat id="projects-window">
                  <v-card-text>
                    <v-row align="center">
                      <strong class="title">Title {{ n }}</strong>
                      <v-spacer></v-spacer>
                    </v-row>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </v-card-text>
                </v-card>
              </v-window-item>
            </v-window>

            <v-container>
              <v-row align="center" justify="center">
                <v-item-group
                  v-model="window"
                  class="shrink mr-6"
                  mandatory
                  tag="v-flex"
                >
                  <v-item
                    v-for="n in length"
                    :key="n"
                    v-slot:default="{ active, toggle }"
                  >
                    <span>
                      <v-btn :input-value="active" icon @click="toggle">
                        <v-icon>mdi-record</v-icon>
                      </v-btn>
                    </span>
                  </v-item>
                </v-item-group>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { IProject } from '@/models/project.interface';

@Component
export default class Projects extends Vue {
  // @Prop() private projectinfo!: IProject;
  private window: any = 0;
  private length: number = 3;

  private projects: IProject[] = [
    { title: '', subtitle: '', description: '', links: [] },
  ];
}
</script>

<style scoped>
#projects-container {
  height: 100%;
}
#projects-window {
  height: calc(100vh - 300px);
}
</style>
