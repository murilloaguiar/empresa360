// -- inicio das rotas
import { createRouter, createWebHistory } from 'vue-router'
//createWebHashHistory
import Contratos from '@/components/vendas/Contratos.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import DashboardRodape from '@/components/dashboard/DashboardRodape.vue'
import Home from '@/views/Home.vue'
import Indicadores from '@/components/servicos/Indicadores.vue'
import Lead from '@/components/vendas/Lead.vue'
import Leads from '@/components/vendas/Leads.vue'
import Login from '@/views/Login.vue'
import Opcoes from '@/components/servicos/Opcoes.vue'
import PaginaNaoEncontrada from '@/views/PaginaNaoEncontrada.vue'
import Servico from '@/components/servicos/Servico.vue'
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
      alias: '/app',
      component: Home,
      children: [
         { path: 'vendas', component: Vendas, children: 
            [
               { path: 'leads', component: Leads, name: 'leads'}, //meusite.com/home/vendas/leads
               { path: 'leads/:id', component: Lead, name: 'lead', alias: ['/l/:id','/pessoa/:id','/:id']}, //meusite.com/home/vendas/leads/id
               { path: 'contratos', component: Contratos, name: 'contratos'}, //meusite.com/home/vendas/contratos
               { path: '', component: VendasPadrao, name: 'vendas'}, //meusite.com/home/vendas/
            ] 
         },

         { path: 'servicos', component: Servicos, name: 'servicos', children: 
            [
               {path:':id', name: 'servico', alias: '/s/:id', components: 
                  {
                     default: Servico,
                     opcoes: Opcoes,
                     indicadores: Indicadores
                  }
               }
            ]
         },//meusite.com/home/servicos

         { path: 'dashboard', components: {
            default: Dashboard,
            rodape: DashboardRodape
         }} //meusite.com/home/dashboard
      ],
   },

   {
      path: '/login', //meusite.com/login
      component: Login
   },
   {path:'/redirecionamento-1', redirect: '/home/servicos'},
   {path:'/redirecionamento-2', redirect: {name: 'leads'} },
   {path:'/redirecionamento-3', redirect: '/home/vendas' },
   {path:'/redirecionamento-4', redirect: {name: 'vendas'} },
   {path:'/redirecionamento-5', redirect: to =>{
         //podemos programar algo antes do redirecionamento ser efetivado
         console.log(to)
         //return '/home/vendas'
         return {name: 'vendas'}
      }
   },

   // {path: '/:catchAll(.*)*', redirect: '/'}
   {path: '/:catchAll(.*)*', component: PaginaNaoEncontrada}
   
]

//configuração do roteamento da aplicação
const router = createRouter({
   history: createWebHistory(), //método de navegação
   routes //routes: routes //recupera quais são as rotas
}) //precisa ser importada do pacote vue-router

export default router 
// -- fim das rotas