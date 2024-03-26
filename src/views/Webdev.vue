<template>
  <div class="webdev-container">
    <NavbarComponent />

    <div>
      <h2>Introduction to Website Development</h2>

      <div class="vid-txt">
        <div>
          <img
            class="img-video"
            src="/images/webdev-update.png"
            alt="playbutton"
          />
          <div class="btns-group">
            <el-button
              class="btns"
              type="success"
              style="margin-left: 0px; padding: 0px"
              ><img src="/icons/lessos-vec.png" />
              <p class="btn-txt">80 Lessons</p></el-button
            >

            <el-button
              class="btns"
              type="success"
              style="margin-left: 0px; padding: 0px"
              ><img src="/icons/projects-vec.png" />
              <p class="btn-txt">12 Projects</p></el-button
            >

            <el-button
              class="btns"
              type="success"
              style="margin-left: 0px; padding: 0px"
              ><img src="/icons/ques-vec.png" />
              <p class="btn-txt">10 Questions</p></el-button
            >
          </div>
        </div>
      <div class="left-txt">
        <div class="ft-box">

          <P id="first-txt"
          >Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Uenim ad minim
          veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
          iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur.
        </P>
         
        </div>

        <div class="box">
          <div class="check">
            <section class="sections">
              <el-checkbox
                id="box-check"
                v-model="checked1"
                label="Lorem ipsum dolor sit amet, consect"
              />
            </section>

            <section class="sections">
              <el-checkbox
                id="box-check"
                v-model="checked2"
                label="Lorem ipsum dolor sit amet, consect"
              />
            </section>

            <section class="sections">
              <el-checkbox
                id="box-check"
                v-model="checked3"
                label="Lorem ipsum dolor sit amet, consect"
              />
            </section>

            <section class="sections">
              <el-checkbox
                id="box-check"
                v-model="checked4"
                label="Lorem ipsum dolor sit amet, consect"
              />
            </section>

            <section class="sections">
              <el-checkbox
                id="box-check"
                v-model="checked5"
                label="Lorem ipsum dolor sit amet, consect"
              />
            </section>
          </div>

          <div class="button-box">
            <el-button class="p-now" type="success">
              <p id="pn-text">Purchase Now</p>
            </el-button>
          </div>
        </div>
      </div>
      </div>

     
        <div class="menu-container">
          <div class="title">
            <h3 id="first-h3">Content</h3>

            <div class="play-txt">
              <img
                class="play-btn"
                src="/icons/play-button-inside-a-circle 2.png"
                alt="play-btn"
              />
              <h3 id="second-h3">13hr total length</h3>
            </div>
          </div>

          <el-menu
            :default-active="1"
            class="el-menu-demo"
            mode="vertical"
            @select="handleSelect"
            :ellipsis="false"
          >
            <el-sub-menu class="submenu" index="1">
              <template #title>1. Introductions</template>
              <el-menu-item index="1-1">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="1-1" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" class="one-btn" id="1-1" value="1-1" />
                </div>
              </el-menu-item>

              <el-menu-item index="1-2">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="1-2" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <button
                    :class="{ active: isActive }"
                    @click="toggleActive"
                    id="1-2"
                  ></button>
                </div>
              </el-menu-item>

              <el-menu-item index="1-3">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="1-3" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <button
                    :class="{ active: isActive }"
                    @click="toggleActive"
                    id="1-3"
                  ></button>
                </div>
              </el-menu-item>
            </el-sub-menu>

            <div class="border-line"></div>

            <el-sub-menu class="submenu" index="2">
              <template #title>2. Lorem ipsum dolor sit amet</template>
              <el-menu-item index="2-1">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="2-1" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" 
                  name="2" class="one-btn" id="2-1" value="2-1" />
                </div>
              </el-menu-item>
              <el-menu-item index="2-2">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="2-2" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio"   name="2"  class="one-btn" id="2-2" value="2-2" />
                </div>
              </el-menu-item>
              <el-menu-item index="2-3">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="2-3" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" name="2" class="one-btn" id="2-3" value="2-3" />
                </div>
              </el-menu-item>
            </el-sub-menu>

            <div class="border-line"></div>

            <el-sub-menu class="submenu" index="3">
              <template #title>3. Lorem ipsum dolor sit amet </template>
              <el-menu-item index="3-1">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="3-1" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio"   name="3" class="one-btn" id="3-1" value="3-1" />
                </div>
              </el-menu-item>
              <el-menu-item index="3-2">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="3-2" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" name="3"  class="one-btn" id="3-2" value="3-2" />
                </div>
              </el-menu-item>
              <el-menu-item index="3-3">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="3-3" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio"  name="3" class="one-btn" id="3-3" value="3-3" />
                </div>
              </el-menu-item>
            </el-sub-menu>

            <div class="border-line"></div>

            <el-sub-menu class="submenu" index="4">
              <template #title>4. Lorem ipsum dolor sit amet</template>
              <el-menu-item index="4-1">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="4-1" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio"   name="4" class="one-btn" id="4-1" value="4-1" />
                </div>
              </el-menu-item>
              <el-menu-item index="4-2">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="4-2" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" name="4" class="one-btn" id="4-2" value="4-2" />
                </div>
              </el-menu-item>
              <el-menu-item index="4-3">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="4-3" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" name="4" class="one-btn" id="4-3" value="4-3" />
                </div>
              </el-menu-item>
            </el-sub-menu>

            <div class="border-line"></div>

            <el-sub-menu class="submenu" index="5">
              <template #title>5. Lorem ipsum dolor sit amet</template>
              <el-menu-item index="5-1">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="5-1" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" name="5" class="one-btn" id="5-1" value="5-1" />
                </div>
              </el-menu-item>
              <el-menu-item index="5-2">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="5-2" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" name="5" class="one-btn" id="5-2" value="5-2" />
                </div>
              </el-menu-item>
              <el-menu-item index="5-3">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="5-3" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" name="5" class="one-btn" id="5-3" value="5-3" />
                </div>
              </el-menu-item>
            </el-sub-menu>

            <div class="border-line"></div>

            <el-sub-menu class="submenu" index="6">
              <template #title>6. Lorem ipsum dolor sit amet</template>
              <el-menu-item index="6-1">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="6-1" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" name="6" class="one-btn" id="6-1" value="6-1" />
                </div>
              </el-menu-item>
              <el-menu-item index="6-2">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="6-2" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" name="6" class="one-btn" id="6-2" value="6-2" />
                </div>
              </el-menu-item>
              <el-menu-item index="6-3">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="6-3" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" name="6" class="one-btn" id="6-3" value="6-3" />
                </div>
              </el-menu-item>
            </el-sub-menu>

            <div class="border-line"></div>

            <el-sub-menu class="submenu" index="7">
              <template #title>7. Lorem ipsum dolor sit amet</template>
              <el-menu-item index="7-1">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="7-1" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" name="7" class="one-btn" id="7-1" value="7-1" />
                </div>
              </el-menu-item>
              <el-menu-item index="7-2">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="7-2" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" name="7" class="one-btn" id="7-2" value="7-2" />
                </div>
              </el-menu-item>
              <el-menu-item index="7-3">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="7-3" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" name="7" class="one-btn" id="7-3" value="7-3" />
                </div>
              </el-menu-item>
            </el-sub-menu>

            <div class="border-line"></div>

            <el-sub-menu class="submenu" index="8">
              <template #title>8. Lorem ipsum dolor sit amet</template>
              <el-menu-item index="8-1">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="8-1" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" name="8" class="one-btn" id="8-1" value="8-1" />
                </div>
              </el-menu-item>
              <el-menu-item index="8-2">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="8-2" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" name="8" class="one-btn" id="8-2" value="8-2" />
                </div>
              </el-menu-item>
              <el-menu-item index="8-3">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="8-3" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" name="8" class="one-btn" id="8-3" value="8-3" />
                </div>
              </el-menu-item>
            </el-sub-menu>

            <div class="border-line"></div>

            <el-sub-menu class="submenu" index="9">
              <template #title>9. Lorem ipsum dolor sit amet</template>
              <el-menu-item index="9-1">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="9-1" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" name="9" class="one-btn" id="9-1" value="9-1" />
                </div>
              </el-menu-item>
              <el-menu-item index="9-2">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="9-2" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" name="9" class="one-btn" id="9-2" value="9-2" />
                </div>
              </el-menu-item>
              <el-menu-item index="9-3">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="9-3" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" name="9" class="one-btn" id="9-3" value="9-3" />
                </div>
              </el-menu-item>
            </el-sub-menu>

            <div class="border-line"></div>

            <el-sub-menu class="submenu" index="10">
              <template #title>10. Lorem ipsum dolor sit amet</template>
              <el-menu-item index="10-1">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="10-1" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" name="10" class="one-btn" id="10-1" value="10-1" />
                </div>
              </el-menu-item>
              <el-menu-item index="10-2">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="10-2" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" name="10" class="one-btn" id="10-2" value="10-2" />
                </div>
              </el-menu-item>
              <el-menu-item index="10-3">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="10-3" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" name="10" class="one-btn" id="10-3" value="10-3" />
                </div>
              </el-menu-item>
            </el-sub-menu>

            <div class="border-line"></div>

            <el-sub-menu class="submenu" index="11">
              <template #title>11. Lorem ipsum dolor sit amet</template>
              <el-menu-item index="11-1">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="11-1" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio"
                  name="11" class="one-btn" id="11-1" value="11-1" />
                </div>
              </el-menu-item>
              <el-menu-item index="11-2">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="11-2" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" 
                  name="11" class="one-btn" id="11-2" value="11-2" />
                </div>
              </el-menu-item>
              <el-menu-item index="11-3">
                <div class="sub-items">
                  <img class="item" src="/icons/items.png" />

                  <label for="11-3" class="sub-txt"
                    >Lorem ipsum dolor sit amet, consect</label
                  >

                  <input type="radio" 
                  name="11" class="one-btn" id="11-3" value="11-3" />
                </div>
              </el-menu-item>
            </el-sub-menu>

            <div class="border-line"></div>
          </el-menu>
        </div>

       
      
    </div>
  </div>
  <FooterComponent />
