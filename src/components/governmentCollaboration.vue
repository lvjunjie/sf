<template>
  <div id="governmentCollaboration">
    <section style="padding-bottom: 0">
      <header>
        <div class="search">
          <el-input placeholder="请输入内容" v-model="searchVal">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div class="upload">
          <el-button type="primary" @click="showUpload()">上传文件</el-button>
        </div>
      </header>


    </section>


    <section>
      <el-table
        :data="list"
        style="width: 100%"
        max-height="800px">

        <el-table-column
          prop="date"
          label="上传时间"
          width="150">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          min-width="200">
        </el-table-column>
        <el-table-column
          prop="type"
          label="文件类型"
          width="120">
        </el-table-column>
        <el-table-column
          prop="size"
          label="文件大小"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, list)"
              type="text"
              size="small">
              点击下载
            </el-button>
          </template>
        </el-table-column>
      </el-table>

    </section>

    <div style="display: flex;justify-content: center">
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
    </div>

    <div id="uploadModal" @click="hideUpload()">
      <div class="upload-main" @click.stop="">

        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList">
          <el-button size="small" type="primary">选择文件</el-button>
          <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
        </el-upload>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'governmentCollaboration',
  methods: {
    showUpload:function () {
      this.Fuc.unScroll();
      $('#uploadModal').width('100vw');
    },
    hideUpload:function () {
      this.Fuc.removeUnScroll();
      $('#uploadModal').width('0');
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    }
  },
  data() {
    return {
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      searchVal:'',
        list: [{
        date: '2018-05-03',
        title: '这是一个比较长的文件名称这是一个比较长的文件名称这是一个比较长的文件名称这是一个比较长的文件名称这是一个比较长的文件名称这是一个比较长的文件名称这是一个比较长的文件名称',
        type: 'rar',
        size: '7800KB'
      },{
          date: '2018-05-03',
          title: '这是一个比较长的文件名称',
          type: 'rar',
          size: '7800KB'
        },{
          date: '2018-05-03',
          title: '这是一个比较长的文件名称',
          type: 'rar',
          size: '7800KB'
        },{
          date: '2018-05-03',
          title: '这是一个比较长的文件名称',
          type: 'rar',
          size: '7800KB'
        },{
          date: '2018-05-03',
          title: '这是一个比较长的文件名称',
          type: 'rar',
          size: '7800KB'
        },{
          date: '2018-05-03',
          title: '这是一个比较长的文件名称',
          type: 'rar',
          size: '7800KB'
        },{
          date: '2018-05-03',
          title: '这是一个比较长的文件名称',
          type: 'rar',
          size: '7800KB'
        },{
          date: '2018-05-03',
          title: '这是一个比较长的文件名称',
          type: 'rar',
          size: '7800KB'
        },{
          date: '2018-05-03',
          title: '这是一个比较长的文件名称',
          type: 'rar',
          size: '7800KB'
        }
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  section {
    padding: 20px;
  }

  header {
    display: flex;
    justify-content: space-between;
  }
  .search {
    width: 40%;
  }


  #uploadModal{
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
  .upload-main{
    width: 60%;
    min-width: 600px;
    height: 40vh;
    background: #fff;
    margin: 0 auto;
    border-radius: 5px;
    overflow: auto;
    padding: 20px;

  }

  @media screen and (max-width: 800px){
    .search {
      width: inherit;
      margin-right: 10px;
    }

    .upload-main{
      width: 95vw;
      min-width: inherit;
      height: 60vh;
    }
  }
</style>
