import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import xwu from '/imports/framework/base/init';

Meteor.startup(function() {
    //注册完成回调
    xwu.account.default.regist(function(user) {
        Meteor.loginWithPassword(user.email, user.password, function(err){
        	xwu.account.login(user);
        });
    });

    //登录完成回调
    xwu.account.default.login(function(user) {
        FlowRouter.go("/");
    });

    //登录完成后操作
    // xwu.account.hook.login(function(user){});
    //注册完成后操作
    // xwu.account.hook.regist(function(user){});

    
});