</template>
<script>
export default {
  name: "WebdevView",
};
</script>
<script setup>
import NavbarComponent from "@/components/Navbar.vue";
import FooterComponent from "@/components/Footer.vue";
import { ref } from "vue";

const checked1 = ref(false);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(false);
const checked5 = ref(false);

const isActive = ref(false);

const toggleActive = () => {
  isActive.value = !isActive.value;
};
</script>

<style scoped>
.navbar {
  margin-left: 129px;
  margin-top: 51px;
}

.webdev-container {
  width: 1920px;
  height: 3664px;
  background-color: rgba(236, 242, 198, 0.6);
  mix-blend-mode: darken;
}

.vid-txt {
  display: flex;
}

h2 {
  width: 641px;
  height: 44px;
  font-size: 36px;
  font-weight: 500;
  line-height: 43.57px;
  color: rgba(0, 0, 0, 1);
  margin-left: 129px;
  margin-top: 125.31px;
}

.img-video {
  width: 883px;
  height: 641px;
  margin-top: 36px;
  margin-left: 129px;
}

.web-btn {
  width: 235px;
  height: 70px;
  background-color: rgba(76, 88, 18, 1);
  border: 2px;
  border-color: rgba(76, 88, 18, 1);
  margin-right: 45px;
  border-radius: 10px;
}

