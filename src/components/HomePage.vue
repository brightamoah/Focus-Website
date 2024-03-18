<template >
    <div class="mid">

        <section>
            <h1>Focus <br>Technologies</h1>

            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 
            </p>
        </section>

        <section class="sidepic">
            <img src="/images/pics.png" alt="">
        </section>
    </div>

    <div class="explore">
        <el-button  
        style="background-color: transparent; 
        border-color: rgba(168, 192, 39, 1); 
        color: black">Explore Courses</el-button>

        <el-button type="success" 
        style="
          background-color: rgba(101, 115, 23, 1);
          border: 2px;
          border-color: rgba(101, 115, 23, 1);
        ">Explore Internship</el-button>
    </div>

    <div class="line"></div>

    <div class="card-container1">
        <el-card class="card1">
            <img class="logo" src="/images/zapper.png" />
        </el-card >

        <el-card class="card1">
            <img class="logo" src="/images/spotify.png" />
        </el-card>

        <el-card class="card1">
            <img class="logo" src="/images/zoom.png" />
        </el-card>

        <el-card class="card1">
            <img class="logo" src="/images/amazon.png" />
        </el-card>

        <el-card class="card1">
            <img class="logo" src="/images/adobe.png" />
        </el-card>

        <el-card class="card1">
            <img class="logo" src="/images/notion.png" />
        </el-card>

        <el-card class="card1">
            <img class="logo" src="/images/netflix.png" />
        </el-card>

        </div>

</template>


<script>
export default {
    name: "HomePage"
}
</script>




<style scoped>



.mid {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

}
h1 {    
    width: 659px;
    height: 220px;
    margin-top: 110.95px;
    margin-left: 161px;
    font-weight: 700;
    font-size: 100px;
    line-height: 110px;
    color: rgba(0, 0, 0, 1);
}

h2 { 
    width: 878px;
    height:42px;
    margin-left: 161px;
    font-weight: 600;
    font-size: 35px;
    line-height: 42.36px;
    color: rgba(0, 0, 0, 1);
}

p{
    width: 807px;
    height: 210px;
    margin-top: 69px;
    margin-left: 161px;
    font-weight: 500;
    font-size: 25px;
    line-height: 30.26px;
    color: rgba(0, 0, 0, 1);
}
.sidepic{
    width: 657px;
    height: 633px;
    margin-top: 110.95px;
    margin-left: 132px;
    margin-right: 92px;
}

.explore{
    display: flex;
    align-items: center;
    margin-left: 161px;
    
}

.line {
    border-bottom: 2px solid;
    border-color: rgba(168, 192, 39, 1);
    width: 1600px;
    margin-top: 136px;
    margin-right: 159px;
    margin-left: 161px;
    margin-bottom: 23px;
}

.card-container1 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 423px;
    margin-right: 425px;
    width: 1073px;
    height: 94px;
    margin-bottom: 47px;

}

.el-card.is-always-shadow {
    box-shadow: none !important;
    border:none !important; 
    align-items: center;
   
}


.el-card__body {
    display: flex;
    align-items: center;
   padding: none !important;
    
}
.card1 {
    max-width: 153.29px;
    height: 94px;
    background-color: transparent;
    gap: 30px;
    margin-top: none !important;

}
    
</style>