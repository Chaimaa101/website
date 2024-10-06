import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/dashbord',
        name: 'dashbord',
        component: 'dashbord'
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router