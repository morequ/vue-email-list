import {createRouter, createWebHistory} from 'vue-router'

import ExportCsv from '../views/ExportCsv'
import Home from '../views/Home'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        props: false
    },
    {
        path: '/export',
        name: 'export-csv',
        component: ExportCsv,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router