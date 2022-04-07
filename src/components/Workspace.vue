<template>
    <div class="media-nav">
        <div>
            <img src="src/assets/house.svg" />
            <span class="nav-txt">My Workspace</span>
        </div>    
        <div class="media-buttons">
        <img src="src/assets/trash.svg" />
         <button class="upload-btn" type="button">Upload</button>
         <img class="avatar" height="128" width="128" src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" alt="Cloud Chen">
        </div>
    </div> 
</template>
<script>
    // eslint-disable-next-line
    export default{
        name : "Media"
    };
</script>
<style>
.media-nav{
    display : flex;
    justify-content : space-between;
    height : 80px;
    padding: 20px;
    cursor : pointer;
}

.media-nav .nav-txt{
    cursor : pointer;
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

.media-nav .media-buttons{
    width : 250px;
    display:flex;
    justify-content : space-evenly;
}

.media-nav .media-buttons .upload-btn {
    background-color : #16b864;
    color :white;
    border : none;
    line-height: 2.0;
    width: 90px;
    height : 38px;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
}

.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}

</style>