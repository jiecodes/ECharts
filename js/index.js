// ECharts 文件   模块化编程   闭包     立即执行函数

// 柱状图模块1    调用立即执行函数(作用:防止变量污染,减少命名冲突) 可以使用局部变量 
(function() {
  // 1 初始化echarts实例对象
  var myChart = echarts.init(document.querySelector(".bar .chart"))
  // 2 指定配置项和数据   var 申明一个实例变量
  var option = {
    // 修改柱子的颜色
    color: ["#2f89cf"],
    tooltip: {
      // 鼠标悬停可显示数据
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器  可选为'line'
        type: 'shadow'
      }
    },
    // 修改图表的大小     有直角坐标系的图才有grid
    grid: {
      top: '10px',
      left: '0%',
      right: '0%',
      bottom: '4%',
      // 显示刻度标签
      containLabel: true
    },
    // X轴
    xAxis: [
      {
        type: 'category',
        // 刻度标签
        data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
        axisTick: {
          alignWithLabel: true
        },
        // 修改刻度标签相关样式
        axisLabel: {
          // 文字是否倾斜
          // fontStyle: '',
          color: 'rgba(255,255,255,.6)',
          fontSize: '12'
        },
        // 不显示X坐标轴的样式
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: '12'
        },
        // 修改y轴竖线样式
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
            // 线条的宽度
            width: '2',
            // 实线
            type: 'solid'
          }
        },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.2)'
          }
        }
      }
    ],
    // 修改柱子圆角以及宽度
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '40%',
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        }
      }
    ]
  };
  // 3 把配置项给实例对象
  myChart.setOption(option);
  // 4 让图表跟随屏幕自动适应     resize 监听       监听浏览器缩放 图表对象调用缩放resize函数
  window.addEventListener('resize', function() {
    myChart.resize();
  })
}) ();

// 柱状图模块2 
(function() {
  // 定义不同的颜色
  var myColor = ["#1089E7","#F57474","#56D0E3","#F8B448","#8B78F6"]
  // 1 实例化对象
  var myChart = echarts.init(document.querySelector('.bar2 .chart'))
  // 2 指定配置和对象
  option = {
    grid: {
      left: '22%',
      top: '10%',
      bottom: '10%',
      // 算上刻度标签的距离
      // containLabel: true
    },
    // 不显示X轴
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: 'category',
        // 是否反向坐标
        inverse: true,
        data: [ 'HTML5', 'CSS3','JavaScripe', 'VUE',  'NODE'],
        // 不显示Y轴线条
        axisLine: {
          show:false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // Y轴刻度标签颜色
        axisLabel: {
          color: "#fff"
        }
      },
      {
        type: 'category',
        // 是否反向坐标
        inverse: true,
        data: [ '702', '350', '610', '793', '664'],
        // 不显示Y轴线条
        axisLine: {
          show:false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // Y轴刻度标签颜色
        axisLabel: {
          color: "#fff"
        }
      },
    ],
    // 样式
    series: [
      // 修改第一组柱子为椭圆条
      {
        name: '条',
        type: 'bar',
        data: [ 70, 34, 60, 78, 69],
        // 实现框压住条的效果
        yAxisIndex: 0,
        // 每个柱子的样式
        itemStyle: {
          // 修改第一组柱子的圆角
          barBorderRadius: 20,
          // 可以修改每一个柱子的颜色
          color: function(params) {
            // 定义的颜色返回给params 利用索引号(dataIndex)
            return myColor[params.dataIndex];
          }
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          // 在柱子内显示
          position: 'inside',
          // 显示的内容     c(数据值 data) 会自动解析为需要的数据 data中的数据 
          formatter: "{c}%"
        }
      },
      // 修改第二组柱子为框状
      {
        name: '框',
        type: 'bar',
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 15,
        data: [100, 100, 100, 100, 100],
        yAxisIndex: 1,
        itemStyle: {
          // 取消柱子的颜色
          color: "none",
          // 边框的颜色
          borderColor: '#00c1de',
          borderWidth: 3,
          barBorderRadius: 15
        }
      }
    ]
  };
  // 3 把配置给实例对象
  myChart.setOption(option)
  // 让图表随屏幕自动适应
  window.addEventListener("resize", function() {
    myChart.resize();
  })
})();

