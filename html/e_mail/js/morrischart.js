$(function () {
    // 点击导航栏
    $(".fuben>i").on("click",function () {
        $(".logo-admin").toggle();
        $(".zhuanyu").toggle();
        $(".ershiw").toggle();
        $(".bodr").toggle();
        $(".arrow").toggle();
        $(".personal>span").toggle();
        $(".persoan>h5").toggle();
        $(".sump").toggle();
    });
    //点击小按钮的时候
    var  cont=0;
    $(".fubenn").click(function () {
        cont++;
        if(cont%2==0){
           $(".asideLeft").css({
               display:"none"
           })
        }else {
            $(".asideLeft").css({
                zIndex: 90,
                display:"block"
            })
            $(".logo-admin").toggle();
            $(".zhuanyu").toggle();
            $(".ershiw").toggle();
            $(".bodr").toggle();
            $(".arrow").toggle();
            $(".personal>span").toggle();
            $(".persoan>h5").toggle();
            $(".sump").toggle();


        }
    });




    //点击消息
    $(".xiaoxiyi").click(function(){
        $(".notifications").toggle("2000");
    });
    //点击邮箱
    $(".youxaing").click(function(){
        $(".newmessages").toggle("2000");
    });
    //点击四方块
    $(".sifang").click(function(){
        $(".carousel").toggle("2000");
    });






    //国旗
    $(".chian").click(function(){
        $(".guoqi").toggle("2000");
    });
    //搜索
    $(".sou").click(function(){
        $(".sousu").toggle("2000");
    });

    //旋转


    $(".persoan>li").on("click",function () {
        //子菜单显示
        $(this).find($(".minimal")).toggle();
        //旋转
        $(this).find($(".arrow")).css({
            transformOrigin: "center",
            transform: "rotate(-270deg)",
            transition: "all 1s"
        });
        //边框变色
        $(this).find(".perr").css("borderLeft", "3px solid #1e88e5");
    });

    if($(".asideLeft")[0].style.width<"60px"){
        $(".perr").mouseenter(function () {
            $(this).css("background","#fff");
        });
    }




    $(".perr").mouseenter(function () {
        $(this).find($(".personal>span")).css("color","#1e88e5");
        $(this).find($(".personal>i")).css("color","#1e88e5");
    });
    $(".perr").mouseleave(function () {
        $(this).css("background","#272c33");


        $(this).find($(".personal>span")).css("color","#607d8b");
        $(this).find($(".personal>i")).css("color","#607d8b");
    });


    //变色
    $(".minimal>li").mouseenter(function () {
        $(this).find($(".minimal>li>a")) .css("color","#1e88e5");
    });
    $(".minimal>li").mouseleave(function () {
        $(this).find($(".minimal>li>a")) .css("color","#607d8b");
    });





    // 内容部分
    $(".contentmailist>li").mouseenter(function () {
        $(this).css({
            background:"#323840",
            borderLeft:"3px soild  #009efb",
            zIndex: "2"
        })
    });
    $(".contentmailist>li").mouseleave(function () {
        $(this).css({
            background:"#272c33",
            borderLeft:"none",
        })
    });

    //当点击check时
    $(".check").click(function () {
        $(this).next($(".chench")).toggle();
    });
    //点击错误消失
    $(".cuo").click(function () {
        $(".sousu").hide("2000");
    });



    $(".Imglist span").mouseenter(function () {

        $(this).css({
            background:"rgba(200, 200, 200, 0.3)"
        });
        $(this).find($("i")).css({
            color: "white"
        });
    });
    $(".Imglist span").mouseleave(function () {

        $(this).css({
            background:"#323840"
        });
        $(this).find($("i")).css({
            color: "#747d8a"
        });

    });
     //右侧边栏
    $(".rpanel-title>img").click(function () {
         $(".rightaisde").css("display","none");
    });
    //点击旋转
    $(".xuanzhuan").click(function () {
        $(".rightaisde").css("display","block");
    });
    //换色
    $(".ctr1").click(function () {
        $(".headerRight").css("backgroundColor","#212529");
        $(".ctr1>img").toggle();
    });
    $(".ctr2").click(function () {
        $(".headerRight").css("backgroundColor","#26c6da");
        $(".ctr2>img").toggle();
    });
    $(".ctr3").click(function () {
        $(".headerRight").css("backgroundColor","#fc4b6c");
        $(".ctr3>img").toggle();
    });
    $(".ctr4").click(function () {
        $(".headerRight").css("backgroundColor","#1e88e5");
        $(".ctr4>img").toggle();
    });
    $(".ctr5").click(function () {
        $(".headerRight").css("backgroundColor","#7460ee");
        $(".ctr5>img").toggle();
    });
    $(".ctr6").click(function () {
        $(".headerRight").css("backgroundColor","#00897b");
        $(".ctr6>img").toggle();
    });
//表开始

    //折线图
    var chart = new Highcharts.Chart('container', {
        title: {
            text: 'Product line Chart',
            align:'left',
            style: {
                fontFamily: 'Arial',
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#fff'
            }
        },
        chart: {
            type: 'spline',
            backgroundColor:"#272c33"
        },
        xAxis: {
            categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016']
        },
        yAxis: {
            labels:{
                Step:2
            },
            plotLines: [{
                width:2,
                color: '#808080'
            }]


        },
        //提示框外观
        tooltip: {
            width:'40px',
            background:'#63676b',
            border:'none',
            color: '#fff',
            boxShadow: '0px 5px 20px #ccc',
            fontSize: '14px',
            borderRadius: '10',
            animation: true,
            fontWeight: 'blod',
        },
        credits:{
            enabled:false // 禁用版权信息
        },
        exporting:{
            enabled:false
        },
        legend:{
            symbolHeight: 12,
            symbolWidth: 12,
            symbolRadius: 6,
            align: 'right',
            verticalAlign:'top',
            itemDistance:20,
            itemStyle:{
                cursor: 'pointer',
                color: '#fff',
                fontSize: '16px'
            },
        },

        series: [{
            name: 'iphone',
            color:'rgb(57, 175, 245)',
            data: [50,130,80,70,180,105,250]
        }, {
            name: 'ipad',
            color:'rgb(58, 73, 87)',
            data: [80,100,60,200,150,100,150]
        }, {
            name: 'ipod',
            color:'rgb(85, 206, 99)',
            data: [20,50,70,140,140,80,200]
        }]
        
    });

    // 表二

    var chart = new Highcharts.Chart('reslt', {
        title: {
            text: 'Site visit Chart',
            align:'left',
            style: {
                fontFamily: 'Arial',
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#fff'
            }
        },
        chart: {
            type: 'area',
            backgroundColor:"#272c33"

        },
        subtitle:{
            // text: 'iphone   ipad  ipod'

        },
        xAxis: {
            categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016']
        },
        yAxis: {
            labels:{
                Step:2
            },
            plotLines: [{
                width:2,
                color: '#808080'
            }]


        },
        //提示框外观
        tooltip: {
            width:'40px',
            background:'#63676b',
            border:'none',
            color: '#fff',
            boxShadow: '0px 5px 20px #ccc',
            fontSize: '14px',
            borderRadius: '10',
            animation: true,
            fontWeight: 'blod',
        },
        credits:{
            enabled:false // 禁用版权信息
        },
        exporting:{
            enabled:false
        },
        legend:{
            symbolHeight: 12,
            symbolWidth: 12,
            symbolRadius: 6,
            align: 'right',
            verticalAlign:'top',
            itemDistance:20,
            itemStyle:{
                cursor: 'pointer',
                color: '#fff',
                fontSize: '16px'
            },
        },

        series: [
            {
                name: 'Site A View',
                color:'rgb(57, 175, 245)',
                data: [0,130,80,70,180,105,250]
            }, {
                name: 'Site B View',
                color:'rgb(226, 229, 234)',
                data: [0,100,60,200,150,90,150]
            }]
    });
    // 表格3

    var chart = new Highcharts.Chart('contain', {
        title: {
            text: 'line Chart',
            align:'left',
            style: {
                fontFamily: 'Arial',
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#fff'
            }
        },
        chart: {
            type: 'spline',
            backgroundColor:"#272c33"
        },

        xAxis: {
            categories: ['2010', '2011','2012','2013','2014','2015','2016']
        },
        yAxis: {
            labels:{
                Step:2
            },
            plotLines: [{
                width:2,
                color: '#808080'
            }]


        },
        //提示框外观
        tooltip: {
            width:'40px',
            height:'40px',
            background:'#63676b',
            border:'none',
            color: '#fff',
            boxShadow: '0px 5px 20px #ccc',
            fontSize: '14px',
            borderRadius: '10',
            animation: true,
            fontWeight: 'blod',
        },
        legend:{enabled:false},
        credits:{
            enabled:false // 禁用版权信息
        },
        exporting:{
            enabled:false
        },
        series:[{
            name: 'iphone',
            color:'rgb(0, 158, 251)',
            data: [2666,2778,4912,3767,6810,5670,4820,15073,10687,5432]
        }]
    });

    
    // 表四环形
    var myChart = echarts.init(document.getElementById('contai'));
    option = {
        //In-Store Sales30
        backgroundColor:'#272c33',
        title: {
            text: 'Donute Chart',
            left: 'left',
            top: 20,
            textStyle: {
                color: '#fff'
            }
        },


        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',

        },

           

        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            setOption:({
                backgroundColor:'#2c343c'
            }),
            data: [{
                value: 12,
                color:'rgb(0, 158, 251)',
                name: 'Mail-Order Sales'
            }, {
                value: 30,
                color:'rgb(85, 206, 99)',
                name: 'In-Store Sales'
            }, {
                value: 20,
                color:'rgb(47, 61, 74)',
                name: 'Download Sales'
            }]
        }]
    };
    myChart.setOption(option);

    // 柱状图
    var chart = new Highcharts.Chart('containe', {
        title: {
            text: 'Bar Chart',
            align:'left',
            style: {
                fontFamily: 'Arial',
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#fff'
            }
        },
        chart: {
            type: 'column',
            backgroundColor:"#272c33"
        },
        subtitle:{
            // text: 'iphone   ipad  ipod'

        },
        xAxis: {
            categories: ['2006', '2007', '2008', '2009', '2010', '2011', '2012']
        },
        yAxis: {
            labels:{
                Step:2
            },
            plotLines: [{
                width:2,
                color: '#808080'
            }]


        },
        plotOptions: {
            column: {

                pointPadding: 0.2,
                borderWidth: 0,
                width:5
            },
            series: {
                allowPointSelect: true

            }
        },
        //提示框外观
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        credits:{
            enabled:false // 禁用版权信息
        },
        exporting:{
            enabled:false
        },
        legend:{
            symbolHeight: 12,
            symbolWidth: 12,
            symbolRadius: 6,
            align: 'center',
            verticalAlign:'top',
            itemDistance:20,
            itemStyle:{
                cursor: 'pointer',
                color: '#fff',
                fontSize: '16px'
            },
        },
      
        series: [{
            name: 'iphone',
            color:' rgb(0, 158, 251)',
            data: [100,75,50,50,75,50,75]
        }, {
            name: 'ipad',
            color:' rgb(47, 61, 74)',
            data: [90,65,40,65,40,65,90]
        }, {
            name: 'ipod',
            color:'rgb(85, 206, 99)',
            data: [60,40,30,40,30,40,40]
        }]
    });
    // 曲面折线图

    var chart = new Highcharts.Chart('cont', {
        title: {
            text: 'Extra Area Chart',
            align:'left',
            style: {
                fontFamily: 'Arial',
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#fff'
            }
        },
        chart: {
            type: 'areaspline',
            backgroundColor:"#272c33"
        },
        xAxis: {
            categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016']
        },
        yAxis: {
            labels: {

            },

            plotLines: [{
                width:2,
                color: '#808080'
            }]


        },
        //提示框外观
        tooltip: {
            width:'40px',
            backgroundColor:'#63676b',
            border:'none',
            color: '#fff',
            boxShadow: '0px 5px 20px #ccc',
            fontSize: '14px',
            borderRadius: '10',
            animation: true,
            fontWeight: 'blod',
        },
        credits:{
            enabled:false // 禁用版权信息
        },
        exporting:{
            enabled:false
        },
        plotOptions: {
            area: {
                layout: 'vertical',
                align: 'left',
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        legend:{
            symbolHeight: 12,
            symbolWidth: 12,
            symbolRadius: 6,
            align: 'center',
            verticalAlign:'top',
            itemDistance:20,
            itemStyle:{
                cursor: 'pointer',
                color: '#fff',
                fontSize: '16px'
            },
        },
        series: [{
            name: 'siteA',
            color:' rgb(0, 158, 251)',
            data: [0,50,20,60,30,25,10]
        }, {
            name: 'siteB',
            color:'rgb(85, 206, 99)',
            data: [0,15,50,12,20,80,10]
        }, {
            name: 'siteC',
            color:' rgb(47, 61, 74)',
            data: [0,5,65,7,120,40,10]
        }]
    });
    
});




//轮播图
var mySwiper = new Swiper ('.swiper-container', {
    // direction: 'vertical',//是否垂直
    loop: true,//是否可以循环拖动
    autoplay:2000,//是否自动播放
    // 如果需要分页器
    pagination: '.swiper-pagination',

    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // 如果需要滚动条

});
