
//header
//导航栏二级菜单效果
$(".nav-item").click(function () {

    if($(this).next(".dropdown_mune").hasClass("show")){
        $(this).next(".dropdown_mune").removeClass("show");
    }else{
        $(".dropdown_mune").each(function () {
            $(this).removeClass("show");
        });
        $(this).next(".dropdown_mune").addClass("show");
    }

    if($(this).hasClass("active")){
        $(this).removeClass("active");
    }else{
        $(".nav-item").each (function () {
            $(".active").removeClass("active");
        })
        $(this).addClass("active");
    }

});


//第四个下拉框
$(".form_control").focus(function () {
    $(".form_control").each(function () {
       $(this).removeClass("focus");
    });
    $(this).addClass("focus");
    $(this).blur(function () {
        $(this).removeClass("focus");
    });
});
$(".card_header").click(function () {
    $(this).siblings(".show").hide();
    $(".card_collapse").each(function () {
       $(this).removeClass("show");
    });
    $(this).siblings(".card_collapse").addClass("show");
});





//导航搜索框关闭按钮
$(".nav-item.search").click(function () {

    $(".forms_search").toggle(function () {
        $(this).css("display","block");
    });
});
$(".forms_search .nav_search_close").click(function () {
    $(".forms_search").toggle(function () {
        $(this).css("display","none");
    });
});
$(".nav_search").focus(function () {
    $(this).css("border-bottom","1px solid #eee");
});
$(".nav_search").blur(function () {
    $(this).css("border-bottom","none");
});


// aside侧边栏
$(".aside_list .aside_item").click(function () {
    $(this).siblings(".aside_collapse").slideToggle();

    if($(this).hasClass("active")){
        $(this).removeClass("active");
    }else{
        $(".aside_item").each (function () {
            $(".aside_item").removeClass("active");
        });
        $(this).addClass("active");
    }
});

//点击header第一个按钮侧边栏缩进变形
var count=0;
$(".nav-item.aside_hide").click(function () {

    count++;
    if(count%2!=0){
        $(".nav_logo>span").toggle();
        $(".nav_logo").css({
            width:"60px",
            textAlign:"center"
        });
        $(".user_profile_txt").toggle();
        $(".user_profile_img").css({
            width:"50px",
            paddingBottom: "15px"
        })
        $(".user_profile_img img").css({
            width:"80%",
        })
        $(".left_asideBar").css({
            width:"60px",
            textAlign:"center"
        });
        $(".aside_list_header").toggle();
        $(".aside_item>span").toggle();

        $(".aside_collapse").addClass("show");
        

    // $(".aside_list ul li").css({
    //     position: "relative"
    // });
    // $(".left_asideBar").css({
    //     width:"60px"
    // });

    // $(".user_profile").css( {
    //     paddingBottom:" 15px",
    //     width:" 60px",
    //     marginBottom: "7px"
    // });

    // $(".user_profile_img").css({
    //     padding: "15px 0 0 0",
    //     margin: "0px 0 0 6px",
    //     width: "50px"
    //  });
    // $(".user_profile_img img").css({
    //     width: "80%"
    // });
    // $(".user_profile_txt,.aside_list_header,.aside_item>span").css({
    //     display:" none"
    // });

    // $(".aside_item").css({
    //     padding:"9px 18px",
    //     width:" 50px"
    // });
    // $(".aside_collapse").css({
    //     background:" #181c22",
    //     position:" absolute",
    //     left: "60px",
    //     top:"40px",
    //     width: "200px",
    //     zIndex: "999999",
    //     display: "none",
    //     paddingLeft: "1px"
    // });
    //  $(".aside_list>ul>li:hover>.aside_item").css( {
    //     width: "205px",
    //     background: "#f2f6f8",
    //     zIndex: "9999999"
    // });
    // $(".aside_list>ul>li:hover .aside_collapse").css({
    //     display: "block",
    //     height:" auto!important",
    //     overflow:" auto",
    //     paddingLeft: "0"
    //  });
    // $(".aside_list>ul>li:hover .aside_item>span").css({
    //     display: "inline"
    // });
    // $(".nav_logo>span").css({
    //     display: "none"
    // });
    //  $(".nav_logo>b").css({
    //     padding:"10px"
    // });

    }else if(count%2==0) {
        console.log("大界面");
        $(".aside_collapse").each(function () {
            $(this).removeClass("show");
        });

        $(".nav_logo>span").toggle();
        $(".nav_logo").css({
            width: "240px",
            textAlign: "center"
        });
        $(".user_profile_txt").toggle();
        $(".user_profile_img").css({
            width: "70px",
            padding: "10px 0 5px 0"
        })
        $(".user_profile_img img").css({
            width: "100%",
        })
        $(".left_asideBar").css({
            width: "240px",
            textAlign: "left"
        });
        $(".aside_list_header").toggle();
        $(".aside_item>span").toggle();
    }
});

