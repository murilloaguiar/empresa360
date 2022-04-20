<template>
   <div>
      <h3> {{dados.id}} - {{dados.nome}}</h3>

      <div class="mb-3 row">
         <label class="col-sm-2 col-form-label">ID</label>
         <div class="col-sm-12">
            <input type="text" readonly class="form-control-plaintext" :value="dados.id">
         </div>
      </div>

      <div class="mb-3 row">
         <label class="col-sm-2 col-form-label">Nome</label>
         <div class="col-sm-12">
            <input type="text" class="form-control" :value="dados.nome">
         </div>
      </div>

      <div class="mb-3 row">
         <label class="col-sm-2 col-form-label">Telefone</label>
         <div class="col-sm-12">
            <input type="text" class="form-control" :value="dados.telefone">
         </div>
      </div>

      <div class="col-auto d-flex justify-content-between">
         <button class="btn btn-primary">Atualizar</button>
         <button class="btn btn-secondary" @click="$router.push({name: 'leads'})">Voltar</button>
      </div>


   </div>
</template>

<script>

import ApiMixin from '@/mixins/ApiMixin'


export default {
   name: 'Lead',
   mixins: [ApiMixin],
   props: ['id'],

   created(){
      console.log(this.$route.params)
      console.log(this.id)
      console.log(this.$props)
      //this.getDadosApi(`http://localhost:3000/leads/${this.$route.params.id}`)
      this.getDadosApi(`http://localhost:3000/leads/${this.id}`) // via props
   }
}
</script>