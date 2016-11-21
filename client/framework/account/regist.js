
Template.regist.events({
	"click #account-regist":function(){
		var user = {email:$("#email").val(),password:$("#password").val()};
		if(!user.email){
			$("#email").addClass("account-input-error");
			return false;
		}
		if(!user.password){
			$("#password").addClass("account-input-error");
			return false;
		}
		if(user.password != $("#repeat").val()){
			$("#repeat").addClass("account-input-error");
			return false;
		}

		if(!isEmail($("#email").val())){
			$("#email").addClass("account-input-error");
			return false;
		}

		$(".account-input input").removeClass("account-input-error");

		
		Accounts.createUser(user, function(err){
			
			if(err && (err.error == 403)){
				if(confirm("邮件地址已注册是否登录?")){
					FlowRouter.go("login");
				}
				$("#email").addClass("account-input-error");
				return false;
			}
			
			xwu.account.regist(user);
		});
	}
});