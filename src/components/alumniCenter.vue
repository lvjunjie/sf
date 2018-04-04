<template>
  <div id="alumniCenter">
    <section>
      <div class="top">
        <div class="top-portrait">
          <img src="../image/portrait.png"/>
        </div>
      </div>
    </section>

    <section class="main" style="padding-top: 10px">
      <div class="list">
        <el-tabs  v-model="activeTab" type="card" @tab-click="handleClick">
          <el-tab-pane name="first" label="校友园地">
            <ul>
              <li v-for="item in list">
                <div class="item">
                  <div class="info-portrait">
                    <img src="../image/portrait.png"/>
                    <div class="detail-portrait">
                      <div style="padding: 5px;width: 450px">
                        职业：企业家、慈善家<br>
                        马云，男，1964年9月10日生于浙江省杭州市，祖籍浙江省嵊州市（原嵊县）谷来镇， 阿里巴巴集团主要创始人，现担任阿里巴巴集团董事局主席、日本软银董事、大自然保护协会中国理事会主席兼全球董事会成员、华谊兄弟董事、生命科学突破奖基金会董事
                      </div>
                    </div>
                  </div>
                  <div @click="showNewsInfo()" class="info">

                    <h2>中国“海龙11000”潜水器完成第一次海试</h2>

                    <div class="content">
                      3月30日，科考队员对“海龙11000”万米级无人潜水器进行下水前检查。当日，正在西太平洋执行2018年综合海试任务的“大洋一号”科考船，完成由中国自主研发的“海龙11000”万米级无人潜水器首次海试，潜水深度410米。新华社记者陈灏摄
                    </div>
                  </div>
                </div>
                <div class="bottom">
                  <div><h3 style="width: 150px">
                    张三
                    <i @click="confirmApply()" class="fa fa-plus" style="font-size: 1.25em;cursor: pointer"></i>
                  </h3></div>
                  <div><h5>2018-10-15</h5></div>
                </div>
              </li>
            </ul>
            <div class="opt-space">
              <button class="btn">Load more</button>
            </div>
          </el-tab-pane>
          <el-tab-pane name="second" label="我的发布">
            <ul>
              <li v-for="item in list">
                <div class="item">
                  <div class="info-portrait">
                    <img src="../image/portrait.png"/>
                    <div class="detail-portrait">
                      <div style="padding: 5px;width: 450px">
                        职业：企业家、慈善家<br>
                        马云，男，1964年9月10日生于浙江省杭州市，祖籍浙江省嵊州市（原嵊县）谷来镇， 阿里巴巴集团主要创始人，现担任阿里巴巴集团董事局主席、日本软银董事、大自然保护协会中国理事会主席兼全球董事会成员、华谊兄弟董事、生命科学突破奖基金会董事
                      </div>
                    </div>
                  </div>
                  <div @click="showNewsInfo()" class="info">

                    <h2>中国“海龙11000”潜水器完成第一次海试</h2>

                    <div class="content">
                      3月30日，科考队员对“海龙11000”万米级无人潜水器进行下水前检查。当日，正在西太平洋执行2018年综合海试任务的“大洋一号”科考船，完成由中国自主研发的“海龙11000”万米级无人潜水器首次海试，潜水深度410米。新华社记者陈灏摄
                    </div>
                  </div>
                </div>
                <div class="bottom">
                  <div><h3 style="width: 150px">
                    张三
                    <i @click="confirmApply()" class="fa fa-plus" style="font-size: 1.25em;cursor: pointer"></i>
                  </h3></div>
                  <div><h5>2018-10-15</h5></div>
                </div>
              </li>
            </ul>
            <div class="opt-space">
              <button class="btn">Load more</button>
            </div>
          </el-tab-pane>
        </el-tabs>

      </div>
      <div class="about">
        <div class="">
          <button class="btn" style="width: 100%" @click="showNewsAdd()">Add News</button>
        </div>
        <div style="width: 100%;margin-top: 10px">
          <el-tabs v-model="friendTab">
            <el-tab-pane label="好友列表" name="first">

              <div class="friend-list">
                <ul>
                  <li v-for="item in list">
                    <div class="friend-item">
                      <div>
                        <img src="../image/portrait.png" style="width: 100%"/>
                      </div>
                      <div style="width: 100%;line-height: 50px;padding-left: 20px;color: #aaa">
                        张三
                      </div>
                      <div class="friend-opt">
                        <i class="fa fa-trash"></i>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

            </el-tab-pane>
            <el-tab-pane label="申请列表" name="second">
              <div class="friend-list">
                <div class="friend-list">
                  <ul>
                    <li v-for="item in list">
                      <div class="friend-item">
                        <div>
                          <img src="../image/portrait.png" style="width: 100%"/>
                        </div>
                        <div style="width: 100%;line-height: 50px;padding-left: 20px;color: #aaa">
                          张三
                        </div>
                        <div class="friend-opt" style="background: rgba(134,204,42,0.86)">
                          <i class="fa fa-check"></i>
                        </div>
                        <div class="friend-opt">
                          <i class="fa fa-times"></i>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </section>


    <div id="newsDetailModal" @click="hideNewsAdd()">
      <div class="news-main" @click.stop="">
        <div class="news-title">中国“海龙11000”潜水器完成第一次海试</div>
        <h5 style="text-align: center">2018-03-31 张三</h5>
        <div class="news-content">
          <div v-html="newsTemp"></div>
        </div>
      </div>
    </div>

    <div id="addNewsModal" @click="hideNewsInfo()">
      <div class="add-main" @click.stop="">
        <div class="add-title">
          <div>
            <el-input  placeholder="请输入标题" v-model="newsTitle">
              <template slot="prepend">标题</template>
            </el-input>
          </div>
        </div>
        <div style="margin-top: 10px">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入概要，不超过100字"
            v-model="newsTitle">
          </el-input>
        </div>

        <div class="add-content"  style="margin-top: 10px">
          <div id="editorElem" style="text-align:left"></div>

          <div style="margin-top: 10px">
            <button class="btn" style="width: 100%" @click="publish()">Publish</button>
          </div>
        </div>
      </div>

    </div>

  </div>



