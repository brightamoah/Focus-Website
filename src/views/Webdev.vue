<template>

    <div class="webdev-container">
        <NavbarComponent />

        <div>
            <h2>Introduction to Website Development</h2>

            <div class="vid-txt">
                <div>
                    <img class="img-video" src="/images/webdev-update.png" alt="playbutton">
                    <div class="btns-group">
                        <el-button type="success" class="web-btn">
                            80 Lessons
                        </el-button>

                        <el-button type="success" class="web-btn">
                            12 Projects
                        </el-button>

                        <el-button type="success" class="web-btn">
                            10 Questions
                        </el-button>
                    </div>

                </div>

                <P id="first-txt">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt
                    ut labore et dolore magna aliqua. Uenim ad minim veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </P>
            </div>


            <div class="sec-2">
                <div class="menu-container">
                    <div class="title">
                        <h3 id="first-h3">Content</h3>

                        <div class="play-txt">
                            <img class="play-btn" src="/icons/play-button-inside-a-circle 2.png" alt="play-btn">
                            <h3 id="second-h3">13hr total length</h3>
                        </div>

                    </div>

                    <el-menu :default-active="1" class="el-menu-demo" mode="vertical" @select="handleSelect"
                        :ellipsis="false">
                        <el-sub-menu class="submenu" index="1">
                            <template #title>1. Introductions</template>
                            <el-menu-item index="1-1">item one</el-menu-item>
                            <el-menu-item index="1-2">item two</el-menu-item>
                            <el-menu-item index="1-3">item three</el-menu-item>
                        </el-sub-menu>

                        <div class="border-line"></div>

                        <el-sub-menu class="submenu" index="2">
                            <template #title>2. Lorem ipsum dolor sit amet</template>
                            <el-menu-item index="2-1">item one</el-menu-item>
                            <el-menu-item index="2-2">item two</el-menu-item>
                            <el-menu-item index="2-3">item three</el-menu-item>
                        </el-sub-menu>

                        <div class="border-line"></div>

                        <el-sub-menu class="submenu" index="3">
                            <template #title>3. Lorem ipsum dolor sit amet </template>
                            <el-menu-item index="3-1">item one</el-menu-item>
                            <el-menu-item index="3-2">item two</el-menu-item>
                            <el-menu-item index="3-3">item three</el-menu-item>
                        </el-sub-menu>

                        <div class="border-line"></div>


                        <el-sub-menu class="submenu" index="4">
                            <template #title>4. Lorem ipsum dolor sit amet</template>
                            <el-menu-item index="4-1">item one</el-menu-item>
                            <el-menu-item index="4-2">item two</el-menu-item>
                            <el-menu-item index="4-3">item three</el-menu-item>
                        </el-sub-menu>

                        <div class="border-line"></div>

                        <el-sub-menu class="submenu" index="5">
                            <template #title>5. Lorem ipsum dolor sit amet</template>
                            <el-menu-item index="5-1">item one</el-menu-item>
                            <el-menu-item index="5-2">item two</el-menu-item>
                            <el-menu-item index="5-3">item three</el-menu-item>
                        </el-sub-menu>

                        <div class="border-line"></div>

                        <el-sub-menu class="submenu" index="6">
                            <template #title>6. Lorem ipsum dolor sit amet</template>
                            <el-menu-item index="6-1">item one</el-menu-item>
                            <el-menu-item index="6-2">item two</el-menu-item>
                            <el-menu-item index="6-3">item three</el-menu-item>
                        </el-sub-menu>

                        <div class="border-line"></div>

                        <el-sub-menu class="submenu" index="7">
                            <template #title>7. Lorem ipsum dolor sit amet</template>
                            <el-menu-item index="7-1">item one</el-menu-item>
                            <el-menu-item index="7-2">item two</el-menu-item>
                            <el-menu-item index="7-3">item three</el-menu-item>
                        </el-sub-menu>

                        <div class="border-line"></div>

                        <el-sub-menu class="submenu" index="8">
                            <template #title>8. Lorem ipsum dolor sit amet</template>
                            <el-menu-item index="8-1">item one</el-menu-item>
                            <el-menu-item index="8-2">item two</el-menu-item>
                            <el-menu-item index="8-3">item three</el-menu-item>
                        </el-sub-menu>

                        <div class="border-line"></div>

                        <el-sub-menu class="submenu" index="9">
                            <template #title>9. Lorem ipsum dolor sit amet</template>
                            <el-menu-item index="9-1">item one</el-menu-item>
                            <el-menu-item index="9-2">item two</el-menu-item>
                            <el-menu-item index="9-3">item three</el-menu-item>
                        </el-sub-menu>

                        <div class="border-line"></div>

                        <el-sub-menu class="submenu" index="10">
                            <template #title>10. Lorem ipsum dolor sit amet</template>
                            <el-menu-item index="10-1">item one</el-menu-item>
                            <el-menu-item index="10-2">item two</el-menu-item>
                            <el-menu-item index="10-3">item three</el-menu-item>
                        </el-sub-menu>

                        <div class="border-line"></div>


                        <el-sub-menu class="submenu" index="11">
                            <template #title>11. Lorem ipsum dolor sit amet</template>
                            <el-menu-item index="11-1">item one</el-menu-item>
                            <el-menu-item index="11-2">item two</el-menu-item>
                            <el-menu-item index="11-3">item three</el-menu-item>
                        </el-sub-menu>

                        <div class="border-line"></div>

                    </el-menu>

                </div>



                <div class="box">

                    <div class="check">

                        <section class="sections">
                            1
                        </section>

                        <section class="sections">
                            <el-checkbox id="box-check" v-model="checked1"
                                label="Lorem ipsum dolor sit amet, consect" />

                        </section>

                        <section class="sections">
                            4
                        </section>

                        <section class="sections">
                            5
                        </section>

                        <section class="sections">
                            6
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
        
    </div>
    <FooterComponent/>
