<template>
  <div class='account'>
    <Menu />
    <div class="navComponent">
      <sideNav />
    </div>
    <div class='account_container'>
      <Page 
        :title="title"
        :columns='columns'
        :filters='filters'
      />
    </div>
  </div>
</template>

<script>
import Page from '../Template/PageTable'
import Menu from '../../components/Menu'
import sideNav from '../../components/RightSide/sideNav'

export default {
  name: 'Account',
  data () {
    return {
      title: '账户列表',
      columns: [
        {
          label: '账户',
          dataIndex: '13433957437',
          width: 200
        },
        {
          label: '账户姓名',
          dataIndex: 'Reeyou',
          // width: 200
        },
        {
          label: '目的地',
          dataIndex: '三亚',
          // width: 200
        },
        {
          label: '出发时间',
          dataIndex: '2019-10-20',
          // width: 200
        },
        {
          label: '操作',
          dataIndex: '编辑',
          // width: 200
        }
      ],
      filters: [
        {
          label: '账户',
          type: 'input',
        },
        {
          label: '账户姓名',
          type: 'input',
        },
        {
          label: '目的地',
          type: 'input',
        },
        {
          label: '状态',
          type: 'select',
          selectList: [
            {
              value: '',
              label: '全部',
            },
            {
              value: '1',
              label: '成功',
            },
            {
              value: '2',
              label: '失败',
            }
          ]
        },
        {
          label: '出发时间',
          type: 'datePicker',
        }
      ]
    }
  },
  components: {
    Page,
    Menu,
    sideNav
  }
}
</script>

<style scoped lang='less'>
@import '../../assets/css/common.less';

.account {
  font-size: 0;
  display: inline-block;
  &_container {
    .tableStyle;
    p {
      font-size: 20px;
      color: #000;
    }
  }
  .navComponent {
    background: @bgWhite;
    display: flex;
    justify-content: flex-end;
  }
}
.sideNav {
  margin-bottom: 0;    
  margin-left: 240px;
}
</style>
