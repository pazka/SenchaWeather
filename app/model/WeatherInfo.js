Ext.define('senchaWeather.store.WeatherInfo', {
    extend: 'Ext.data.Model',

    alias:"model.weatherInfo",

    fields: [
        {name: 'id',  type: 'int'},
        {name: 'main',  type: 'string'},
        {name: 'description',  type: 'string'},
        {name: 'icon',  type: 'string'}
    ],

    belongsTo:{
        model : "model.weatherRecord",
        name : "temperature"
    }
});
