<template>
    <div class="section-box" style="background-color: #13212e; height : 230px;">
        <div>
            <b-button-group>
                <b-button style="background-color:#28bc74; font-size:23px;">Record Tab</b-button>
                <b-button style="background-color:#28bc74; font-size:23px;">Record Screen</b-button>
            </b-button-group>
        </div>
        <div class="mt-3">
            <b-button-group>
                <b-button style="background-color:#28bc74;font-size:23px; ">Take ScreenShot</b-button>
            </b-button-group>
        </div>
    </div>
    
</template>
<script>

    // eslint-disable-next-line
    export default {
        name: "Section2"
    };
</script>
<style>
    .btn-group {
        margin-top: 30px;
        width: 550px;
        height: 60px;
    }

</style>