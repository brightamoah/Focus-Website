<template>
    <div class="lm-container1"> <!--container to hold all the items in the first section-->
        <h3 class="lm-title">Learn more about Focus Technology</h3>

        <div class="lm-content"> <!--this is to allow display flex on the items -->

            <div>

                <img id="lm-pic1" src="/images/lm-pic1.png" alt="pic">

            </div>

            <div class="lm-text">
                <h3 id="lm-h3">Do you have any <br>Question?</h3>

                <div>
                    <p class="lm-p">Would you like to join our
                        community?</p>

                    <el-button type="success">
                        <p id="discord">Join our discord server</p><img src="/icons/discord.svg" alt="">
                    </el-button>

                </div>
            </div>

        </div>

    </div>


    <div class="lm-container2">
        <div>

            <h2 id="lm-h2">What are you waiting for?</h2>

            <el-button id="lm-btn2" type="success">
                <p id="lm-code">Start Coding Now</p>
            </el-button>

            <el-button id="lm-btn2-1" type="success">
                <p id="lm-intern">Start internship </p>
            </el-button>

        </div>

        <div>
            <img id="lm-laptop" src="/images/laptop.png" alt="">
        </div>

    </div>


    <div class="lm-container3">
        <h2 id="lm-h2-1">Level up with Focus Technology   </h2>

        <p id="last-txt">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim</p>

   

        <el-input
      v-model="input"
      placeholder="Enter your email address"
    />
      

             <el-button type="success"
             style="width: 181px;
             height: 66px;
             border-radius: 8px;
             background-color: rgba(76, 86, 18, 1);
             margin-left: 869px;
             margin-top: 28px;
             font-size: 32px;
             font-weight: 400;
             line-height: 38.77px;
             ">Sign up</el-button>
        

    </div>

  





</template>



<script>
export default {
    name: "LearnMoreSection"
}
</script>

<script  setup>
import { ref } from 'vue'


const input = ref('')
</script>


<style scoped>
.lm-container1 {
    width: 1920px;
    height: 756px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(168, 192, 39, 0.75);
}

.lm-title {
    width: 402px;
    height: 78px;
    font-size: 32px;
    font-weight: 700;
    line-height: 38.73px;
    color: rgba(76, 86, 18, 1);
    margin-left: 159px;
    margin-top: 15px;


}

.lm-content {
    display: flex;
    justify-content: space-between;
    overflow: hidden;

}

#lm-pic1 {
    width: 729px;
    height: 616px;
    margin-left: 159px;
    margin-bottom: 55px;
}

#lm-h3 {
    width: 719px;
    height: 134px;
    font-size: 55px;
    font-weight: 600;
    margin-left: 108px;
    margin-right: 205px;
    margin-top: 98px;
    line-height: 66.56px;
    color: rgba(134, 154, 31, 1);


}

.lm-text {
    display: flex;
    flex-direction: column;

}

.lm-p {
    width: 530px;
    height: 95px;
    line-height: 42.36px;
    font-size: 35px;
    margin-top: 13px;
    font-weight: 500;
    margin-left: 109px;
    color: rgba(0, 0, 0, 1);


}

.el-button--success {
    width: 410px;
    height: 100px;
    border-radius: 10px;
    background-color: rgba(101, 115, 23, 1);
    border-color: rgba(101, 115, 23, 1);
    padding: none !important;
    margin-left: 108px;
    margin-top: 13px;
}

.el-button:hover {
    background-color: rgba(101, 115, 23, 1);
    border-color: rgba(101, 115, 23, 1);
}

#discord {
    width: 275px;
    height: 30px;
    font-size: 25px;
    font-weight: 500;
    line-height: 30.26px;
}

.lm-container2 {
    display: flex;
    justify-content: space-between;
    width: 1920px;
    height: 756px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(168, 192, 39, 0.75);
}

#lm-h2 {
    width: 800px;
    height: 206px;
    font-size: 85px;
    font-weight: 700;
    line-height: 102.87px;
    color: rgba(126, 144, 29, 1);
    margin-left: 194px;
    margin-top: 142px;
}

#lm-btn2 {
    width: 365px;
    height: 109px;
    border-radius: 10px;
    gap: 10px;
    background-color: rgba(59, 67, 14, 1);
    margin-left: 194px;
    margin-top: 58px;

}

#lm-btn2-1 {
    width: 365px;
    height: 109px;
    border-radius: 10px;
    gap: 10px;
    background-color: rgba(59, 67, 14, 1);
    margin-left: 40px;
    margin-top: 58px;

}

#lm-laptop {
    width: 606px;
    height: 525px;
    margin-left: 195px;
    margin-top: 115px;
    margin-right: 207px;
    margin-bottom: 116px;
}

#lm-code {
    width: 272px;
    height: 39px;
    font-size: 32px;
    font-weight: 500;
    line-height: 38.73px;
    color: rgba(245, 245, 245, 1);
}

#lm-intern {
    width: 238px;
    height: 39px;
    font-size: 32px;
    font-weight: 500;
    line-height: 38.73px;
    color: rgba(245, 245, 245, 1);
}

.lm-container3 {
    width: 1920px;
    height: 756px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(168, 192, 39, 0.75);
}

#lm-h2-1 {
    width: 712px;
    height:194px;
    font-size: 80px;
    font-weight: 700;
    text-align: center;
    line-height: 96.82px;
    margin-left: 604px;
    margin-top: 94px;
    color: rgba(134, 154, 31, 1);
}

#last-txt{
 Width: 894px;
Height: 155px;
font-size: 36px;
font-weight: 400;
line-height: 43.57px;
text-align: center;
margin-left: 520px;
margin-top: 25px;
color: rgba(0, 0, 0, 1);
}


.el-input{
    width: 614px;
    height: 82px;
    border-radius: 10px;
    border: 1px solid rgba(168, 192, 39, 1);
    margin-left: 653px;
    margin-top: 28px;
}

.el-input :deep(.el-input__inner){
    height: 39px;
    width: 375px;
    
    padding: none !important;
    font-size: 32px;
    font-weight: 400;
    line-height: 38.73px;
    opacity: 80%;
    color: rgba(148, 148, 148, 0.55);
    margin: 21px  22px 39px;
    
}

.el-input :deep(.el-input__wrapper){
    padding: none !important;
    background-color: rgba(246, 249, 233, 1);
}

</style>