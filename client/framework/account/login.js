
Template.login.events({
    "click #account-login": function() {
        var user = { email: $("#email").val(), password: $("#password").val() };
        if (!user.email) {
            $("#email").addClass("account-input-error");
            return false;
        }
        if (!user.password) {
            $("#password").addClass("account-input-error");
            return false;
        }

        if (!isEmail($("#email").val())) {
            $("#email").addClass("account-input-error");
            return false;
        }

        $(".account-input input").removeClass("account-input-error");

        //登录完成
        Meteor.loginWithPassword(user.email, user.password, function(err) {
        	
        	if(err && (err.error == 403)){
        		if(err.reason.indexOf("User") > -1){
        			alert("未注册邮件地址");
					$("#email").addClass("account-input-error");
        		}else if(err.reason.indexOf("password") > -1){
        			alert("密码错误");
					$("#password").addClass("account-input-error");
        		}
				
				return false;
			}

            xwu.account.login(user);
            
        })
    }
});
