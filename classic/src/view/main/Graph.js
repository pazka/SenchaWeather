/**
 * A spline chart is a specialized form of conventional line and area charts. Unlike
 * conventional charts which connect data points with straight lines, a spline draws a
 * fitted curve through the data points. They are used specifically for plotting data that
 * requires the use of curve fittings e.g. impulse-response, product life cycle etc.
 */
Ext.define('senchaWeather.view.main.Graph', {
    extend: 'Ext.Panel',
    xtype: 'maingraph',
    width: 500,

    requires: [
        "store.weather"
    ],
    responsiveConfig: {
        wide: {
            iconAlign: 'left',
            textAlign: 'left',
            width: 120
        },
        tall: {
            iconAlign: 'top',
            textAlign: 'center',
            width: 120
        }
    },

    interactions: {
        type: 'panzoom'
    },

    legend: {
        docked: 'right'
    },

    items: {
        xtype: 'cartesian',
        reference: 'chart',
        animation : true,
        width: '100%',
        height: 500,
        store: {
            type: 'weather'
        },
        axes: [{
            type: 'numeric',
            position: 'left',
            grid: true,
            //title: 'Temp °C',
            minimum: -10,
            maximum: 40,
            renderer: 'onAxisTempRender'
        }, {
            type: 'time',
            position: 'bottom',
            grid: true,
            segmenter:{
                type : "time",
                step: {
                    unit: Ext.Date.DAY,
                    step: 1
                }
            },
            //minimum: new Date(),
            //maximum: new Date() + 40 *60 * 1000 * 60 * 24,
            //increment : 20,
            //minorTickSteps : 1,
            //majorTickSteps :  1000 * 60 * 60 * 24 * 1 ,
            renderer: 'onAxisLabelRender'
        }],
        series: [{
            type: 'line',
            smooth : true,
            xField: 'date',
            yField: 'temp',
            style: {
                lineWidth: 4,
                strokeStyle: '#8bb'
            },
            marker: {
                radius: 0,
                lineWidth: 2
            },
            highlight: {
                radius: 4,
                lineWidth: 2,
                fillStyle: '#599',
                strokeStyle: '#599'
            },
            tooltip: {
                trackMouse: true,
                showDelay: 0,
                dismissDelay: 0,
                hideDelay: 10,
                renderer: 'onSeriesTooltipRender'
            }
        }],
        listeners: {
            itemhighlightchange: 'onItemHighlightChange'
        }
    }
});
