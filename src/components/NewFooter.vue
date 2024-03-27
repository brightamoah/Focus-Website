<template>
 
    <div class="footer-container-new">

        <div class="footer-items">


            <section>

                <el-menu :default-active="2" class="el-menu-demo2" mode="vertical" @select="handleSelect">

                    <el-menu-item-group title="Address">
                        <el-menu-item index="1">Accra</el-menu-item>
                        <el-menu-item index="2">West Africa</el-menu-item>
                        <el-menu-item index="3">Ghana</el-menu-item>
                        <el-menu-item index="4">Tel: + 233 55 763 9134</el-menu-item>
                    </el-menu-item-group>

                </el-menu>
            </section>

            <section>

                <el-menu :default-active="2" class="el-menu-demo1" mode="vertical" @select="handleSelect">

                    <el-menu-item-group title="Products">
                        <el-menu-item index="1"><RouterLink to="/courses">Courses</RouterLink></el-menu-item>
                        <el-menu-item index="2">Pricing</el-menu-item>
                        <el-menu-item index="3"><RouterLink to="/questions">Questions</RouterLink></el-menu-item>
                    </el-menu-item-group>

                </el-menu>
            </section>


            <section>

                <el-menu :default-active="2" class="el-menu-demo2" mode="vertical" @select="handleSelect">

                    <el-menu-item-group title="Legal">

                        <el-menu-item index="1">Privacy Policy</el-menu-item>
                        <el-menu-item index="2">Terms and Conditions</el-menu-item>
                        <el-menu-item index="3">Cookies Policy</el-menu-item>

                    </el-menu-item-group>


                </el-menu>

            </section>

            <section>

                <el-menu :default-active="activeIndex" class="el-menu-demo5" mode="vertical" @select="handleSelect" style="margin-right: 165.17; border: none">

                    <el-menu-item-group title="Support">

                        <el-menu-item index="1">Report a Bug</el-menu-item>

                    </el-menu-item-group>


                </el-menu>

            </section>


        </div>

        <div class="icons-new">

            <div>

            <img id="linkedin-logo" src="/icons/linkedin_symbol.png" alt="linkedIn">
            <img src="/icons/x.png" alt="X">
            <img src="/icons/fb.png" alt="facebook">

            </div>

            <div>
                <p id="rights-new">© 2024 Focus Technologies. All Rights Reserved.</p>

            </div>
        
        </div>

    </div>
</template>
<script>
export default {
    name: "NewFooterComponent"
}
</script>


<style scoped>
.footer-container-new {
    width: 1922px;
    height: 600px;
    background-color: rgba(28, 28, 28, 1);

}

.icons-new {
    display: flex;
    align-items: center;
    margin-top: 190.5px;
    margin-left: 90.09px;

}

#rights-new {
    width: 281.02px;
    height: 19.5px;
    font-size: 12px;
    font-weight: 500px;
    line-height: 33.75px;
    letter-spacing: -1%;
    text-align: center;
    margin-left: 435.45px;
    color: rgba(255, 255, 255, 1);

}


.el-menu-item-group {
    margin-left: 90.09px
}

.el-menu.el-menu--vertical.el-menu-demo5 {
    margin-right: 165.75px;
}

.el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container) .el-menu-item{
    
    background-color: transparent;
}

.el-menu{
    background-color: transparent;
}

</style>