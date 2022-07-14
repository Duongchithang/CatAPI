<template>
  <div class="around-MostBreed bg-[#E3E1DC] xs:px-[20px] xs:pt-[20px] xs:pb-[70px] lg:pt-[30px] lg:px-[50px] lg:pb-[70px] rounded-b-[50px]">
    <div class="heading-mostbreed flex xs:flex-col lg:flex-row  lg:justify-between lg:items-center">
        <div class="discover-breed flex flex-col xs:w-[300px] lg:w-[500px]">
            <span class="Most-breed text-[18px] text-[#291507] relative pb-[10px]">Most Searched Breeds</span>
            <span class="xs:text-[30px] lg:text-[50px] font-bold text-[#291507] xs:leading-[30px] lg:leading-[50px] mt-[20px]">66+ Breeds For you to discover</span>
        </div>
        <div class="around-see-more xs:mt-[10px]">
            <span class="text-[#867B74] pr-[10px] font-semibold">SEE MORE</span>
            <i class="text-[#867B74] fa-solid fa-arrow-right"></i>
        </div>
    </div>
    <div class="around-image-list mt-[50px] grid xs:gap-x-[30px] xs:gap-y-[50px] lg:gap-[60px] xs:grid-cols-2 xs:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4">
        <div class="around-item-image">
            <img class="object-cover w-full h-full rounded-[20px]" src="https://cdn2.thecatapi.com/images/13MkvUreZ.jpg" alt="">
            <h2 class="text-[20px] text-[#291507] mt-[10px] font-semibold">Balinese</h2>
        </div>
        <div class="around-item-image">
            <img class="object-cover w-full h-full rounded-[20px]" src="https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg" alt="">
            <h2 class="text-[20px] text-[#291507] mt-[10px] font-semibold">Aegean</h2>
        </div>  
        <div class="around-item-image">
            <img class="object-cover w-full h-full rounded-[20px]" src="https://cat-wiki.iamstarcode.com/_ipx/w_1920,q_75/https%3A%2F%2Fcdn2.thecatapi.com%2Fimages%2F0XYvRd7oD.jpg?url=https%3A%2F%2Fcdn2.thecatapi.com%2Fimages%2F0XYvRd7oD.jpg&w=1920&q=75" alt="">
            <h2 class="text-[20px] text-[#291507] mt-[10px] font-semibold">Abyssinan</h2>
        </div>  
        <div class="around-item-image">
            <img class="object-cover w-full h-full rounded-[20px]" src="https://cdn2.thecatapi.com/images/HOrX5gwLS.jpg" alt="">
            <h2 class="text-[20px] text-[#291507] mt-[10px] font-semibold">Birman</h2>
        </div>    
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  methods:{
    ...mapActions(['update'])
  }
}
</script>

<style>
.Most-breed::after{
   content: "";
   position: absolute;
   left: 0;
   bottom: 0;
   width: 80px;
   height: 4px;
   background: #000;
   border-radius: 3px;
}
</style>