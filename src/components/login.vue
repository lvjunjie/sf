<template>
    <div id="login" @click="closeLogin()">

      <div v-if="type=='loginIn'" class="login-main" @click.stop="">
        <h3>
          Login in
        </h3>
        <div class="login-form">
          <input type="text" placeholder="account"/>

          <input type="password"  placeholder="password"/>
        </div>

        <button class="btn" style="width: 100%" @click="checkLogin('login')">login</button>
      </div>

      <div v-if="type=='signUp'" class="login-main" @click.stop="">
        <h3>
          Sign up
        </h3>
        <div class="login-form">
          <input type="text" placeholder="account"/>
          <input type="password"  placeholder="password"/>
          <input type="password"  placeholder="confirm password"/>
          <!--<input type="tel"  placeholder="phone"/>-->
          <div style="display: flex;justify-content: space-around;">
            <el-checkbox  v-model="vipType" label="1">校友会员</el-checkbox >
            <el-checkbox  v-model="vipType" label="2">政府协作会员</el-checkbox >

          </div>

        </div>

        <button class="btn" style="width: 100%" @click="checkLogin('sign')">sign up</button>
      </div>
    </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      type:'',
      vipType:''
    }
  },
  methods: {
    closeLogin:function () {

      this.Fuc.removeUnScroll();
      $('#login').removeClass('show-login');

    },
    checkLogin:function (type) {
      if(type == 'login'){
        this.$message({
          message: '登录成功',
          type: 'success'
        });

        setTimeout(()=> {

        },2000)
      }else {
        this.$message({
          message: '注册成功，请完善个人信息',
          type: 'success'
        });

        setTimeout(()=> {
          this.closeLogin();
          this.$router.push({name: 'person'});
        },2000)
      }


    }
  },
  mounted() {
      this.eventBus.$on('showLogin',(type)  => {
        this.type = type;

        this.Fuc.unScroll();
        $('#login').addClass('show-login')
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>


  #login {

    position: fixed;
    z-index: 1100;
    top: 0;
    left: 0;
    width: 100vw;
    height: 0;
    background:rgba(177,4,14,1);
    /*opacity: 0.6;*/
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
  }

  .show-login{
    height: 100vh !important;
  }
  .login-main {
    width: 50%;
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    overflow: hidden;
  }
  h3{
    font-size: 22px;
    font-weight: 800;
    color: #555;
    line-height: 30px;
  }

  .login-form {
    padding: 20px 0;
  }
  .login-form input{
    box-sizing: border-box;
    margin: 10px 0;
    width: 100%;
    height: 50px;
    padding: 0 20px;
    vertical-align: middle;
    background: #f8f8f8;
    border: 3px solid #ddd;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 50px;
    color: #888;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    -o-transition: all .3s;
    -moz-transition: all .3s;
    -webkit-transition: all .3s;
    -ms-transition: all .3s;
    transition: all .3s;
  }


  @media screen and (max-width: 800px){
    .login-main{
      width: 90%;
    }
  }
</style>
