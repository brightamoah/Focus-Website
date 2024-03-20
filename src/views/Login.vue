<template>
    <div class="page-box">

        <div class="box1">
            <img class="b-logo" src="/images/Big-Logo.png">
        </div>

        <div class="box2">

            <div class="shape1">
                <p class="txt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
            </div>

            <div class="shape2">
                <img src="/images/login-logo.png">
            </div>

            <div class="shape3">
                <h3 class="txt-2">Welcome Back</h3>

                <p class="txt-3">Login to your account</p>
            </div>

            <div class="shape4"></div>

            <div class="shape5"></div>

        </div>

    </div>
</template>
<script>
export default {
    name: "LoginView",
}
</script>
<style>
.page-box {
    width: 1728px;
    height: 1117px;
    background-color: rgba(255, 255, 255, 1);
    display: flex;
}

.box1{
    width: 1050px;
    height: 100%;
    border: 2px solid blue;
    background-color: rgba(234, 241, 199, 1);
    border-radius: 0px 25px 25px  0px  ;
}

.box2{
    width: 678px;
    height: 100%;
    border: 2px solid red;
    display: flex;
    flex-direction: column;
    
    align-items: center;
}

.b-logo{
    width: 496px;
    height: 219px;
    margin-left: 254px;
    margin-top: 449px;
    margin-right: 300px;
}

.shape1{
    width: 310px;
    height: 24px;
   
    margin-top: 49px;

}

.txt-1{
    font-size: 10px;
    font-weight: 400;
    line-height: 12.1px
}

.shape2{
    width: 151.55px;
    height: 55px;
    margin-top: 77px;
}

.txt-2{
    width: 143px;
    height: 24px;
    font-size: 20px;
    font-weight: 600;
    line-height: 24.2px;
    margin-top: 5px;
    color: rgba(0, 0, 0, 1);
}

.txt-3{
    width: 124px;
    height: 15px;
    font-size: 12px;
    line-height: 14.52px;
    color: rgba(0, 0, 0, 1);
    margin-top: 5px;
}
</style>