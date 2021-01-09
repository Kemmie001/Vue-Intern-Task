<template>
<div>
  <Base :name="name" :links="socialLink" v-if="!loading"/>
</div>
</template>

<script>
import Base from './base'
export default {
  name: 'HelloWorld',
  components:{
    Base
  },
  computed:{
        name(){
            return this.$store.state.name;
            
        },
        socialLink (){
          return this.$store.state.socialLinks;
        },
        loading (){
          return this.$store.state.isLoading;
        }
    },
    async created(){
        await this.$store.dispatch('getDetails');
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
