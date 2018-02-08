/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('senchaWeather.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'senchaWeather.view.main.MainController',
        'senchaWeather.view.main.MainModel',
        'senchaWeather.reader.WeatherJsonReader',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Time',
        'Ext.chart.series.Line',
        'Ext.chart.interactions.ItemHighlight',
        'store.weather'
    ],

    controller: 'main',
    viewModel: 'main',
    layout: 'column',

/*

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',

        }
    },

    /*ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,
    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            text:"Weather",
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    },*/

    items:[{
        xtype: 'maingraph'
    },{
        xtype:'infosWeather'
    }]
});
