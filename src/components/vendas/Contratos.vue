<template>
   <div>
      <h3>Contratos</h3>

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
   
   created(){
      this.getDadosApi('http://localhost:3000/contratos?_expand=lead&_expand=servico')
   }
}
</script>