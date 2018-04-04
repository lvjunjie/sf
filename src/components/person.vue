<template>
  <div id="person">
      <el-alert title="完善个人信息，有助于通过审核~" type="success" close-text="知道了"></el-alert>
      <div class="person-main" style="padding: 10px">
        <div class="portrait-space" style="border-bottom: 1px solid #bfbfbf;padding-bottom: 20px">
          <div style="padding: 0 10px;">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
          <div style="padding: 0 10px;display: flex;align-items: center">
            <div>
              <p>头像150 * 150</p>
              <p>仅支持jpg、png格式</p>
              <p>大小不超过1MB</p>
            </div>
          </div>
        </div>
        <div class="form-main" style="">
          <div class="form-item" style="">
            <el-form ref="form" :model="form" label-width="100px" size="mini">
              <el-form-item label="账号：">
                张三
              </el-form-item>
              <el-form-item label="会员类型：">
                校友会员
              </el-form-item>
              <el-form-item label="审核状态：">
                待审核
              </el-form-item>
              <el-form-item label="真实姓名：">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="性别：">
                <el-radio-group v-model="form">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="活动时间">
                <el-date-picker
                  v-model="form.date"
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy-MM-dd" style="width: 100%;">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="手机号码：">
                <el-input type="tel" v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="邮箱：">
                <el-input type="email" v-model="form.name"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="form-item">
            <el-form ref="form" :model="form" label-width="100px" size="mini">
              <el-form-item label="个人简介：">
                <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 6}" v-model="form.name"></el-input>
              </el-form-item>
            </el-form>

              <button class="btn" style="width: 50%;float: right" >save</button>
            <div style="clear: both"></div>

          </div>
        </div>

      </div>
  </div>
</template>

<script>
export default {
  name: 'person',
  data () {
    return {
      imageUrl: '',
      form:{

      }
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type;
      const isLt2M = file.size / 1024 / 1024 < 1;

      if (isJPG != 'image/jpeg' && isJPG != 'image/png') {
        this.$message.error('上传头像图片只支持JPG和PNG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 1MB!');
      }
      return isJPG && isLt2M;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #person {
    min-height: 600px;
    width: 60%;
    min-width: 600px;
    margin: 20px auto;
    box-shadow: 0 0 10px rgba(0,0,0,.15), 0 3px 3px rgba(0,0,0,.15);
    background: #fff;
  }

  .person-main {
    padding: 20px 0;
  }


  /*图片上传*/
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 150px;
    height: 150px;
    line-height: 150px;
    text-align: center;
    border: 1px dashed #bfbfbf;
    border-radius: 4px;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  /*图片上传*/
  .portrait-space {
    display: flex;
    justify-content: center;
  }

  .portrait-space p {
    padding: 5px;
    color: #bfbfbf;
  }

  .form-main {
    display: flex;justify-content: center
  }

  .form-item {
    padding: 10px;width: 50%
  }

  @media screen and (max-width: 800px){
    #person {
      min-height: inherit;
      width: 95%;
      min-width: inherit;
    }
    .form-main {
      display: block ;

    }
    .form-item {
      width: 100%;
    }
  }
</style>
