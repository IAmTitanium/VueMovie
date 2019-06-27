<template>
  <div class="container">
    <div class="nav_bar">
      <ul class="nav_bar_title">
        <li>关于</li>
        <router-link :to="{path:'/movie/movieList'}">
          <li>Movie</li>
        </router-link>
        <router-link :to="{path:'/'}">
          <li>首页</li>
        </router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style-type: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .container {
    width: 100%;
    height: 600px;
  }

  .nav_bar {
    position: fixed;
    width: 100%;
    background: white;
    height: 70px;
    border-bottom: 1px solid #bfbfbf;
    z-index: 999;
  }

  .logo {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -171px;
    margin-top: -83px;
    font-size: 60px;
  }

  @media screen and (max-width: 600px) {
    .logo {
      display: none;
    }

    .text {
      display: none;
    }
  }

  .text {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -60px;
    margin-top: 22px;
    color: #828282;
  }

  .nav_bar_title li {
    float: right;
    margin-right: 40px;
    line-height: 70px;
    color: #929292;
    cursor: pointer;
  }

  .nav_bar_title li:hover {
    color: #000000;
  }

  .waterfall {
    width: 100%;
    column-count: 4;
    column-gap: 10px;
    margin-top: 15px;
  }

  .item {
    border: 1px solid #fefefe;
    border-radius: 10px;
    margin-bottom: 10px;
    padding-bottom: 1em;
    height: 100%;
    overflow: hidden;
    display: inline-block;
  }

  .item_title {
    width: 271px;
    border-radius: 7px;
    background-color: #eeeeee;
    padding:8px;
  }

  .item_title p {
    font-size: 14px;
    color: #5b5b5b;
    margin-left: 5px;
  }

  .item_title p:first-child {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #303030;
  }
  .imgbox{
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  img {
    width: 100%;
    transition: .7s;
    position: relative;
    top: 0;
    left: 0;
  }
  img:hover{
    transform: scale(1.1);
  }

  @media (min-width: 992px) and (max-width: 1300px) {
    .waterfall {
      column-count: 3;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .waterfall {
      column-count: 2;
    }
  }

  @media (max-width: 767px) {
    .waterfall {
      column-count: 1;
    }
  }

  .aa {
    background-color: red;
  }
</style>
