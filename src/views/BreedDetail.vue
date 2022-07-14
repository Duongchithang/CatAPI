<template>
  <div class="around-breedDetail xs:mt-[30px] xs:mx-[30px] xl:mt-[30px] xl:mx-[40px] overflow-x-hidden">
    <router-link to="/"><img src="../assets/imageCat/imgcat/CatwikiLogo.svg" alt=""></router-link>
    <div class="wrapper-info xs:mt-[20px] lg:mt-[50px] flex xs:flex-col lg:flex-row lg:justify-between lg:items-start" >
      <div class="wrapper-image w-[265px] h-[265px] xs:items-center">
        <img class="w-full h-full object-cover rounded-[30px]" :src="Source.ImageBreed" alt="">
      </div>
      <div class="wrapper-content xs:w-full lg:w-[70%]">
        <h2 class="BreedName text-[35px] font-extrabold text-[#291507] xs:mt-[30px] lg:mt-[0]">{{Source.BreedName}}</h2>
        <p class="BreedDes mt-[10px] text-[18px] text-[#291507] font-medium">{{Source.Description}}</p>
        <div class="around-title">
          <span class="head-text">Temprament :</span>
          <span class="behind-text font-medium text-[#291507]">{{Source.Temprament}}</span>
        </div>
        <div class="around-title">
          <span class="head-text">Origin :</span>
          <span class="behind-text font-medium text-[#291507]">{{Source.Origin}}</span>
        </div>
        <div class="around-title">
          <span class="head-text">Life Span :</span>
          <span class="behind-text font-medium text-[#291507]">{{Source.LifeSpan}}</span>
        </div>
        <div class="around-content-info">
          <div class="around-item-info">
            <span class="text-title text-title-adap">Adaptability :</span>
            <ul class="wrapper-pointer">
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
            </ul>
          </div>
          <div class="around-item-info">
            <span class="text-title text-title-aff">Affection level :</span>
            <ul class="wrapper-pointer">
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
            </ul>
          </div>
          <div class="around-item-info">
            <span class="text-title text-title-child">Child Friendly :</span>
            <ul class="wrapper-pointer">
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
            </ul>
          </div>
          <div class="around-item-info">
            <span class="text-title text-title-gro">Grooming :</span>
            <ul class="wrapper-pointer">
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
            </ul>
          </div>
          <div class="around-item-info">
            <span class="text-title text-title-intell">Intelligence :</span>
            <ul class="wrapper-pointer">
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
            </ul>
          </div>
          <div class="around-item-info">
            <span class="text-title text-title-health">Health issues :</span>
            <ul class="wrapper-pointer">
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
            </ul>
          </div>
          <div class="around-item-info">
            <span class="text-title text-title-social">Social needs :</span>
            <ul class="wrapper-pointer">
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
            </ul>
          </div>
           <div class="around-item-info">
            <span class="text-title text-title-stranger">Stranger friendly :</span>
            <ul class="wrapper-pointer">
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
              <li class="item-pointer"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-other mt-[50px]">
      <h1 class="text-[40px] text-[#291507] font-semibold">Other photos</h1>
      <div class="wrapper-other-image mt-[30px] grid xs:grid-cols-2 xs:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 xs:gap-[30px]  lg:gap-[50px] lg:row-[50px]">
        <div class="around-img" v-for="Img in OtherImage" :key="Img">
          <img class="rounded-[30px] w-full h-full object-cover" :src="Img" alt="">
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import axios from 'axios'
export default {
  data(){
     return{
        RouteName : this.$route.params.name,
        OtherImage : [],
        Number : [1,2,3,4,5],
        Source: {
             BreedName : '',
             Description:'',
             Temprament:'',
             Origin : '',
             LifeSpan : '',
             ImageBreed : '',
        },
        objLevel: {
          Adaptability : 0, 
          Affection : 0,
          Child : 0,
          Grooming : 0,
          Intelligence : 0,
          Health : 0,
          Social : 0,
          Stranger : 0
       }
     } 
  },
 async created(){
   await axios.get(`https://api.thecatapi.com/v1/breeds`).then((res)=>{
     for(var i = 0 ; i < res.data.length;i++){
      if(res.data[i].name == this.RouteName){
        ValueText(res.data[i], this.Source)
        properties(res.data[i], this.objLevel)
        this.DOMJS(res.data[i])
      }
     }
     for(var i = 0 ; i < 8;i++){
      this.OtherImage.push(res.data[i].image.url)
     }
    });
   function ValueText(value , source){
    source.BreedName = value.name
    source.Temprament = value.temperament
    source.Origin = value.origin
    source.LifeSpan = value.life_span
    source.Description = value.description
    source.ImageBreed = value.image.url;
   }
   function properties(value , properti){
    properti.Adaptability = value.adaptability;
    properti.Affection = value.affection_level
    properti.Child = value.child_friendly;
    properti.Grooming = value.grooming;
    properti.Intelligence = value.intelligence
    properti.Health = value.health_issues
    properti.Social = value.social_needs
    properti.Stranger = value.stranger_friendly; 
   }
 
  },
  mounted(){
    
  },
  methods:{
      DOMJS(value){
       var Adaptability = document.querySelector('.text-title-adap')
       var Affection = document.querySelector('.text-title-aff');
       var Child = document.querySelector('.text-title-child');
       var Grooming = document.querySelector('.text-title-gro');
       var  Intelligence  = document.querySelector('.text-title-intell')
       var Health = document.querySelector('.text-title-health');
       var Social = document.querySelector('.text-title-social');
       var  Stranger = document.querySelector('.text-title-stranger');
       this.Practive(value.adaptability,Adaptability)
       this.Practive(value.affection_level, Affection)
       this.Practive(value.child_friendly, Child)
       this.Practive(value.grooming, Grooming)
       this.Practive(value.intelligence, Intelligence)
       this.Practive(value.health_issues,Health)
       this.Practive(value.social_needs,Social)
       this.Practive(value.stranger_friendly, Stranger)
      },
      Practive(value, properties){
          let title = properties.parentElement;
          let Li = title.querySelectorAll('.item-pointer');
          for(var i = 0 ; i < value;i++){
            Li[i].style.background = '#291507';
          }
      }


  },
   components:{
    Footer
   }
}
</script>

<style scoped>
   .around-title{
    margin-top: 20px;
   }
    .head-text{
      font-weight: 700;
      color: #291507;
      margin-right: 10px;
      font-size: 18px;
    }
    .around-content-info{
      margin-top: 20px;
    }
    .text-title{
      font-size: 18px;
      font-weight: 700;
      color :#291507
    }
    .item-pointer{
      width: 70px;
      height: 15px;
      border-radius: 20px;
      background: #E0E0E0;
    }
    .around-item-info{
      display: flex;
      align-items: center;
      width: 700px;
      justify-content: space-between;
      margin-top: 30px;
    }
    /* Css UL level */
    .wrapper-pointer{
      display: flex;
      gap: 30px;
    }
    .active{
      background: #291507;
    }
    @media screen and (max-width: 550px){
        .around-item-info{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .wrapper-pointer{
          gap:10px;
          margin-top:10px
        }
        .item-pointer{
          width: 50px;
          height: 10px;
        }
        .around-item-info{
          margin-top:20px;
        }
    }
</style>

