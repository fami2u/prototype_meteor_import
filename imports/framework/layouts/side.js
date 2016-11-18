
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import Menus from '../model/menu';

import '/imports/framework/layouts/side.css';
import '/imports/framework/layouts/side.html';

Template.side.helpers({
	menus:function(){
		return Menus.find({parent:"root"});
	},
	target:function(){
		var map = FlowRouter._routesMap;
		return (map && (map[this.router])) ? map[this.router].path : "/";
	},
	children:function(){
		return Menus.find({parent:this.router}).count() ? Menus.find({parent:this.router}) : [];
	}
});
Template.side.events({
	"click .side-navi-item":function(event){
		var o = $(event.currentTarget);
		if(!o.hasClass("side-navi-open")){
			$(".side-navi-children").slideUp();
			$(".side-navi-item").removeClass("side-navi-open");
			if(o.find(".side-navi-children")[0]){
				o.find(".side-navi-children").slideDown(300);
				o.addClass("side-navi-open");
			}
		}
		
	},
	
});
Template.side.onRendered(function(){
});

