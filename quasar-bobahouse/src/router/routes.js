
const routes = [
  {
    path: '/',
    component: () => import('layouts/WelcomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/WelcomePage.vue') },
      { path: '/form', component: () => import('pages/UserFillForm.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
