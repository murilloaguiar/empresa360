<template>
   <div>
      <h3>Serviços</h3>
      <hr>
      <div class="row">
         <div class="col" v-for="dado in dados" :key="dado.id">
            <div class="card" style="width: 11rem;">
               <img :src="`/img/${dado.icone}`" class="card-img-top" alt="">
               <div class="card-body text-center">
                  <router-link :to="{name: 'servico', params: {id: dado.id} }">
                     <p class="card-text">{{dado.servico}}</p>
                  </router-link>
                  
               </div>
            </div>
         </div>
      </div>
      
      <router-view class="mt-3"></router-view>

   </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin'

export default {
   name: 'Servicos',
   mixins: [ApiMixin],
   
   created(){
      this.getDadosApi('http://localhost:3000/servicos')
   }
}
</script>