// 折线图模块1
(function() {
  // 用于点击2020 或 2021 切换
  var yearData = [
    {
      year: "2020", 
      data: [
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: "2021", 
      data: [
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ];

  // 1 实例化对象
  var myChart = echarts.init(document.querySelector('.line .chart'));
  // 2 指定配置
  var option = {
    // 修改折线图俩条线的颜色
    color:['#00f2f1','#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    // 图例组件   
    legend: {
      // 如果series有 name 值,则legend可以不写data
      // data: ['粉丝', '游客'],
      textStyle: {
        color: '#4c9bfd'    // 图例文字颜色
      },
      // 修改位置
      right: '10%'
    },
    // 设置网格样式
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true,   // 显示边框
      borderColor: '#012f4a',   // 边框颜色
      containLabel: true   // 包含刻度文字在内
    },
    // 保存为图表 
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      // 折线图
      type: 'category',
      boundaryGap: false,       // 去除轴间距
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],
      axisTick: {
        show: false   // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd"    // 文本颜色
      },
      axisLine: {
        show: false     // 去除轴线
      }
    },
    // Y轴数据根据数字自动生成
    yAxis: {
      type: 'value',
      axisTick: {
        show: false   // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd"    // 刻度标签文本颜色
      },
      axisLine: {
        show: false     // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a'    // 分隔线颜色
        }
      }
    },
    // 每条线上的数据
    series: [
      {
        name: '新增粉丝',
        // 折线图的type为 line
        type: 'line',
        // 数据堆叠
        // stack: 'Total',
        smooth: true,   // 修改折线为圆滑
        // data: [24, 40, 101, 134, 90, 230, 210,230,210,120]
        data: yearData[0].data[0]
      },
      {
        name: '新增游客',
        type: 'line',
        // stack: 'Total',
        smooth: true,   // 修改折线为圆滑
        // data: [40,64,191,322,220, 182, 191, 234, 290, 330, 310,79]
        data: yearData[0].data[1]
      }
    ]
  };
  // 3 把配置给实例对象
  myChart.setOption(option);
  // 让图标跟随屏幕自适应
  window.addEventListener("resize", function() {
    myChart.resize();
  })
  // 点击切换效果
  $(".line h2").on("click","a", function() {
    // console.log($(this).index());     // 打印当前索引号
    // 点击a以后 根据当前a的索引号 找到对应yeardata的相关元素
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()]
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    // 重新渲染表单
    myChart.setOption(option);
  })
}) ();

// 折线图模块2
(function() {
  // 1 实例化对象
  var myChart = echarts.init(document.querySelector('.line2 .chart'))
  // 2 指定配置项
  var option = {
    tooltip: {
      trigger: 'axis',
      // 加横虚线
      // axisPointer: {
      //   type: 'cross',
      //   label: {
      //     backgroundColor: '#6a7985'
      //   }
      // }
    },
    // 图例组件 图表上面的文字
    legend: {
      top: "0%",
      // series中有data 这里的data可以省略
      // data: ['Email', 'Union Ads'],
      // 文字颜色 大小修改
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    // 修改图表大小
    grid: {
      top: 30,
      left: 10,
      right: 10,
      bottom: 10,
      containLabel: true       // 显示刻度标签
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "26",
          "28",
          "29",
          "30"
        ],

        // 修改文本颜色
        axisLabel: {
          textLabel: {
            color: 'rgba(255,255,255,.6)',
            fontSize: 12
          }
        },
        // X轴的颜色
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.3)'
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        // 隐藏刻度线
        axisTick: { show:false},
        axisLine: {
          // Y轴颜色
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        },
        axisLabel: {
          // 文字
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: 12
          }
        },
        // 修改分隔线的颜色
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        }
      }
    ],
    series: [
      {
        name: 'Direct',
        type: 'line',
        // 重叠效果
        // stack: 'Total',
        // 使线条变圆滑
        smooth: true,
        // 单独修改当前线条的颜色
        lineStyle: {
          color: '#0184d5',
          width: '3'
        },
        // 填充区域 填充颜色设置
        areaStyle: {
          // 渐变色
          color: new echarts.graphic.LinearGradient(0,0,0,1,
          [{offset: 0, color: "rgba(1, 132, 213, 0.4)"},
           {offset: 0.8, color: "rgba(1,132, 213, 0.1)"}],
           false )
        },
        // 影子颜色
        shadowColor: "rgba(0,0,0,.1)",
        // 设置拐点 小圆点
        symbol: 'circle',
        // 小圆点大小
        symbolSize: 7,
        // 小圆点 开始不显示 鼠标经过显示
        showSymbol: false,
        // 设置拐点(小圆点)颜色以及边框
        itemStyle: {
          color: '#0184d5',
          borderColor: 'rgba(211,220,107,.1)',
          borderWidth: 12
        },
        emphasis: {
          focus: 'series'
        },
        data: [
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          30,
          40,
          30,
          40,
          30,
          40,
          20,
          60,
          50,
          40
        ]
      },
      {
        name: 'Search Engine',
        type: 'line',
        // 使线条变圆滑
        smooth: true,
        label: {
          show: true,
          position: 'top'
        },
        areaStyle: {
          // 渐变色
          color: new echarts.graphic.LinearGradient(0,0,0,1,
          [{offset: 0, color: "rgba(0, 216, 135, 0.4)"},
           {offset: 0.8, color: "rgba(0, 216, 135, 0.1)"}],
           false )
        },
        // 影子颜色
        shadowColor: "rgba(0,0,0,.1)",
        // 设置拐点 小圆点
        symbol: 'circle',
        // 小圆点大小
        symbolSize: 7,
        // 小圆点 开始不显示 鼠标经过显示
        showSymbol: false,
        // 设置拐点(小圆点)颜色以及边框
        itemStyle: {
          color: '#00d887',
          borderColor: 'rgba(211,220,107,.1)',
          borderWidth: 12
        },

        emphasis: {
          focus: 'series'
        },
        data: [
          130,
          10,
          20,
          40,
          30,
          40,
          80,
          60,
          20,
          40,
          90,
          40,
          20,
          140,
          30,
          40,
          130,
          20,
          20,
          40,
          80,
          70,
          30,
          40,
          30,
          120,
          20,
          99,
          50,
          20
        ]
      }
    ]
  };
  // 3 把配置给实例对象
  myChart.setOption(option)
  // 4 让图表和屏幕自适应
  window.addEventListener('series', function() {
    myChart.series();
  })
}) ();  

