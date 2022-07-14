<template>
   <div class="around-homeview xl:mt-[30px] xl:mx-[40px] xs:pt-[20px] xs:px-[15px]">
      <Header></Header>
      <MostBreed></MostBreed>
      <BreedVote></BreedVote>
      <Footer></Footer>
   </div>
</template>

<script>
import Header from '../components/Header.vue'
import MostBreed from '../components/MostBreed.vue'
import BreedVote from '../components/BreedVote.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'HomeView',
   data(){
    return{

    }
   },
  components: {
    Header,
    MostBreed,
    BreedVote,
    Footer
  }
}
</script>
