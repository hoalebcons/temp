import React, { useEffect } from 'react';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';
import AmCharts from '@amcharts/amcharts3-react';

const TimeSeries = (props) => {
    useEffect(() => {
        AmCharts.makeChart('bar-chart2', {
            type: 'serial',
            theme: 'light',
            marginTop: 10,
            marginRight: 0,
            valueAxes: [
                {
                    id: 'v1',
                    position: 'left',
                    axisAlpha: 0,
                    lineAlpha: 0,
                    gridAlpha: 0,
                    autoGridCount: false,
                    labelFunction: function (value) {
                        return +Math.round(value) + '0';
                    },
                    title: "Orders"
                },
                {
                    id: 'v2',
                    position: 'right', // Trục bên phải cho TotalSales
                    axisAlpha: 0,
                    lineAlpha: 0,
                    autoGridCount: false,
                    labelFunction: function (value) {
                        return +Math.round(value) + 'M';
                    },
                    title: "Total Sales"
                }
            ],
            graphs: [
                {
                    id: 'g1',
                    valueAxis: 'v1', // Sử dụng trục v1 cho Orders
                    lineColor: ['#1de9b6', '#1dc4e9'],
                    fillColors: ['#1de9b6', '#1dc4e9'],
                    fillAlphas: 1,
                    type: 'column',
                    title: 'Orders',
                    valueField: 'Orders',
                    columnWidth: 0.3,
                    balloonText: "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
                },
                {
                    id: 'g2',
                    valueAxis: 'v2', // Sử dụng trục v2 cho TotalSales
                    lineColor: '#a389d4',
                    bullet: 'round',
                    bulletBorderAlpha: 1,
                    bulletColor: '#d4d3cf',
                    bulletSize: 5,
                    hideBulletsCount: 50,
                    lineThickness: 2,
                    type: 'line',
                    title: 'Total Sales (VND)',
                    valueField: 'TotalSales',
                    legendValueText: '[[value]]M',
                    balloonText: "[[title]]<br /><b style='font-size: 130%'>[[value]]M</b>"
                }
            ],
            chartCursor: {
                pan: true,
                valueLineEnabled: true,
                valueLineBalloonEnabled: true,
                cursorAlpha: 0,
                valueLineAlpha: 0.2
            },
            categoryField: 'Year',
            categoryAxis: {
                dashLength: 1,
                gridAlpha: 0,
                axisAlpha: 0,
                lineAlpha: 0,
                minorGridEnabled: true
            },
            legend: {
                useGraphSettings: true,
                position: 'top'
            },
            balloon: {
                borderThickness: 1,
                shadowAlpha: 0
            },
            dataProvider: [
                {
                    Year: '01/01',
                    Orders: 120,
                    TotalSales: 17
                },
                {
                    Year: '01/02',
                    Orders: 124,
                    TotalSales: 24
                },
                {
                    Year: '01/03',
                    Orders: 142,
                    TotalSales: 35
                },
                {
                    Year: '01/03',
                    Orders: 100,
                    TotalSales: 21
                },
                {
                    Year: '01/04',
                    Orders: 135,
                    TotalSales: 32
                },
                {
                    Year: '01/05',
                    Orders: 162,
                    TotalSales: 42
                },
                {
                    Year: '01/06',
                    Orders: 120,
                    TotalSales: 25
                },
                {
                    Year: '01/07',
                    Orders: 124,
                    TotalSales: 27
                },
                {
                    Year: '01/08',
                    Orders: 132,
                    TotalSales: 31
                },
                {
                    Year: '01/09',
                    Orders: 194,
                    TotalSales: 48
                },
                {
                    Year: '01/10',
                    Orders: 152,
                    TotalSales: 42
                },
                {
                    Year: '01/11',
                    Orders: 136,
                    TotalSales: 38
                }
                // Các dữ liệu cho các năm tiếp theo được điều chỉnh tương tự
            ]
        });
    });

    return <div id="bar-chart2" className="bar-chart2" style={{ width: '100%', height: props.height }} />;
};

export default TimeSeries;
