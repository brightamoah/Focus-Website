<template>
    <div class="page-box">

        <div class="box1">
            <img class="b-logo" src="/images/Big-Logo.png">
        </div>

        <div class="box2">

            <div class="shape1">
                <p class="txt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>

            <div class="shape2">
                <img src="/images/login-logo.png">
            </div>

            <div class="shape3">
                <h3 class="txt-2">Welcome Back</h3>

                <p class="txt-3">Login to your account</p>
            </div>

            <div class="shape4">
                <img class="info-icon" src="/icons/info.png" alt="info-icon">

                <p class="txt-4">
                    This account has been blocked for XX minutes because of too many login attempts. Please try again
                    later or contact us.
                </p>
            </div>

            <div class="shape5">
                <p class="email-txt">Email</p>

                <el-input v-model="formAccessibility.email" style="width: 100%; height: 50px;"
                    placeholder="Enter Your Email Address" />

                <p class="pass-txt">Password</p>

                <el-input v-model="formAccessibility.password" type="password" placeholder="Please input password"
                    show-password />



                <div class="check-list">

                    <el-checkbox v-model="checked1" label="Remember Me" size="large" />

                    <el-link type="primary">Forgot Password</el-link>

                </div>

                <el-button class="sign-in" type="success">Sign In</el-button>  

                <p class="l-txt">By continuing, you agree to Focus Terms of
                    Service and Privacy Policy</p>

            </div>

        </div>

    </div>
</template>


<script>
export default {
    name: "LoginView",
}
</script>

<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'


const formAccessibility = reactive({
    email: '',
    password: '',
})



const checked1 = ref(false)

</script>


<style scoped>
.page-box {
    width: 1728px;
    height: 1117px;
    background-color: rgba(255, 255, 255, 1);
    display: flex;
}

.box1 {
    width: 1050px;
    height: 100%;
    background-color: rgba(234, 241, 199, 1);
    border-radius: 0px 25px 25px 0px;
}

.box2 {
    width: 678px;
    height: 100%;
    display: flex;
    flex-direction: column;


}

.b-logo {
    width: 496px;
    height: 219px;
    margin-left: 254px;
    margin-top: 449px;
    margin-right: 300px;
}

.shape1 {
    width: 310px;
    height: 24px;
    margin-left: 180px;
    margin-top: 49px;

}

.txt-1 {
    font-size: 10px;
    font-weight: 400;
    line-height: 12.1px
}

.shape2 {
    width: 151.55px;
    height: 55px;
    margin-top: 77px;
    margin-left: 250px;
}

.txt-2 {
    width: 143px;
    height: 24px;
    font-size: 20px;
    font-weight: 600;
    line-height: 24.2px;
    margin-top: 5px;
    margin-left: 267px;
    color: rgba(0, 0, 0, 1);
}

.txt-3 {
    width: 124px;
    height: 15px;
    font-size: 12px;
    line-height: 14.52px;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    margin-top: 5px;
    margin-left: 276px;
}

.shape4 {
    width: 400px;
    height: 50px;
    border-radius: 5px;
    background-color: rgba(168, 192, 39, 1);
    color: rgba(0, 0, 0, 1);
    margin-left: 150px;
    margin-top: 35px;
    display: flex;
}

.info-icon {
    width: 24px;
    height: 24px;
    margin-left: 30px;
    margin-top: 13px;
    margin-right: 0px;
}

.txt-4 {
    width: 310px;
    height: 36px;
    font-size: 10px;
    line-height: 12.1px;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    margin-top: 13px;
    margin-left: 15px;
    margin-right: 30px;
}

.shape5 {
    width: 400px;
    height: 383px;
    margin-top: 40px;
    margin-left: 145px;
}

.email-txt {
    width: 41px;
    height: 19px;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.36px;

}

.el-input {
    width: 100%;
    height: 50px;
    border-radius: 10.68px;
    border: 1px solid rgba(217, 217, 217, 1);
    margin-top: 5px;
}

.pass-txt {
    width: 75px;
    height: 19px;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.36px;
    margin-top: 30px;
}

.el-input :deep(.el-input__inner) {
    height: 15px;
    width: 141px;
    padding: none !important;
    font-size: 12px;
    font-weight: 500;
    line-height: 14.52px;
    opacity: 80%;
    color: rgba(0, 0, 0, 1);


}

.el-input :deep(.el-input__wrapper) {
    padding: none !important;
    background-color: transparent;
}

.check-list{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.el-link{
    width: 129px;
    height: 19px;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.36px;
    color: rgba(0, 0, 0, 1);
   
}

.el-checkbox__label{
    width: 110px;
    height: 19px;
    font-size: 30px;
}

.el-checkbox.el-checkbox--large .el-checkbox__label {
    font-size: 30px;
}

.sign-in{
    width: 100%;
    height: 55px;
    color: black;
    border-radius: 10.68px;
    border: 1px solid rgba(234, 241, 199, 1);
    margin-top: 56px;
    
    background-color: rgba(234, 241, 199, 1);
}

.l-txt{
    height: 30px;
    width: 246px;
    font-size: 12px;
    line-height: 14.52px;
    font-weight: 400;
    color: rgba(5, 5, 5, 1);
    margin-top: 20px;
    margin-left: 88px;
    text-align: center;

}
</style>