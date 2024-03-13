<template >
    <div class="heading">

        <section>

            <h1>
                Why Choose Focus Technologies 
            </h1>

            <p  class="first-sec">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod <br> tempor incidunt ut labore et dolore magna aliqua. Ut enim ad <br>minim veniam, quis nostrum exercitationem ullam</p>

        </section>
        

        <section class="sec2">
            <img id="rpic2" src="/images/rpic1.png" alt="pic1">

            <div>
                <h3 class="r-title2">Internship Opportunities</h3>

                <p class="second-sec">
                    Lorem ipsum dolor sit amet, consectetur <br>adipisci elit, sed eiusmod tempor incidunt ut <br>labore et dolore magna aliqua. Ut enim ad <br>minim veniam, quis nostrum
                    <br>Lorem ipsum dolor sit amet, consectetur <br>adipisci elit, sed eiusmod tempor incidunt ut <br>labore et dolore magna aliqua. Ut enim ad <br>minim veniam, quis nostrum
                </p>

            </div>

        </section>


        <section class="sec3">
            <div>
                <h3 class="r-title3">Data Science Focused</h3>

                <p class="third-sec">
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore 
                </p>

            </div>

            <img id="rpic3" src="/images/rpic2.png" alt="pic2">

        </section>


        <section class="sec4">

            <img id="rpic4" src="/images/rpic3.png" alt="pic3">

            <div>
                <h3 class="r-title4">Practice Questions and Capstone Projects</h3>

                <p class="fourth-sec">
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum
                </p>

            </div>

            
        </section>
       
    </div>
</template>


<script>
export default {
    name: "ReasonSection"
}
</script>



<style scoped>

.heading{
    display: flex;
    flex-direction: column;
    
}

h1{
    width: 648px;
    height: 48px;
    font-size: 40px;
    font-weight: 700;
    line-height: 48.41px;
    color: rgba(76, 86, 18, 1);
    margin-top: 76px;
    margin-left: 686px;
    margin-right: 586px;


}

.first-sec{
    width: 786px;
    height: 110px;
    margin-left: 630px;
    margin-right: 504px;
    margin-top: 29px;
    font-size: 25px;
    font-weight: 400;
    line-height: 30.26px;
    text-align: center;
}

.sec2{
    display: flex;
   
}

#rpic2{
    width: 455px;
    height: 420px;
    margin-left: 297px;
    margin-top: 154px
    
}

.r-title2{
    width: 415px;
    height: 42px;
    font-size: 35px;
    font-weight: 600;
    line-height: 42.36px;
    color: rgba(101, 115, 23, 1);
    margin-top: 192px;
    margin-left: 83px;
}

p.second-sec{
    width: 535px;
    height: 291px;
    font-size: 24px;
    font-weight: 400;
    line-height: 29.05px;
    color: rgba(0, 0, 0, 1);
    margin-top: 31px;
    margin-left: 87px;
    margin-right: 546px;
}

.sec3{
    display: flex;  
}

.r-title3{
    width: 376px;
    height: 42px;
    font-size: 35px;
    font-weight: 600;
    line-height: 42.36px;
    color: rgba(101, 115, 23, 1);
    margin-top: 200px;
    margin-left: 549px;
}

.third-sec{
    width: 497px;
    height: 232px;
    margin-left: 549px;
    margin-top: 7px;
    font-size: 24px;
    font-weight: 400;
    line-height: 29.05px;
    color: rgba(0, 0, 0, 1);
    
  
}

#rpic3{
    width: 455px;
    height: 420px;
    margin-left: 125px;
    margin-top: 176px;
    margin-right: 294px;
    
}

.sec4{
    display: flex;  
}


#rpic4{
    width: 455px;
    height: 420px;
    margin-left: 297px;
    margin-bottom: 149px;
    margin-top: 158px
    
    
}

.r-title4{
    width: 622px;
    height: 90px;
    font-size: 35px;
    font-weight: 600;
    line-height: 45px;
    color: rgba(101, 115, 23, 1);
    margin-top: 208px;
    margin-left: 83px;
    text-align: center;
}

.fourth-sec{
    width: 654px;
    height: 87px;
    margin-left: 83px;
    margin-top: 20px;
    margin-right: 431px;
    margin-bottom: 322px;
    font-size: 24px;
    font-weight: 400;
    line-height: 29.05px;
    color: rgba(0, 0, 0, 1);
    
  
}
</style>