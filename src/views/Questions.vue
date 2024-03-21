<template>
  <div class="ques-box">
    <NavbarComponent />

    <h2 class="txt1">Get Started Now</h2>
    <p class="txt2">Lorem ipsum dolor sit amet consectetur. 
        Massa ipsum quam amet amet mi odio tempor</p>
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

  </div>
</template>


<script>
export default {
  name: "QuestionsView",
};
</script>

<script setup>
import NavbarComponent from "@/components/Navbar.vue";

function handleSelect(val, event) {
  console.log(val);
  }
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

.txt2{
    width: 891px;
    height: 29px;
    font-size: 25px;
    font-weight: 500;
    line-height: 30px;
    text-align: center;
    margin-left: 516px;
    margin-top: 15px;
}

.menu{
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

.el-menu{
    background-color: white;
    border-bottom: none !important;
    width: 149px;
   align-items: center;
  
}

.el-menu--horizontal{
    align-items: center;
   
   
}
.el-menu--horizontal.el-menu {
    background-color: transparent;
    border-bottom: none !important;
    padding: 0;
    justify-content: space-evenly;
    align-items: center;
  }

.el-menu--horizontal>.el-menu-item {
    
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
  
  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    background-color: rgba(168, 192, 39, 1);
    color: black;
  }
  
  .el-menu--horizontal >.el-menu-item.is-active {
    border-bottom: 2px solid rgba(36, 36, 36, 1);
    color: rgba(41, 39, 37, 0.9) ;
  }



</style>
