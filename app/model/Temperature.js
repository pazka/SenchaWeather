Ext.define('senchaWeather.store.Temperature', {
    extend: 'Ext.data.Model',

    alias:"model.temperature",

    fields: [
        {name: "temp" , type:"number"},
		{name: "temp_min" , type:"number"},
		{name: "temp_max" , type:"number"},
		{name: "humidity" , type:"number"}
    ],

    belongsTo:{
        model : "model.weatherRecord",
        name : "temperature"
    }
});
