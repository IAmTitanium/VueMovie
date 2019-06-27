<template>
  <div>
    <div class="box3">
      <div class="left">
        <router-link :to="{path:'movieList'}"><p @click="flag" class="link">热映</p></router-link>
        <router-link :to="{path:'coming'}"><p @click="flag" class="link">即将上映</p></router-link>
        <router-link :to="{path:'top'}"><p @click="flag" class="link">Top排行榜</p></router-link>
        <div class="prev btn" @click="startsPrev"><p>上一页</p></div>
        <div class="next btn" @click="startsNext"><p>下一页</p></div>
        <div class="footer">第:{{now}}页&nbsp;&nbsp;共:{{pages}}页</div>
      </div>
      <div class="right">
        <router-view @pages="get" v-bind:start="start" v-bind:count="count"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pages: 0,
        start: 0,
        count: 20,
        now: 0,
        total: [],
      }
    },
    computed: {},
    methods: {
      get(pages, total) {
        this.pages = pages;
        this.total = total;
      },
      startsNext() {
        this.start += 20;
        this.now++;
        if (this.now >= this.pages) {
          this.now = this.pages
        }
        if (this.start >= this.total) {
          this.start = this.total - 10;
        }
      },
      startsPrev() {
        this.start -= 20;
        this.now--;
        if (this.now <= 0) {
          this.now = 0;
        }
        if (this.start <= 0) {
          this.start = 0;
        }
      },
      flag() {
        this.now = 0;
        this.start = 0;
      }
    }
  }
</script>

<style>
  body, html {
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  a:active {
    color: black;
  }

  .box3 {
    display: -webkit-flex;
  }

  .box3 .left {
    top: 70px;
    width: 250px;
    position: fixed;
    float: left;
    height: 100%;
    background-color: #ffffff;
    border-right: 1px solid #dcdcdc;
  }

  .box3 .left .link {
    margin-top: 25px;
    margin-left: 10px;
    color: black;
    cursor: pointer;
  }

  .box3 .left .link:hover {
    color: #5c5c5c;
  }

  .footer{
    width: 150px;
    height: 50px;
    margin-left: 69px;
    font-size: 14px;
  }
  .box3 .right {
    flex: 1;
    height: 100%;
    margin-left: 300px;
    margin-right: 100px;
    margin-top: 90px;
  }

  @media screen and (max-width: 750px) {
    .box3 .left {
      display: none;
    }

    .box3 .right {
      margin-left: 80px;
    }
  }

  .prev {
    width: 60px;
    height: 30px;
    background-color: #ffffff;
    margin-top: 430px;
    margin-left: 30px;
    margin-bottom: 20px;
    float: left;
    border-radius: 7px;
    border: 1px solid #dadada;
    cursor: pointer;
  }

  .next {
    width: 60px;
    height: 30px;
    background-color: #ffffff;
    margin-top: 430px;
    margin-left: 50px;
    margin-bottom: 20px;
    float: left;
    border-radius: 7px;
    border: 1px solid #dadada;
    cursor: pointer;

  }

  .btn p {
    text-align: center;
    line-height: 30px;
  }


  .spinner {
    margin-top: 100px;
    margin-left: 48%;
    width: 50px;
    height: 40px;
    text-align: center;
    font-size: 10px;
  }

  .spinner > div {
    background-color: #333;
    height: 100%;
    width: 6px;
    display: inline-block;

    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
  }

  .spinner .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .spinner .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  .spinner .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .spinner .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  @-webkit-keyframes sk-stretchdelay {
    0%, 40%, 100% {
      -webkit-transform: scaleY(0.4)
    }
    20% {
      -webkit-transform: scaleY(1.0)
    }
  }

  @keyframes sk-stretchdelay {
    0%, 40%, 100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1.0);
      -webkit-transform: scaleY(1.0);
    }
  }
</style>
