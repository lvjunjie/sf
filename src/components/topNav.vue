<template>
  <div id="topNav">
    <router-link to="/home">
      <div class="logo">
        <img style="height: 100%;width: auto" src="../image/logo.png"/>
      </div>
    </router-link>

    <div class="menu">
      <div v-on:click="openMenu()"  v-bind:class="{'open-menu':isOpenMenu}"><i class="fa fa-bars"></i>Menu</div>

      <ul v-bind:class="{'show-menu':isOpenMenu}">
        <li>
          <router-link to="/alumniCenter">{{ $t("menu.alumniCenter") }}</router-link>
        </li>
        <li>
          <router-link to="/governmentCollaboration">政府协作</router-link>
        </li>
        <li>
          <router-link to="/home">专业领域</router-link>
        </li>
        <li>
          <router-link to="/home">业务平台</router-link>
        </li>
        <li>
          <router-link to="/home">组织建制</router-link>
        </li>
        <li>
          <router-link to="/home">关于我们</router-link>
        </li>

        <li class="language">
          <el-dropdown trigger="click"  @command="choseLan">
            <span class="el-dropdown-link">
              {{curLan}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" >
              <el-dropdown-item command="zhCHS">中文</el-dropdown-item>
              <el-dropdown-item command="en">English</el-dropdown-item>
              <el-dropdown-item command="ja">日本語</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>

        <li class="login" v-if="isOpenMenu">
          <span style="color: #b1040e;width: 40%" v-on:click="login('loginIn')">登录</span>
          <span style="color: #bfbfbf;width: 40%" v-on:click="login('signUp')">注册</span>
        </li>



      </ul>


      <div v-if="isOpenMenu" class="menu-back" v-on:click="isOpenMenu = false"></div>
    </div>

    <div class="login">
      <span v-on:click="login('loginIn')">登录</span>
      <span v-on:click="login('signUp')">注册</span>
    </div>

<!--
    <div class="portrait">
      <img src="../image/banner.jpg"/>
    </div>
-->

  </div>
</template>

<script>
export default {
  name: 'topNav',
  data () {
    return {
        curLan:'中文',
       isOpenMenu:false
    }
  },
  methods:{
      choseLan:function (command) {
//          console.log(command)

        switch (command){
          case 'zhCHS':
            this.curLan  = '中文';
            break;
          case 'en':
            this.curLan  = 'English';
            break;
          case 'ja':
            this.curLan  = '日本語';
            break;
        }
        this.$i18n.locale=command
      },
      openMenu:function () {
          this.isOpenMenu = !this.isOpenMenu
      },
      login:function (type) {
        this.eventBus.$emit('showLogin',type)
      }
  },

  mounted (){
      console.log(this.moment().format())
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    display: block;
    height: 48px;
    line-height: 48px;
    padding:0 10px;
    color: #fff;
    cursor: pointer;
    font-size: 1em;
    font-weight: 400;
    text-decoration: none;
  }
  .router-link-active{
    background: #820000;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }


  #topNav {
    height: 48px;
    background: #b1040e;
    width: 100%;
    position: fixed;
    top:0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 1000;
    box-shadow: 0 0 10px rgba(0,0,0,.15), 0 3px 3px rgba(0,0,0,.15);
  }

  .logo {
    position: fixed;
    top:0;
    left: 0;
    overflow: hidden;
    padding: 5px 10px;
    height: 48px;
    box-sizing: border-box;
  }


  .menu ul{
    display: flex;
    padding: 0 10px;
    /*justify-content: flex-start;*/
  }

  .menu ul li {
    display: block;
    height: 48px;
    line-height: 48px;
    padding:0 10px;
    color: #fff;
    cursor: pointer;
    font-size: 1em;
    font-weight: 400;

  }

  .menu ul li:hover{
    background: #820000;
  }
  .menu>div {
    display: none;
  }

  .menu .menu-back{
    display: none;
    position: fixed;
    top: 48px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 48px);
    background: #000;
    opacity: 0.5;
    z-index: 1001;
  }

  .portrait {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    overflow: hidden;
    margin-right: 10px;
  }

  .portrait img{
    width: 100%;
    height: 100%;

  }


  .login{
    padding: 5px;
    border-left: 1px solid #fff;
  }
  .login span{
    display: inline-block;
    width: 60px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    font-size: 1em;

  }
.el-dropdown-link {
  color: #fff;
}

  @media screen and (max-width: 800px){
    .menu .menu-back{
      display: block;
    }
    .menu>div {
      display: block;
      height: 48px;
      float: right;
      line-height: 48px;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
      padding: 0 10px;
    }
    .menu i {
      color: #fff;
      font-size: 18px;
      margin-right: 5px;
    }

    .menu ul{
      position: fixed;
      z-index: 1100;
      top: 48px;
      left: 0;
      width: 100%;
      flex-wrap: wrap;
      padding: 0;
      transition: all 0.5s ease-in-out;
      height: 0;
      overflow: hidden;
    }



    .menu ul li {
      width: 50%;
      box-sizing: border-box;
      padding: 0;
      text-align: center;
      height: 60px;
      line-height: 60px;
      background: #fff;
      color: #0a0a0a;
    }

    .menu ul li a {
      color: #0a0a0a;
      height: 60px;
      line-height: 60px;
    }

    .router-link-active{
      color: #fff !important;
    }

    .menu .login{
      width: 100%;
      background: #eee;
      text-align: center;
      font-weight: bold;
    }

    .menu ul li:nth-child(odd){
      border-right: 1px solid #bfbfbf;
      border-bottom:1px solid #bfbfbf;
    }
    .menu ul li:nth-child(even){
      border-bottom:1px solid #bfbfbf;
    }

    .show-menu {
      height: inherit !important;
    }

    .open-menu {
      background: #820000;
    }

    .login{
      display: none;
    }

    .language{
      position: fixed !important;
      top: 0 !important;
      right: 100px !important;
      width: auto !important;
      height: 48px !important;
      line-height: 48px !important;
      background: transparent !important;
      border: none !important;
      color: #fff !important;
    }

  }

</style>

