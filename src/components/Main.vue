<template>
 <div class="wrap3">
  <div class="inner">
    <div class="area">
      <div class="img">
        <a href="javascript:void(0)">
        <img src="../assets/img/main.jpg" alt="main">
      </a>
      </div>
      <div class="search">
        <a href="javascript:void(0)">자주찾는 검색</a>
        <form>
          <select>
          <option value="주민등록등본"><span>1</span>&nbsp; 주민등록등본</option>
          <option value="가족관계증명서"><span>2</span>&nbsp; 가족관계증명서</option>
          <option value="세목별과세증명서"><span>3</span>&nbsp; 세목별과세증명서</option>
          <option value="전입신고"><span>4</span>&nbsp; 전입신고</option>
          <option value="여권재발급"><span>5</span>&nbsp; 여권재발급</option>
          </select>
        </form>
        <input type="text" placeholder="찾으시는 서비스를 입력하세요 ">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
    <div class="login_box">
      <div class="login">
        <img src="../assets/img/login.png" alt="login">
        <a href="javascript:void(0)">내게 필요한 민원/생활/혜택<br>
          정보를 확인하세요.
        </a>
        <RouterLink to="/Login"><button><a href="javascript:void(0)">로그인</a></button></RouterLink>
        <div class="text">
          <div class="left">
            <a href="javascript:void(0)">아이디 찾기</a>
            <a href="javascript:void(0)">비밀번호 찾기</a>
          </div>
          <div class="right">
            <RouterLink to="/Join"><p>회원가입</p></RouterLink>
          </div>
        </div>
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
  @import url(@/assets/scss/Main.scss);
</style>