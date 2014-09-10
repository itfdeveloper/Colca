/**
 * Created by carlosvacamorales on 7/14/14.
 */

Template.Players.events({
"click #addButton": function(event, template){
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
    playerDataTable: function (){
     return {
         id: 'playerDataTable',
         columns: [
             {
               title:'Nombre',
               data:'Name'
             },
             {
                title:'Edad',
                 data:'Age'
             },
             {
                 title: 'Equipo',
                 data: 'Team'
             },
             {
                 title: 'Fecha de Creacion',
                 data: 'createDate',
                 mRender: function(data,type,row){
                   return  moment(row.createDate).format("MM/DD/YYYY HH:MM:SS");
                 }
             }
         ],
         subscription: 'players'
     }
    }
});