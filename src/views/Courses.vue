<template>
    <div class="course-body">
        <NavbarComponent />

        <div class="course-txt">
            <h1>
                COURSES
            </h1>
            <p id="p1">
                Lorem ipsum dolor sit amet consectetur. Massa ipsum quam amet amet mi odio tempor vestibulum.
                Suspendisse tincidunt feugiat aliquam varius. Varius netus porttitor nulla id. Hac nunc sed sed
                tincidunt pellentesque risus.
            </p>
        </div>


        <el-card class="card-box1">
            <img class="course-cards" src="/images/webDev.png" />

            <img class="course-cards" src="/images/sql.png" />

            <img class="course-cards" src="/images/python.png" />
        </el-card>


        <el-card class="card-box2">
            <img class="course-cards" src="/images/Excel.png" />

            <img class="course-cards" src="/images/powerBI.png" />

            <img class="course-cards" src="/images/data.png" />
        </el-card>

        <!--This is the card you asked us to create-->
        <div class="new-box">
            <RouterLink to="/web-development">
            <div class="box-card1">
                <div>
                    <img class="web" src="/icons/web.png" alt="web">
                    <p id="title-1">Introduction To Website Development </p>
                </div>

                <div class="pic-sec">
                    <img class="pic1" src="/icons/Draw-sow.png" alt="">
                    <div>
                        <p class="p-txt">
                            Instructor
                        </p>
                        <p class="name1">
                            Draw Sow
                        </p>

                    </div>
                </div>

            </div>
        

            <div class="box-card2">
                <p class="bc2-txt">
                    Lorem ipsum dolor sit amet consectetur. Massa ipsum quam amet amet mi odio temp
                    vestibulum. Suspendisse tincidunt feugiat aliquam varius. Varius netus porttitor nulla id. Hac nunc
                    sed sed .
                </p>
                <p class="bc2-txt2">course rating</p>


                <div class="down">
                    <p class="bc2-txt3">5.2</p>

                    <img class="star" src="/icons/Star.png">

                    <p class="bc2-txt4">(986,857)</p>
                </div>
            </div>

        </RouterLink>


        </div>
   


        <div class="students-say">

            <div class="rec1">
                <img src="/icons/arrow-key 1.png" class="arrow1">
            </div>

            <img class="wom2" src="/images/2women.png" >

            <div class="middle-txt">
                <h3>What students are saying</h3>

                <div class="mid-txt">
                    <p id="p2">Lorem ipsum dolor sit amet consectetur. Massa ipsum quam amet amet mi odio tempor vestibulum.
                    Suspendisse
                    tincidunt feugiat aliquam varius. Varius netus porttitor nulla id. Hac nunc sed sed .
                    Lorem ipsum dolor sit amet consectetur. Massa ipsum quam amet amet mi odio tempor vestibulum.
                    Suspendisse tincidunt feugiat aliquam varius. Varius netus porttitor nulla id. Hac nunc sed sed .
                </p>

                <p id="p3">Adex Sam</p>
                </div>

                <p id="p4">Web development </p>

                <img class="dot3" src="/icons/3d2.png">

            </div>

            <div class="rec2">
                <img src="/icons/arrow-key 2.png" class="arrow2">
            </div>

        </div>

    </div>
    <NewFooterComponent/>
</template>


<script>
export default {
    name: "CoursesView"
}
</script>

<script setup>
import NavbarComponent from "@/components/Navbar.vue"
import NewFooterComponent from "@/components/NewFooter.vue"

</script>


<style scoped>
.course-body {
    width: 1920px;
    margin-bottom: 317px;
    background-color: rgba(236, 242, 198, 0.6);

}

h1 {
    width: 306px;
    height: 77px;
    font-size: 64px;
    font-weight: 500;
    line-height: 77.45px;
    color: rgba(0, 0, 0, 1);
    margin-top: 114.95px;
    margin-left: 808px;
    text-align: center;
}

#p1 {
    width: 1040px;
    height: 156px;
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
    text-align: center;
    margin-left: 442px;
    margin-top: 51px;
}

.course-cards {
    display: flex;
    border: none !important;
    margin-right: 50px;
    width: 498px;
    height: 640px;
}

.card-box1 {
    border: none !important;
    background-color: transparent;
    box-shadow: none !important;
    margin-top: 73px;
    margin-left: 165px;
}

.card-box2 {
    border: none !important;
    background-color: transparent;
    box-shadow: none !important;
    margin-top: 130px;
    margin-left: 165px;
}

.students-say{
    width: 1922px;
    height: 428px;
    background-color: rgba(76, 86, 18, 1);
    margin-top: 208px;
    display: flex;
    justify-content: space-between;
    
}
.rec1{
    width: 83px;
    height: 121px;
    background-color: rgba(243, 247, 220, 1);
    margin-top: 180px;
    margin-bottom: 181px;
  
}

.rec2{
    width: 83px;
    height: 121px;
    background-color: rgba(243, 247, 220, 1);
    margin-top: 180px;
    margin-bottom: 181px;
}

.arrow1{
    margin-top: 30px;
    margin-right: 11.41px;
    margin-bottom: 31.41px;
}

.arrow2{
    margin-top: 36px;
    margin-left: 13px;
    margin-right: 11.04px;
    margin-bottom: 26.04px;
}

.wom2{
    width: 408px;
   margin-left: 93; 
    margin-top: 57px;
    margin-bottom: 57px;

}
.middle-txt{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
h3{
    width:450px;
    height: 30px;
    font-size: 36px;
    font-weight: 700;
    line-height: 30px;
    color: rgba(255, 255, 255, 1);
    margin-top: 57px;
    margin-left: 238px;
}

.mid-txt{
    width: 926px;
    height: 235px;
    word-wrap: break-word;

}

#p2{
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
    color: rgba(246, 249, 233, 1);
    margin-top: 40px;
    
}
#p3{
    width: 156px;
    height: 30px;
    font-weight: 600;
    font-size: 32px;
    line-height: 30px;
    color: rgba(255, 255, 255, 1);
    margin-top: 20px;
}

#p4{
    width: 205px;
    height: 30px;
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    color: rgba(255, 255, 255, 1);
    margin-top: 5px;
    
}

.dot3{
    width: 78px;
    height: 26px;
    margin-top: 10px;
    margin-bottom: 54px;
    margin-left: 435px;
}
/* Style for the card created*/

.new-box {
    width: 489px;
    height: 640px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 165px;
    background-color: rgba(228, 235, 188, 1);
    box-shadow: 5px 8px 5px rgba(0, 0, 0, 0.25);


}

.box-card1 {
    width: 100%;
    height: 352px;
    background-color: rgba(76, 86, 18, 1);
    color: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    border-radius: 15px 15px 0px 0px;
}

.box-card2 {
    width: 100%;
    height: 288px;
    background-color: rgba(228, 235, 188, 1);
    color: rgba(0, 0, 0, 1);
}

.web {
    margin-left: 186px;
    margin-top: 29px;
}

#title-1 {
    width: 376px;
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
</style>