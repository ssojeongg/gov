<template>
  <div class="wrap6">
    <div class="inner">
      <h2>국민 소통채널</h2>
      <div class="inner2">
        <div class="banner">
        <swiper
    :breakpoints="{
      767:{slidesPerView:'5'},
      300:{slidesPerView:'1'},
      }"
    :space-between="20"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <img src="../assets/img/img_channel.jpg" alt="channel1">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/img_channel2.jpg" alt="channel2">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/img_channel3.jpg" alt="channel3">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/img_channel4.jpg" alt="channel4">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/img_channel5.jpg" alt="channel5">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/img_channel6.jpg" alt="channel6">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/img_channel7.jpg" alt="channel7">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/img_channel8.png" alt="channel8">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/img_channel9.png" alt="channel9">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/img_channel10.jpg" alt="channel10">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/img_channel11.png" alt="channel11">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/img_channel12.jpg" alt="channel12">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/img_channel13.png" alt="channel13">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/img_channel4.jpg" alt="channel14">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/img_channel5.jpg" alt="channel15">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/img_channel6.jpg" alt="channel16">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/img_channel7.jpg" alt="channel17">
    </swiper-slide>
  </swiper>
    </div>
    </div>
  </div>
      </div>
</template>
<script>
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
  };
</script>
<style lang="scss" scoped>
  @import url(../assets/scss/Banner.scss);
</style>