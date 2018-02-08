Ext.define('senchaWeather.store.WeatherRecord', {
    extend: 'Ext.data.Model',

    alias:"model.weatherRecord",

    fields: [
        {name: 'dt',  type: 'int'},
        {name: 'pressure', type: 'number'},
        {name: 'humidity', type: 'int'},
        {name: 'speed', type: 'number'},
        {name: 'deg', type: 'int'},
        {name: 'clouds', type: 'int'},
        {name: 'rain', type: 'number'}
    ],
    hasOne : {
        associatedName : "main",
        model: 'model.temperature',
        name : 'temperature'
    },
    hasOne : {
        associatedName : "weather",
        model: 'model.weatherInfo',
        name : 'temperature'
    },
    belongsTo:{
        model : "model.forecast",
        name : "weatherRecord"
    }
});
