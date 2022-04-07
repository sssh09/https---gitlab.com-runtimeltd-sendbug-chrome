<template>
    <div class="media-container">
        <div class="container" style="width: 60%;margin: 0; border-right : 2px solid #181826; transform: translateY(0px);">
            <my-video :sources="video.sources" :options="video.options"></my-video>
            <span class="video-date">Video.14 Mar 22</span>
            <div class="discription">
                <span class="video-title">Add title</span>
                <span class="video-description" style="opacity: 0.5;">Add description</span>
            </div>
        </div>
        <div class="container-info">
            <div class="info-box">
                <div>
                    <span class="info-column">Console</span>
                    <span class="info-column">Network</span>
                    <span class="info-column">System Info</span>
                </div>    
                <div class="info-steps" >
                    <img src="/assets/stars.svg" href="" />
                    <span class="steps">Steps</span>
                </div>
                <div class="info-recording" >
                    <div class="recording-time">
                        <span class="triangle></span>
                        <span class="timeLine-start">0:00</span>
                    </div>
                    <div class="recording-timeLine">
                        <img src="/assets/stars.svg" href="" />
                        <span class="timeLine-start">Session started on</span>
                    </div>
                </div>
                <div class="info-recording" >
                    <div class="recording-time">
                        <span class="triangle></span>
                        <span class="timeLine-start">0:00</span>
                    </div>
                    <div class="recording-timeLine">
                        <img src="/assets/play.svg" href="" />
                        <span class="timeLine-start">- - - - -  Screen Recording Start - - - - - </span>
                    </div>
                </div>
                <div class="info-recording" >
                    <div class="recording-time">
                        <span class="triangle ></span>
                        <span class="timeLine-start">0:02</span>
                    </div>
                    <div class="recording-timeLine">
                        <img src="/assets/stop.svg" href="" />
                        <span class="timeLine-start">- - - - - Screen Recording End - - - - - </span>
                    </div>
                </div>
                <div class="info-recording" >
                    <div class="recording-time">
                        <span class="triangle ></span>
                        <span class="timeLine-start">0:02</span>
                    </div>
                    <div class="recording-timeLine">
                        <img src="/assets/stars.svg" href="" />
                        <span class="timeLine-start">Session ended</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-blank">
            <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
        </div>
        
    </div>
</template>

<script>
// eslint-disable-next-line
import myVideo from 'vue-video'

export default {
    data () {
        return {
            video: {
                sources: [{
                    src: 'http://covteam.u.qiniudn.com/oceans.mp4',
                    type: 'video/mp4'
                }],
                options: {
                    autoplay: true,
                    volume: 0.6,
                    poster: 'http://covteam.u.qiniudn.com/poster.png'
                }
            }
        }
    },
    components: {
        myVideo
    }
}
</script>
<style>
.media-container{
    display : inline-flex;
    width : 100%;
    height : 1000px;
    border-top: 2px solid #181826;
}

.container{
    transform: translateY(-27px);
}

.container .video-date{
    color: #cad1e7;
    opacity: 0.7;
    margin-right: 10px;
    display: flex;
    flex-direction: row-reverse;
    transform: translateY(-20px);
}

.container .discription{
    width: 98%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: white;
    font-weight: bold;
    background-color: #8c919c;
    border: 1px solid white;
    border-radius: 3px;
    opacity: 0.3;
    margin-left : 10px;
    padding : 10px;
    height : 85px;
 
}

.container-info {
    display : inline-flex;
    width: 450px;
    height : 60px;
    padding : 30px;
    text-align: left;
    padding-bottom: 0;
}

.container-info .info-box .info-column{
    color : white;
    margin-right : 50px;
    cursor: pointer;
}

.container-info .info-box .info-steps {
    text-align: left;
    margin: 20px;
    margin-left: 0;
    background-color: #2c3756;
    width : 80px;
    padding : 5px;
}

.container-info .info-box .info-steps .steps{
    color : white;
    padding-left : 10px;
    line-height : 1.5;
}

.media-container .container-blank {
    width : auto;
    padding: 30px;
    right: 0;
    position: absolute;
}

.media-container .container-blank button{
    custor : pointer;
}

.container-info .info-recording{
    width: 100%;
    display : inline-flex;
    margin-bottom : 10px;
}

.container-info .info-recording .recording-time{
    color : white;
    margin-right: 30px;
}

.container-info .info-recording .recording-timeLine .timeLine-start{
    color : white;
    padding-left : 10px;
}

.triangle {
    width: 0px;
    height: 0px;
    border-top: 15px solid transparent;
    border-right: 30px solid red;
    border-bottom: 15px solid transparent;
    color : white;
}
</style>