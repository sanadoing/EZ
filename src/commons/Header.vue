<script>
  import { ref } from 'vue';
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="nav-title">
          MyLogo
      </div>
      <div class="nav-elements">
          <ul class="elements">
              <li class="items"><a href="#" class="hover:text-white">기업/산업</a></li>
              <li class="items"><a href="#" class="hover:text-white">용어사전</a></li>
              <li class="items"><a href="#" class="hover:text-white">자유게시판</a></li>
              <li class="items"><a href="#" class="hover:text-white">공지사항</a></li>
          </ul>
      </div>
      <div class="login-compo">
          <ul class="flex">
              <li class="items">
                <div class="login-container">
                  <a href="#" class="hover:text-white">로그인</a>
                </div></li>
              <li><a href="#" class="hover:text-white">회원가입</a></li>
          </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
.items {
  margin-right: 80px;
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
.header {
  background-color: gray;
  height: 100px;
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
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>