// 饼状图模块1
(function() {
  // 1 实例化对象
  var myChart = echarts.init(document.querySelector('.pie .chart'))
  // 2 指定配置项
  option = {
    tooltip: {
      trigger: 'item'   // 提示框触发
    },
    // 图例组件
    legend: {
      bottom: '0%',    // 距离底部5%
      // left: 'center',
      // 小图标的高度和宽度
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '12'
      }
      // series 有data数据  这个data可以省略
      // data: []
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        // 修改饼型图在容器的位置
        center: ["50%", "45%"],
        // 修改内圆半径和外圆半径   百分比相对容器宽度来说的
        radius: ['40%', '65%'],
        avoidLabelOverlap: false,
        label: {
          // 显示图形上的文字
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: false,
            fontSize: '20',
            fontWeight: 'bold'
          }
        },
        // 加一条线 使文字和图形连接
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        // 图形的颜色
        color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
      }
    ]
  };
  // 3 把配置给实例对象
  myChart.setOption(option)
  // 4 让图表随页面自适应
  window.addEventListener('series', function() {
    myChart.series();
  })
}) ();

// 饼状图模块2  南丁格尔玫瑰图 (名为南丁格尔的护士为记录病人的情况而发明的    通过努力 使昔日地位低微的护士 于社会地位与形象大为提升 成为崇高的象征)
(function() {
  // 1 初始化对象
  var myChart = echarts.init(document.querySelector('.pie2 .chart'));
  // 2 指定配置项
  var option = {
    // 修改图形颜色   也可以放在series中
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    // 鼠标悬停图形上 出现的文字
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    // 图例组件
    legend: {
      // 距离下面的距离
      bottom: '0%',
      // 修改小模块的大小
      itemWidth: 10,
      itemHeight: 10,
      // 修改文字颜色
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '10'
      }
    },
    series: [
      {
        name: '地区分布',
        type: 'pie',      // 饼状图
        // 修改饼形图的大小
        radius: ["10%", "70%"],
        center: ['50%', '50%'],
        roseType: 'radius',   // 半径模式     area 面积模式
        itemStyle: {
          borderRadius: 5
        },
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河南" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "山西" },
          { value: 42, name: "上海" }
        ],
        // 文本标签控制饼图文字相关的样式
        label: {
          fontSize: 10
        },
        // 连接图形和文字的线条
        labelLine: {
          length: 5,     // 连接图形的线条
          length2: 8
        }
      }
    ]
  };
  // 3 把配置项给实例对象
  myChart.setOption(option);
  // 4 屏幕自适应
  window.addEventListener('series', function() {
    myChart.series();
  })
}) ();

