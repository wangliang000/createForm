export const schema = {
  type: 'object',
  properties: {
    week: {
      title: '周选择',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker.WeekPicker',
      type: 'string',
    },
    month: {
      title: '月选择',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker.MonthPicker',
      type: 'string',
    },
    year: {
      title: '年选择',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker.YearPicker',
      type: 'string',
    },
    '[startDate,endDate]': {
      title: '日期范围',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker.RangePicker',
      'x-component-props': {
        showTime: true,
      },
      type: 'string',
    },
    range_month: {
      title: '月范围选择',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker.RangePicker',
      'x-component-props': {
        type: 'month',
      },
      type: 'string',
    },
    range_year: {
      name: 'range_year',
      title: '年范围选择',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker.RangePicker',
      'x-component-props': {
        type: 'year',
      },
      type: 'string',
    },
  },
};