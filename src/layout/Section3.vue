<template>
    <div class="Section3-Box" style="background-color : #1b2e3e; height : 250px; display: flex; flex-direction: column; align-items: center;">
        <div class="form-check form-switch" style=" display : inline-flex;justify-content: space-between;  background-color : #1b2e3e; padding-left:0; padding: 20px 0; height : 85px">
                <div class="form-img2" style="background-color : #1b2e3e;">
                    <span class="form-check-input1"  style="background-color : #1b2e3e; margin-left:0px; font-size:30px; margin-right : 15px;">Bug Watch</span>
                    <img src="/src/assets/question.svg" href="" />
                </div>    
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style="width: 3.5em;height: 30px;">
       </div>
       <div class="discription" style="background-color : #1b2e3e; display:block; font-size:21px; letter-spacing: 1px;">
            <p class="discription-box" >
                    Never reproduce a bug again. Enable Bug
                    <p class="span-description" >
                    Watch on showcase-webflow-website-
                    </p>
                    <p class="span-description">
                    template.Webflow.io
                    </p>
            </p>
       </div>     
    </div>
</template>
<script>
    // eslint-disable-next-line
    export default{
        name : "Section3"
    }
</script>
<style>
.discription {
    width: 550px;
    text-align: left;
}
.discription-box , .span-description{
    color : white;
}
</style>