// 中国地图
(function() {
  // 1 初始化对象
  var myChart = echarts.init(document.querySelector('.map .chart'))
  // 2 指定配置项
  var geoCoordMap = {
    '广灵县': [114.289739,39.765781],
    '上海': [121.4648,31.2891],
    '东莞': [113.8953,22.901],
    '东营': [118.7073,37.5513],
    '中山': [113.4229,22.478],
    '临汾': [111.4783,36.1615],
    '临沂': [118.3118,35.2936],
    '丹东': [124.541,40.4242],
    '丽水': [119.5642,28.1854],
    '乌鲁木齐': [87.9236,43.5883],
    '佛山': [112.8955,23.1097],
    '保定': [115.0488,39.0948],
    '兰州': [103.5901,36.3043],
    '包头': [110.3467,41.4899],
    '北京': [116.4551,40.2539],
    '北海': [109.314,21.6211],
    '南京': [118.8062,31.9208],
    '南宁': [108.479,23.1152],
    '南昌': [116.0046,28.6633],
    '南通': [121.1023,32.1625],
    '厦门': [118.1689,24.6478],
    '台州': [121.1353,28.6688],
    '合肥': [117.29,32.0581],
    '呼和浩特': [111.4124,40.4901],
    '咸阳': [108.4131,34.8706],
    '哈尔滨': [127.9688,45.368],
    '唐山': [118.4766,39.6826],
    '嘉兴': [120.9155,30.6354],
    '大同': [113.7854,39.8035],
    '大连': [122.2229,39.4409],
    '天津': [117.4219,39.4189],
    '太原': [112.3352,37.9413],
    '威海': [121.9482,37.1393],
    '宁波': [121.5967,29.6466],
    '宝鸡': [107.1826,34.3433],
    '宿迁': [118.5535,33.7775],
    '常州': [119.4543,31.5582],
    '广州': [113.5107,23.2196],
    '廊坊': [116.521,39.0509],
    '延安': [109.1052,36.4252],
    '张家口': [115.1477,40.8527],
    '徐州': [117.5208,34.3268],
    '德州': [116.6858,37.2107],
    '惠州': [114.6204,23.1647],
    '成都': [103.9526,30.7617],
    '扬州': [119.4653,32.8162],
    '承德': [117.5757,41.4075],
    '拉萨': [91.1865,30.1465],
    '无锡': [120.3442,31.5527],
    '日照': [119.2786,35.5023],
    '昆明': [102.9199,25.4663],
    '杭州': [119.5313,29.8773],
    '枣庄': [117.323,34.8926],
    '柳州': [109.3799,24.9774],
    '株洲': [113.5327,27.0319],
    '武汉': [114.3896,30.6628],
    '汕头': [117.1692,23.3405],
    '江门': [112.6318,22.1484],
    '沈阳': [123.1238,42.1216],
    '沧州': [116.8286,38.2104],
    '河源': [114.917,23.9722],
    '泉州': [118.3228,25.1147],
    '泰安': [117.0264,36.0516],
    '泰州': [120.0586,32.5525],
    '济南': [117.1582,36.8701],
    '济宁': [116.8286,35.3375],
    '海口': [110.3893,19.8516],
    '淄博': [118.0371,36.6064],
    '淮安': [118.927,33.4039],
    '深圳': [114.5435,22.5439],
    '清远': [112.9175,24.3292],
    '温州': [120.498,27.8119],
    '渭南': [109.7864,35.0299],
    '湖州': [119.8608,30.7782],
    '湘潭': [112.5439,27.7075],
    '滨州': [117.8174,37.4963],
    '潍坊': [119.0918,36.524],
    '烟台': [120.7397,37.5128],
    '玉溪': [101.9312,23.8898],
    '珠海': [113.7305,22.1155],
    '盐城': [120.2234,33.5577],
    '盘锦': [121.9482,41.0449],
    '石家庄': [114.4995,38.1006],
    '福州': [119.4543,25.9222],
    '秦皇岛': [119.2126,40.0232],
    '绍兴': [120.564,29.7565],
    '聊城': [115.9167,36.4032],
    '肇庆': [112.1265,23.5822],
    '舟山': [122.2559,30.2234],
    '苏州': [120.6519,31.3989],
    '莱芜': [117.6526,36.2714],
    '菏泽': [115.6201,35.2057],
    '营口': [122.4316,40.4297],
    '葫芦岛': [120.1575,40.578],
    '衡水': [115.8838,37.7161],
    '衢州': [118.6853,28.8666],
    '西宁': [101.4038,36.8207],
    '西安': [109.1162,34.2004],
    '贵阳': [106.6992,26.7682],
    '连云港': [119.1248,34.552],
    '邢台': [114.8071,37.2821],
    '邯郸': [114.4775,36.535],
    '郑州': [113.4668,34.6234],
    '鄂尔多斯': [108.9734,39.2487],
    '重庆': [107.7539,30.1904],
    '金华': [120.0037,29.1028],
    '铜川': [109.0393,35.1947],
    '银川': [106.3586,38.1775],
    '镇江': [119.4763,31.9702],
    '长春': [125.8154,44.2584],
    '长沙': [113.0823,28.2568],
    '长治': [112.8625,36.4746],
    '阳泉': [113.4778,38.0951],
    '青岛': [120.4651,36.3373],
    '韶关': [113.7964,24.7028]
};

var XAData = [
    [{name:'拉萨'}, {name:'广灵县',value:100}],
    [{name:'广灵县'}, {name:'拉萨',value:100}],
    [{name:'西安'}, {name:'葫芦岛',value:100}],
    [{name:'西安'}, {name:'上海',value:100}],
    [{name:'西安'}, {name:'广州',value:100}],
    [{name:'西安'}, {name:'西宁',value:100}],
    [{name:'西安'}, {name:'银川',value:100}]
];

var XNData = [
    // [{name:'西宁'}, {name:'北京',value:100}],
    [{name:'西宁'}, {name:'上海',value:100}],
    [{name:'西宁'}, {name:'广州',value:100}],
    [{name:'西宁'}, {name:'西安',value:100}],
    [{name:'西宁'}, {name:'银川',value:100}]
];

var YCData = [
    // [{name:'银川'}, {name:'北京',value:100}],
    [{name:'银川'}, {name:'广州',value:100}],
    [{name:'银川'}, {name:'上海',value:100}],
    [{name:'银川'}, {name:'西安',value:100}],
    [{name:'银川'}, {name:'西宁',value:100}],
];

var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
//var planePath = 'arrow';
var convertData = function (data) {
    
    var res = [];
    for (var i = 0; i < data.length; i++) {
      
        var dataItem = data[i];

        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord],
                value: dataItem[1].value
            });
        }
    }
    return res;
     
};

