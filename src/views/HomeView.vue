<script setup>
import Header from "../commons/Header.vue";
</script>

<template>
  <Header />

  <div class="container">
    <div class="contentBox">
      <div class="contentItem">
        <div style="font-size: 35px; font-weight: 700">
          <span>기업 레포트 분석</span>
          <span> 어려우신가요 ?</span>
        </div>
        <div style="font-size: 25px; font-weight: 700; margin-bottom: 30px">
          <span class="underline">원하는 기업</span
          ><span> 을 검색해보세요 !</span>
        </div>

        <form>
          <div class="search">
            <input class="search-input" type="text" placeholder="Search" />
            <button class="searchBtn">
              <span class="search-icon material-symbols-outlined">
                search
              </span>
            </button>
          </div>
        </form>

        <div>
          <span>
            <button class="companyBtn">네이버</button>
            <button class="companyBtn">카카오</button>
            <button class="companyBtn">삼성전자</button>
          </span>
        </div>
      </div>
      <div class="contentItemEllipse floating-image">
        <img src="../assets/ellipse_blue.png" />
      </div>
      <div class="contentItemEllipse2 floating-image">
        <img src="../assets/ellipse_blue.png" />
      </div>
      <div class="contentItemNote floating-image">
        <img src="../assets/note.png" />
      </div>
      <div class="contentItemPencil floating-image">
        <img src="../assets/pencil.png" />
      </div>
      <div class="contentItemBear floating-image">
        <img src="../assets/bear.png" />
      </div>

      <div class="whiteBox floating-image"></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  /* display: flex; */
  /* align-items: center; */
  margin: 0 auto;
  max-width: 1280px;
}

.contentBox {
  position: relative;
  height: 1000px;
  /* background: #b4b4b4; */
}

.contentItem {
  position: absolute;
  top: 25%;
  /*left: 50%; */
  margin: 0 auto;
}

.contentItemEllipse {
  position: absolute;
  top: 17%;
  right: 0%;
  margin: 0 auto;
  width: 500px;
  height: 280px;
}

.contentItemEllipse2 {
  position: absolute;
  bottom: 15%;
  right: 15%;
  margin: 0 auto;
  width: 500px;
  height: 280px;
}

.contentItemNote {
  position: absolute;
  top: 10%;
  right: 3%;
  margin: 0 auto;
  width: 230px;
  height: 230px;
}

.contentItemPencil {
  position: absolute;
  top: 26%;
  right: 18%;
  margin: 0 auto;
  width: 195px;
  height: 195px;
}

.contentItemBear {
  position: absolute;
  bottom: 15.2%;
  right: 25%;
  margin: 0 auto;
  width: 230px;
  height: 230px;
}

.floating-image {
  /* width: 200px; 이미지 크기를 조정하세요 */
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

.whiteBox {
  width: 135px;
  height: 60px;
  position: absolute;
  top: 39.3%;
  right: 17%;
  background-color: white;
}

.underline {
  text-decoration-line: underline;
  text-underline-position: under;
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}

.search {
  --padding: 14px;

  width: max-content;
  display: flex;
  align-items: center;
  padding: var(--padding);
  border-radius: 40px;
  border: 1px solid #b4b4b4;
  background: #ffffff;
  width: 650px;
  height: 68px;
}

.search-input {
  font-size: 16px;
  font-family: "Lexend", sans-serif;
  color: #333333;
  margin-right: var(--padding);
  border: none;
  background: transparent;
  flex: 1;
  outline: none;
}

.search-input::placeholder,
.search-icon {
  color: rgba(0, 0, 0, 0.25);
}

.companyBtn {
  width: 95px;
  height: 39px;
  position: relative;
  border-radius: 30px;
  font-family: "paybooc-Light", sans-serif;
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
  border: 3px solid #303030;
  color: #303030;
  margin-right: 15px;
  margin-top: 30px;
}

.companyBtn:hover {
  width: 100px;
  height: 43px;
  color: #ffffff;
  background: #303030;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.searchBtn {
  background: none;
  border: none;
  color: black;
}
</style>
