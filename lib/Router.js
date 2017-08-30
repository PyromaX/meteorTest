Router.configure({
    layoutTemplate: 'mainLayout'
});

Router.route('/post/:_id', {
    name: "post",
    data: function(){
        return {
            id: this.params._id
        }
    }
});
Router.route('/', {
    name: "home",
    data: function(){
        var posts = Posts.find();

        return {
            posts: posts
        };
    },
    waitOn: function(){
        return Meteor.subscribe("allPostHeaders");
    }
});

Router.route('/posts', {
    name: "posts",
    data: function(){
        return {
            posts: [
                {
                    title: "Premier post"
                },
                {
                    title: "Second post"
                },
                {
                    title: "Troisième post"
                },
            ]
        };
    }
});
Router.route('/register', {
    name: "register"
});

Router.route('/login', {
    name: "login"
});
