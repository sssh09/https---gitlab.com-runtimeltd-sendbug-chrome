<template>
    <div>
        <Workspace />
        <Video />
    </div>    
</template>
<script>
    // eslint-disable-next-line
    import Workspace from '../components/Workspace.vue'
    import Video from '../components/Video.vue'

    export default{
        name : "Media",
        components : {
            Workspace,
            Video
        }
    };

</script>
<style>
.media-nav{
    display : flex;
    height : 80px;
    padding: 20px;
}

.media-nav img {
    width : 30px;
    height : 30px;
    margin-top: 5px;
}

.media-nav .nav-txt{
    color : white;
    font-size : 18px;
    margin-left : 10px;
    line-height: 2.0;
}
</style>