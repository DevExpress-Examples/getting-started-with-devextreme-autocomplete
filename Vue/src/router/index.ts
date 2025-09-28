import { createRouter, createWebHistory } from 'vue-router';
import AutocompleteView from '../views/AutocompleteView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'autocomplete',
      component: AutocompleteView,
    },
  ],
});

export default router;
