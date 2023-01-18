import { createWebHistory, createRouter, Router } from "vue-router";
import DatasetDetailComponent from "@/views/dataset-detail.component/dataset-detail.component";

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

const route1: Router = createRouter({
    history: createWebHistory(),
    routes: [
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
