<template>

    <div class="footer-container">

        <div class="footer-items">

            <section>

                <img id="foot-img" src="/images/footerlogo.png">

            </section>

            <section>

                <el-menu :default-active="2" class="el-menu-demo1" mode="vertical" @select="handleSelect">

                    <el-menu-item-group title="Products">
                        <el-menu-item index="1">Courses</el-menu-item>
                        <el-menu-item index="2">Pricing</el-menu-item>
                        <el-menu-item index="3">Questions</el-menu-item>
                    </el-menu-item-group>

                </el-menu>
            </section>

            <section>

                <el-menu :default-active="activeIndex" class="el-menu-demo2" mode="vertical" @select="handleSelect">

                    <el-menu-item-group title="Legal">

                        <el-menu-item index="1">Privacy Policy</el-menu-item>
                        <el-menu-item index="2">Terms and Conditions</el-menu-item>
                        <el-menu-item index="3">Cookies Policy</el-menu-item>

                    </el-menu-item-group>


                </el-menu>

            </section>

            <section>

                <el-menu :default-active="activeIndex" class="el-menu-demo3" mode="vertical" @select="handleSelect">

                    <el-menu-item-group title="Support">

                        <el-menu-item index="1">Report a Bug</el-menu-item>

                    </el-menu-item-group>


                </el-menu>

            </section>

            <section class="icons">
                <div>
                    <img id="linkedin-logo" src="/icons/linkedin_symbol.png" alt="linkedIn">
                    <img src="/icons/x.png" alt="X">
                    <img src="/icons/fb.png" alt="facebook">
                </div>

                <p id="ic-text">
                    Follow us on our socials
                </p>

            </section>


        </div>

        <p id="rights">© 2024 Focus Technologies. All Rights Reserved.</p>

    </div>


</template>

<script>
export default {
    name: "FooterComponent"

}
</script>

<script setup>
import { ref } from "vue";

function handleSelect(val, event) {
    console.log(val);
}
</script>


<style>
.footer-container {
    width: 1920px;
    height: 452px;
    background-color: rgba(28, 28, 28, 1);

}

.footer-items {
    color: rgba(220, 220, 220, 1);
    display: flex;
    justify-content: space-between;
}

#foot-img {
    width: 401.64px;
    height: 200px;
    margin-top: 130px;
    margin-left: 70px;
}

.el-menu.el-menu--vertical.el-menu-demo1 {
    background-color: transparent;
    border: none;
}

.el-menu-item-group {
    margin-top: 85px;
}


.el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container) .el-menu-item-group__title {

    font-size: 20px;
    font-weight: 400px;
    line-height: 24.2px;
    padding-right: 20px;
    color: rgba(220, 220, 220, 1);
    text-decoration: underline 2px solid rgba(168, 192, 39, 1);
    text-underline-offset: 6px;


}

.el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container) .el-menu-item {
    color: rgba(220, 220, 220, 1);
    text-align: center;
    font-size: 20px;
    font-weight: 400px;
    line-height: 45px;

}

.el-menu.el-menu--vertical.el-menu-demo2 {
    background-color: transparent;
    border: none;
}

.el-menu.el-menu--vertical.el-menu-demo3 {
    background-color: transparent;
    border: none;
}


.icons {
    margin-top: 130px;
    margin-right: 115px;
}

img {
    margin-right: 30.73px;
}

#ic-text {
    width: 239px;
    height: 22px;
    margin-top: 40px;
    margin-right: 74px;
    font-size: 20px;
    font-weight: 500px;
    line-height: 24px;
    letter-spacing: 1%;

}

#rights {
    width: 320px;
    height: 31.49px;
    font-size: 15px;
    font-weight: 400px;
    line-height: 33.75px;
    letter-spacing: -1%;
    text-align: center;
    margin-left: 800px;
    margin-top: 30px;
    color: rgba(255, 255, 255, 1);
}
</style>