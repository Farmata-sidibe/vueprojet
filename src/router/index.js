import Vue from 'vue'
import VueRouter from 'vue-router'


import login from '../components/login.vue'


import registerClient from '../components/registerClient.vue'






import myFooter from '../components/myFooter.vue'
import myProfil from '../views/myProfil.vue'
import blogBarbe from '../components/blogBarbe.vue'


/*import myProduit from '../components/myProduit.vue'*/

import DTproduit from '../components/DTproduit.vue'


import myBlog from '../views/myBlog.vue'

import Produit from '../views/Produit.vue'
import navproduit from '../components/navproduit.vue'

import Apropos from '../components/Apropos.vue'





import blog from '../components/blog.vue'


import pop from '../components/pop.vue'
import mpo from '../components/mpo.vue'
import entretienBarbe from '../components/entretienBarbe.vue'
import pousseBarbe from '../components/pousseBarbe.vue'
import trouBarbe from '../components/trouBarbe.vue'

import panier from '../views/panier.vue'
import paypal from '../components/paypal.vue'
import adminhome from '../components/admin/home.vue'
import userhome from '../components/user/home.vue'
import log from '../components/log.vue'






import footerBlog from '../components/footerBlog.vue'
import blogCoiffure from '../components/blogCoiffure.vue'
import navconnecter from '../components/navconnecter.vue'
import navconnecteCoiffeur from '../components/navconnecteCoiffeur.vue'

import navbar from '../components/navbar.vue'
import prestation from '../components/prestation.vue'



import artSoinTresse from '../components/artSoinTresse.vue'
import artSoinCrepus from '../components/artSoinCrepus.vue'

import updatepassword from '../components/updatepassword.vue'
import msgvalide from '../components/msgvalide.vue'












Vue.use(VueRouter)

const routes = [

    {
        path: '/navbar',
        name: 'navbar',
        component: navbar
    },


    {
        path: '/',
        name: 'Apropos',
        component: Apropos
    },



    {
        path: '/artSoinTresse',
        name: 'artSoinTresse',
        component: artSoinTresse
    },
    {
        path: '/artSoinCrepus',
        name: 'artSoinCrepus',
        component: artSoinCrepus
    },
    {
        path: '/entretienBarbe',
        name: 'entretienBarbe',
        component: entretienBarbe
    },
    {
        path: '/pousseBarbe',
        name: 'pousseBarbe',
        component: pousseBarbe
    },
    {
        path: '/trouBarbe',
        name: 'pousseBtrouBarbearbe',
        component: trouBarbe
    },

    {
        path: '/mpo',
        name: 'mpo',
        component: mpo
    },
    {
        path: '/updatepassword',
        name: 'updatepassword',
        component: updatepassword
    },
    {
        path: '/msgvalide',
        name: 'msgvalide',
        component: msgvalide
    },
    {
        path: '/validemai/:email',
        name: 'validemail',
        component: () =>
            import ("../components/validemail.vue"),
    },

    {
        path: '/Produit',
        name: 'Produit',
        component: Produit
    },
    {
        path: '/navproduit',
        name: 'navproduit',
        component: navproduit
    },

    {
        path: '/DTproduit/:id',
        name: 'DTproduit',
        component: DTproduit
    },

    {
        path: '/blogBarbe',
        name: 'blogBarbe',
        component: blogBarbe
    },
    {
        path: '/myBlog',
        name: 'myBlog',
        component: myBlog

    },
    {
        path: '/prestation',
        name: 'prestation',
        component: prestation
    },

    {
        path: '/blog',
        name: 'blog',
        component: blog
    },
    {
        path: '/blogCoiffure',
        name: 'blogCoiffure',
        component: blogCoiffure
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },

    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/paypal',
        name: 'paypal',
        component: paypal
    },
    {
        path: '/user/home',
        name: 'userhome',
        component: userhome
    },
    {
        path: "/panier",
        name: "panier",
        component: panier
    },
    {
        path: '/admin/log',
        name: 'adminlog',
        component: log
    },
    {
        path: '/admin/home',
        name: 'adminhome',
        component: adminhome
    },

    {
        path: '/myProfil',
        name: 'myProfil',
        component: myProfil
    },
    {
        path: '/myFooter',
        name: 'myFooter',
        component: myFooter
    },
    {
        path: '/footerBlog',
        name: 'footerBlog',
        component: footerBlog
    },
    {
        path: '/navconnecter',
        name: 'navconnecter',
        component: navconnecter
    },
    {
        path: '/navconnecteCoiffeur',
        name: 'navconnecteCoiffeur',
        component: navconnecteCoiffeur
    },
    {
        path: '/registerClient',
        name: 'registerClient',
        component: registerClient
    },

    {
        path: '/pop',
        name: 'pop',
        component: pop
    },



]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router