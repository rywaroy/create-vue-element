export default {
  VeInfoOverview: {
    title: '数据总览',
    code: `
<ve-info-overview>
  <ve-info-overview-item title="我的待办" content="8个任务" />
  <ve-info-overview-item title="本周任务平均处理时间" content="32分钟" />
  <ve-info-overview-item title="本周完成任务数" content="24个任务" />
</ve-info-overview>`,
  },
  VeInfoDetail: {
    title: '数据详情展示',
    code: `
<ve-info-detail title="用户信息">
  <ve-info-detail-row>
    <ve-info-detail-item label="用户姓名" value="付小小" />
    <ve-info-detail-item label="联系电话" value="18100000000" />
    <ve-info-detail-item label="常用快递" value="菜鸟仓储" />
  </ve-info-detail-row>
  <ve-info-detail-row>
    <ve-info-detail-item label="取货地址" value="浙江省杭州市西湖区万塘路18号" :colspan="2" />
    <ve-info-detail-item label="备注" value="无" />
  </ve-info-detail-row>
</ve-info-detail>`,
  },
};
