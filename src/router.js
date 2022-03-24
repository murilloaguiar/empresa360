// -- inicio das rotas
import { createRouter, createWebHistory } from 'vue-router'
//createWebHashHistory
import Contratos from '@/components/vendas/Contratos.vue'
import Home from '@/views/Home.vue'
import Leads from '@/components/vendas/Leads.vue'
import Login from '@/views/Login.vue'
import Servicos from '@/components/servicos/Servicos.vue'
import Site from '@/views/Site.vue'
import Vendas from '@/components/vendas/Vendas.vue'


//array de objetos onde cada objeto define as rotas da aplicação
const routes = [
   {
      path: '/', //meusite.com/
      component: Site
   },

   {
      path: '/home', //caminho para o caminho do componente. meusite.com/home
      component: Home,
      children: [
         { path: 'vendas', component: Vendas, children: 
            [
               { path: 'leads', component: Leads}, //meusite.com/home/vendas/leads
               { path: 'contratos', component: Contratos}, //meusite.com/home/vendas/contratos
            ] 
         },

         { path: 'servicos', component: Servicos}
      ],
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