/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('senchaWeather.Application', {
    extend: 'Ext.app.Application',

    name: 'senchaWeather',

    /*stores: [//global/shared stores
        {
            type: 'weather'
        }
    ],
*/
    launch: function () {
        /*var s = Ext.create('store.weather');
        s.load({
            scope: this,
            callback: function(records, operation, success) {

            }
        });*/
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
