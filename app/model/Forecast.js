Ext.define('senchaWeather.model.Forecast', {
    extend: 'Ext.data.Model',

    alias:"model.forecast",

    fields: [
        'date'         ,
        'temp'         ,
        'temp_min'     ,
        'temp_max'     ,
        'humidity'     ,
        'weather_id'   ,
        'weather_main' ,
        'weather_desc' ,
        'weather_icon' ,
        'wind'         ,
        'orientation'  
    ]
});
