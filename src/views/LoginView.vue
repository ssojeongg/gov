<template>
  <div class="wrap8">
    <div class="inner">
      <div class="login_text">
        <h2>로그인</h2>
      </div>
      <div class="text_box">
        <p>□ 키보드보안 프로그램 적용</p>
        <p>※ 안전한 정부24 서비스 이용을 위해 키보드보안 프로그램 적용을 권장합니다.</p>
      </div>
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
                  <td><img src="../assets/img/ico_spr_01.png" alt="ico01"></td>
                  <td><button>간편인증, 모바일 신분증</button></td>
                </tr>
                <tr>
                  <td><img src="../assets/img/ico_spr_02.png" alt="ico02"></td>
                  <td><button>공동인증서</button></td>
                </tr>
                <tr>
                  <td><img src="../assets/img/ico_spr_login3.png" alt="ico03"></td>
                  <td><button>금융인증서</button></td>
                </tr>
              </table>
            </dd>
            <dd v-if="currentTab === 1">
              <table>
                <tr>
                  <td><img src="../assets/img/ico_login_digital.png" alt=""></td>
                  <td><button>디지털원패스 로그인</button></td>
                </tr>
              </table>
            </dd>
            <dd v-if="currentTab === 2">
              <table>
                <tr>
                  <td><img src="../assets/img/ico_fingerprint_02.png" alt=""></td>
                  <td><input type="text" placeholder="&nbsp;&nbsp;&nbsp;아이디를 입력하세요."></td>
                  <td><button>지문/얼굴 보안인증</button></td>
                </tr>
              </table>
            </dd>
            <dd v-if="currentTab === 3">
              <table>
                <tr>
                  <td><img src="../assets/img/ico_spr_nonMember2.png" alt=""></td>
                  <td><button>비회원 로그인</button></td>
                </tr>
              </table>
            </dd>
          </dl>
        </div>
      <div class="check_wrap">
        <h3><img src="../assets/img/ico_service_notice.png" alt="notice">&nbsp;&nbsp;확인하세요!</h3>
        <p>- 아이디 로그인 시, 서비스가 일부 제한될 수 있습니다.</p>
        <p>- 개인정보 보호를 위해 비밀번호 5회 이상 오류 시, 비밀번호 재설정이 필요합니다.</p>
        <p>- 비밀번호는 주기적(3개월)으로 변경하시고, 서비스 이용 후 반드시 로그아웃 하시기 바랍니다.</p>
      </div>
    </div>
  </div> 
</template>
<script>
export default {
  data() {
    return {
      currentTab: 0,
      tabList: [
        {name:"인증서"},
        {name:"디지털원패스"},
        {name:"지문/얼굴 보안인증"},
        {name:"비회원로그인"},
      ],
    }
  }
}
</script>
<style lang="scss" scoped>
  @import url(../assets/scss/Login.scss);
</style>