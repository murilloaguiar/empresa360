<template>
   <div>
      <h3>Contratos</h3>

      <router-link class="btn btn-primary" :to="{name: 'contratos', query: {leadId_like: 1} }">LeadId = 1</router-link>

      <router-link class="btn btn-primary" to="/home/vendas/contratos?servicoId_like=2">ServicoId = 2</router-link>

      <router-link class="btn btn-success" :to="{name: 'contratos', query: {leadId_like: 1, servicoId_like: 2} }">LeadId = 1 e ServicoId = 2</router-link>

      <router-link class="btn btn-success" to="/home/vendas/contratos?servicoId_like=2&leadId_like=2">ServicoId = 2 e LeadId = 2</router-link>


      <table class="table table-hover">

         <thead>
            <tr>
               <th scope="col">ID</th>
               <th scope="col">Lead</th>
               <th scope="col">Serviço</th>
               <th scope="col">Data Início</th>
               <th scope="col">Data Fim</th>
            </tr>
         </thead>

         <tbody>
            <tr v-for="dado in dados" :key="dado.id">
               <td>{{dado.id}}</td>
               <td>{{dado.lead.nome}}</td>
               <td>{{dado.servico.servico}}</td>
               <td>{{dado.data_inicio}}</td>
               <td>{{dado.data_fim}}</td>
            </tr>
         </tbody>

      </table>

   </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin'

export default {
   name: 'Leads',
   mixins: [ApiMixin],

   data:()=>({
      parametrosRelacionamento: '_expand=lead&_expand=servico'
   }),
   
   created(){
      const queryParams = new URLSearchParams(this.$route.query).toString()

      this.getDadosApi(`http://localhost:3000/contratos?${this.parametrosRelacionamento}&${queryParams}`)
   },

   beforeRouteUpdate(to, from, next){

      //(to.query) => temos um objeto, precisamos converter para um URLSearchParams
      const queryParams = new URLSearchParams(to.query).toString()
   
      this.getDadosApi(`http://localhost:3000/contratos?${this.parametrosRelacionamento}&${queryParams}`)

      next();
   }
}
</script>