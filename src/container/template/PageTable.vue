<template>
  <div class='page'>
    <div class="title">
      <h2>{{dataTitle}}</h2>
    </div>
    <div class="filter">
      <el-form
        :inline="true"
        class="demo-form-inline"
      >
        <el-form-item
          v-for='(filter, index) in dataFilters'
          :key='index'
          :label="filter.label"
        >
          <el-input
            v-show="filter.type === 'input'"
            :placeholder="filter.label"
          ></el-input>
          <el-select
            v-show="filter.type === 'select'"
            :placeholder="filter.label"
          >
            <el-option
              v-for='(status, index) in filter.selectList'
              :key='index' :label="status.label"
              :value="status.value"
            ></el-option>
          </el-select>
          <el-date-picker
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions2"
            v-show="filter.type === 'datePicker'"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">筛选</el-button>
          <el-button type="primary" @click="onSubmit">重置</el-button>
          <div class='collapse'>
            <span>收起</span>
            <i class='iconfont icon-arrow_u'></i>
            <span>展开</span>
            <i class='iconfont icon-arrow_d'></i>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class='table'>
      <el-table
        :data='column'
        fit
        style="width: 100%"
        :header-cell-style="{background:'#fafafa',color:'#000',fontWeight: 600}"
      >
        <el-table-column
          v-for='(column, index) in dataColumns'
          :key='index'
          :prop="column.dataIndex"
          :label="column.label"
          :width="column.width"
          align='center'
          fit
        >
        </el-table-column>
      </el-table>
    </div>
    <div class="pageFooter">
      <div class='pagination'>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'PageTable',
  props: ['columns', 'title','filters'],
  data () {
    return {
      dataColumns: this.columns || [],
      column: [],
      total: 4,
      dataTitle: this.title,
      dataFilters: this.filters,
      pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        }
    }
  },
  mounted() {
    console.log(this.dataFilters)
  },
  methods: {
    // column: this.dataColumns.map((item, index) => {
    //   item.dataIndex
    // })
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  components: {
   
  }
}
</script>

<style lang='less'>
@import '../../assets/css/common.less';
.page {
  background: #fff;
  .title {
    height: 60px;
    border-bottom: @borderGray;
    margin-bottom: 20px;
    h2 {
      font-size: 18px;
      color: @Black;
      padding: 20px 0 20px 20px;
    }
  }
  .filter {
    box-sizing: border-box;
    padding: @tablePadding;
    width: 100%;
    .el-form {
      .el-form-item {
        box-sizing: border-box;
        width: 33.33333%;
        display: flex;
        float: left;
        margin-right: 0;
        padding: 0 12px;
        &__content {
          flex: 1;
          .el-select {
            width: 100%;
          }
          .el-date-editor.el-input__inner {
            width: 100%;
          }
        }
        &__label {
          width: 100px;
          text-align: left;
          padding: 0 20px 0 0;
        }
        .collapse {
          display: inline-block;
          margin-left: 18px;
          color: @Blue;
          transition: all 400ms ease;
          &:hover {
            cursor: pointer;
            opacity: 0.8;
          }
        }
      }
    }
  }
  .table {
    padding: @tablePadding;
  }
  .pageFooter {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: @tablePadding;
    .pagination {
      float: right;
    }
  }
}
</style>
