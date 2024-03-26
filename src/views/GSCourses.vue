<template>
    <div class="gs-course-box">
        <NavbarComponent />
        <div>
            <h2 class="txt1">Get Started Now</h2>
            <p class="txt2">
                Lorem ipsum dolor sit amet consectetur. Massa ipsum quam amet amet mi odio
                tempor
            </p>
        </div>

        <div class="menu">
            <div>
                <el-menu :default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                    :ellipsis="false">
                    <el-menu-item index="1">Questions</el-menu-item>
                </el-menu>
            </div>

            <div>
                <el-menu :default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect1"
                    :ellipsis="false">
                    <el-menu-item index="2">Courses</el-menu-item>
                </el-menu>
            </div>

            <div>
                <el-menu :default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect2"
                    :ellipsis="false">
                    <el-menu-item index="3">Bundles</el-menu-item>
                </el-menu>
            </div>

            <div class="line"></div>
        </div>

<div class="cards-container">
        <div class="new-box">
            <div class="box-card1">
                <div>
                    <img class="web" src="/icons/web.png" alt="web">
                    <p id="title-1">Introduction To Website Development </p>
                </div>

            </div>

            <div class="box-card2">
                <p class="bc2-txt">
                    Lorem ipsum dolor sit amet consectetur. Massa ipsum quam amet amet mi odio temp
                    vestibulum. Suspendisse tincidunt feugiat aliquam varius. Varius netus porttitor nulla id. Hac nunc
                    sed sed .
                </p>

                <el-button class="py-btn" type="success">
                    <img style="margin: 0px;" src="/icons/shopping-cart.png"><p id="py-text">Buy $29.99</p>
                  </el-button>
            </div>
        </div>

        
        <div class="new-box">
            <div class="box-card1">
                <div>
                    <img class="web" src="/icons/web.png" alt="web">
                    <p id="title-1">Introduction To Website Development </p>
                </div>

            </div>

            <div class="box-card2">
                <p class="bc2-txt">
                    Lorem ipsum dolor sit amet consectetur. Massa ipsum quam amet amet mi odio temp
                    vestibulum. Suspendisse tincidunt feugiat aliquam varius. Varius netus porttitor nulla id. Hac nunc
                    sed sed .
                </p>
                <el-button class="py-btn" type="success">
                    <img style="margin: 0px;" src="/icons/shopping-cart.png"><p id="py-text">Buy $29.99</p>
                  </el-button>
            </div>

        </div>

        
        <div class="new-box">
            <div class="box-card1">
                <div>
                    <img class="web" src="/icons/web.png" alt="web">
                    <p id="title-1">Introduction To Website Development </p>
                </div>

            </div>

            <div class="box-card2">
                <p class="bc2-txt">
                    Lorem ipsum dolor sit amet consectetur. Massa ipsum quam amet amet mi odio temp
                    vestibulum. Suspendisse tincidunt feugiat aliquam varius. Varius netus porttitor nulla id. Hac nunc
                    sed sed .
                </p>
               
                <el-button class="py-btn" type="success">
                    <img style="margin: 0px;" src="/icons/shopping-cart.png"><p id="py-text">Buy $29.99</p>
                  </el-button>
            </div>

        </div>

    </div>

    </div>
</template>
<script>
export default {
    name: "GetStartedCourses"
}
</script>

<script setup>
import NavbarComponent from '@/components/Navbar.vue'
</script>


<style scoped>
.gs-course-box {
    width: 1920px;
    height: 2278px;
}

.cards-container {
    display: flex;
}

.new-box {
    width: 489px;
    height: 640px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 155px;
    margin-left: 165px;
    background-color: rgba(228, 235, 188, 1);
    box-shadow: 5px 8px 5px rgba(0, 0, 0, 0.25);


}

.box-card1 {
    width: 100%;
    height: 300px;
    background-color: rgba(76, 86, 18, 1);
    color: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    border-radius: 15px 15px 0px 0px;
}

.box-card2 {
    width: 100%;
    height: auto;
    background-color: rgba(228, 235, 188, 1);
    color: rgba(0, 0, 0, 1);
}

.web {
    margin-left: 186px;
    margin-top: 39px;
}

#title-1 {
    width: 411px;
    height: 80px;
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    text-align: center;
    margin-left: 54px;
}

.pic-sec {
    display: flex;
}

.pic1 {
    width: 88px;
    height: 88px;
    margin-left: 53px;
    margin-top: 29px;
    margin-right: 17px;
}

.p-txt {
    width: 92px;
    height: 30px;
    font-size: 20px;
    font-weight: 400;
    line-height: 40px;
    margin-top: 26px;
}

.name1 {
    width: 155px;
    height: 30px;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
}

.bc2-txt {
    width: 416px;
    height: 180px;
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
    margin-left: 45px;
    margin-top: 20px;
}

.bc2-txt2 {
    height: 24px;
    width: 125px;
    font-size: 20px;
    font-weight: 400;
    line-height: 24.2px;
    margin-left: 45px;
    margin-top: 22px;
}

.down {
    display: flex;
}

.bc2-txt3 {
    width: 30px;
    height: 30px;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    margin-left: 45px;
    margin-top: 2px;
}

.star {
    margin-right: 0px;
    width: 100px;
    height: 19px;
    margin-left: 5px;
    margin-top: 6px;
}

.bc2-txt4 {
    width: 93px;
    height: 30px;
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
    margin-left: 6px;
}

.py-btn{
    width: 300px;
    height: 70px;
    border-radius: 15px;
    margin-left: 99px;
    margin-top: 40px;
    margin-bottom: 30px;
    border-color: rgba(134, 154, 31, 1);
    background-color: rgba(134, 154, 31, 1);
}
</style>