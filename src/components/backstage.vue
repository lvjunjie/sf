<template>
  <div id="backstage">
    <section>
      <div style="background: #fff">
        <el-tabs  v-model="activeTab" type="card">
          <el-tab-pane name="first" label="待审核列表">
            <el-table
              :data="list"
              style="width: 100%"
              max-height="650px">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="商品名称">
                      <span>{{ props.row.date }}</span>
                    </el-form-item>
                    <el-form-item label="所属店铺">
                      <span>{{ props.row.shop }}</span>
                    </el-form-item>
                    <el-form-item label="商品 ID">
                      <span>{{ props.row.id }}</span>
                    </el-form-item>
                    <el-form-item label="店铺 ID">
                      <span>{{ props.row.shopId }}</span>
                    </el-form-item>
                    <el-form-item label="商品分类">
                      <span>{{ props.row.category }}</span>
                    </el-form-item>
                    <el-form-item label="店铺地址">
                      <span>{{ props.row.address }}</span>
                    </el-form-item>
                    <el-form-item label="商品描述">
                      <span>{{ props.row.desc }}</span>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column
                prop="date"
                label="姓名"
                width="150">
              </el-table-column>
              <el-table-column
                prop="name"
                label="账号"
                width="120">
              </el-table-column>
              <el-table-column
                prop="province"
                label="申请日期"
                width="120">
              </el-table-column>
              <el-table-column
                prop="city"
                label="电话"
                width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="邮箱"
                width="300">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="类型"
                width="120">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="120">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, list)"
                    type="text"
                    size="small">
                    通过
                  </el-button>
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, list)"
                    type="text"
                    size="small">
                    拒绝
                  </el-button>
                </template>
              </el-table-column>
            </el-table>

            <div style="float: right;margin: 20px">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
              </el-pagination>
            </div>
          </el-tab-pane>
          <el-tab-pane name="second" label="所有会员">
            <el-table
              :data="list"
              style="width: 100%"
              max-height="600">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="商品名称">
                      <span>{{ props.row.date }}</span>
                    </el-form-item>
                    <el-form-item label="所属店铺">
                      <span>{{ props.row.shop }}</span>
                    </el-form-item>
                    <el-form-item label="商品 ID">
                      <span>{{ props.row.id }}</span>
                    </el-form-item>
                    <el-form-item label="店铺 ID">
                      <span>{{ props.row.shopId }}</span>
                    </el-form-item>
                    <el-form-item label="商品分类">
                      <span>{{ props.row.category }}</span>
                    </el-form-item>
                    <el-form-item label="店铺地址">
                      <span>{{ props.row.address }}</span>
                    </el-form-item>
                    <el-form-item label="商品描述">
                      <span>{{ props.row.desc }}</span>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column
                prop="date"
                label="姓名"
                width="150">
              </el-table-column>
              <el-table-column
                prop="name"
                label="账号"
                width="120">
              </el-table-column>
              <el-table-column
                prop="province"
                label="申请日期"
                width="120">
              </el-table-column>
              <el-table-column
                prop="city"
                label="电话"
                width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="邮箱"
                width="300">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="类型"
                width="120">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="120">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, list)"
                    type="text"
                    size="small">
                    删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <div style="float: right;margin: 20px">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
              </el-pagination>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'backstage',
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  data() {
    return {
        activeTab:'first',
        list: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      },
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-08',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-06',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-07',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  section {
    padding: 20px;
  }
  @media screen and (max-width: 800px){

  }
</style>
