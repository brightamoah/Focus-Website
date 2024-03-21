<template>
  <div class="navbar">
    <section>
      <img alt="focus" class="logo" src="/images/logo.png" />
    </section>

    <section>
      <el-menu
        :default-active="1"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        :ellipsis="false"
      >
        <el-menu-item index="1">Home</el-menu-item>

        <el-menu-item index="2">Courses</el-menu-item>

        <el-sub-menu class="submenu" index="3">
          <template #title>Questions</template>
          <el-menu-item index="3-1">item one</el-menu-item>
          <el-menu-item index="3-2">item two</el-menu-item>
          <el-menu-item index="3-3">item three</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="4">
          <template #title>Products</template>
          <el-menu-item index="4-1">item one</el-menu-item>
          <el-menu-item index="4-2">item two</el-menu-item>
          <el-menu-item index="4-3">item three</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="5">Pricing</el-menu-item>
      </el-menu>
    </section>

    <section class="login">
      <el-button
        style="background-color: transparent; 
        border-color: black; 
        color: black"
        >Default</el-button
      >

      <el-button
        type="success"
        style="
          background-color: rgba(168, 192, 39, 1);
          border: 2px;
          border-color: rgba(168, 192, 39, 1);
        "
        >Success</el-button
      >
    </section>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<script setup>


function handleSelect(val, event) {
  console.log(val);
}
</script>

<style scoped>

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1629px;
  height: 118.05px;
  margin-left: 132px;
  background-color: transparent;
}

.el-menu--horizontal {
    align-items: center;
}

.el-menu--horizontal.el-menu {
  background-color: transparent;
  border-bottom: none !important;
  padding: 0;
  justify-content: space-between;
  align-items: center;
}

.el-menu--horizontal > .el-menu-item {
  width: 102.33px;
  height: 24px;
  font-size: 20px;
  font-weight: 500px;
  line-height: 24.2px;
}

.el-menu--horizontal>.el-sub-menu .el-sub-menu__title{
  font-size: 20px;
  font-weight: 500px;
  line-height: 24.2px;
}


.login {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-menu {
  background-color: transparent;
}

.el-menu-item.is-active {
  border-color: rgba(168, 192, 39, 1);
  color: black;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  background-color: black;
}

.el-menu--horizontal >.el-menu-item.is-active {
  border-bottom: 2px solid rgba(168, 192, 39, 1);
  color: rgba(41, 39, 37, 0.9) ;
}
</style>
