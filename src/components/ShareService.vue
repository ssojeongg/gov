<template>
  <div class="wrap5">
    <div class="inner">
      <div class="col1">
        <div class="declaration">
          <div class="img_box">
            <a href="javascript:void(0)">
              <img src="../assets/img/main_icon_img_pc2.png" alt="main_icon2">
              <p>국고보조금<br>부정수급신고</p>
            </a>
          </div>
        </div>
        <div class="service">
          <div class="img_box">
            <a href="javascript:void(0)">
              <img src="../assets/img/main_icon_img_pc1.png" alt="main_icon1">
              <p>공공개방자원<br>공유누리 서비스</p>
            </a>
          </div>
        </div>
      </div>
      <div class="col2">
        <div class="tab">
          <dl>
            <div class="button">
        <button v-for="(tab, index) in tabList" :key="index"
        @click.prevent="currentTab = index" :class="{'active' : currentTab === index}">
        {{ tab.name }}</button>
        </div>
            <dd v-if="currentTab === 0">
              <table>
                <tr>
                  <td>식품의약품안전처 '2025 예산안'</td>
                  <td>2024.09.03</td>
                </tr>
                <tr>
                  <td>1차관, 추석명절 대형마트 물가점검</td>
                  <td>2024.09.03</td>
                </tr>
                <tr>
                  <td>방송통신위원회 '2025 예산안'</td>
                  <td>2024.09.03</td>
                </tr>
                <tr>
                  <td>자연과 교감하고 산림에서 치유받자!… 산림치유프로그램 경진대회 개최</td>
                  <td>2024.09.03</td>
                </tr>
              </table>
            </dd>
            <dd v-if="currentTab === 1">
              <table>
                <tr>
                  <td>중국, 2024년 9월 식품 및 관련 표준 총 126종 정식 시행</td>
                  <td>2024.09.02</td>
                </tr>
                <tr>
                  <td>외국소재 학력인정학교(학적서류 간소화 학교) 목록 안내(2024. 8. 30. 기준)</td>
                  <td>2024.09.02</td>
                </tr>
                <tr>
                  <td>일본 후생노동성, 2023년도 '수입식품감시지도계획에 근거한 감시지도 결과' 및 '수입식품감시 통계' 공표</td>
                  <td>2024.09.02</td>
                </tr>
                <tr>
                  <td>캐나다 연방보건부, 브롬화 식물성 유지 삭제를 위한 '기타 사용 용도가 허용된 첨가물 목록' 개정</td>
                  <td>2024.09.02</td>
                </tr>
              </table>
            </dd>
            <dd v-if="currentTab === 2">
              <table>
                <tr>
                  <td>무기체계 수명주기관리 점검표 발간 배포</td>
                  <td>2024.09.02</td>
                </tr>
                <tr>
                  <td>육군의 뉴런, 지상지휘통제체계</td>
                  <td>2024.09.02</td>
                </tr>
                <tr>
                  <td>대포병탐지레이더 "천경-Ⅱ" 창정비 요소개발 추진</td>
                  <td>2024.09.02</td>
                </tr>
                <tr>
                  <td>AI, 빅데이터 기반의 국방통합원가시스템 이렇게 확 달라졌습니다!</td>
                  <td>2024.09.02</td>
                </tr>
              </table>
            </dd>
            <dd v-if="currentTab === 3">
              <table>
                <tr>
                  <td>일일 금융시장 동향[9.2일]</td>
                  <td>2024.09.02</td>
                </tr>
                <tr>
                  <td>법무부 교정정보빅데이터팀 운영 성과보고서 공시</td>
                  <td>2024.08.30</td>
                </tr>
                <tr>
                  <td>2024년 AI기반 안전신고 정보의 과학적 분석 서비스 기술개발 신규과제 공모</td>
                  <td>2024.08.30</td>
                </tr>
                <tr>
                  <td>일일 금융시장 동향[8.29일]</td>
                  <td>2024.08.29</td>
                </tr>
              </table>
            </dd>
          </dl>
        </div>
      </div>
      <div class="col3">
        <swiper
      spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
>
  <swiper-slide class="img1"><img src="../assets/img/slide1.png" alt="slide1"></swiper-slide>
  <swiper-slide class="img2"><img src="../assets/img/slide2.png" alt="slide2"></swiper-slide>
</swiper>
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
data() {
  return {
    openModal: true,
    opendModal: true,
    currentTab: 0,
    tabList: [
        {name:"정책뉴스"},
        {name:"연구보고서"},
        {name:"간행물"},
        {name:"정책자료"},
      ],
  }
  
},
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
}
</script>
<style lang="scss" scoped>
  @import url(../assets/scss/ShareService.scss);
</style>