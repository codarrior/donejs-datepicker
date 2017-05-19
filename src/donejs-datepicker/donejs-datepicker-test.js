import QUnit from 'steal-qunit';
import { ViewModel } from './donejs-datepicker';

// ViewModel unit tests
QUnit.module('done-js-datepicker/donejs-datepicker');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the donejs-datepicker component');
});
