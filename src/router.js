// -- inicio das rotas
import { createRouter, createWebHistory } from 'vue-router'
//createWebHashHistory
// import Contratos from '@/components/vendas/Contratos.vue'
// import Dashboard from '@/components/dashboard/Dashboard.vue'
// import DashboardRodape from '@/components/dashboard/DashboardRodape.vue'
// import Home from '@/views/Home.vue'
// import Indicadores from '@/components/servicos/Indicadores.vue'
// import Lead from '@/components/vendas/Lead.vue'
// import Leads from '@/components/vendas/Leads.vue'
// import Login from '@/views/Login.vue'
// import Opcoes from '@/components/servicos/Opcoes.vue'
// import PaginaNaoEncontrada from '@/views/PaginaNaoEncontrada.vue'
// import Servico from '@/components/servicos/Servico.vue'
// import Servicos from '@/components/servicos/Servicos.vue'
// import Site from '@/views/Site.vue'
// import Vendas from '@/components/vendas/Vendas.vue'
// import VendasPadrao from '@/components/vendas/VendasPadrao.vue'

//lazy loading - importação dinâmica
const Contratos = () => import(/* webpackChunkName: "vendas" */'@/components/vendas/Contratos.vue')
const Dashboard = () => import(/* webpackChunkName: "dashboard" */'@/components/dashboard/Dashboard.vue')
const DashboardRodape = () => import(/* webpackChunkName: "dashboard" */'@/components/dashboard/DashboardRodape.vue')
const Home = () => import('@/views/Home.vue')
const Indicadores = () => import(/* webpackChunkName: "servicos" */'@/components/servicos/Indicadores.vue')
const Lead = () => import(/* webpackChunkName: "vendas" */'@/components/vendas/Lead.vue')
const Leads = () => import(/* webpackChunkName: "vendas" */'@/components/vendas/Leads.vue')
const Login = () => import('@/views/Login.vue')
const Opcoes = () => import(/* webpackChunkName: "servicos" */'@/components/servicos/Opcoes.vue')
const PaginaNaoEncontrada = () => import('@/views/PaginaNaoEncontrada.vue')
const Servico = () => import(/* webpackChunkName: "servicos" */'@/components/servicos/Servico.vue')
const Servicos = () => import(/* webpackChunkName: "servicos" */'@/components/servicos/Servicos.vue')
const Site = () => import('@/views/Site.vue')
const Vendas = () => import(/* webpackChunkName: "vendas" */'@/components/vendas/Vendas.vue')
const VendasPadrao = () => import(/* webpackChunkName: "vendas" */'@/components/vendas/VendasPadrao.vue')

//array de objetos onde cada objeto define as rotas da aplicação
const routes = [
   {
      path: '/', //meusite.com/
      component: Site,
      meta: {requerAutorizacao: false}
   },

   {
      path: '/home', //caminho para o caminho do componente. meusite.com/home
      meta: {requerAutorizacao: true},
      alias: '/app',
      component: Home,
      children: [
         { path: 'vendas', component: Vendas, children: 
            [
               { 
                  path: 'leads', 
                  component: Leads, 
                  name: 'leads',
                  beforeEnter(){
                     //poderíamos verificar se o usuário tem permissão de acessar a rota
                     console.log('Guarda de rota before enter')
                  }
               }, //meusite.com/home/vendas/leads

               { path: 'leads/:id', 
                  component: Lead, 
                  props: true, 
                  /*props: {
                     id: 4
                  },
                  props: (route) => {

                     //implementar uma lógica para definir as props que serão submetidas para o componente roteado
                     return {
                        id: route.params.id 
                     }
                  },*/
                  name: 'lead', 
                  alias: ['/l/:id','/pessoa/:id','/:id']}, //meusite.com/home/vendas/leads/id

               { path: 'contratos', component: Contratos, name: 'contratos'}, //meusite.com/home/vendas/contratos

               { path: '', component: VendasPadrao, name: 'vendas'}, //meusite.com/home/vendas/
            ] 
         },

         { path: 'servicos', component: Servicos, name: 'servicos', children: 
            [
               {
                  path:':id', 
                  name: 'servico', 
                  alias: '/s/:id', 
                  props: {default: true, indicadores: true, opcoes: true}, components: 
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
   routes, //routes: routes //recupera quais são as rotas
   scrollBehavior(to, from, savedPosition){
      //return {left:0, top:150} //left = eixo x | top = eixo y
      //console.log(to.hash)
      console.log(savedPosition)

      if(savedPosition) return savedPosition

      if(to.hash) return { el: to.hash} //el vai apontar dinamicamente para um elemento html cujo id seja identico ao fragmento hash da rota
      
      return {left:0, top:0}
   }
}) //precisa ser importada do pacote vue-router


router.beforeEach((/*to*/)=>{
   // console.log('Origem', from)
   // console.log('Destino', to)
   //console.log('Guarda global beforeEach Método executado antes do acesso a rota destino')

   // if (to.meta.requerAutorizacao) console.log('validar acesso')
      
   // else console.log('apenas seguir')
       
})

router.afterEach((/*to, from*/)=>{
   //console.log('Origem', from)
   //console.log('Destino', to)
   //console.log('Guarda global afterEach Método executado após a conclusão da navegação')

})

router.beforeResolve(()=>{
   //console.log('Guarda global beforeResolve')
})




export default router 
// -- fim das rotas