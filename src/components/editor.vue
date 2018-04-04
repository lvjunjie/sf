<template>
  <div style="padding: 10px;background: #fff">
    <div id="editorElem" style="text-align:left"></div>
    <button v-on:click="getContent">查看内容</button>
  </div>
</template>

<script>
  import E from 'wangeditor'
export default {
  name: 'editor',
  data () {
    return {
      editorContent: ''
    }
  },
  methods: {
    getContent: function () {
        console.log(this.editorContent)
      alert(this.editorContent)
    }
  },
  mounted() {
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

    editor.create()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .w-e-toolbar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 5px;
    flex-wrap: wrap !important;
  }
</style>
<style scoped>

</style>
