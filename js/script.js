/*스크롤 부여*/
var sgc1 = new ScrollGiveClass("#main_video",{
	class:"show",
    baseline:"middle",
    add:0.2 //현재 기준위치(middle)에서 화면높이의 10%(0.1)만큼 더해짐
});

var sgc2 = new ScrollGiveClass("#invest",{
	class:"show",
    baseline:"middle",
    add:0.2
});

var sgc3 = new ScrollGiveClass("#product",{
	class:"show",
    baseline:"middle",
    add:0.2
});

var sgc3 = new ScrollGiveClass("#collabo",{
	class:"show",
    baseline:"middle",
    add:0.2
});


/*베스트 슬라이드*/
const best = new Swiper('#main_view .m_swiper', {
  containerModifierClass: 'm_swiper',
  wrapperClass:'main_slider',
  slideClass:'best',
  direction: 'vertical',
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
  },
  speed:800,
  loop: true,
});


/*상품 슬라이드*/
const product = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
  },
  speed:800,

  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },

  breakpoints:{
    640:{slidesPerView:2, spaceBetween:20},
    768:{slidesPerView:3, spaceBetween:20},
    1025:{slidesPerView:4, spaceBetween:20},
    1500:{slidesPerView:5, spaceBetween:20}
  }

}); 


/*하단 슬라이드*/
const company = new Swiper('#collabo .company', {
  containerModifierClass: 'company',
  wrapperClass: 'slider',
  slideClass:'colla',
  loop: true,
  slidesPerView: 7,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed:3000,

});


const bank = new Swiper('#collabo .bank', {
  containerModifierClass: 'bank',
  wrapperClass: 'slider',
  slideClass:'colla',
  loop: true,
  slidesPerView: 6,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed:3000,

});


//차트 버튼 (연결하려면 더 위에 위치해야 함)
const chart_btn = new Swiper('#invest .in_list', {
  containerModifierClass: 'in_list',
  wrapperClass: 'list',
  slideClass:'enm',

});

//차트 슬라이드 (여기에 thumbs 연결)
const chart_list = new Swiper('#invest .in_chart', {
  containerModifierClass: 'in_chart',
  wrapperClass: 'c_slider',
  slideClass:'chart',
  direction: 'vertical',
  thumbs: {
    swiper: chart_btn,
  },

});


//차트 옵션 1~5
var options1 = {
  series: [{
  name: '',
  data: [31, 40, 28, 51, 42, 109, 120]
}, {
  name: '',
  data: [11, 32, 45, 32, 34, 45, 11]
}],
  chart: {
  height: 220,
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
grid: {
  xaxis: {
    lines: {
      show: false
    }
  },
  yaxis: {
    lines: {
      show: false
    }
  },
},
fill: {
  colors: ['#e25050', '#4577FF']
},
xaxis: {
  type: 'datetime',
  categories: ["2024-10-04T00:00:00.000Z", "2024-10-04T01:30:00.000Z", "2024-10-04T02:30:00.000Z", "2024-10-04T03:30:00.000Z", "2024-10-04T04:30:00.000Z", "2024-10-04T05:30:00.000Z", "2024-10-04T06:30:00.000Z"]
},
tooltip: {
  x: {
    format: 'dd/MM/yy HH:mm'
  },
},
};


var options2 = {
  series: [{
    name: '',
    data: [100, 50, 60, 66, 45, 71, 73]
  }, {
    name: '',
    data: [11, 32, 45, 32, 34, 45, 11]
  }],
  chart: {
    height: 220,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  grid: {
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    },
  },
  fill: {
    colors: ['#e25050', '#4577FF']
  },
  xaxis: {
    type: 'datetime',
    categories: ["2024-10-04T00:00:00.000Z", "2024-10-04T01:30:00.000Z", "2024-10-04T02:30:00.000Z", "2024-10-04T03:30:00.000Z", "2024-10-04T04:30:00.000Z", "2024-10-04T05:30:00.000Z", "2024-10-04T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
};


var options3 = {
  series: [{
    name: '',
    data: [40, 39, 41, 44, 55, 59, 62]
  }, {
    name: '',
    data: [50, 55, 60, 54, 59, 51, 55]
  }],
  chart: {
    height: 220,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  grid: {
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    },
  },
  fill: {
    colors: ['#e25050', '#4577FF']
  },
  xaxis: {
    type: 'datetime',
    categories: ["2024-10-04T00:00:00.000Z", "2024-10-04T01:30:00.000Z", "2024-10-04T02:30:00.000Z", "2024-10-04T03:30:00.000Z", "2024-10-04T04:30:00.000Z", "2024-10-04T05:30:00.000Z", "2024-10-04T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
};

var options4 = {
  series: [{
    name: '',
    data: [60, 57, 55, 60, 51, 52, 55]
  }, {
    name: '',
    data: [40, 31, 44, 40, 48, 43, 41]
  }],
  chart: {
    height: 220,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  grid: {
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    },
  },
  fill: {
    colors: ['#e25050', '#4577FF']
  },
  xaxis: {
    type: 'datetime',
    categories: ["2024-10-04T00:00:00.000Z", "2024-10-04T01:30:00.000Z", "2024-10-04T02:30:00.000Z", "2024-10-04T03:30:00.000Z", "2024-10-04T04:30:00.000Z", "2024-10-04T05:30:00.000Z", "2024-10-04T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
};

var options5 = {
  series: [{
    name: '',
    data: [60, 57, 65, 55, 67, 65, 66]
  }, {
    name: '',
    data: [23, 31, 44, 48, 52, 51, 55]
  }],
  chart: {
    height: 220,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  grid: {
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    },
  },
  fill: {
    colors: ['#e25050', '#4577FF']
  },
  xaxis: {
    type: 'datetime',
    categories: ["2024-10-04T00:00:00.000Z", "2024-10-04T01:30:00.000Z", "2024-10-04T02:30:00.000Z", "2024-10-04T03:30:00.000Z", "2024-10-04T04:30:00.000Z", "2024-10-04T05:30:00.000Z", "2024-10-04T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
};


//차트 1~5 호출
var chart = new ApexCharts(document.querySelector("#chart1"), options1);
chart.render();

var chart = new ApexCharts(document.querySelector("#chart2"), options2);
chart.render();

var chart = new ApexCharts(document.querySelector("#chart3"), options3);
chart.render();

var chart = new ApexCharts(document.querySelector("#chart4"), options4);
chart.render();

var chart = new ApexCharts(document.querySelector("#chart5"), options5);
chart.render();






/* 차트버전 2
var options = {
  series: [{
    name: "Hybe",
    data: [10, 41, 35, 51, 49, 62, 69, 148, 190],
}],
  chart: {
  height: 220,
  type: 'line',
  zoom: {
    enabled: true
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight'
},
title: {
  text: '',
  align: 'left'
},
grid: {
  xaxis: {
    lines: {
      show: false
    }
  },
  yaxis: {
    lines: {
      show: false
    }
  },
},
fill: {
  colors: ['#fff']
},
markers: {
  colors: ['#E25050']
},
xaxis: {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct'],
}
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();
*/