/**
 * This view is an example list of people.
 */
Ext.define('senchaWeather.view.main.WeatherInfos', {
    extend: 'Ext.panel.Panel',
    xtype: 'infosWeather',

    bodyStyle: "background: transparent",
    id : "infos",

    defaults: {
        bodyPadding: 10,
        height: 300,
        width: 300,
        scrollable: true
    },

    items: [/*{
        xtype : 'image',
        width : 50,
        height: 50,
        alt:"icon of weather",
        bind :{
            src :"notfound.png",
        }
    },*/{
        columnWidth: 0.5,
        margin: "10 5 0 0",
        icon: null,
        bind: {
            title : "{day}",
            html: "<p>Pluie : {infos.rain} mm</p><p> Humidité : {infos.humidity} %</p><p> Vent : {infos.wind}</p><p> Direction du vent : {infos.orientation} deg</p>" //<p>Pression : {infos.pressure}</p>
        }
    }]
});
