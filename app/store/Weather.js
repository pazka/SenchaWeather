Ext.define('senchaWeather.store.Weather', {
    extend: 'Ext.data.Store',
    //model : "senchaWeather.model.Forecast",
    alias: "store.weather",

    autoLoad : true,

    proxy: {
        type: 'rest',
        extraParams:{
                q:"strasbourg",
                appid:"002f835deb77256dcbaf36f0a14a96ff",
                units:'metric'
        },
        useDefaultXhrHeader : false,
        //url : "/resources/test.json",
        url : "http://api.openweathermap.org/data/2.5/forecast",
		encodeRequest: true,
        reader:{
            type: 'weatherJsonReader',
            rootProperty : "list"
        }
    }
});
