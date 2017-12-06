/*eslint-disable no-unused-vars*/

import Vue from 'vue';
import Router from 'vue-router';
import NavGrid from '../views/nav-grid-main.vue';
import PAlermSchedule from '../views/p-alerm-schedule.vue';
import PAlermQuality from '../views/p-alerm-quality.vue';
import audio from '../lib/audio';

Vue.use(Router);
export default new Router(
  {
    mode  : 'hash',
    routes: [
      {
        path       : '/',
        component  : NavGrid,
        beforeEnter: (to, from, next) => {
          audio.noticDa();
          next();
        }
      },
      {
        path     : '/p-alerm-schedule',
        component: PAlermSchedule
      },
      {
        path       : '/p-alerm-quality',
        component  : PAlermQuality,
        beforeEnter: (to, from, next) => {
          audio.noticDa();
          next();
        }
      }
    ]
  }
);
