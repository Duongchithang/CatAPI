<template>
  <div class="around-footer rounded-t-[50px] w-full h-[100px] xs:mt-[50px] lg:mt-[100px] bg-black">
      <div class="around-content-footer flex justify-between items-center h-full xs:mx-[20px] lg:mx-[50px]">
        <img src="https://cat-wiki.iamstarcode.com/_ipx/w_128,q_75/%2Fimg%2Flogo2.svg?url=%2Fimg%2Flogo2.svg&w=128&q=75" alt="">
        <div class="around-content-right-footer flex items-center justify-between">
            <span  class="text-white xs:mr-[10px] text-end xs:text-[12px] lg:text-[14px]">{{(check>900) ? reverseText : reverseText1}}</span>
            <svg width="32" height="32" viewBox="0 0 54 46" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-d0f13c0b72930c10"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.6821 9.04026L19.9224 45.0539L23.4005 45.1741L34.1603 9.16889L30.6821 9.04026Z" fill="#3E0EEB" class="jsx-d0f13c0b72930c10"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M35.0418 11.1861L39.5741 13.8068L44.1064 16.4191L39.5741 19.0397L35.0418 21.652V11.1861Z" fill="#FE2D04" class="jsx-d0f13c0b72930c10"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M35.0418 21.6677L44.0991 16.4191L44.1064 21.652V26.8923L35.0418 21.6677Z" fill="#FF6738" class="jsx-d0f13c0b72930c10"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M44.1064 26.8923L44.1148 21.652V16.4191L53.172 21.6593L44.1064 26.8923Z" fill="#FE0000" class="jsx-d0f13c0b72930c10"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M44.1064 26.8923L53.1647 21.6447L53.1793 32.1106L48.6471 29.4983L44.1064 26.8923Z" fill="#C10100" class="jsx-d0f13c0b72930c10"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M44.1064 26.8923L48.6397 29.5056L53.172 32.1252L44.1064 37.3582V26.8923Z" fill="#FE0000" class="jsx-d0f13c0b72930c10"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M35.0492 32.1336L44.1064 26.8923L44.1221 37.3582L35.0492 32.1336Z" fill="#BC0078" class="jsx-d0f13c0b72930c10"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M35.0492 32.1336L39.5814 34.7459L44.1148 37.3665L35.0492 42.5995V32.1336Z" fill="#4E0096" class="jsx-d0f13c0b72930c10"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M44.1148 16.4191L44.0991 5.9532L53.172 11.1788L44.1148 16.4191Z" fill="#FF6738" class="jsx-d0f13c0b72930c10"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M44.1148 5.96889L53.172 0.720262L53.1877 11.1861L44.1148 5.96889Z" fill="#FFCE34" class="jsx-d0f13c0b72930c10"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5367 11.48L9.46379 16.7056L18.5221 21.9459L18.5367 11.48Z" fill="#FE2D04" class="jsx-d0f13c0b72930c10"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5221 21.9459L9.46379 16.7056L9.45647 21.9386V27.1715L18.5221 21.9459Z" fill="#FF6738" class="jsx-d0f13c0b72930c10"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.45647 27.1715V21.9386L9.46379 16.7056L0.39085 21.9312L9.45647 27.1715Z" fill="#FE0000" class="jsx-d0f13c0b72930c10"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.45647 27.1715L0.39085 21.9312V27.1642L0.38353 32.3971L9.45647 27.1715Z" fill="#C10100" class="jsx-d0f13c0b72930c10"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5064 32.4191L13.9814 29.7911L9.45647 27.1715L9.44915 32.4044L9.43347 37.6374L18.5064 32.4191Z" fill="#BC0078" class="jsx-d0f13c0b72930c10"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5064 32.4191L13.9741 35.0324L9.43347 37.6374L18.4918 42.885L18.5064 32.4191Z" fill="#4E0096" class="jsx-d0f13c0b72930c10"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.43347 37.6374L9.44915 32.4118L9.45647 27.1715L0.38353 32.3888L9.43347 37.6374Z" fill="#FE0000" class="jsx-d0f13c0b72930c10"></path></svg>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
      return {
        text : 'Created By Chi Thang from Devchallenge',
        text1: 'Created By Chi Thang',
        check : screen.width
      }
    },
    computed:{
      reverseText: function(){
        return this.text.toUpperCase();
      },
      reverseText1 : function(){
        return this.text1.toUpperCase();
      }
    }
}
</script>

<style>

</style>