</template>

<script>
  import E from 'wangeditor'

export default {
  name: 'alumniCenter',

  data() {
    return {
      activeTab:'first',
      friendTab:'first',
      list:new Array(20),
      newsTitle:'',
      newsTemp:'<p><img src="http://pic-bucket.nosdn.127.net/photo/0001/2018-03-31/DE78J06M00AN0001NOS.jpg" style="max-width:100%;"><br></p><p>3月30日，科考队员对“海龙11000”万米级无人潜水器进行下水前检查。当日，正在西太平洋执行2018年综合海试任务的“大洋一号”科考船，完成由中国自主研发的“海龙11000”万米级无人潜水器首次海试，潜水深度410米。新华社记者陈灏摄&nbsp;&nbsp;<br></p><p></p>'
    }
  },
  methods: {
    handleClick:function (tab, event) {
      console.log(tab.$options.propsData.label);
    },
    showNewsInfo:function () {
      this.Fuc.unScroll();
      $('#newsDetailModal').width('100vw');

    },
    hideNewsInfo:function () {
      this.Fuc.removeUnScroll();
      $('#addNewsModal').width('0');

    },
    showNewsAdd:function () {
      this.Fuc.unScroll();
      $('#addNewsModal').width('100vw');


    },
    hideNewsAdd:function () {
      this.Fuc.removeUnScroll();
      $('#newsDetailModal').width('0');

    },
    confirmApply:function () {
      this.$confirm('是否向 张三 发起好友申请？')
        .then(_ => {
          console.log('ok')
        })
        .catch(_ => {});
    }
  },
  mounted(){
    //编辑器
    let editor = new E('#editorElem');

    /*编辑器配置*/
    const configList = {
      uploadImgShowBase64:true,
      onchange:(html) => {
        this.editorContent = html
      }
    }

    Object.assign(editor.customConfig,configList)
    /*编辑器配置*/

    console.log(editor.customConfig)

    editor.create()



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .opt-space {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
  }
  section {
    padding: 20px;
  }
  .top {
    width: 100%;
    height: 20em;
    /*overflow: hidden;*/
    background: url("../image/banner.jpg") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position: relative;
    opacity: 0.8;
  }

  .top-portrait {
    padding: 5px;
    overflow: hidden;
    position: absolute;
    width: 15em;
    height: 15em;
    right: 2em;
    bottom: -2em;
    background: #fff;

  }
  .top-portrait img{
    width: 100%;
  }
  h3{
    letter-spacing: 0.3em;
    font-size: 0.8em;
    color: #606266;
    text-align: center;
    height: 20px;
    line-height: 20px;
  }

  section.main {
    display: flex;
    justify-content: space-between;
  }

  .list {
    background: #fff;
    width: 100%;
    margin-right: 20px;
    padding: 5px;
  }
  .list li {
    margin-bottom: 20px;
  }

  .list .item{
    display: flex;
    height: 150px;
    overflow: hidden;

  }
  .list .bottom{
    border-bottom: 1px solid #bfbfbf;
    height: 20px;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
  }
  .info-portrait {
    width: 150px;
    height: 150px;
    cursor: pointer;
    position: relative;
  }
  .detail-portrait {
    width: 0;
    overflow: hidden;
    height: 100%;
    background: #eee;
    transition: width 0.3s ease-in-out;
    padding-left: 150px;
    box-shadow: 1px 1px 10px #bfbfbf;
  }
  .info-portrait img{
    width: 100%;
    position: absolute;
    top:0;
    left: 0;
  }
  .info-portrait img:hover+.detail-portrait{
    width: 600px;
  }

  .list .info{
    width:  calc(100% - 150px);
    overflow: hidden;
    padding: 0 5px;
    font-size: 1em;
    cursor: pointer;
  }

  .info h2{
    font-size: 1.2em;
    font-weight: bold;
    color: #b1040e;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
   h5{
    text-align: right;
    font-size: 0.8em;
    color: #bfbfbf;
    /*margin-bottom: 5px;*/
  }
  .info .content {
    text-indent: 25px;
  }
  .about {
    background: #eee;
    width: 400px;
    padding: 10px;
    overflow: auto;
  }
  .friend-list {
    height: 800px;
    overflow: auto;
  }

  .friend-item {
    display: flex;;
    height: 50px;
    overflow: hidden;
    background: #ffffff;
  }
  .friend-item>div:first-child{
    flex: 0 0 50px;
    height: 50px;
  }
  .friend-opt{
    flex: 0 0 30px;
    height: 100%;
    background: #b1040e;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    color: #fff;
  }

  .friend-list li{
    margin-bottom: 20px;
  }

  #newsDetailModal,
  #addNewsModal{
    position: fixed;
    top:0;
    left: 0;
    width: 0;
    height: 100vh;
    z-index: 1100;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    transition: width 0.5s ease-in-out;
    overflow: hidden;
  }
  .news-main,
  .add-main{
    width: 60%;
    min-width: 600px;
    height: 95vh;
    background: #fff;
    margin: 0 auto;
    border-radius: 5px;
    overflow: auto;
    padding: 20px;

  }
  .news-title {
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 5px;
  }
  .news-content{
    padding: 10px;
  }

  @media screen and (max-width: 800px){
    .top-portrait{
      width: 8em;
      height: 8em;
      right: 1em;
      bottom: -1em;
    }

    .about {
      display: none;
    }

    .news-main,
    .add-main{
      width: 95vw;
      min-width: inherit;
      height: 60vh;
    }

    .el-message-box {
      width: 80% !important;
    }

  }
</style>
