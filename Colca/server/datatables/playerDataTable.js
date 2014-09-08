/**
 * Created by macbookpro on 28/08/14.
 */
var playerDataTable;
if(Meteor.isServer){
    playerDataTable = new DataTableComponent({
        subscription: "players",
        collection: Players
    });
    playerDataTable.publish();
}