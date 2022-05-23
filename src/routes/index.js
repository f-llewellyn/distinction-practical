import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

// Create routes for the application
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: Home,
		},
		{
			path: "/post",
			component: () => import("../views/Post.vue"),
		},
	],
});

export default router;
