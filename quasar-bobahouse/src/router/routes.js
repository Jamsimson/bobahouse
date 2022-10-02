
const routes = [
  {
    path: '/',
    component: () => import('layouts/WelcomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/WelcomePage.vue') },
      { path: '/form', component: () => import('pages/UserFillForm.vue') },

    ],

    path: '/admin',
    component: () => import('layouts/AdminMainLayout.vue'),
    children: [
      { path: '/admindashboard', component: () => import('pages/AdminDashboard.vue') },
      { path: '/managementmenu', component: () => import('pages/managementMenu.vue') },
      { path: '/transactionboard', component: () => import('pages/TransactionBoard.vue') },

    ],

  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
