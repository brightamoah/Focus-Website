<template>
  <div class="ques-box">
    <NavbarComponent />

    <h2 class="txt1">Get Started Now</h2>
    <p class="txt2">
      Lorem ipsum dolor sit amet consectetur. Massa ipsum quam amet amet mi odio
      tempor
    </p>
    <div class="menu">
      <div>
        <el-menu
          :default-active="1"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          :ellipsis="false"
        >
          <el-menu-item index="1">Questions</el-menu-item>
        </el-menu>
      </div>

      <div>
        <el-menu
          :default-active="1"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect1"
          :ellipsis="false"
        >
          <el-menu-item index="2">Courses</el-menu-item>
        </el-menu>
      </div>

      <div>
        <el-menu
          :default-active="1"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect2"
          :ellipsis="false"
        >
          <el-menu-item index="3">Bundles</el-menu-item>
        </el-menu>
      </div>

      <div class="line"></div>
    </div>

    <div class="card-div">
      <el-card class="card-options1">
        <div class="content">
          <p class="p1">Free</p>

          <p class="p2">$0</p>

          <div class="round-check">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="Lorem ipsum dolor sit amet " value="Value A" />
              <el-checkbox label="Lorem ipsum dolor sit amet " value="Value B" />
              <el-checkbox label="Lorem ipsum dolor sit amet " value="Value C" />
              <el-checkbox label="Lorem ipsum dolor sit amet " value="Value C" />
            </el-checkbox-group>
          </div>
        </div>
      </el-card>

      <el-card class="card-options">
        <div class="content">
          <p class="p3">Monthly</p>

          <p class="p4">$10</p>

          <div class="round-check">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="Lorem ipsum dolor sit amet " value="Value A" />
              <el-checkbox label="Lorem ipsum dolor sit amet " value="Value B" />
              <el-checkbox label="Lorem ipsum dolor sit amet " value="Value C" />
              <el-checkbox label="Lorem ipsum dolor sit amet " value="Value C" />
            </el-checkbox-group>
          </div>
        </div>
      </el-card>

      <el-card class="card-options">
        <div class="content">
          <p class="p5">Yearly</p>

          <p class="p6">$99</p>

          <div>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="Lorem ipsum dolor sit amet " value="Value A" />
              <el-checkbox label="Lorem ipsum dolor sit amet " value="Value B" />
              <el-checkbox label="Lorem ipsum dolor sit amet " value="Value C" />
              <el-checkbox label="Lorem ipsum dolor sit amet " value="Value C" />
            </el-checkbox-group>
          </div>
        </div>
      </el-card>

      <el-card class="card-options2">
        <div class="content">
          <p class="p7">Lifetime</p>

          <p class="p8">$299</p>

          <div>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="Lorem ipsum dolor sit amet " value="Value A" />
              <el-checkbox label="Lorem ipsum dolor sit amet " value="Value B" />
              <el-checkbox label="Lorem ipsum dolor sit amet " value="Value C" />
              <el-checkbox label="Lorem ipsum dolor sit amet " value="Value C" />
            </el-checkbox-group>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionsView",
};
</script>

<script setup>
import NavbarComponent from "@/components/Navbar.vue";
import { ref } from "vue";

function handleSelect(val, event) {
  console.log(val);
}

  const checkList = ref(['Value selected and disabled', 'Value A'])
</script>

<style scoped>
.ques-box {
  width: 1920px;
  height: 1512px;
  background-color: rgba(236, 242, 198, 0.6);
}
.txt1 {
  width: 485px;
  height: 73px;
  font-size: 60px;
  font-weight: 600;
  line-height: 72.61px;
  color: rgba(36, 36, 36, 1);
  margin-top: 60px;
  margin-left: 718px;
}

.txt2 {
  width: 891px;
  height: 29px;
  font-size: 25px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
  margin-left: 516px;
  margin-top: 15px;
}

