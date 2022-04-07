<template>
<div>
  <div class="header-img">
      <div class="nav-img">
        <img src="src/assets/bug.png" />
        <img src="src/assets/gear.png" />
      </div>    
  </div>
    
</div>
</template>
<script>
// eslint-disable-next-line

export default{
    name : "Header2"
};

</script>
<style>
.header-img{
  width: 100%;
}

.nav-img{
    width: 550px;
    padding: 30px 0;
    display: inline-flex;
    justify-content: space-between;
}

.nav-img img{
  height : 50px;
  width : 50px;
}
</style>
