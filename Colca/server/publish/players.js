/**
 * Created by developer on 11/09/14.
 */
Meteor.publish('players', function(){
    return Players.find();
});