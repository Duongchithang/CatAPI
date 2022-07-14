<template>
    <div class="around-logo">
        <img src="../assets/imageCat/imgcat/CatwikiLogo.svg" alt="">
        <div class="contain-cat-search xl:mt-[20px]">
            <div class="around-search-cat xl:w-full">
                <div class="around-image-cat xl:w-full relative">
                    <img class="w-full rounded-t-[50px] xs:h-[300px] lg:h-[400px] object-cover" src="../assets/imageCat/imgcat/HeroImagesm.png" alt="">
                    <div class="container-search-cat absolute xs:top-[50px] xs:left-[30px] lg:top-[50px] lg:left-[100px] flex flex-col">
                        <img class="xs:w-[100px] lg:w-[150px]" src="https://cat-wiki.iamstarcode.com/_ipx/w_128,q_75/%2Fimg%2Flogo2.svg?url=%2Fimg%2Flogo2.svg&w=128&q=75" alt="">
                        <div class="around-text-car flex flex-col mt-[10px] w-[280px]">
                            <span class="text-white xs:text-[22px] lg:text-[25px] w-full font-light">Get to know more about your cat breed</span>
                            <div class="around-input-cat w-[240px] h-[40px] mt-[20px] rounded-[30px] relative z-10 overflow-hidden">
                                <input class="input-breed-cat w-full h-full outline-none pl-[20px] pr-[50px] text-[16px]" placeholder="Enter breed" type="text">
                                <i class="fa-solid fa-magnifying-glass absolute right-[20px] top-[12px]"></i>           
                            </div>
                                 <div class="list-cat-wrraper px-[5px] py-[5px] w-[235px] z-50 mt-[5px] bg-white rounded-[5px]">
                                     <ul class="list-cat w-full h-[200px] overflow-hidden overflow-y-auto">
                                        <li class="px-[14px] py-[10px] mt-[8px] mx-[8px] rounded-[5px] hover:bg-[#F5F5F5] transition-all text-[18px] font-light" v-for="breed in BreedName" :key="breed">
                                        <router-link :to="`/breed/${breed}`">{{breed}}</router-link>
                                        </li>           
                                    </ul>
                                 </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
           BreedName: [],
           BreedVote : [],
        }
    },
    methods:{
          
    },
    mounted(){
        var index = true;
       var InputBreed = document.querySelector('.input-breed-cat');
       var ListCat = document.querySelector('.list-cat-wrraper');
       InputBreed.onclick = function(){
          if(index){
            ListCat.style.display = 'block'
            index = false;
          }
          else{
             ListCat.style.display = 'none'
             index = true;
          }
       }       
    },
    created(){
        axios.get(`https://api.thecatapi.com/v1/breeds`).then((res,req)=>{
            for(var i = 0; i < res.data.length;i++){
                this.BreedName.push(res.data[i].name)
            }
        })
    }
}
</script>

<style>
  .active{
    display: block;
  }
.list-cat::-webkit-scrollbar {
  width: 5px;            /* width of the entire scrollbar */
}
.list-cat::-webkit-scrollbar-track {
  background: #ccc;
  border-radius: 5px;
      /* color of the tracking area */
}

.list-cat::-webkit-scrollbar-thumb {
  background-color: rgba(141, 141, 141, 0.8);    /* color of the scroll thumb */
  border-radius: 20px;   
       /* roundness of the scroll thumb */
    /* creates padding around scroll thumb */
}
</style>