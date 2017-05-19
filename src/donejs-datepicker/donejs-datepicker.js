import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './donejs-datepicker.less';
import view from './donejs-datepicker.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the donejs-datepicker component'
  }
});

export default Component.extend({
  tag: 'donejs-datepicker',
  ViewModel,
  view
});
