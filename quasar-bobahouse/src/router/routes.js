const routes = [
  {
    path: "/",
    component: () => import("layouts/WelcomeLayout.vue"),
    children: [
      { path: "", component: () => import("pages/WelcomePage.vue") },
      { path: "/form", component: () => import("pages/UserFillForm.vue") },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/NavBarLayout.vue"),
    children: [
      { path: "/menu", component: () => import("pages/MenuPage.vue") },
      { path: "/payment", component: () => import("pages/PaymentPage.vue") },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
