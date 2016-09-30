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
    var xTags=['a','b','c','d','e'];
    var graphTitle="Graph Title";
    var legendNames=['Legend Name'];
    var inputData=[123,324,543,111,343];
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

function genGraph2() {
    var dataArray=hot.getData();
    var cols=hot.countCols()-hot.countEmptyCols();
    var rows=hot.countRows()-hot.countEmptyRows();
    console.log(cols+","+rows);
    //约定用户输入总是从第一行第一列开始的，
    // TODO：更多的智能识别
    // 基于准备好的dom，初始化echarts实例
    var xTags=[];
    var graphTitle="Graph Title";
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
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'value'
            }
        ],
        yAxis : [
            {
                type : 'category',
                axisTick : {show: false},
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        legend: {
            data:['利润', '支出', '收入']
        },
        series : [
            {
                name:'利润',
                type:'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                data:[200, 170, 240, 244, 200, 220, 210]
            },
            {
                name:'收入',
                type:'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true
                    }
                },
                data:[320, 302, 341, 374, 390, 450, 420]
            },
            {
                name:'支出',
                type:'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'left'
                    }
                },
                data:[-120, -132, -101, -134, -190, -230, -210]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
