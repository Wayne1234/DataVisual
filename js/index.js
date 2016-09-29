/**
 * Created by lenovo on 2016/9/30.
 */
var container = document.getElementById("h-table"), hot;

hot = new Handsontable(container, {
    startRows: 100,
    startCols: 100,
    rowHeaders: true,
    colHeaders: true,
    minSpareRows: 1,
    contextMenu: true
});

function genGraph() {
    var dataArray=hot.getData();
    var cols=hot.countCols()-hot.countEmptyCols();
    var rows=hot.countRows()-hot.countEmptyRows();
    console.log(cols+","+rows);
    //约定用户输入总是从第一行第一列开始的，
    // TODO：更多的智能识别
    // 基于准备好的dom，初始化echarts实例
    var xTags=[];
    var graphTitle="测试图表";
    var legendNames=['GDP'];
    var inputData=[];
    for(var i=1;i<rows;i++){
        xTags.push(dataArray[i][0]);
    }
    for(i=1;i<rows;i++){
        inputData.push(dataArray[i][1]);
    }
    console.log(xTags);

    var myChart = echarts.init(document.getElementById('graph'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: graphTitle
        },
        tooltip: {},
        legend: {
            data: legendNames
        },
        xAxis: {
            data: xTags
        },
        yAxis: {},
        series: [{
            name: legendNames[0],
            type: 'bar',
            barWidth: '60%',
            data: inputData
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}