<template >
    <div class="lm-container">
        <h3 class="lm-title">Learn more about Focus Technology</h3>

        <div class="lm-content">

            <img id="lm-pic1" src="/images/lm-pic1.png" alt="pic">

            <section class="lm-sec1">
                <div>
                <h2 id="lm-h2">Do You Have Any Questions</h2>
                  </div>
                <p>Would you like to join our community?</p>

                <el-button type="success">Success</el-button>
            </section>

        </div>

    

        
    </div>
</template>
<script>
export default {
    name: "LearnMoreSection"
}
</script>


<style scoped>
.lm-container{
    width: 1920px;
    height: 756px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(168, 192, 39, 0.75);
}
.lm-title{
    width: 402px;
    height: 78px;
    font-size: 32px;
    font-weight: 700;
    line-height: 38.73px;
    color: rgba(76, 86, 18, 1);
    margin-left: 159px;
    margin-top: 15px;


}

.lm-content{
    display: flex;
}

#lm-pic1{
    width: 729px;
    height: 616px;
    margin-left: 159px;
    margin-bottom: 55px;
}

.lm-sec1{
    display: flex;
    flex-direction: column;
}




    
</style>