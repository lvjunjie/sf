<template>
  <div id="development" >
    <div style="margin-top: 40px">
      <div class="item">
        <div class="image-part item-left">
          <img src="../image/banner.jpg"/>
        </div>
        <div class="content-part item-left">
          这里展示项目育成按理，图文相结合，内容控制在该区域，尽量精简;这里展示项目育成按理，图文相结合，内容控制在该区域，尽量精简;这里展示项目育成按理，图文相结合，内容控制在该区域，尽量精简;
        </div>
      </div>
      <div class="item">

        <div class="image-part item-right">
          <img src="../image/banner.jpg"/>
        </div>
        <div class="content-part item-right">
          这里展示项目育成按理，图文相结合，内容控制在该区域，尽量精简;这里展示项目育成按理，图文相结合，内容控制在该区域，尽量精简;这里展示项目育成按理，图文相结合，内容控制在该区域，尽量精简;
        </div>
      </div>

    </div>



  </div>
</template>

<script>

export default {
  name: 'development',
  data () {
    return {

    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  #development {
    width: 60%;
    min-width: 600px;
    margin: 0 auto;
  }
  .item{
    background: #fff;
    height: 100%;
    overflow: hidden;
  }
  .item-left{
    float: left;
    height: 100%;
  }
  .item-right{
    float: right;
    height: 100%;
  }
  .image-part,
  .content-part{
    width: 50%;
    overflow: hidden;
  }
  .image-part img{
    width: 100%;
    display: block;
    max-width: 100%;
    height: auto;

  }
  /*  .item {
      display: flex;
      background: #fff;
      height: 100%;
      overflow: hidd;
    }
  /*  .item-left{
      justify-content: flex-start;
    }
    .item-right{
      justify-content: flex-end;
    }
    .image-part,
    .content-part{
      width: 50%;
      overflow: hidden;
    }
    .image-part img{
      width: 100%;
      display: block;
      max-width: 100%;
      height: auto;

    }*/
  .content-part {
    background: #fff;
    font-size: 1em;
    padding: 10px;
    font-weight: bold;
  }

  @media screen and (max-width: 800px){
    #development {
      width: 95%;
      min-width: inherit;
      margin: 0 auto;
    }
    .item{
      margin-bottom: 20px;
    }

    .item-left,
    .item-right{
      float: item-left;
    }
    .image-part,
    .content-part{
      width: 100%;
    }
    .content-part {
      height: 200px;
    }
  }

</style>
