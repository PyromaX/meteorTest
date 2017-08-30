Template.login.events({
    "submit form": function(event, template) {
        event.preventDefault();

        var user = $("input[name='username']").val();
        var password = $("input[name='password']").val();

// Cas 3 : Login en utilisant le nom d'utilisateur ou l'email
        Meteor.loginWithPassword(
            user,
            password,
            function(err) {
                if (err) {
                    alert(err.reason)
                }
            }
        );
    }
});