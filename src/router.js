// -- inicio das rotas
import { createRouter, createWebHistory } from 'vue-router'
//createWebHashHistory
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Site from '@/views/Site.vue'


//array de objetos onde cada objeto define as rotas da aplicação
const routes = [
   {
      path: '/', //meusite.com/
      component: Site
   },
   {
      path: '/home', //caminho para o caminho do componente. meusite.com/home
      component: Home
   },
   {
      path: '/login', //meusite.com/login
      component: Login
   },
   
]

//configuração do roteamento da aplicação
const router = createRouter({
   history: createWebHistory(), //método de navegação
   routes //routes: routes //recupera quais são as rotas
}) //precisa ser importada do pacote vue-router

export default router 
// -- fim das rotas