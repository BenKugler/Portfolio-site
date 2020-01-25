<template>
  <v-container :id="this.$store.getters.projectsSelector()">
    <v-col align="center" justify="center">
      <v-container :id="$vuetify.breakpoint.mdAndDown ? 'projects-container-large' : 'projects-container'">
        <v-row align="center" justify="center">
          <v-col>
            <v-window class="elevation-4" v-model="projects.title">
              <v-window-item v-for="(project, i) in projects" :key="i">
                <v-card flat :id="$vuetify.breakpoint.mdAndDown ? 'projects-window-large' : 'projects-window'">
                  <v-card-text class="project">
                    <v-container class="d-flex flex-column justify-space-between" style="height: 100%">
                      <div>
                        <v-col class="project-info">
                          <v-row>
                            <h3>{{ project.title }} - {{ project.subtitle }}</h3>
                          </v-row>
                          <v-row>
                            <h4>Contributors: {{ project.contributors }}</h4>
                          </v-row>
                          <v-row>
                            <h4>Languages: {{ project.languages }}</h4>
                          </v-row>
                          <v-row
                            ><h4>Tools: {{ project.tools }}</h4>
                          </v-row>
                        </v-col>

                        <v-col align-self="center" class="project-description">
                          <p>
                            <span
                              class="project-description-html"
                              v-html="project.description"
                            ></span>
                          </p>
                        </v-col>
                      </div>

                       <div>
                          <v-col>
                          <v-row align="center" justify="center">
                            <div v-for="(link, i) in project.links" :key="i">
                              <span
                                ><a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  class="project-info-link"
                                  :href="link.link"
                                  >{{ link.text }}</a
                                ></span
                              >
                            </div>
                          </v-row>
                        </v-col>
                       </div>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-window-item>
            </v-window>

            <v-container>
              <v-row align="center" justify="center">
                <v-item-group class="shrink mr-6" mandatory tag="v-flex" v-model="projects.title">
                  <v-item v-for="(project, i) in projects" :key="i" v-slot:default="{ active, toggle }">
                    <span>
                      <font :class="active ? 'active-project-link' : ''" class="project-link" @click="toggle">{{
                        project.title
                      }}</font>
                    </span>
                  </v-item>
                </v-item-group>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { IProject } from '@/models/project.interface';

