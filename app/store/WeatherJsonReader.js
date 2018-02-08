Ext.define('senchaWeather.reader.WeatherJsonReader', {
    extend : 'Ext.data.reader.Json',
    alias : 'reader.weatherJsonReader',

    getResponseData : function(response){
        json = Ext.decode(response.responseText);

        var day = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
        res = [];
        json[this.getRootProperty()].forEach(function (item){
            res.push({
                date : new Date(item.dt*1000), // xaxis
                temp:     item.main.temp,
                temp_min: item.main.temp_min,
                temp_max: item.main.temp_max,
                pressure : item.main.pressure,
                rain : (item.rain['3h'] == null ? 0 : item.rain['3h']).toFixed(2),
                humidity: item.main.humidity,
                weather_id : item.weather[0].id,
                weather_main : item.weather[0].main,
                weather_desc : item.weather[0].description,
                weather_icon : item.weather[0].icon,
                wind : item.wind.speed,
                orientation : item.wind.deg.toFixed(2)
            })
        });

        return res;
    }
});
