<script></script>

<template>
  <div class="main">
    <div class="login-box">
      <div class="login-header">
        <header>로그인</header>
      </div>
      <div class="input-box">
        <!-- v-model로 양방향 바인딩 하기 -->
        <input
          type="text"
          class="input-field"
          placeholder="아이디"
          autocomplete="off"
          required
          style="margin-bottom: 30px"
        />
      </div>
      <div class="input-box">
        <!-- v-model로 양방향 바인딩 하기 -->
        <input
          type="password"
          class="input-field"
          placeholder="비밀번호"
          autocomplete="off"
          required
          style="margin-bottom: 10px"
        />
      </div>
      <div class="options">
        <section>
          <!-- v-model로 양방향 바인딩 하기 -->
          <input type="checkbox" id="check" />
          <label for="check">아이디 기억하기</label>
        </section>
        <section>
          <a href="#">비밀번호 찾기</a>
        </section>
      </div>

      <div class="input-submit">
        <button class="submit-btn" id="submit" @click="validate"></button>
        <label for="submit">로그인</label>
      </div>
      <div class="sign-up-link">
        <p>
          아이디가 존재하지 않습니까?
          <a href="#"
            ><RouterLink :to="{ name: 'SignUp' }">회원가입</RouterLink></a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #dfdfdf;
}
.login-box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 700px;
  height: 480px;
  padding: 30px;
}
.login-header {
  text-align: center;
  margin: 20px 0 40px 0;
}
.login-header header {
  color: #333;
  font-size: 30px;
  font-weight: 600;
}
.input-box .input-field {
  width: 100%;
  height: 60px;
  font-size: 17px;
  padding: 0 25px;

  border-radius: 10px;
  border: none;
  box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.05);
  outline: none;
  transition: 0.3s;
}
::placeholder {
  font-weight: 500;
  color: #222;
}
.input-field:focus {
  width: 105%;
}
.options {
  display: flex;
  justify-content: space-between;
  margin: 20px 30px 40px;
}
section {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;
}
#check {
  margin-right: 10px;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
section a {
  color: #555;
}
.input-submit {
  position: relative;
}
.submit-btn {
  width: 100%;
  height: 60px;
  background: #222;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}
.input-submit label {
  position: absolute;
  top: 45%;
  left: 50%;
  color: #fff;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.submit-btn:hover {
  background: #000;
  transform: scale(1.05, 1);
}
.sign-up-link {
  text-align: center;
  font-size: 15px;
  margin-top: 20px;
}
.sign-up-link a {
  color: #000;
  font-weight: 600;
}
</style>
