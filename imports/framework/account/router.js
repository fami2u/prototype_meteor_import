import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { FlowRouter } from 'meteor/kadira:flow-router';

var group = FlowRouter.group({name:"account",prefix: "/account"});
group.route('/login', {name:"login",action: (params, queryParams) => {BlazeLayout.render("account", {content: 'login'})}});
group.route('/regist', {name:"regist",action: (params, queryParams) => {BlazeLayout.render("account", {content: 'regist'})}});
group.route('/logout', {name:"logout",action: (params, queryParams) => {Meteor.logout(function(){FlowRouter.go("login")})}});