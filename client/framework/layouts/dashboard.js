
Template.dashboard.onRendered(function(){
	// $(".dash-left").css("min-height",$(window).height());
});

Template.dashboard.helpers({
	user:function(){
		var user = Meteor.user();
		return user ? user.emails[0].address.substr(0,user.emails[0].address.indexOf("@")) : "";
	}
});