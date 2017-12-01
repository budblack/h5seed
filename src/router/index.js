/*eslint-disable no-unused-vars*/

import Vue from 'vue';
import Router from 'vue-router';
import NavGrid from '@/views/nav-grid';
import PAlermSchedule from '@/views/p-alerm-schedule';
import PAlermQuality from '@/views/p-alerm-quality';

Vue.use(Router);
export default new Router(
  {
    mode  : 'hash',
    routes: [
      {
        path     : '/',
        component: PAlermQuality
      },
      {
        path     : '/p-alerm-schedule',
        component: PAlermSchedule
      },
      {
        path     : '/p-alerm-quality',
        component: PAlermQuality
      }
    ]
  }
);