//
// $(".aside_list .aside_item").click(function () {
//     // $(".aside_collapse").each(function () {
//     //     $(this).removeClass("show");
//     // })
//     $(this).siblings(".aside_collapse").addClass("show");
// });

var n=0;
$(".nav-item.smallbtn ").click(function(){
    n++;
    if(n%2!==0){
        $(".left_asideBar").css("display","block");
    }else{
        $(".left_asideBar").css("display","none");
    }

});

//select下拉框
$("#countryChoose").focus(function () {
    $(this).css("border","1px solid #1e88e5");
});
$("#countryChoose").blur(function () {
    $(this).css("borderColor","rgba(120, 130, 140, 0.13)");
});



$(function () {

    // 引入highCharts1**************
    $('#container').highcharts({

        chart: {
            type: 'areaspline',
            backgroundColor:"#272c33"
        },
        exporting:{
            enabled: false
        },
        credits:{
            enabled: false
        },
        title: {
            text: 'Analytics Overview',
            align:'left',
            style:{
                'lineHeight':' 22px',
                'fontSize': '18px',
                'marginBottom': '.75rem',
                'color':'#fff'
            }
        },
        subtitle:{
            text:'Overview of Monthly analytics',
            align:'left',
            style:{
                'lineHeight':'16px',
                'fontSize': '14px',
                'marginBottom': '15px',
                'color':'#757e8a;'
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'right',
            verticalAlign: 'top',
            y: 25,
            floating: true,
            itemStyle:{
                color:"#757e8a",
            }
        },
        xAxis: {
            categories: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8'
            ],
            gridLineColor: '#eee',
            gridLineWidth: 1,
            tickmarkPlacement: 'on',
            gridLineDashStyle: "ShortDot",
        },
        yAxis: {
            title: {
                text: ''
            },
            gridLineWidth: 1,
            gridLineColor: '#eee',
            gridLineDashStyle: "ShortDot",
        },
        tooltip: {
            shared: true,
            valueSuffix: ' K',
            style:{
                "color": "#fff",
                "fontSize": "16px",
            },
            backgroundColor:"rgba(0,0,0,0.85)",
            split:true
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'seriesA',
            data: [0, 5000, 15000, 8000, 15000, 9000, 30000,0],
            color: '#26c6da'
        }, {
            name: 'seriesB',
            data: [0, 3000, 5000, 2000, 8000,1000,5000,0],
            color: '#1e88e5'
        }]
    });

    // 引入highCharts1 End**********************


    // 引入highCharts2**************
    $('#container2_1').highcharts({
        chart: {
            width:130,
            height:90,
            type: 'column',
            backgroundColor:"#272c33",
        },
        exporting:{
            enabled: false
        },
        credits:{
            enabled: false
        },
        legend:{
            enabled: false
        },
        title: {
            text: null,
            align:'left',
            style:{
                'lineHeight':' 22px',
                'fontSize': '18px',
                'marginBottom': '.75rem',
                'color':'#fff'
            }
        },
        subtitle:{
            text:null,
            align:'left',
            style:{
                'lineHeight':'22px',
                'fontSize': '18px',
                'marginBottom': '15px',
                'color':'#fff'
            }
        },
        xAxis: {
            categories: [

            ],
            labels:{
                enabled: false
            },
            crosshair: true,
            tickWidth: 0,
            showFirstLabel: true,
            lineWidth: 0
        },
        yAxis: {
            gridLineWidth:0,
            labels:{
                enabled: false
            },
            visible: false
        },
        tooltip: {
            backgroundColor:" #383f48",
            borderColor: null,
            borderWidth: 0,
            style:{
                "color":"#fff",
                "width":"30px"
            },
            borderRadius: 22,
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name:"",
            color:"#26c6da",
            data: [4,5,1,10,9,12,4,9]
        }]
    });

    $('#container2_2').highcharts({
        chart: {
            width:130,
            height:90,
            type: 'column',
            backgroundColor:"#272c33",
        },
        exporting:{
            enabled: false
        },
        credits:{
            enabled: false
        },
        legend:{
            enabled: false
        },
        title: {
            text: null,
            align:'left',
            style:{
                'lineHeight':' 22px',
                'fontSize': '18px',
                'marginBottom': '.75rem',
                'color':'#fff'
            }
        },
        subtitle:{
            text:null,
            align:'left',
            style:{
                'lineHeight':'22px',
                'fontSize': '18px',
                'marginBottom': '15px',
                'color':'#fff'
            }
        },
        xAxis: {
            categories: [

            ],
            labels:{
                enabled: false
            },
            crosshair: true,
            tickWidth: 0,
            showFirstLabel: true,
            lineWidth: 0
        },
        yAxis: {
            gridLineWidth:0,
            labels:{
                enabled: false
            },
            visible: false
        },
        tooltip: {
            backgroundColor:" #383f48",
            borderColor: null,
            borderWidth: 0,
            style:{
                "color":"#fff",
                "width":"30px"
            },
            borderRadius: 22,
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name:"",
            color:"#26c6da",
            data: [0,5,6,10,9,12,4,9],
            color:"#ef5350"
        }]
    });
    $('#container2_3').highcharts({
        chart: {
            width:130,
            height:90,
            type: 'column',
            backgroundColor:"#272c33",
        },
        exporting:{
            enabled: false
        },
        credits:{
            enabled: false
        },
        legend:{
            enabled: false
        },
        title: {
            text: null,
            align:'left',
            style:{
                'lineHeight':' 22px',
                'fontSize': '18px',
                'marginBottom': '.75rem',
                'color':'#fff'
            }
        },
        subtitle:{
            text:null,
            align:'left',
            style:{
                'lineHeight':'22px',
                'fontSize': '18px',
                'marginBottom': '15px',
                'color':'#fff'
            }
        },
        xAxis: {
            categories: [

            ],
            labels:{
                enabled: false
            },
            crosshair: true,
            tickWidth: 0,
            showFirstLabel: true,
            lineWidth: 0
        },
        yAxis: {
            gridLineWidth:0,
            labels:{
                enabled: false
            },
            visible: false
        },
        tooltip: {
            backgroundColor:" #383f48",
            borderColor: null,
            borderWidth: 0,
            style:{
                "color":"#fff",
                "width":"30px"
            },
            borderRadius: 22,
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name:"",
            color:"#26c6da",
            data: [4,5,1,10,9,12,4,9],
            color:"#7460ee"
        }]
    });

    // 引入highCharts2 End**********************


    // 引入highCharts5**************
    // $.getJSON('https://data.jianshukeji.com/jsonp?filename=json/world-population-density.json&callback=?', function (data) {
    //     // Initiate the chart
    //     $('#container5').highcharts('Map', {
    //         chart: {
    //             backgroundColor:"#272c33",
    //         },
    //         title : {
    //             text : 'Total Visits',
    //             align:'left',
    //             style:{
    //                 'lineHeight':' 22px',
    //                 'fontSize': '18px',
    //                 'marginBottom': '.75rem',
    //                 'color':'#fff'
    //             }
    //         },
    //         exporting:{
    //             enabled: false
    //         },
    //         credits:{
    //             enabled: false
    //         },
    //         mapNavigation: {
    //             enabled: true,
    //             enableDoubleClickZoomTo: true,


    //             buttonOptions: {
    //                 verticalAlign: 'bottom'
    //             }
    //         },
    //         colorAxis: {
    //             min: 1,
    //             max: 1000,
    //             type: 'logarithmic'
    //         },
    //         series : [{
    //             data : data,
    //             mapData: Highcharts.maps['custom/world'],
    //             joinBy: ['iso-a2', 'code'],
    //             name: 'Population density',
    //             states: {
    //                 hover: {
    //                     color: '#BADA55'
    //                 }
    //             },
    //             tooltip: {
    //                 valueSuffix: '/km²'
    //             }
    //         }]
    //     });
    // });
    $('#container5').highcharts({
        chart: {
            type: 'column',
            backgroundColor:"#272c33",

        },
        exporting:{
            enabled: false
        },
        credits:{
            enabled: false
        },
        legend:{
            enabled: false
        },
        title: {
            text: 'Total Visit',
            align:'left',
            style:{
                'lineHeight':' 22px',
                'fontSize': '18px',
                'marginBottom': '.75rem',
                'color':'#fff'
            }
        },
        subtitle:{
            text:'Overview of Monthly analytics',
            align:'left',
            style:{
                'lineHeight':'16px',
                'fontSize': '14px',
                'marginBottom': '15px',
                'color':'#757e8a'
            }
        },
        xAxis: {
            categories: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8'
            ],
            labels:{
                // enabled: false
            },
            tickWidth: 0,
            showFirstLabel: true,

        },
        yAxis: {
            gridLineWidth:0,
            labels:{
                enabled: false
            },
            // visible: false,
            gridLineWidth: 1,
            gridLineColor: '#eee',
            gridLineDashStyle: "ShortDot",
        },
        tooltip: {
            backgroundColor:" #383f48",
            borderColor: null,
            borderWidth: 0,
            style:{
                "color":"#fff",
            },
            borderRadius: 22,
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name:"",
            data: [4,5,1,10,9,12,4,9]
        }]
    });


    // 引入highCharts5 End**********************

    // 引入highCharts6**************
    $('#container6_1').highcharts({
        chart: {
            width:170,
            height:130,
            type: 'column',
            backgroundColor:"#1e88e5",
        },
        exporting:{
            enabled: false
        },
        credits:{
            enabled: false
        },
        legend:{
            enabled: false
        },
        title: {
            text: null,
            align:'left',
            style:{
                'lineHeight':' 22px',
                'fontSize': '18px',
                'marginBottom': '.75rem',
                'color':'#fff'
            }
        },
        subtitle:{
            text:null,
            align:'left',
            style:{
                'lineHeight':'22px',
                'fontSize': '18px',
                'marginBottom': '15px',
                'color':'#fff'
            }
        },
        xAxis: {
            categories: [

            ],
            labels:{
                enabled: false
            },
            crosshair: true,
            tickWidth: 0,
            showFirstLabel: true,
            lineWidth: 0
        },
        yAxis: {
            gridLineWidth:0,
            labels:{
                enabled: false
            },
            visible: false
        },
        tooltip: {
            backgroundColor:" #383f48",
            borderColor: null,
            borderWidth: 0,
            style:{
                "color":"#fff",
                "width":"30px"
            },
            borderRadius: 22,
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name:"",
            color:"#26c6da",
            data: [4,5,1,10,9,12,4,9,4,5,3,10,9,12,10,9,12,4,9],
            color:"#fff"
        }]
    });
    $('#container6_2').highcharts({
        chart: {
            width:170,
            height:130,
            type: 'column',
            backgroundColor:"#fc4b6c",
        },
        exporting:{
            enabled: false
        },
        credits:{
            enabled: false
        },
        legend:{
            enabled: false
        },
        title: {
            text: null,
            align:'left',
            style:{
                'lineHeight':' 22px',
                'fontSize': '18px',
                'marginBottom': '.75rem',
                'color':'#fff'
            }
        },
        subtitle:{
            text:null,
            align:'left',
            style:{
                'lineHeight':'22px',
                'fontSize': '18px',
                'marginBottom': '15px',
                'color':'#fff'
            }
        },
        xAxis: {
            categories: [

            ],
            labels:{
                enabled: false
            },
            crosshair: true,
            tickWidth: 0,
            showFirstLabel: true,
            lineWidth: 0
        },
        yAxis: {
            gridLineWidth:0,
            labels:{
                enabled: false
            },
            visible: false
        },
        tooltip: {
            backgroundColor:" #383f48",
            borderColor: null,
            borderWidth: 0,
            style:{
                "color":"#fff",
                "width":"30px"
            },
            borderRadius: 22,
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name:"",
            color:"#26c6da",
            data: [4,5,1,10,9,12,4,9,4,5,3,10,9,12,10,9,12,4,9],
            color:"#fff"
        }]
    });

    // 引入highCharts6 End**********************



    // 引入highCharts7**************
    $('#container7').highcharts({
        chart: {
            type: 'area',
            backgroundColor:"#272c33"
        },
        exporting:{
            enabled: false
        },
        credits:{
            enabled: false
        },
        title: {
            text: 'Sales Difference',
            align:'left',
            style:{
                'lineHeight':' 22px',
                'fontSize': '18px',
                'marginBottom': '.75rem',
                'color':'#fff'
            }
        },
        subtitle:{
            text:'Check the difference between two site',
            align:'left',
            style:{
                'lineHeight':'16px',
                'fontSize': '14px',
                'marginBottom': '15px',
                'color':'#757e8a'
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'right',
            verticalAlign: 'top',
            enabled:false
        },

        xAxis: {
            allowDecimals: false,
            categories: [
                '2010',
                '2011',
                '2012',
                '2013',
                '2014',
                '2015',
                '2016',
                '2017'
            ],

            tickmarkPlacement: 'on',
        },
        yAxis: {
            title: {
            },
            tickAmount: 5
        },
        tooltip: {
            shared: true,
            valueSuffix: ' ',
            style:{
                "color": "#fff",
                "fontSize": "16px",
            },
            backgroundColor:"rgba(0,0,0,0.85)",

        },
        plotOptions: {

            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'seriesA',
            data: [0,130,80,70,180,105,250],
            color:'#72767c'
        }, {
            name: 'seriesB',
            data: [0,100,60,200,150,90,150],
            color:'#4a9ea5'
        }]
    });
    // 引入highCharts7 End**********************
});

 // 引入highCharts & highmaps End***************************************************
