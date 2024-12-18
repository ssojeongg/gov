<template>
  <div class="wrap2">
    <div class="inner">
      <div class="context">
        <h2>자주찾는 서비스</h2>
        <a href="javascript:void(0)" class="gray">
          <span><i class="fa-solid fa-gear"></i>&nbsp;자주찾는 서비스설정</span>
          <span><i class="fa-solid fa-square"></i>&nbsp;설정 모아보기</span>
        </a>
      </div>
      <swiper
<<<<<<< HEAD
=======
    :slides-per-view="8"
>>>>>>> 2f78274e78f826f0689cb8adfa7538b20e1b8971
    :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
<<<<<<< HEAD
         :breakpoints="{
          767:{slidesPerView:'8'},
          300:{slidesPerView:'3'},
         }"
=======
>>>>>>> 2f78274e78f826f0689cb8adfa7538b20e1b8971
        class="mySwiper"
  >
    <swiper-slide>
      <div class="box green">
        <a href="javascript:void(0)"><span class="green">발급</span></a>
        <a href="javascript:void(0)">토지(임야)대장</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box green">
        <a href="javascript:void(0)"><span class="green">발급</span></a>
        <a href="javascript:void(0)">주민등록등본(초본)</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box green">
        <a href="javascript:void(0)"><span class="green">발급</span></a>
        <a href="javascript:void(0)">자동차 등록원부</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box green">
        <a href="javascript:void(0)"><span class="green">발급</span></a>
        <a href="javascript:void(0)">건축물대장</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box green">
        <a href="javascript:void(0)"><span class="green">발급</span></a>
        <a href="javascript:void(0)">가족관계증명서</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box pink">
        <a href="javascript:void(0)"><span class="pink">신청</span></a>
        <a href="javascript:void(0)">여권 재발급</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box green">
        <a href="javascript:void(0)"><span class="green">발급</span></a>
        <a href="javascript:void(0)">지방세 납세증명</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box green">
        <a href="javascript:void(0)"><span class="green">발급</span></a>
        <a href="javascript:void(0)">납세증명</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box green">
        <a href="javascript:void(0)"><span class="green">발급</span></a>
        <a href="javascript:void(0)">지적도(임야도)</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box green">
        <a href="javascript:void(0)"><span class="green">발급</span></a>
        <a href="javascript:void(0)">소득금액 증명</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box green">
        <a href="javascript:void(0)"><span class="green">발급</span></a>
        <a href="javascript:void(0)">토지이용 계획확인</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box green">
        <a href="javascript:void(0)"><span class="green">발급</span></a>
        <a href="javascript:void(0)">건강보험 자격득실확인</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box green">
        <a href="javascript:void(0)"><span class="green">발급</span></a>
        <a href="javascript:void(0)">농업경영체 확인서 교부</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box green">
        <a href="javascript:void(0)"><span class="green">발급</span></a>
        <a href="javascript:void(0)">운전경력 증명</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box green">
        <a href="javascript:void(0)"><span class="green">발급</span></a>
        <a href="javascript:void(0)">사업자등록 증명</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box pink">
        <a href="javascript:void(0)"><span class="pink">발급</span></a>
        <a href="javascript:void(0)">대학교 졸업(예정)증명</a>
      </div>
    </swiper-slide>
  </swiper>  
    </div>
  </div>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>
<style>
  @import url(@/assets/scss/FindService.scss);
</style>