.menu {
  width: 560px;
  height: 25px;
  margin-left: 668px;
  border-bottom: 2px solid rgba(168, 192, 39, 0.75);
  margin-top: 135px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.el-menu {
  background-color: white;
  border-bottom: none !important;
  width: 149px;
  align-items: center;
}

.el-menu--horizontal {
  align-items: center;
}
.el-menu--horizontal.el-menu {
  background-color: transparent;
  border-bottom: none !important;
  padding: 0;
  justify-content: space-evenly;
  align-items: center;
}

.el-menu--horizontal > .el-menu-item {
  width: 102.33px;
  height: 24px;
  font-size: 20px;
  font-weight: 500px;
  line-height: 24.2px;
}

.el-menu-item.is-active {
  border-color: rgba(168, 192, 39, 1);
  color: black;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  background-color: rgba(168, 192, 39, 1);
  color: black;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid rgba(36, 36, 36, 1);
  color: rgba(41, 39, 37, 0.9);
}

.el-menu :deep(.el-menu--horizontal > .el-menu-item.is-active) {
  color: white;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  background-color: rgba(168, 192, 39, 1);
  color: black;
}

.card-div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.card-options {
  width: 360px;
  height: 641px;
  border-radius: 25px;
  background-color: rgba(101, 115, 23, 1);
  margin-top: 140px;
  padding: none;
  margin-left: 50px;
  color: white;
}

.card-options1 {
  width: 360px;
  height: 641px;
  border-radius: 25px;
  background-color: rgba(101, 115, 23, 1);
  margin-top: 140px;
  padding: none;
  margin-left: 160px;
  color: white;
}

.card-options2 {
  width: 360px;
  height: 641px;
  border-radius: 25px;
  background-color: rgba(101, 115, 23, 1);
  margin-top: 140px;
  padding: none;
  margin-left: 50px;
  margin-right: 153px;
  color: white;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.p1 {
  width: 65px;
  height: 40px;
  font-size: 30px;
  font-weight: 700;
  line-height: 40px;
  color: rgba(255, 255, 255, 1);
  margin-top: 30px;
  margin-left: 130px;
  margin-right: 147px;
}

.p2 {
  width: 88px;
  height: 50px;
  font-size: 65px;
  font-weight: 700;
  line-height: 40px;
  color: rgba(255, 255, 255, 1);
  margin-left: 120px;
}

.p3 {
  width: 121px;
  height: 40px;
  font-size: 30px;
  font-weight: 700;
  line-height: 40px;
  color: rgba(255, 255, 255, 1);
  margin-top: 30px;
  margin-left: 100px;
  margin-right: 119px;
}

.p4 {
  width: 122px;
  height: 50px;
  font-size: 65px;
  font-weight: 700;
  line-height: 40px;
  color: rgba(255, 255, 255, 1);
  margin-left: 105px;
}

.p5 {
  width: 92px;
  height: 40px;
  font-size: 30px;
  font-weight: 700;
  line-height: 40px;
  color: rgba(255, 255, 255, 1);
  margin-top: 30px;
  margin-left: 100px;
  margin-right: 119px;
}

.p6 {
  width: 129px;
  height: 50px;
  font-size: 65px;
  font-weight: 700;
  line-height: 40px;
  color: rgba(255, 255, 255, 1);
  margin-left: 95px;
}

.p7 {
  width: 120px;
  height: 40px;
  font-size: 30px;
  font-weight: 700;
  line-height: 40px;
  color: rgba(255, 255, 255, 1);
  margin-top: 30px;
  margin-left: 100px;
  margin-right: 120px;
}

.p8 {
  width: 170px;
  height: 50px;
  font-size: 65px;
  font-weight: 700;
  line-height: 40px;
  color: rgba(255, 255, 255, 1);
  margin-left: 88px;
}

.round-check {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.el-checkbox-group{
  display: flex;
  flex-direction: column;
}
</style>