var color = ['#a6c84c', '#ffa022', '#46bee9'];//航线的颜色
var series = [];
[['西安', XAData], ['西宁', XNData], ['银川', YCData]].forEach(function (item, i) {  
    series.push({
        name: item[0] + ' Top3',
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: 'red',   //arrow箭头的颜色
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 0,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0] + ' Top3',
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 1,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0] + ' Top3',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: function (val) {
            return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i],
          },
          emphasis: {
              areaColor: '#2B91B7'
          }
        },
        data: item[1].map(function (dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});
var option = {
    // backgroundColor: '#000',     // 背景图
    // title : {
    //     text: '模拟航线',
    //     subtext: '数据纯属虚构',
    //     left: 'center',
    //     textStyle : {
    //         color: '#fff'
    //     }
    // },
    tooltip : {
        trigger: 'item', 
        formatter:function(params, ticket, callback){
            if(params.seriesType=="effectScatter") {
                return "线路："+params.data.name+""+params.data.value[2];
            }else if(params.seriesType=="lines"){
                return params.data.fromName+">"+params.data.toName+"<br />"+params.data.value;
            }else{
                return params.name;
            }
        } 
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data:['西安 Top3', '西宁 Top3', '银川 Top3'],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'multiple'
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: true,
                color:'#fff'
            }
        },
        zoom: 1.2,        // 把中国地图放大了1.2倍
        roam: true,
        itemStyle: {
          normal: {
              areaColor: 'rgba(20, 41, 87, .7)',     // 修改地图省份背景颜色
              borderColor: '#195BB9',
              borderWidth: 1,
          },
          emphasis: {
              areaColor: '#2B91B7'
          }
        }
    },
    series: series
};

// 3 把配置项给实例对象
myChart.setOption(option);
// 4 屏幕自适应
window.addEventListener('resize', function() {
  myChart.resize();
})
}) ();