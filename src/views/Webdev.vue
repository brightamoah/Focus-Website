<template >
    
    <div>
        <NavbarComponent/>

        <div class="webdev-container">
            <h2>Introduction to Website Development</h2>

            <div class="webdev"></div>
            <img src="/images/play-button.png" alt="playbutton">
        </div>
        
        
       
    </div>
</template>
<script>
export default {
    name: "WebdevView"
}
</script>
<script setup>
import NavbarComponent from '@/components/Navbar.vue';
</script>


<style scoped>
.webdev-container{
    width: 1920px;
    height: 3664px;
    background-color: rgba(236, 242, 198, 0.6);
    mix-blend-mode: darken;
    
}

h2{
    width: 641px;
    height: 44px;
    font-size: 36px;
    font-weight: 500;
    line-height: 43.57px;
    color: rgba(0, 0, 0, 1);
}

.webdev{
    width: 883px;
    height: 641px;
    background-image: url(/images/laugh.png);
}
</style>