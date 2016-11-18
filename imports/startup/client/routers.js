/*=============default router ==================*/
FlowRouter.route('/', {
    name: "site",
    action: function(params, queryParams) { BlazeLayout.render("dashboard", { content: 'site' }); }
});

/*=============routers for member ==================*/
var group_member = FlowRouter.group({ name: "member", prefix: "/member" });
group_member.route('/index', {
    name: "members",
    action: (params, queryParams) => {
        BlazeLayout.render("dashboard", { content: 'memberIndex' })
    }
});