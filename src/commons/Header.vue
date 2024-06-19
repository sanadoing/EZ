<script>
import { ref } from "vue";
</script>

<template>
  <header id="header">
    <div class="container">
      <div class="nav-title">
        <img class="logo" src="../assets/logo.png" alt="" />
      </div>
      <div class="nav-elements">
        <ul class="elements">
          <li class="items">
            <a href="#" class="hover:text-white title">기업/산업</a>
          </li>
          <li class="items">
            <a href="#" class="hover:text-white">용어사전</a>
          </li>
          <li class="items">
            <a href="#" class="hover:text-white">자유게시판</a>
          </li>
          <li class="items">
            <a href="#" class="hover:text-white">공지사항</a>
          </li>
        </ul>
      </div>
      <div class="login-compo">
        <ul class="compos">
          <li style="margin-right: 30px">
            <div class="login-container">
              <a href="#" class="hover:text-white"
                ><RouterLink :to="{ name: 'SignIn' }">로그인</RouterLink></a
              >
            </div>
          </li>
          <li>
            <a href="#" class="hover:text-white"
              ><RouterLink :to="{ name: 'SignUp' }">회원가입</RouterLink></a
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
.logo {
  width: 45px;
  height: 45px;
}
.compos {
  display: flex;
  justify-content: center;
  align-items: center;
}
.items {
  margin-right: 80px;
  height: 100px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-bottom: 1px solid black;
}
.items:hover {
  border-bottom: 5px solid black;
}
.nav-title {
  margin-right: 80px;
}
.container {
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100px;
  max-width: 1280px;
}
#header {
  background-color: white;
  height: 100px;
  border-bottom: 1px solid black;
}
.elements {
  display: flex;
}
.login-compo {
  display: flex;
  margin-left: auto;
}
.login-container {
  width: 100px;
  height: 50px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 30px;
}
</style>
