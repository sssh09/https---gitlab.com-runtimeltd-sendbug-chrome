<template>
<div>
    <div class="form-switches">
            <div class="form-check form-switch" style=" display : inline-flex;justify-content: space-between; padding-left:10px;">
                <div class="form-img">
                    <img src="/src/assets/microphone.png" href="" />
                    <span class="form-check-input1">MicroPhone</span>
                </div>
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style="width: 3.5em;height: 30px;">
            </div>
            <div class="form-check form-switch" style=" display : inline-flex;justify-content: space-between; padding-left:10px;">
                <div class="form-img">
                    <img src="/src/assets/camera.svg" href="" />
                    <span class="form-check-input1">Webcam</span>
                </div>    
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style="width: 3.5em;height: 30px;">
            </div>
    </div>
</div>    
</template>
<script>
// eslint-disable-next-line
export default {
    name : "Switch2",
}
</script>

<style>
div {
    background-color: #13212e;
}
.form-switches {
    background-color : #13212e;
    height : 100px;
    position : relative;
    display: inline-flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.form-switch{
    height :50%;
    width: 100%;
    padding-left : 0px;
}

span.form-check-input1{
    height : 35px;
    color : white;
    background-color : #13212e;
    text-align: left;
    line-height: 2.0;
    font-size: 18px;
    margin-left: 10px;
}

.form-check{
    width: 550px;
}

.form-switch img{
    padding: 10px 0;
}
</style>