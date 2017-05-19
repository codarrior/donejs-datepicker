import QUnit from 'steal-qunit';
import plugin from './done-js-datepicker';

QUnit.module('done-js-datepicker');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the done-js-datepicker plugin');
});
