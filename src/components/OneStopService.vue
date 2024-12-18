<template>
  <div class="wrap3">
    <div class="inner">
      <div class="one">
        <div class="content">
          <h2>원스톱 서비스</h2>
          <a href="javascript:void(0)" class="blue">
            <span>중소벤처24 기업생애주기서비스&nbsp;<i class="fa-solid fa-up-right-from-square"></i></span> 
            <span>국가보훈부 나만의 예우&nbsp;<i class="fa-solid fa-up-right-from-square"></i></span></a>
        </div>
        <div class="swiper_box">
          <swiper
    :breakpoints="{
      767:{slidesPerView:'7'},
      300:{slidesPerView:'3'},
      }"
    :space-between="20"
        :modules="modules"
        class="mySwiper"
  >
    <swiper-slide>
      <div class="box skyblue">
        <div class="img_box">
          <a href="javascript:void(0)"><img src="../assets/img/ico-landing01.png" alt="icon1"></a>
        </div>
        <a href="javascript:void(0)">전입신고+</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box skyblue">
        <div class="img_box">
          <a href="javascript:void(0)"><img src="../assets/img/ico-landing02.png" alt="icon2"></a>
        </div>
        <a href="javascript:void(0)">맘편한 임신</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box skyblue">
        <div class="img_box">
          <a href="javascript:void(0)"><img src="../assets/img/ico-landing03.png" alt="icon3"></a>
        </div>
        <a href="javascript:void(0)">행복출산</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box skyblue">
        <div class="img_box">
          <a href="javascript:void(0)"><img src="../assets/img/ico-landing04.png" alt="icon4"></a>
        </div>
        <a href="javascript:void(0)">온종일 돌봄</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box skyblue">
        <div class="img_box">
          <a href="javascript:void(0)"><img src="../assets/img/ico-landing05.png" alt="icon5"></a>
        </div>
        <a href="javascript:void(0)">꿈청소년</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box skyblue">
        <div class="img_box">
          <a href="javascript:void(0)"><img src="../assets/img/ico-landing06.png" alt="icon6"></a>
        </div>
        <a href="javascript:void(0)">취업서류</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box skyblue">
        <div class="img_box">
          <a href="javascript:void(0)"><img src="../assets/img/ico-landing07.png" alt="icon7"></a>
        </div>
        <a href="javascript:void(0)">노후생활</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box skyblue">
        <div class="img_box">
          <a href="javascript:void(0)"><img src="../assets/img/ico-landing08.png" alt="icon8"></a>
        </div>
        <a href="javascript:void(0)">안심상속</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box skyblue">
        <div class="img_box">
          <a href="javascript:void(0)"><img src="../assets/img/ico-landing09.png" alt="icon9"></a>
        </div>
        <a href="javascript:void(0)">장애인지원</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box skyblue">
        <div class="img_box">
          <a href="javascript:void(0)"><img src="../assets/img/ico-landing10.png" alt="icon10"></a>
        </div>
        <a href="javascript:void(0)">내차관리</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box skyblue">
        <div class="img_box">
          <a href="javascript:void(0)"><img src="../assets/img/ico-landing11.png" alt="icon11"></a>
        </div>
        <a href="javascript:void(0)">서민금융</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box skyblue">
        <div class="img_box">
          <a href="javascript:void(0)"><img src="../assets/img/ico-landing12.png" alt="icon12"></a>
        </div>
        <a href="javascript:void(0)">가족 다문화 지원 서비스</a>
      </div>
    </swiper-slide>
  </swiper> 
        </div>
      </div>
      <div class="notice">
        <div class="text_box">
          <h2>공지사항</h2>
          <div class="flow">
            <div class="flow2">
            <a href="javascript:void(0)" class="blue">※ 무인민원발급기, 어디서나대학민원 관련 안내</a>
            <a href="javascript:void(0)" class="blue2">※ 무인민원발급기, 어디서나대학민원 관련 안내</a>
            </div>
          </div>
        </div>
          <div class="notice_box">
            <a href="javascript:void(0)" class="blue"><img src="../assets/img/ico_notice_20.png" alt="notice">&nbsp;정부24 피싱사이트 주의 안내</a>
            <ul>
              <li><a href="javascript:void(0)">
                [한국토지주택공사] 임대주택 계약(해약)사실 확인원 등 일부 서비스 중단 안내
              </a></li>
              <li><a href="javascript:void(0)">
                국가정보자원관리원 업무망 통신장비 패치 및 오프라인 점검으로 인한 순단 안내
              </a></li>
              <li><a href="javascript:void(0)">
                [법무부] 출입국에 관한 사실증명 등 서비스 일시 중단 안내
              </a></li>
              <li><a href="javascript:void(0)">
                [신용회복위원회] 채무변제 상환내역 확인서 발급 등 서비스 일시 중단 안내
              </a></li>
            </ul>
          </div>
      </div>
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
<style lang="scss" scoped>
  @import url(../assets/scss/OneStopService.scss);
</style>