.btns-group {
  width: 795px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 206px;
  margin-top: 46px;
}

.btns {
  width: 235px;
  height: 70px;
  background-color: rgba(76, 88, 18, 1);
  border-color: rgba(76, 88, 18, 1);
  border-radius: 10px;
  display: flex;
  align-items: center;
}

.btn-txt {
  font-size: 24px;
  font-weight: 500;
  line-height: 29.05px;
  color: rgba(228, 235, 188, 1);
}

.el-button:hover {
  background-color: rgb(126, 144, 29);
}

.left-txt{
width: 575px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 132px;
}

.ft-box {
  width: 574px;
  height: 320px;
  border-bottom: 1px solid rgba(168, 192, 39, 1);
  border-top: 1px solid rgba(168, 192, 39, 1);
  margin-top: 140px;

}

#first-txt {
  width: 575px;
  height: 219px;
  font-size: 24px;
  font-weight: 400;
  line-height: 29.05px;
  margin-top: 43px;
  margin-bottom: 58px;
  color: rgba(0, 0, 0, 1);
}

.menu-container {
  width: 994px;
  height: 1407px;
  margin-left: 116px;
  margin-top: -150px;
  justify-content: space-between;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.play-txt {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.play-btn{
background-color: rgba(0, 0, 0,1);
}

#first-h3 {
  font-size: 32px;
  font-weight: 600;
  line-height: 38.73px;
}

#second-h3 {
  font-size: 32px;
  font-weight: 600;
  line-height: 38.73px;
}

