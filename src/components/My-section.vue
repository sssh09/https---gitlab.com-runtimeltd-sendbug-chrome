<template>
    <div>
        <div class="section-settings" style="display: initial;">
            <div class="section-section" style="background-color: rgb(5, 12, 31)">
                <div class="myId">
                    <img class="avatar" height="30" width="30" src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" alt="Cloud Chen">
                    <span class="nickname">runtime</span>
                </div>
                <div class="btn btn-secondary dropdown-toggle" style="background-color: #050c1f; border:none; height: 100%; text-align:end; line-height: 2.5;"></div>
            </div>
            <div class="section-name">
                <div class="section-session" >
                    <div class="session-box" style="margin-top : 20px;">
                        <span class="name-session">Sessions</span>
                        <span class="session-count" style="color:white;">3</span>
                    </div>
                    <div class="session-box">
                        <span class="name-session">Settings</span>
                        <span class="session-count" style="color:white;"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-table">
            <div class="search">
                <img src="/assets/search.svg" />
                <input type="text" placeholder="Search sessions"/>
            </div>
             <div class="search-nav">
                <div class="search-bar"> 
                    <div class="date-bar">
                        <span class="session-count" style="color:white;">Date</span>
                        <div class="btn btn-secondary dropdown-toggle" style="background-color:rgb(19, 33, 46); border:none; height: 100%; text-align:end; width : 5px; line-height: 1.0;"></div>
                    </div>
                    <span class="session-count" style="color:white;">Reporter</span>
                    <span class="session-count" style="color:white;">Domain</span>
                    <span class="session-count" style="color:white;">Title</span>
                </div>
            </div>
        </div>
    </div>   
</template>
<script>
// eslint-disable-next-line
    export default{
        name : "My-section"
    }

        var sessionName = document.getElementsByClassName('section-session');
        console.log(sessionName)
            
</script>
<style>
div {
    width : 100%;
    height : 1000px;
    display: flex;
}
.section-settings {
    width : 20%;
    height : 100%;
    background-color: #050c1f;
}

.section-settings .section-section{
    height: 100px;
    border-bottom: 1px solid white;
    padding : 20px ;
    display: flex;
}

.section-settings .section-name {
    background-color: #050c1f;
    display : flex;
    flex-direction : row;
}

.section-settings .section-name .section-session{
    background-color: #050c1f;
    display: initial;
    padding: 0 20px;
}

.section-settings .section-name .section-session .session-box {
    background-color: #050c1f;
    display : flex; 
    justify-content: space-between;
    height : 50px;
    cursor : pointer;
} 

.section-settings .section-name .section-session .on{
    background-color: #fff;
} 

.section-settings .section-name .section-session .session-box .name-session {
    width: 100%;
    color : white;
    text-align : left;
    line-height : 3.5;
    padding-left : 20px;
}

.section-settings .section-name .section-session .session-box  .session-count {
    color : white;
    line-height : 3.5;
    padding-right : 20px;
}

.section-settings .section-section .myId{
    background-color: #050c1f;
    width: 100%;
    height: 100%;
}

.section-settings .section-section .myId img {
    margin-left : 10px;
    border-radius : 0px;
}

.section-settings .section-section .myId .nickname {
    color : white;
    margin-left : 15px;
    background-color: #050c1f;
    height: 100%;
    line-height: 3;
}

.section-table {
    width : 80%;
    height : 100%;
    background-color: #010a21;
    opacity:0.5;
    background-color: rgb(19, 33, 46);
    display: initial;
}

.section-table .search{
    height : 100px;
    padding: 20px 40px;
    border-bottom : 1px solid white;
}

.section-table .search img{
    transform : translateY(12px);
    height : 30px;
    width : 30px;
    margin-right : 10px;
}

.section-table .search input{
    background-color: rgb(19, 33, 46);
    color : white;
    border : none;
    width : 1550px;
}

.section-table .search-nav{
    height : 100%;
    padding-top: 30px;
}

.section-table .search-nav .search-bar{
    height : 60px;
    width: 50%;
    display: flex;
    justify-content: space-evenly;
}

.section-table .search-nav .search-bar .date-bar{
    width: 10%;
    height: 100%;
}
</style>