import Vue from 'vue'
import VueRouter from 'vue-router'

import myNavAccueil from '../components/myNavAccueil.vue'
import newpage from '../components/newpage.vue'

import login from '../components/login.vue'
import Accueil from '../components/Accueil.vue'

import registerClient from '../components/registerClient.vue'
import registerCoiffeur from '../components/registerCoiffeur.vue'
import profilCoiffeur from '../components/profilCoiffeur.vue'


import registerSalon from '../components/registerSalon.vue'
import pageRecherche from '../components/pageRecherche.vue'
import myFooter from '../components/myFooter.vue'
import myProfil from '../views/myProfil.vue'
import blogBarbe from '../components/blogBarbe.vue'
import calendrier from '../components/calendrier.vue'

/*import myProduit from '../components/myProduit.vue'*/

import DTproduit from '../components/DTproduit.vue'

import Salon from '../views/Salon.vue'
import myBlog from '../views/myBlog.vue'

import Produit from '../views/Produit.vue'
import navproduit from '../components/navproduit.vue'
import RDV from '../components/RDV.vue'
import Apropos from '../components/Apropos.vue'



import exemple from '../components/exemple.vue'

import blog from '../components/blog.vue'
import reservationfin from '../components/reservationfin.vue'

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
import presta from '../components/presta.vue'

import search from '../components/search.vue'
import artSoinTresse from '../components/artSoinTresse.vue'
import artSoinCrepus from '../components/artSoinCrepus.vue'

import updatepassword from '../components/updatepassword.vue'
import msgvalide from '../components/msgvalide.vue'
import validemail from '../components/validemail.vue'











Vue.use(VueRouter)

const routes = [{
        path: '/Accueil',
        name: 'Accueil',
        component: Accueil
    },
    {
        path: '/myNavAccueil',
        name: 'myNavAccueil',
        component: myNavAccueil
    },
    {
        path: '/navbar',
        name: 'navbar',
        component: navbar
    },
    {
        path: '/Accueil',
        name: 'Accueil',
        component: Accueil
    },
    {
        path: '/RDV',
        name: 'RDV',
        component: RDV
    },
    {
        path: '/',
        name: 'Apropos',
        component: Apropos
    },
    {
        path: '/profilCoiffeur',
        name: 'profilCoiffeur',
        component: profilCoiffeur
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
        path: '/msgvalide',
        name: 'msgvalide',
        component: msgvalide
    },
    {
        path: '/validemail',
        name: 'validemail',
        component: validemail
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

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router