// -- inicio das rotas
import { createRouter, createWebHistory } from 'vue-router'
//createWebHashHistory
import Contratos from '@/components/vendas/Contratos.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import Home from '@/views/Home.vue'
import Lead from '@/components/vendas/Lead.vue'
import Leads from '@/components/vendas/Leads.vue'
import Login from '@/views/Login.vue'
import Servicos from '@/components/servicos/Servicos.vue'
import Site from '@/views/Site.vue'
import Vendas from '@/components/vendas/Vendas.vue'
import VendasPadrao from '@/components/vendas/VendasPadrao.vue'


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
               { path: 'leads', component: Leads, name: 'leads'}, //meusite.com/home/vendas/leads
               { path: 'leads/:id', component: Lead, name: 'lead'}, //meusite.com/home/vendas/leads/id
               { path: 'contratos', component: Contratos, name: 'contratos'}, //meusite.com/home/vendas/contratos
               { path: '', component: VendasPadrao}, //meusite.com/home/vendas/
            ] 
         },

         { path: 'servicos', component: Servicos, name: 'servicos'},//meusite.com/home/servicos
         { path: 'dashboard', component: Dashboard} //meusite.com/home/dashboard
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