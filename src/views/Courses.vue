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
</style>