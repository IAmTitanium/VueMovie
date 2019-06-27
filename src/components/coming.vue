<template>
  <div>
    <div class="loading" v-if="isShow">
      <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>
    </div>
    <div class="waterfall">
      <meta name="referrer" content="never">

      <div class="item" v-for="(item,index) in data" :key="index">
        <div class="imgbox"><img :src="item.images.large" alt=""></div>
        <div class="item_title">
          <p>电影名:{{item.title}}</p>
          <p>导演:{{item.directors[0].name}}</p>
          <p>演员:{{item.cast_names}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {baseUrl, message} from "@/response";

  export default {
    props: ['start', 'count'],
    data() {
      return {
        data: [],
        isShow: false,
      }
    },
    watch: {
      start: function (now, old) {
        this.submit();
      }
    },
    methods: {
      submit() {
        this.data = [];
        this.isShow = true;
        this.$http.jsonp(baseUrl + 'coming_soon?start=' + this.start + '&count=' + this.count)
          .then(res => {
            this.isShow = false;
            this.data = message(res);
            this.data = this.data.map(d => {
              if (d.directors.length === 0) {
                d.directors.push({
                  alt: "",
                  avatars: Object,
                  id: "-1",
                  name: "无"
                })
              }
              d.cast_names = d.casts.map(cast => cast.name).join(',');
              return d;
            });
            this.total = res.body.total;
            this.pages = Math.ceil(Number(res.body.total) / Number(res.body.count));
            this.$emit('pages', this.pages,this.total)
          })
      }
    },
    created() {
      this.submit()
    }
  }
</script>

<style scoped>

</style>
