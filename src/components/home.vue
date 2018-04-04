<template>
  <div id="home">
    <!--前后端交互测试表单-->
    <section class="top-banner">
      <div>
        <h2><img src="../image/logo.png"/></h2>
        <h3 v-on:click="scrollMain()">
          Explore<br>
          <span>
          <i class="fa fa-chevron-down"></i>
        </span>
        </h3>
      </div>

    </section>

    <div id="homeMain" class="main">
      <section class="part">
        <h1>ntuic news</h1>
        <h5>The latest news from ntuic</h5>

        <div class="card-space">
          <ul>
            <li v-for="item in newsList">
              <div class="card">
                <div class="img">
                  <img  src="../image/banner.jpg"/>
                </div>
                <div class="content">
                  <div>这里展示标题</div>
                  Mysterious skeleton shows molecular complexity of bone diseases
                </div>
              </div>
            </li>

          </ul>

          <div class="opt-space">
            <button class="btn" @click="loadMore('news')">More ntuic News</button>
          </div>
        </div>
      </section>
      <section class="part part-b">
        <h1>ntuic Events</h1>
        <h5>What’s happening on ntuic</h5>

        <div class="card-space">
          <ul>
            <li v-for="item in eventsList">
              <div class="card">
                <div class="img">
                  <img  src="../image/banner.jpg"/>
                </div>
                <div class="content">
                  <p>这里展示标题</p>
                  Mysterious skeleton shows molecular complexity of bone diseases
                </div>
              </div>
            </li>

          </ul>

          <div class="opt-space">
            <button class="btn" @click="loadMore('events')">More ntuic Events</button>
          </div>
        </div>
      </section>
      <section class="part">
        <h1>ntuic Achievement</h1>
        <h5>What’s happening on ntuic</h5>
        <achievement></achievement>

      </section>
      <section class="part part-b">
        <h1>Project Development</h1>
        <development></development>
      </section>
    </div>

  </div>
</template>

<script>
import achievement from './achievement.vue'
import development from './projectDevelopment.vue'

export default {
  name: 'home',
  components:{achievement,development},
  data () {
    return {
        newsList:new Array(5),
        eventsList:new Array(4),
    }
  },
  methods:{
    loadMore:function (type) {
      switch (type){
        case 'news':
            this.newsList = [...this.newsList,...new Array(4)];
            break;
        case 'events':
          this.eventsList = [...this.eventsList,...new Array(4)];
          break;
      }

    },
    listenScroll:function () {
      /*滚动banner*/

      const mh = $('#homeMain').height()
//      console.log(mh)

      const wh = $(window).height();
      $(window).scroll(function () {
        let s = wh - $(window).scrollTop();
//        console.log(s)
        if(s <=0){//banner滑到顶部

          $('.top-banner').css({
            marginBottom:0,
          })
          $('#homeMain').css({
            position:'relative',
            zIndex: 1
          })
        }else {
          $('.top-banner').css({
            marginBottom:wh+'px',
          })
          $('#homeMain').css({
            position:'fixed',
            zIndex: -1
          })
        }

      })
    },
    scrollMain:function () {
      const wh = $(window).height()
      $('html,body').animate( {scrollTop :wh},800 );
    }

  },
  mounted(){

/*    this.$http.get('/Student/GetTestData',{id:'f5280ac0-9b4f-4ccf-94dc-e7f3236d1175'}).then(response=>{
      console.log(response);
    })*/




    this.listenScroll()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top-banner {
    width: 100%;
    height: calc(100vh - 48px);
    display: flex;
    overflow: hidden;

/*    position: fixed;
    top: 48px;
    left: 0;
    z-index: 2;*/

    margin-bottom: calc(100vh - 48px);

    background: url("../image/banner.jpg") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .top-banner>div{
    position: relative;
    align-items: center;
    display: flex;
    width: 100%;
    height: 100%;
  }
  h2 {
    text-align: center;
    color: #fff;

    font-size: 40px;
    width: 30%;
    margin: 0 auto;

  }
  h2 img{
    width: 100%;
  }

  h3{
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    width: 50%;
    text-align: center;
  }
  h3 span{
    display: inline-block;
    width: 100%;
    text-align: center;
  }
  h3 span i {
    color: #fff;
    font-size: 18px;
    text-align: center;
  }

  .main {
    width: 100%;
    position: fixed;
    top: 48px;
    /*top:0;*/
    left: 0;
    z-index: -1;
  }


  section.part{
    padding:25px 1.25em;
  }

  section h1 {
    width: 100%;
    font-weight: 900;
    font-size: 2.44em;
    line-height: 1.25em;
    text-align: center;
    letter-spacing: -.25px;
    margin-top: 0.333em;
  }
  section h5 {
    width: 100%;
    font-weight: 400;
    font-size: 1.25em;
    line-height: 1.25em;
    text-align: center;
    letter-spacing: -.25px;
    margin-top: 0.33em;
    margin-bottom: 20px;
  }

  .card-space ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .card-space li{
    box-sizing: border-box;
    width: 25%;
    padding: 10px;
  }

  .card-space li .img{
    overflow: hidden;
    /*max-height: 250px;*/
    position: relative;

  }
  .card-space li .img img:hover{
    transform: scale(1.05);
  }
  .card-space li .img img{
    /*min-width: calc(100% + 1px);*/
    /*min-height: calc(100% + 1px);*/
    overflow: hidden;
    width: 100%;
    height: auto;
    -webkit-transform: none;
    /*transform: none;*/
    max-height: calc(100% + 1px);
    max-width: none;
    cursor: pointer;

    /*position: absolute;*/
    /*top: 50%;*/
    /*left: 50%;*/
    /*transform: translate(-50%,-50%);*/
  }

  .card-space li .content {
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    padding: 16px;
    height: 120px;
    overflow: hidden;
    font-weight: bold;
  }

  .card-space li .content>div {
    line-height: 24px;
    font-weight: 400;
  }

  .card-space li:first-child{
    width: 100%;
    position: relative;
  }

  .card-space li:first-child .img{
    max-height: 420px;
  }


  .card-space li:first-child .content{
    position: absolute;
    right: 40px;
    bottom: 40px;
    width: 360px;
    height: 220px;
  }

  .data-space {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    padding: 20px 0;
    flex-wrap: wrap;
  }

  .opt-space {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .data-space>div{
    width: 33%;
    text-align: center;
  }



  .part-b {
    background: #2f2424;
  }

  .part-b h1,
  .part-b h5{
    color: #fff;
  }

  .part-b .card-space li{
    width: 25% ;
  }

  .part-b .card-space li .img{
    /*max-height: 250px !important;*/
  }

  .part-b .card-space li:first-child .content{
    width: 100%;
    position: inherit;

  }

  .part-b .card-space li .content{
    height: 260px !important;
    padding-top: 40px;

  }


  .data-space {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }


  @media screen and (max-width: 800px){
    h2 {
      width: 50%;
    }

    .card-space li{
      width: 100% !important;
    }


    .card-space li:first-child .content{
      width: 100%;
      height: 120px;
      position: inherit;

    }

    .data-space>div{
      width: 100%;
    }

  }
</style>
