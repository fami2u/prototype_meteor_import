import Menus from '/imports/framework/model/menu';

import './index/index';


//添加菜单
Meteor.startup(function(){Menus.insert({parent:"root",router:"members",name:"用户管理"})});