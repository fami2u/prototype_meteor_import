/*=============default router ==================*/
FlowRouter.route('/', {
    name: "site",
    action: function(params, queryParams) { BlazeLayout.render("site"); }
});
