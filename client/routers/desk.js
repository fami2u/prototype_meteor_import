// /*=============routers for desk ==================*/
var group_desk = FlowRouter.group({ name: "desk", prefix: "/desk" });
group_desk.route('/', {
    name: "desk",
    action: (params, queryParams) => {
        BlazeLayout.render("dashboard", { content: 'desk' })
    }
});
