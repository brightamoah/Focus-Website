<template>
    <div class="user-Container">

        <h3>User Success Stories</h3>

        <div class="user-card">
            <section>
                <img src="/images/rodecard.png">
                <div class="rose">
                    <img id="rpic" src="/images/rosepic.png">
                    <p>Rose Mark<img src="/images/Star.png"></P>
                </div>
            </section>

            <section>
                <img src="/images/rodecard.png">
                <div class="rose">
                    <img id="rpic" src="/images/johnpic.png">
                    <p>John Sam<img src="/images/Star.png"></P>
                </div>
            </section>

            <section>
                <img src="/images/rodecard.png">
                <div class="rose">
                    <img id="rpic" src="/images/Jamespic.png">
                    <p>James Son<img id="star" src="/images/Star.png"></P>
                </div>
            </section>
        </div>

        <div class="tdot">
            <img src="/images/3d.png">
        </div>

    </div>
</template>
<script>
export default {
    name: "UserStories"
}
</script>

<script setup>

</script>


<style scoped>
.user-Container {
    display: flex;
    flex-direction: column;
    background-color: white;
    Width: 1920px;
    Height: 634px;
    align-items: center;
    justify-content: center;

}

.user-card {
    display: flex;
    justify-content: space-between;
    width: 1296px;
    height: 334px;
    background-color: transparent;
    border: 2px solid transparent;
    margin-top: 67px;

}

h3 {
    width: 413px;
    height: 48px;
    font-size: 40px;
    font-weight: 600;
    color: rgba(59, 67, 14, 1);
    margin-left: 754px;
    margin-right: 753px;


}

.rose {
    display: flex;
}

#rpic {
    width: 69px;
    height: 69px;
    padding-bottom: 3px;
}

p {
    width: 121px;
    height: 29px;
    margin-top: 12px;
    margin-left: 10px;
    font-weight: 500;
    font-size: 24px;
    line-height: 29.05px;
}

#star {
    width: 100px;
    height: 19px;

}

.tdot{
    width: 80px;
    height: 20px;
    margin: 71px 920px 43px 920px;
    
}
</style>