/**
 * Created by carlosvacamorales on 7/14/14.
 */

Template.Players.events({
"click #addButton": function(event, template){
    alert("HOla");
    Session.set('editMode','insert');
    Session.set('selectedItem',null);
    $('#playerEdit').modal();
},
    "click #playerDataTable tr": function(event, template) {

        var tr = event.currentTarget;
        Session.set('editMode','update');
        Session.set('selectedItem',this.self.$.api().row(tr).data());
        Session.set('playerId',this.self.$.api().row(tr).data()._id);
        $('#playerEdit').modal();
       },
    "click #Modbutton": function(event, template){
          $('#playerEdit').modal('hide');

    },
    "click #delbutton": function(event, template){
      $('#playerEdit').modal('hide');
    }
});

Template.Players.prettyEditMode = function ()
{
    var editMode = Session.get('editMode');
    return editMode.charAt(0).toUpperCase() + editMode.slice(1);
};

Template.Players.selectedItem = function ()
{
  return Session.get('selectedItem');
}

Template.Players.editMode = function ()
{
    return Session.get('editMode');
};

Template.Players.isUpdate = function ()
{
    return Session.get('editMode') == "update";
};

Template.Players.helpers({
    players: function(){
        return Players.find();
    }
});