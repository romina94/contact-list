import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../components/Homepage.vue';
import MyFavorites from '../components/MyFavorites.vue';
import AddContact from '../components/AddNewContact.vue';
import EditContact from '../components/EditContact.vue';
import ContactDetails from '../components/ContactDetails.vue';

const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: Homepage
    },
    {
        path: '/favorites',
        name: 'MyFavorites',
        component: MyFavorites
    },
    {
        path: '/add',
        name: 'AddContact',
        component: AddContact
    },
    {
        path: '/edit/:contactId',
        name: 'EditContact',
        component: EditContact
    },
    {
        path: '/details/:contactId',
        name: 'ContactDetails',
        component: ContactDetails
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router