<template>
   <div>
      <h3>Leads</h3>

      <table class="table table-hover">

         <thead>
            <tr>
               <th scope="col">ID</th>
               <th scope="col">Nome</th>
               <th scope="col">Telefone</th>
               <th scope="col"></th>
            </tr>
         </thead>

         <tbody>
            <tr v-for="dado in dados" :key="dado.id">
               <td>{{dado.id}}</td>
               <td>{{dado.nome}}</td>
               <td>{{dado.telefone}}</td>
               <td>
                  <!-- <router-link :to="`/home/vendas/leads/${dado.id}`" class="btn btn-sm btn-primary"> -->
                  <router-link :to="{name: 'lead', params: {id: dado.id}}" class="btn btn-sm btn-primary">
                     <i class="bi bi-pencil-square"></i>
                  </router-link>
               </td>
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
      this.getDadosApi('http://localhost:3000/leads')
   },

   beforeRouteEnter(/*to, from, next*/){
      console.log('Guarda de componente beforeRouteEnter')
   },

   beforeRouteLeave(/*to, from, next*/){
      console.log('Guarda de componente beforeRouteLeave')
   }
}
</script>