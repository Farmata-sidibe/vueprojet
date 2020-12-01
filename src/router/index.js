import Vue from 'vue'
import VueRouter from 'vue-router'

import myNavAccueil from '../components/myNavAccueil.vue'
import newpage from '../components/newpage.vue'

import login from '../components/login.vue'
import registerClient from '../components/registerClient.vue'
import registerCoiffeur from '../components/registerCoiffeur.vue'

import registerSalon from '../components/registerSalon.vue'
import pageRecherche from '../components/pageRecherche.vue'
import myFooter from '../components/myFooter.vue'
import myProfil from '../views/myProfil.vue'
import blogBarbe from '../components/blogBarbe.vue'
import calendrier from '../components/calendrier.vue'

/*import myProduit from '../components/myProduit.vue'*/

import DTproduit from '../views/DTproduit.vue'

import Salon from '../views/Salon.vue'
import myBlog from '../views/myBlog.vue'

import Produit from '../views/Produit.vue'
import navproduit from '../components/navproduit.vue'



import exemple from '../components/exemple.vue'

import blog from '../components/blog.vue'
import reservationfin from '../components/reservationfin.vue'

import pop from '../components/pop.vue'
import mpo from '../components/mpo.vue'
import entretienBarbe from '../components/entretienBarbe.vue'
import pousseBarbe from '../components/pousseBarbe.vue'
import trouBarbe from '../components/trouBarbe.vue'



import footerBlog from '../components/footerBlog.vue'
import blogCoiffure from '../components/blogCoiffure.vue'
import navconnecter from '../components/navconnecter.vue'
import navbar from '../components/navbar.vue'
import prestation from '../components/prestation.vue'
import presta from '../components/presta.vue'

import search from '../components/search.vue'
import artSoinTresse from '../components/artSoinTresse.vue'
import artSoinCrepus from '../components/artSoinCrepus.vue'

import updatepassword from '../components/updatepassword.vue'









Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'myNavAccueil',
        component: myNavAccueil
    },
    {
        path: '/navbar',
        name: 'navbar',
        component: navbar
    },
    {
        path: '/reservationfin',
        name: 'reservationfin',
        component: reservationfin
    },
    {
        path: '/calendrier',
        name: 'calendrier',
        component: calendrier
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
        path: '/exemple',
        name: 'exemple',
        component: exemple
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
        path: '/newpage',
        name: 'newpage',
        component: newpage
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
    /*{
        path: '/myProduit',
        name: 'myProduit',
        component: myProduit
    },*/
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
        path: '/presta',
        name: 'presta',
        component: presta
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
        path: '/search',
        name: 'search',
        component: search
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
        path: '/registerClient',
        name: 'registerClient',
        component: registerClient
    },
    {
        path: '/registerCoiffeur',
        name: 'registerCoiffeur',
        component: registerCoiffeur
    },
    {
        path: '/pop',
        name: 'pop',
        component: pop
    },
    {
        path: '/registerSalon',
        name: 'registerSalon',
        component: registerSalon
    },
    {
        path: '/pageRecherche',
        name: 'pageRecherche',
        component: pageRecherche
    },
    {
        path: '/Salon',
        name: 'Salon',
        component: Salon
    },

    {
        path: '/validemail/:email',
        name: 'validemail',
        component: () =>
            import ("../components/validemail.vue"),
    },



]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router