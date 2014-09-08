/**
 * Created by developer on 08/09/14.
 */
Router.configure({
    layoutTemplate: 'MasterLayout',
    routeControllerNameConverter: 'upperCamelCase',
    yieldTemplates: {
        'header': { to: 'header' },
        'footer': { to: 'footer' }
    }
});
Router.map(function(){
    this.route('home', {path:'/home', template:'Home'});
    this.route('menu', {path:'/menu', template:'menu'});
    this.route('player',{path:'/player', template:'Players'});
});