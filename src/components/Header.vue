<template>
  <header>
    <div class="inner">
      <div class="top">
      <div class="left">
        <img src="../assets/img/eg_logo.png" alt="eg_logo">
        <p>이 누리집은 대한민국 공식 전자정부 누리집입니다.</p>
      </div>
        </div>
       </div> 
        <div class="bottom">
          <div class="inner">
            <RouterLink to="/"><img  class="logo" src="../assets/img/logo.png" alt="logo"></RouterLink>
          <nav>
            <ul>
              <li @mouseover="menuUp = true" @mouseleave="menuUp =false"><a href="javascript:void(0)">MyGOV</a>
              <div class="sub" v-show="menuUp">
                <div class="inner">
                  <ul>
                    <li><a href="javascript:void(0)">MyGOV 홈</a></li>
                    <li><a href="javascript:void(0)">나의 신청내역</a></li>
                    <li><a href="javascript:void(0)">나의 생활정보</a></li>
                    <li><a href="javascript:void(0)">나의 정보관리</a></li>
                  </ul>
                  <ul>
                    <li><a href="javascript:void(0)">민원 신청 안내</a></li>
                    <li><a href="javascript:void(0)">기업/단체 서비스</a></li>
                    <li><a href="javascript:void(0)">원스톱 서비스</a></li>
                    <li><a href="javascript:void(0)">분야별 서비스</a></li>
                  </ul>
                  <ul>
                    <li><a href="javascript:void(0)">분야별 정책정보</a></li>
                    <li><a href="javascript:void(0)">지자체 소식</a></li>
                    <li><a href="javascript:void(0)">정부/지자체 조직도</a></li>
                    <li><a href="javascript:void(0)">공공자원공유</a></li>
                  </ul>
                  <ul>
                    <li><a href="javascript:void(0)">공지사항</a></li>
                    <li><a href="javascript:void(0)">이용안내</a></li>
                    <li><a href="javascript:void(0)">자주 묻는 질문(FAQ)</a></li>
                    <li><a href="javascript:void(0)">자료실</a></li>
                  </ul>
                  <ul>
                    <li><a href="javascript:void(0)">보안프로그램</a></li>
                    <li><a href="javascript:void(0)">개인정보처리방침</a></li>
                    <li><a href="javascript:void(0)">저작권보호정책</a></li>
                    <li><a href="javascript:void(0)">이용약관</a></li>
                  </ul>
                </div>
              </div>
              </li>
              <li @mouseover="menuUp = true" @mouseleave="menuUp =false"><a href="javascript:void(0)">민원서비스</a>
              <div class="sub" v-show="menuUp">
                <div class="inner">
                  <ul>
                    <li><a href="javascript:void(0)">MyGOV 홈</a></li>
                    <li><a href="javascript:void(0)">나의 신청내역</a></li>
                    <li><a href="javascript:void(0)">나의 생활정보</a></li>
                    <li><a href="javascript:void(0)">나의 정보관리</a></li>
                  </ul>
                  <ul>
                    <li><a href="javascript:void(0)">민원 신청 안내</a></li>
                    <li><a href="javascript:void(0)">기업/단체 서비스</a></li>
                    <li><a href="javascript:void(0)">원스톱 서비스</a></li>
                    <li><a href="javascript:void(0)">분야별 서비스</a></li>
                  </ul>
                  <ul>
                    <li><a href="javascript:void(0)">분야별 정책정보</a></li>
                    <li><a href="javascript:void(0)">지자체 소식</a></li>
                    <li><a href="javascript:void(0)">정부/지자체 조직도</a></li>
                    <li><a href="javascript:void(0)">공공자원공유</a></li>
                  </ul>
                  <ul>
                    <li><a href="javascript:void(0)">공지사항</a></li>
                    <li><a href="javascript:void(0)">이용안내</a></li>
                    <li><a href="javascript:void(0)">자주 묻는 질문(FAQ)</a></li>
                    <li><a href="javascript:void(0)">자료실</a></li>
                  </ul>
                  <ul>
                    <li><a href="javascript:void(0)">보안프로그램</a></li>
                    <li><a href="javascript:void(0)">개인정보처리방침</a></li>
                    <li><a href="javascript:void(0)">저작권보호정책</a></li>
                    <li><a href="javascript:void(0)">이용약관</a></li>
                  </ul>
                </div>
              </div>
              </li>
              <li @mouseover="menuUp = true" @mouseleave="menuUp =false"><a href="javascript:void(0)">보조금24</a>
                <div class="sub" v-show="menuUp">
                <div class="inner">
                  <ul>
                    <li><a href="javascript:void(0)">MyGOV 홈</a></li>
                    <li><a href="javascript:void(0)">나의 신청내역</a></li>
                    <li><a href="javascript:void(0)">나의 생활정보</a></li>
                    <li><a href="javascript:void(0)">나의 정보관리</a></li>
                  </ul>
                  <ul>
                    <li><a href="javascript:void(0)">민원 신청 안내</a></li>
                    <li><a href="javascript:void(0)">기업/단체 서비스</a></li>
                    <li><a href="javascript:void(0)">원스톱 서비스</a></li>
                    <li><a href="javascript:void(0)">분야별 서비스</a></li>
                  </ul>
                  <ul>
                    <li><a href="javascript:void(0)">분야별 정책정보</a></li>
                    <li><a href="javascript:void(0)">지자체 소식</a></li>
                    <li><a href="javascript:void(0)">정부/지자체 조직도</a></li>
                    <li><a href="javascript:void(0)">공공자원공유</a></li>
                  </ul>
                  <ul>
                    <li><a href="javascript:void(0)">공지사항</a></li>
                    <li><a href="javascript:void(0)">이용안내</a></li>
                    <li><a href="javascript:void(0)">자주 묻는 질문(FAQ)</a></li>
                    <li><a href="javascript:void(0)">자료실</a></li>
                  </ul>
                  <ul>
                    <li><a href="javascript:void(0)">보안프로그램</a></li>
                    <li><a href="javascript:void(0)">개인정보처리방침</a></li>
                    <li><a href="javascript:void(0)">저작권보호정책</a></li>
                    <li><a href="javascript:void(0)">이용약관</a></li>
                  </ul>
                </div>
              </div>
              </li>
              <li @mouseover="menuUp = true" @mouseleave="menuUp =false"><a href="javascript:void(0)">정책정보</a>
                <div class="sub" v-show="menuUp">
                <div class="inner">
                  <ul>
                    <li><a href="javascript:void(0)">MyGOV 홈</a></li>
                    <li><a href="javascript:void(0)">나의 신청내역</a></li>
                    <li><a href="javascript:void(0)">나의 생활정보</a></li>
                    <li><a href="javascript:void(0)">나의 정보관리</a></li>
                  </ul>
                  <ul>
                    <li><a href="javascript:void(0)">민원 신청 안내</a></li>
                    <li><a href="javascript:void(0)">기업/단체 서비스</a></li>
                    <li><a href="javascript:void(0)">원스톱 서비스</a></li>
                    <li><a href="javascript:void(0)">분야별 서비스</a></li>
                  </ul>
                  <ul>
                    <li><a href="javascript:void(0)">분야별 정책정보</a></li>
                    <li><a href="javascript:void(0)">지자체 소식</a></li>
                    <li><a href="javascript:void(0)">정부/지자체 조직도</a></li>
                    <li><a href="javascript:void(0)">공공자원공유</a></li>
                  </ul>
                  <ul>
                    <li><a href="javascript:void(0)">공지사항</a></li>
                    <li><a href="javascript:void(0)">이용안내</a></li>
                    <li><a href="javascript:void(0)">자주 묻는 질문(FAQ)</a></li>
                    <li><a href="javascript:void(0)">자료실</a></li>
                  </ul>
                  <ul>
                    <li><a href="javascript:void(0)">보안프로그램</a></li>
                    <li><a href="javascript:void(0)">개인정보처리방침</a></li>
                    <li><a href="javascript:void(0)">저작권보호정책</a></li>
                    <li><a href="javascript:void(0)">이용약관</a></li>
                  </ul>
                </div>
              </div>
              </li>
              <li @mouseover="menuUp = true" @mouseleave="menuUp =false"><a href="javascript:void(0)">고객센터</a>
                <div class="sub" v-show="menuUp">
                <div class="inner">
                  <ul>
                    <li><a href="javascript:void(0)">MyGOV 홈</a></li>
                    <li><a href="javascript:void(0)">나의 신청내역</a></li>
                    <li><a href="javascript:void(0)">나의 생활정보</a></li>
                    <li><a href="javascript:void(0)">나의 정보관리</a></li>
                  </ul>
                  <ul>
                    <li><a href="javascript:void(0)">민원 신청 안내</a></li>
                    <li><a href="javascript:void(0)">기업/단체 서비스</a></li>
                    <li><a href="javascript:void(0)">원스톱 서비스</a></li>
                    <li><a href="javascript:void(0)">분야별 서비스</a></li>
                  </ul>
                  <ul>
                    <li><a href="javascript:void(0)">분야별 정책정보</a></li>
                    <li><a href="javascript:void(0)">지자체 소식</a></li>
                    <li><a href="javascript:void(0)">정부/지자체 조직도</a></li>
                    <li><a href="javascript:void(0)">공공자원공유</a></li>
                  </ul>
                  <ul>
                    <li><a href="javascript:void(0)">공지사항</a></li>
                    <li><a href="javascript:void(0)">이용안내</a></li>
                    <li><a href="javascript:void(0)">자주 묻는 질문(FAQ)</a></li>
                    <li><a href="javascript:void(0)">자료실</a></li>
                  </ul>
                  <ul>
                    <li><a href="javascript:void(0)">보안프로그램</a></li>
                    <li><a href="javascript:void(0)">개인정보처리방침</a></li>
                    <li><a href="javascript:void(0)">저작권보호정책</a></li>
                    <li><a href="javascript:void(0)">이용약관</a></li>
                  </ul>
                </div>
              </div>
              </li>
            </ul>
          </nav>
          </div>
        </div>
  </header>
</template>
<script>
export default {
  data : function() {
    return {
      menuUp : false
      }
    }
}
</script>
<style lang="scss" scoped>
  @import url(../assets/scss/header.scss);
</style>