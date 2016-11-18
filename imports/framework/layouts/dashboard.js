import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';

import '/imports/framework/layouts/dashboard.css';
import '/imports/framework/layouts/dashboard.html';
import '/imports/framework/layouts/side.js';

Template.dashboard.onRendered(function(){
	// $(".dash-left").css("min-height",$(window).height());
});

Template.dashboard.helpers({
	user:function(){
		var user = Meteor.user();
		return user ? user.emails[0].address.substr(0,user.emails[0].address.indexOf("@")) : "";
	}
});