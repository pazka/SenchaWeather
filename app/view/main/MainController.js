Ext.define('senchaWeather.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

     onAxisLabelRender: function (axis, label, layoutContext) {
        // Custom renderer overrides the native axis label renderer.
        // Since we don't want to do anything fancy with the value
        // ourselves except appending a '%' sign, but at the same time
        // don't want to loose the formatting done by the native renderer,
        // we let the native renderer process the value first.
        var oldDate = new Date(label);
        var day = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
        return  day[oldDate.getDay()];//layoutContext.renderer(newLabel);
    },

     onAxisTempRender: function (axis, label, layoutContext) {
        // Custom renderer overrides the native axis label renderer.
        // Since we don't want to do anything fancy with the value
        // ourselves except appending a '%' sign, but at the same time
        // don't want to loose the formatting done by the native renderer,
        // we let the native renderer process the value first.
        return label + "°C";
    },

    onSeriesTooltipRender: function (tooltip, record, item) {
        var oldDate = record.get('date');
        var day = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
        var newLabel = day[oldDate.getDay()] +" "+oldDate.getDate()+"/"+oldDate.getMonth()+ " : " + oldDate.getHours() +"h"+ (oldDate.getMinutes() == 0 ? "00" : oldDate.getMinutes());

        tooltip.setHtml(newLabel + '</br>' + record.get('temp') + '°C and '+record.get('weather_desc') + "</br> <img src ='http://openweathermap.org/img/w/"+record.get('weather_icon')+".png'></img>");
    },

    onItemHighlightChange: function (chart, newHighlightItem, oldHighlightItem) {
        if (newHighlightItem) {
            var me = this;
            var viewModel = me.getViewModel(); //IMPORTANT BEACAUSE REASON wtf
            var date = new Date(newHighlightItem.record.data.date);
            var day = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
            viewModel.setData({infos : newHighlightItem.record, day : day[date.getDay()]});
        }
    //    console.log(newHighlightItem);
    },

    onPreview: function () {
        if (Ext.isIE8) {
            Ext.Msg.alert('Unsupported Operation', 'This operation requires a newer version of Internet Explorer.');
            return;
        }
        var chart = this.lookupReference('chart');
        chart.preview();
    }

});
