import home from "../components/home";
import category from '../components/category/index'
import create from "../components/category/create";
import edit from "../components/category/edit";

export const routes = [
    {
        path: '/',
        component: home,
        name: 'home'
    },
    {
        path: '/category',
        component: category,
        name: 'category'
    },
    {
        path: '/category/create',
        component: create,
        name: 'create-category'
    },
    {
        path: '/category/edit/:id',
        component: edit,
        name: 'edit-category'
    }
]
