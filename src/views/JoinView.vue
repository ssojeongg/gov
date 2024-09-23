<template>
  <div class="wrap9">
    <div class="inner">
      <div class="login_text">
        <h2>회원가입</h2>
      </div>
      <div class="button">
        <RouterLink to="/JoinSecond"><button>회원가입</button></RouterLink>
      </div>
      <div class="small_box">
        <small>※ 제시된 순서대로 따라 하시면 서비스를 이용하실 수 있습니다.</small>
      </div>
      <div class="img_box">
        <div class="first_img_box">
          <a href="javascript:void(0)" class="num1">
            <img src=".././assets/img/ico-guide-num.png" alt="num1"></a>
          <div class="text1">
            <a href="javascript:void(0)">
            회원가입 메뉴를 통해 개인, 법인 중 회원가입 대상자에게 해당되는 항목을 선택합니다.
          </a>
          </div>
          <a href="javascript:void(0)"><img src=".././assets/img/img-guide-2-1-1.png" alt="guide1"></a>
        </div>
        <div class="second_img_box">
          <a href="javascript:void(0)" class="num2">
            <img src=".././assets/img/ico-guide-num.png" alt="num2"></a>
          <div class="text2">
            <a href="javascript:void(0)">
            <span class="bold">실명확인 > 약관동의 > 회원정보 입력 후 회원가입을 완료하세요.</span>
          </a>
          <a href="javascript:void(0)"><br><span>회원가입시 실명인증이 필수이며, 해당 절차를 통해 기존 회원인지 확인할 수 있습니다.</span></a>
          </div>
          <a href="javascript:void(0)"><img src=".././assets/img/img-guide-2-1-2.png" alt="guide2"></a>
        </div>
        <div class="third_img_box">
          <a href="javascript:void(0)" class="num3">
            <img src=".././assets/img/ico-guide-num.png" alt="num3"></a>
          <div class="text3">
            <a href="javascript:void(0)">
            약관동의 후 회원정보를 입력해 주세요. 필수 정보만 입력하셔도 회원가입이 가능합니다.
          </a>
          </div>
          <a href="javascript:void(0)"><img src=".././assets/img/img-guide-2-1-3.png" alt="guide3"></a>
        </div>
      </div>
     </div>
   </div>   
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  @import url(../assets/scss/Join.scss);
</style>