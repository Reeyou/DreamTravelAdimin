<template>
  <div>
    <Menu />
    <div class='account'>
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
          width: 200
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
    Menu
  }
}
</script>

<style scoped lang='less'>
@import '../../assets/css/common.less';

.account {
  .bodyStyle;
  p {
    font-size: 20px;
    color: #000;
  }
}
</style>