.border-line {
  border-bottom: 2px solid rgba(0, 0, 0, 1);
  width: 990px;
}

.el-menu {
  background-color: transparent;
  width: 100%;
  height: auto;
  justify-content: space-between;
  border: none !important;
}

.el-sub-menu {
  margin-top: 20px;
  margin-bottom: 10px;
  align-items: center;
}

.el-sub-menu :deep(.el-sub-menu__title) {
  font-size: 25px;
  font-weight: 400;
  line-height: 43.57px;
}

.el-sub-menu :deep(.el-sub-menu__title:hover) {
  background-color: rgba(76, 86, 18, 1);
  color: white;
  border-radius: 10px;
}

.el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container)
  .el-menu-item {
  background-color: rgba(239, 243, 215, 1);
  color: rgba(0, 0, 0, 1);
}




.box {
  width: 535px;
  height: 681px;
  background-color: white;
  margin-top: 91px;
  margin-right: 162px;
  margin-left: 160px;
  border: 2px solid black;
  align-items: center;
  box-shadow: 5px 8px 5px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.check {
  width: 100%;
  height: 572px;
  background-color: rgba(246, 249, 233, 1);
}

.button-box {
  width: 100%;
  height: 109px;
  background-color: rgba(76, 86, 18, 1);
}

.sections {
  width: 100%;
  height: 118px;
  border: 1px solid rgba(76, 86, 18, 1);
}

.el-checkbox {
  margin-top: 70px;
  margin-left: 30px;
}

.el-button :deep(.el-button .el-button--success.p-now :hover) {
  padding: 0;
}

.p-now {
  width: 220px;
  height: 68px;
  margin-left: 154px;
  margin-top: 17px;
  padding: none !important;
  border-color: rgba(228, 235, 188, 1);
  background-color: rgba(228, 235, 188, 1);
  color: rgba(76, 86, 18, 1);
}

.el-button :deep(.p-now :hover) {
  background-color: rgba(76, 86, 18, 1);
  padding: none;
}

#pn-text {
  height: 29px;
  width: 166px;
  font-size: 24px;
  font-weight: 500;
  line-height: 29.05px;
}

.el-checkbox :deep(.el-checkbox__label) {
  font-size: 24px;
  text-align: center;
  margin-bottom: 25px;
  color: rgba(0, 0, 0, 1);
}

.el-checkbox :deep(.el-checkbox__inner) {
  width: 31px;
  height: 29.1px;
  margin-bottom: 25px;
}

.el-checkbox :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: transparent;
  border-color: rgba(134, 154, 31, 1);
  border: 2px solid rgba(134, 154, 31, 1);
}

.el-checkbox :deep(.el-checkbox__input.is-checked .el-checkbox__inner::after) {
  margin-left: 8px;
  margin-top: 8px;
  border-color: rgba(134, 154, 31, 1);
  height: 10px;
}

.el-checkbox :deep(.el-checkbox__input.is-checked + .el-checkbox__label) {
  color: rgba(0, 0, 0, 1);
}

.sub-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sub-txt {
  font-size: 24px;
  font-weight: 400;
  line-height: 29.05px;
  color: rgba(0, 0, 0, 1);
  margin-left: 41px;
}

.one-btn {
  width: 23px;
  height: 23px;
  margin-left: 325px;
  margin-top: 25px;
}

button {
  width: 23px;
  height: 23px;
  border-radius: 23px;
  margin-left: 325px;
}

.active {
  background-color: rgba(134, 154, 31, 1);
}
</style>
