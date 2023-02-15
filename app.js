var trs = document.getElementsByClassName('bidAndask-row');

$(".arrow-icon2").click(function () {

  $(this).toggleClass("fa-rotate-180");

  if ($(this).hasClass("fa-rotate-180")) {

    for (var i = 0; i < trs.length; i++) {
      if (i < 3) {
        trs[i].style.display = 'table-row';
      } else {
        trs[i].style.display = 'none';
      }
    }
  } 
  else {
    $(".bidAndask-row").hide();
  }

});


//Added color timeAndsales table
var bidRows = document.querySelectorAll('.set-row-color1');

bidRows.forEach((rw) => {

  if (rw.classList.contains('set-row-color1')) {

    rw.style.color = '#0CAF82';
  }

});

var askRows = document.querySelectorAll('.set-row-color2');

askRows.forEach((rw) => {

  if (rw.classList.contains('set-row-color2')) {

    rw.style.color = '#FE3957';
  }

});

var premium = "FALSE"
var premiumColumns=7;

for(var i=1; i<10 ; i++)
{
    if(premium == "TRUE")
    {
       console.log('premium true card')
    }
    else
    {
       
        if(i<premiumColumns)
        {
            console.log(i + 'show visible')
        }
        else
        {
          console.log(i + 'show blur')
        }
      
    }
}


var chartDom = document.getElementById('analystRating');
var myChart = echarts.init(chartDom);
var option;

option = {
  dataZoom: [
    {
        type: 'slider',
        handleIcon:
        'path://M15,30C15,21.71270751953125,21.71270751953125,15,30,15C38.28729248046875,15,45,21.71270751953125,45,30C45,38.28729248046875,38.28729248046875,45,30,45C21.71270751953125,45,15,38.28729248046875,15,30Z',
        //xAxisIndex: [0],
        filterMode: 'filter',
        start: new Date('2019-12-31'),
        end: new Date('2021-12-31')
        
    }],
  xAxis: {
    type: 'time',
    data: ['2019-12-31', '2020-12-31', '2021-12-31', '2022-12-31', '2023-12-31'],
    axisLabel: {
      formatter: function (value, index) {
          var date = new Date(value);
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          month = month < 10 ? '0' + month : month;
          var day = date.getDate();
          day = day < 10 ? '0' + day : day;
          return [year, month, day].join('-');
      }
  },
    
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 78],
      type: 'bar'
    }
  ]
};

option && myChart.setOption(option);



myChart.on('datazoom', function (evt) {
  var axis = myChart.getModel().option.xAxis[0].data;
  axis.forEach(x=>{
    //console.log(x)
  })
// console.log(axis[0])
// console.log(axis[axis.length-1])
  // var starttime = axis[0];
  // var endtime = axis[axis.length-1];
  var starttime = '2019-12-31';
  var endtime = '2021-12-31';
  // console.log(starttime)
  // console.log(endtime);
});


// myChart.on('dataZoom', function(params) {
//   console.log(params)
//   var startValue = params.batch[0].startValue; // Get the start value of the x-axis
//   var endValue = params.batch[0].endValue; // Get the end value of the x-axis
//   console.log('Start:', startValue, 'End:', endValue);
// });

// myChart.on('dataZoom', function() {
//   var option = myChart.getOption();
//   console.log(option)
//   console.log(option.dataZoom[0].startValue, option.dataZoom[0].endValue);
// });