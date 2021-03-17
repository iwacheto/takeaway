import Vue from 'vue'
import Router from 'vue-router'
import HomeRouter from '@/components/Pages/Home/router';
import AboutRouter from '@/components/Pages/About/router';

const routes: Array<any> = [
    HomeRouter,
    AboutRouter,
    {
        path: "/:pathMatch(.*)*",
        component: () => import(
            '@/components/shared/Errors/404.vue'
        )
    }
];

Vue.use(Router);


export default new Router({
    mode: 'history',
    routes
})