@Component
export default class Projects extends Vue {
  private projects: IProject[] = [
    {
      title: 'ServeUs',
      subtitle: 'Senior Project',
      description:
        'ServeUs is a mobile application for Android and iPhone devices. The main goal of ServeUs is to provide accessibility to those who want to serve their community, \
          but may not have the infrastructure to do so. Our application provides a framework to allow people to volunteer their time, organize their own events, connect \
          with fellow volunteers over ServeUs’ social network, and share posts across other social media. ServeUs is supported by the \
          <a href="https://www.pacificu.edu/academics/academic-support/centers-institutes/berglund-center/inspired-ideas-competition/awards">\
          Berglund Center Entrepreneur Award</a> and the Computer Science department. \
          In this project I can take credit for a number of things; AWS Cognito, including auto logging in, AWS S3 images, AWS beanstalk, the RESTful API design and most of \
          its implementation, Xamarin Forms validation implementation, collaboration of Database with Jonathan Forester, Mobile Front\'s backend, Google services (Places and Maps).\
          There is a about a year\'s worth of information that can be found in the project description pdf linked below.',
      tools: 'AWS (Cognito, RDS, Beanstalk, S3 Buckets, EC2, IAM), Xamarin Forms, ASP .NET',
      languages: 'C#, MySQL',
      contributors: 'Benjamin Kugler, Jacob Richards, Jon Forester',
      links: [
        { text: 'GitLab', link: 'https://gitlab.com/serveus/serveus' },
        {
          text: 'Project Description',
          link: 'https://portfolio-docs-benjamin-kugler.s3-us-west-2.amazonaws.com/ServeUs.pdf',
        },
        {
          text: 'Final Presentation',
          link: 'https://docs.google.com/presentation/d/1tEQZYu8T_kkdUGN3MoK9EiUxvwk8eZWq_bfvP7xC4nI/edit?usp=sharing',
        },
        {
          text: 'Berglund Award',
          link:
            'https://www.pacificu.edu/academics/academic-support/centers-institutes/berglund-center/fellows-projects',
        },
      ],
    },
    {
      title: 'MitziKart',
      subtitle: 'Art Gallery with a CMS',
      description:
        'My mother is a artist, so when she wanted to show off her art to the world in a controlled manner, she came to me for help. 🙃 Seeing as she didn\'t \
        want to use any of the conventional platforms, I built her a site with a CMS (Content management system) so that she can add, remove and update her content without asking me. \
        I built this site after working as a fullstack developer at AltSource for 4 month with a software developer title. The frontend is using VueJS combo\'d with \
        Vuetify to speed up website creation. The API was built using ASP.NET and a ORM to manage the database. Several optimizations were added to handle images, \
        something I have had no prior experience with.',
      tools: 'ASP.NET, Vue, Vuetify',
      languages: 'C#, SQL-T, Vue, Javascript',
      contributors: 'Benjamin Kugler',
      links: [
        {
          text: 'Website',
          link: 'https://mitzikart.com',
        },
        {
          text: 'Vue',
          link: 'https://vuejs.org/',
        },
        {
          text: 'Vuetify',
          link: 'https://vuetifyjs.com/en/',
        },
      ],
    },
    {
      title: 'Game Of Life',
      subtitle: 'OS Project',
      description:
        'The Pacific University OS class taught by \
        <a href="http://zeus.cs.pacificu.edu/chadd/>Professor Chadd Williams</a> required students to make a non-visual \
        <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway\'s Game of Life</a>. \
        A stipulations of the assignment is that each cell would only be one byte; this is due to the calculation that a 100,000 by 100,000 game was necessary; \
        this made optimization without using only the amount of memory the grid consisted of in total difficult. \
        Other requirements were that our end product had to use a number of threads specified by the user and it was to be written in C. \
        Through the use of bit manipulation, I managed to make my version of the Game of Life fast. \
        By the end of the project I know that there was more optimization that could have been done, like loop unraveling and removing the needs for bounds checking.\
         After adding threads I wasn’t completely satisfied with a console output for generations birth\'s and death\'s totals, so I went about exporting every generation \
         to a PNG format using ligpng and then compiling those images to GIFs. An Imgur album is linked below and you can see an example above. Using the remaining memory \
         I had left over I managed to add colors to the dead cells for a number of things. When cells die they leave a stain on that particular cell that may be permanent \
         depending on the console commands, random colors (this did not turn out well), and a two-color fade where dead cells fade from one color to another before disappearing.',
      tools: 'pThreads, libpng',
      languages: 'C',
      contributors: 'Benjamin Kugler',
      links: [
        {
          text: 'Gifs',
          link: 'https://imgur.com/a/3KUnZLd',
        },
        {
          text: 'Timing Data',
          link: 'https://docs.google.com/spreadsheets/d/1WYmTLDyT9m7DBJuiWNMcBLzQDHV7aKJyBvGAf-69SCU/edit?usp=sharing',
        },
      ],
    },
  ];

  // private get isOverflowing() {
  //    var element = this.$refs.text;
  //     return (element.inner < element.scrollHeight || element.offsetWidth < element.scrollWidth)
  //   }
  // }
}

</script>

<style scoped>
#projects-container {
  width: 80vw;
}

#projects-container-large {
  width: 100vw;
  margin-left: -32px;
}

#projects-window {
  height: calc(90vh - 250px);
}

#projects-window-large {
  height: calc(100vh - 300px);
  margin-top: 40px;
}

.active-project-link {
  color: #9c4d40 !important;
}

.project-link {
  padding: 0 20px;
  color: #9c634080;
}

.project-link:hover {
  color: #9c4054;
}

.project-info-link {
  padding: 20px 40px;
  font-size: 1.3em;
  text-decoration: none !important;
  font-family: 'Titillium Web', sans-serif !important;
  color: rgba(255, 255, 255, 0.7);
}

.project-info-link:hover {
  color: #9c4054;
  transition: 0.5s;
  text-decoration: none;
  cursor: pointer;
}

.project-info {
  padding: 0px 20px;
}

.project {
  height: 100%;
  overflow-y: scroll
}

.project-description {
  padding: 20px 10px;
}

</style>
