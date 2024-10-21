import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Contact from "@/pages/Contact.vue";
import Product from "@/pages/Product.vue";
import Owner from "@/pages/Owner.vue";
import Errors from "@/pages/errors/Errors.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/products/:id',
            name: 'Product',
            component: Product,
            children: [
                {
                    path: 'owner',
                    name: 'Owner',
                    component: Owner
                },
            ]
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path:'/:catchall(.*)*',
            name:'Error',
            component: Errors
        }
    ]
});

export default router