</template>
<script>
export default {
    name: "WebdevView"
}
</script>
<script setup>
import NavbarComponent from '@/components/Navbar.vue';
import FooterComponent from '@/components/Footer.vue'
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(false)
const checked5 = ref(false)
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
    margin-left: 173px;
    margin-top: 46px;
}


#first-txt {
    width: 607px;
    height: 219px;
    font-size: 24px;
    font-weight: 400;
    line-height: 29.05px;
    margin-top: 336.5px;
    margin-left: 132px;
    color: rgba(0, 0, 0, 1);
}

.menu-container {
    width: 994px;
    height: 1407px;

    margin-left: 116px;
    margin-top: 139px;
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

.play-btn {
    width: 46px;
    height: 46px;
    background-color: rgba(76, 86, 18, 1);
    margin-right: none !important;
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

.sec-2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/*
.box {
    width: 535px;
    height: 681px;
    background-color: white;
    margin-right: 162px;
    border: 2px solid black;
    align-items: center;
    box-shadow: 5px 8px 5px 0px rgba(0, 0, 0, 0.25);
}

.border {
    width: 100%;
    height: 109px;
    border: 1px solid rgba(76, 86, 18, 1);
    margin-top: 409px;
    background-color: rgba(76, 86, 18, 1);
    display: flex;
    align-items: center;
}

.p-now {
    width: 220px;
    height: 68px;
    margin-left: 153px;
    padding: none !important;
    border-color: rgba(228, 235, 188, 1);
    background-color: rgba(228, 235, 188, 1);
    color: rgba(76, 86, 18, 1);
}



#pn-text {
    height: 29px;
    width: 166px;
    font-size: 24px;
    font-weight: 500;
    line-height: 29.05px;

}

.check-box {
    display: flex;

    justify-content: space-between;

}

.el-checkbox {
    font-size: 24px;
    margin-top: 64px;
    text-align: center;
    margin-left: 30px;
    
}


.el-checkbox__input .is-checked {
    color: rgba(134, 154, 31, 1);

}



.el.checkbox :deep(span.el-checkbox__label) {
    font-size: 57px;
}

.el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: rgba(134, 154, 31, 1);
    color: rgba(134, 154, 31, 1);
}

.divider {
    border-bottom: 2px solid rgba(76, 86, 18, 1);
    width: 458px;
    margin-left: 34px;
    margin-right: 36px;
}*/

.box {

    width: 535px;
    height: 681px;
    background-color: white;
    margin-right: 162px;
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
    margin-left: 70px;

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

#pn-text {
    height: 29px;
    width: 166px;
    font-size: 24px;
    font-weight: 500;
    line-height: 29.05px;

}



.el-checkbox :deep(.el-checkbox__label) {
    font-size: 57px;
}
</style>