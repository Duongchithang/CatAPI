<template>
  <div class="around-breed-vote flex lg:flex-row xs:mt-[50px] lg:mt-[100px] xs:flex-col lg:justify-between">
    <div class="text-info-content lg:w-[50%] xs:w-[100%]">
        <h1 class="question-cat text-[45px] text-[#291507] font-bold relative py-[20px] xs:leading-[60px]"><span>Why should you have a</span> <span>cat?</span></h1>
        <p class="text-[18px] font-medium">Having a cat around  you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
        <div class="around-read-more mt-[50px] text-[13px] text-[#948B8A] font-extrabold items-center flex">
            <span class="">READ MORE</span>
            <i class="fa-solid fa-arrow-right ml-[10px]"></i>
        </div>
    </div>
    <div class="around-content-image-cat lg:w-[50%] xs:w-[100%] xs:mt-[50px] lg:mt-[0px]">
        <div class="around-some-image">
           <div class="around-wrraper-cat">
             <img class="image1" src="../assets/imageCat/imgcat/img1.png" alt="">
              <img class="image3" src="../assets/imageCat/imgcat/img3.png" alt="">
           </div>
            <img class="image2" src="../assets/imageCat/imgcat/img2.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
 <style scoped>
 .question-cat::before{
  position: absolute;
  content: "";
  width: 80px;
  height: 4px;
  background: #291507;
  top: 0;
  border-radius: 4px;
  left: 0;
 }
 span{
  display: block;
 }
.around-some-image{
  display : grid;
  grid-template-columns: repeat(2,1fr);
  gap: 10px;
}
.image3{
  margin-top: 20px;
}
</style>