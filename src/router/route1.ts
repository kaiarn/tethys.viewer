// import Vue from 'vue';
// import Router from 'vue-router';
import { createWebHistory, createRouter } from "vue-router";
import DatasetDetailComponent from "@/views/dataset-detail.component.ts/dataset-detail.component";

// Vue.use(Router);

// export default new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'Route1',
//       component: Route1,
//     },
//   ],
// });

const route1 = createRouter({
    history: createWebHistory(),
    routes: [
        // {
        //   path: '/',
        //   name: 'Route1',
        //   component: Route1,
        // },
        {
            path: "/10.24341/tethys.:datasetId",
            name: "dataset2",
            component: DatasetDetailComponent,
            props: true,
        },
    ],
    // scrollBehavior(to, from, savedPosition) {
    scrollBehavior() {
        // return desired position
        document.getElementById("app")?.scrollIntoView();
    },
});

export default route1;
