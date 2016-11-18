import { Meteor } from 'meteor/meteor';
import { Tabular } from 'meteor/aldeed:tabular';
import { moment } from 'meteor/momentjs:moment';

import tabulars from '/imports/framework/base/tabular';

tabulars.members =  new Tabular.Table({
    name: "Members",
    collection: Meteor.users,
    order:[ [0, "desc"]],
    pub: "members",
    searching: true,
    lengthChange: false,
    pageLength: 50,
    responsive: true,
    extraFields: [],
    columns: [
        { data: "_id", "title": "ID" }, {
            data: 'username',
            title: '用户名'
        }, {
            data: 'tel',
            title: '手机号码'
        }, {
            data: 'balance',
            title: '账户余额'
        }, {
            data: 'point',
            title: '积分'
        }, {
            data: 'createdat',
            title: '注册时间',
            render: function(val, type, doc) {
                return moment(val).format("YYYY/MM/DD HH:mm");
            }
        }, {
            title: '管理',
            className: "nowrap",
            tmpl: Meteor.isClient && Template.fromString(`
            <button id="btnUpdate" type="button" class="btn btn-sm btn-default" data-toggle="modal" data-target="#updateMembersModal" data-id="{{this._id}}"
             title="更新管理权限" >
                <span class="glyphicon glyphicon-pencil"></span>
            </button>
            <button type="button" class="btn btn-sm btn-success" data-id="{{this._id}}" title="删除" rel="tooltip" action="delete">
                <i class="glyphicon glyphicon-remove"></i>
            </button>
  `)
        }
    ]
});
export default tabulars;