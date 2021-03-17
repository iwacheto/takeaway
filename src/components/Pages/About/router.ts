export default {
    path: '/about',
    name: 'About',
    component: () => import(
        '@/components/Pages/About/About.vue'
    ),
};
