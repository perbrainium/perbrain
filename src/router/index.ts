import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/notes' },
    {
      path: '/notes',
      name: 'notes',
      component: () => import('../views/NotesView.vue'),
      children: [
        {
          path: ':id',
          name: 'note',
          component:  () => import('../views/NoteView.vue'),
        },
      ],
    },
  ],
})

export default router
