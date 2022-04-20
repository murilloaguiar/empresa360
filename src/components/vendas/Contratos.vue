<template>
   <div>
      

      <!-- <router-link class="btn btn-primary" :to="{name: 'contratos', query: {leadId_like: 1} }">LeadId = 1</router-link>

      <router-link class="btn btn-primary" to="/home/vendas/contratos?servicoId_like=2">ServicoId = 2</router-link>

      <router-link class="btn btn-success" :to="{name: 'contratos', query: {leadId_like: 1, servicoId_like: 2} }">LeadId = 1 e ServicoId = 2</router-link>

      <router-link class="btn btn-success" to="/home/vendas/contratos?servicoId_like=2&leadId_like=2">ServicoId = 2 e LeadId = 2</router-link> -->

      <div class="card mb-4">
         <div class="card-header">Contratos</div>
         <div class="card-body">
            <div class="row">
               <div class="col-6">
                  <label class="form-label">ID Contrato:</label>
                  <input type="text" class="form-control" v-model="formPesquisa.id_like">
               </div>
               <div class="col-6">
                  <label class="form-label">Data início:</label>
                  <div class="input-group">
                     <input type="date" class="form-control" v-model="formPesquisa.data_inicio_gte" >
                     <input type="date" class="form-control" v-model="formPesquisa.data_inicio_lte">
                  </div>
               </div>
            </div>
         </div>
         <div class="card-footer">
            <button type="button" class="btn btn-primary" @click="pesquisar()">Pesquisar</button>
         </div>
      </div>

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
      parametrosRelacionamento: '_expand=lead&_expand=servico',
      formPesquisa: {
         id_like: '',
         data_inicio_gte: '',
         data_inicio_lte: ''
      }
   }),

   methods: {
      pesquisar(){
         
         const url = `http://localhost:3000/contratos?${this.parametrosRelacionamento}`

         this.getDadosApi(url, this.formPesquisa)
      }
   },
   
   created(){

      const url = `http://localhost:3000/contratos?${this.parametrosRelacionamento}`
      this.getDadosApi(url, this.$route.query)
   },

   beforeRouteUpdate(to, from, next){

      //(to.query) => temos um objeto, precisamos converter para um URLSearchParams
      const url = `http://localhost:3000/contratos?${this.parametrosRelacionamento}`

      this.getDadosApi(url, to.query)

      next();
   }
}
</script>