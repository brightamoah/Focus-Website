<template >
    <div class="footer-container">
        <section>
            <img id="foot-img" src="/images/footerlogo.png">
        </section> 

        <section class="foot-sec1">
           <div>
            <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="vertical"
            @select="handleSelect"
          >  
          <el-menu-item index="1">Products</el-menu-item>
          <el-menu-item index="2">Courses</el-menu-item>
          <el-menu-item index="3">Pricing</el-menu-item>
          <el-menu-item index="4">Questions</el-menu-item>
        </el-menu>

           </div>



           <div>2</div>


           <div>3</div>
        </section> 

        <section>icons</section> 
    </div>
</template>


<script >
export default {
   name: "FooterComponent" 
}
</script>





<style >
.footer-container{
    width: 1920px;
    height: 452px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(220, 220, 220, 1);
    flex-direction: row;
    background-color: black;
    
}

#foot-img{
   width: 401.64px;
   height: 200px; 

}

.foot-sec1{
    display: flex;
    justify-content: space-evenly;;
    align-items: center;
}
    
</style>