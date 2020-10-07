function chart1() {


  var options = {
    series: [{
          name: 'Science',
         data: [76, 85, 101, 98, 87, 105, 91, 114, 94]  
        }, {
          name: 'Math',
         data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Physics',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],


    chart: {
      type: 'bar',

      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '35%',
        dataLabels: {
          position: 'top',

        }
      }
    },
    dataLabels: {
      enabled: true,
      offsetX: 0,
      offsetY: -10,

      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: 'bottom'
          }
        }
      },


      style: {
        colors: ['#333']
      },


    },

    legend: {
      show: false,

    },

    stroke: {
      show: true,
      width: 5,
      colors: ['transparent']
    },
    xaxis: {
      categories: [
        ['01 Jan'],
        ['02 Jan'],
        ['03 Jan'],
        ['04 Jan'],
        ['05 Jan'],
        ['06 Jan'],
          ['07 Jan'],
        ['08 Jan'],
        ['09 Jan']
      ],

      labels: {
        style: {

          fontSize: '13px'
        }
      },


      title: {
        text: ' '
      }
    },
    yaxis: {

    },
    fill: {
      opacity: 1,
      colors: ['#1f3d5e']
    },


    tooltip: {

      enabled: true,

      y: {
        formatter: function (val) {
          return val + " candidates"
        }
      },


      marker: {
        fillColors: ['#1f3d5e']
      }


    }
  };


  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  chart.render();


}





function chart2() {


  var options = {
    series: [{
          name: 'Science',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Math',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
          name: 'Physics',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],


    chart: {
      type: 'bar',

      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '35%',
        dataLabels: {
          position: 'top',

        }
      }
    },
    dataLabels: {
      enabled: true,
      offsetX: 0,
      offsetY: -10,

      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: 'bottom'
          }
        }
      },


      style: {
        colors: ['#333']
      },


    },

    legend: {
      show: false,

    },

    stroke: {
      show: true,
      width: 5,
      colors: ['transparent']
    },
    xaxis: {
      categories: [
        ['01 Jan'],
        ['02 Jan'],
        ['03 Jan'],
        ['04 Jan'],
        ['05 Jan'],
        ['06 Jan'],
          ['07 Jan'],
        ['08 Jan'],
        ['09 Jan']
      ],

      labels: {
        style: {

          fontSize: '13px'
        }
      },


      title: {
        text: ' '
      }
    },
    yaxis: {

    },
    fill: {
      opacity: 1,
      colors: ['#1f3d5e']
    },


    tooltip: {

      enabled: true,

      y: {
        formatter: function (val) {
          return val + " candidates"
        }
      },


      marker: {
        fillColors: ['#1f3d5e']
      }


    }
  };


  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();


}








function chart3() {


  var options = {
    series: [{
          name: 'Science',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Math',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
          name: 'Physics',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],


    chart: {
      type: 'bar',

      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '35%',
        dataLabels: {
          position: 'top',

        }
      }
    },
    dataLabels: {
      enabled: true,
      offsetX: 0,
      offsetY: -10,

      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: 'bottom'
          }
        }
      },


      style: {
        colors: ['#333']
      },


    },

    legend: {
      show: false,

    },

    stroke: {
      show: true,
      width: 5,
      colors: ['transparent']
    },
    xaxis: {
      categories: [
        ['01 Jan'],
        ['02 Jan'],
        ['03 Jan'],
        ['04 Jan'],
        ['05 Jan'],
        ['06 Jan'],
          ['07 Jan'],
        ['08 Jan'],
        ['09 Jan']
      ],

      labels: {
        style: {

          fontSize: '13px'
        }
      },


      title: {
        text: ' '
      }
    },
    yaxis: {

    },
    fill: {
      opacity: 1,
      colors: ['#1f3d5e']
    },


    tooltip: {

      enabled: true,

      y: {
        formatter: function (val) {
          return val + " candidates"
        }
      },


      marker: {
        fillColors: ['#1f3d5e']
      }


    }
  };


  var chart = new ApexCharts(document.querySelector("#chart3"), options);
  chart.render();


}


















function sidebarToggle() {
  $(document).on('click', '.icon-sidebar', function (e) {
    const element = document.querySelector('.sidebar');
    element.classList.toggle('expand');
     
    /* $('.aside').removeClass('expand');
     $('.icon-aside').removeClass('active');*/
    $(this).toggleClass('active');
      $('.sectionE').toggleClass('not-expanded');
    $('.bread-crumb').toggleClass('bread-crumb-expanded');
    
  
      
  });
}










function nestedToggle() {
  $(document).on('click', '.nested', function (e) {
    $(this).toggleClass("open");
    $(this).find('ul').toggleClass("visible");
  });
}


function customScroller() {

  {
    OverlayScrollbars(document.querySelectorAll('.group-card-content-panels'),

      {
        className: "os-theme-thick-dark",
        scrollbars: {
          autoHide: "false",
          dragScrolling: true,
          clickScrolling: false,
          touchSupport: true,
        }

      },


    );


    OverlayScrollbars(document.querySelectorAll('.candidate-swimlane-container'), {
      className: "os-theme-thick-dark",
    });


  }


}


function tooltip() {

  $('[data-toggle="tooltip"]').tooltip({
    container: 'body'
  });


}



/* Popover */

function popover() {
	
	
	
	 $("[data-toggle=popover]").popover({
        html : true,
       
        content: function() {
            var content = $(this).attr("data-popover-content");
            return $(content).children(".popover-body").html();
            
        }
    });
    
  
    $('body').on('click', function (e) {
    $('[data-toggle=popover]').each(function () {
        // hide any open popovers when the anywhere else in the body is clicked
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});
    
    

$(document).on("click", ".popover .close" , function(){
        $(this).parents(".popover").popover('hide');
    });
    
    
    
 
    
	
}
/* Popover END*/





function validations() {


  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
    'use strict';
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


}


function datatable() {

  $(document).ready(function () {
    $('#myTable').DataTable(


      {

        paging: true,
        pagingType: "full_numbers",
        info: false,
        keys: true,
        colReorder: {
          realtime: false
        },
        responsive: true,
        lengthMenu: [
          [5, 10, 25, 50, -1],
          [5, 10, 25, 50, "All"]
        ],
        pageLength: 10,


        initComplete: (settings, json) => {
          $('#myTable_paginate').appendTo('.table-pagination');
          $('#myTable_length').appendTo('.table-entries');
          $('#myTable_filter').appendTo('.search-bar');

        },
        "language": {
          "paginate": {
            "previous": "<",
            "next": ">",
            "first": "<<",
            "last": ">>",
          }
        }
      }


    );
  });


}


function layoutReviewer() {


  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });


  var alterClass = function () {
    var ww = document.body.clientWidth;
    if (ww <= 991) {
      $('#wrapper').removeClass('toggled');
    } else {
      $('#wrapper').addClass('toggled');
    };
  };
  $(window).resize(function () {
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();


  var docHeight = $(window).outerHeight();
  var headerHeight = $("header").outerHeight();
  var sidebarWidth = $("#sidebar-wrapper").outerWidth();
  var sidebarHeight = docHeight - headerHeight + 'px';
  //alert(sidebarWidth);
  $('.sidebar-brand').css('min-width', sidebarWidth - '15' + 'px');
  $('#sidebar-wrapper').css('height', sidebarHeight);


}


function charttest() {


  var canvasSize = 200,
    centre = canvasSize / 2,
    radius = canvasSize * 0.8 / 2,
    s = Snap('#svg'),
    path = "",
    arc = s.path(path),
    startY = centre - radius,
    runBtn = document.getElementById('run'),
    percDiv = document.getElementById('percent'),
    input = document.getElementById('input');

  input.onkeyup = function (evt) {
    if (isNaN(input.value)) {
      input.value = '';
    }
  };

  runBtn.onclick = function () {
    run(input.value / 100);
  };

  function run(percent) {
    var endpoint = percent * 360;
    Snap.animate(0, endpoint, function (val) {
      arc.remove();

      var d = val,
        dr = d - 90;
      radians = Math.PI * (dr) / 180,
        endx = centre + radius * Math.cos(radians),
        endy = centre + radius * Math.sin(radians),
        largeArc = d > 180 ? 1 : 0;
      path = "M" + centre + "," + startY + " A" + radius + "," + radius + " 0 " + largeArc + ",1 " + endx + "," + endy;

      arc = s.path(path);
      arc.attr({
        stroke: '#343a40',
        fill: 'none',
        strokeWidth: 12
      });
      percDiv.innerHTML = Math.round(val / 360 * 100) + '%';

    }, 2000, mina.easeinout);
  }

  run(input.value / 100);


}


function richTextEditor() {


  // RICH EDITOR support	
  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons


    [{
      'header': 1
    }, {
      'header': 2
    }], // custom button values
    [{
      'list': 'ordered'
    }, {
      'list': 'bullet'
    }],

    [{
      'indent': '-1'
    }, {
      'indent': '+1'
    }], // outdent/indent
    [{
      'direction': 'rtl'
    }], // text direction

    [{
      'size': ['small', false, 'large', 'huge']
    }], // custom dropdown
    [{
      'header': [1, 2, 3, 4, 5, 6, false]
    }],

    [{
      'color': []
    }, {
      'background': []
    }], // dropdown with defaults from theme

    [{
      'align': []
    }],

    ['clean'] // remove formatting button
  ];


  var Delta = Quill.import('delta');
  var quill = new Quill('#editor', {
    modules: {
      toolbar: toolbarOptions,

    },

    theme: 'snow',

  });

  var quill = new Quill('#editor2', {
    modules: {
      toolbar: toolbarOptions
    },

    theme: 'snow'
  });

var quill = new Quill('#editor3', {
    modules: {
      toolbar: toolbarOptions
    },

    theme: 'snow'
  });


  // Store accumulated changes
  var change = new Delta();
  quill.on('text-change', function (delta) {
    change = change.compose(delta);
  });

  // Save periodically
  setInterval(function () {
    if (change.length() > 0) {
      console.log('Saving changes', change);
      /* 
        Send partial changes
        $.post('/your-endpoint', { 
          partial: JSON.stringify(change) 
        });
    
        Send entire document
        $.post('/your-endpoint', { 
          doc: JSON.stringify(quill.getContents())
        });
        */
      change = new Delta();
    }
  }, 5 * 1000);

  // Check for unsaved data
  window.onbeforeunload = function () {
    if (change.length() > 0) {
      return 'There are unsaved changes. Are you sure you want to leave?';
    }
  }
  // END RICH EDITOR SUPPORT	


}


function printProfile(divName) {
  var printContents = document.getElementById(divName).innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}


function candidateTimer()

{


  var minutes = $('#set-time').val();

  var target_date = new Date().getTime() + ((minutes * 60) * 1000); // set the countdown date
  var time_limit = ((minutes * 60) * 1000);
  /*//set actual timer
  setTimeout(
    function() 
    {
      alert( 'done' );
    }, time_limit );*/

  var days, hours, minutes, seconds; // variables for time units

  var countdown = document.getElementById("tiles"); // get tag element

  getCountdown();

  setInterval(function () {
    getCountdown();
  }, 1000);

  function getCountdown() {

    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    if (seconds_left >= 0) {
      console.log(time_limit);
      if ((seconds_left * 1000) < (time_limit / 2)) {
        $('#tiles').removeClass('color-full');
        $('#tiles').addClass('color-half');

      }
      if ((seconds_left * 1000) < (time_limit / 4)) {
        $('#tiles').removeClass('color-half');
        $('#tiles').addClass('color-empty');
      }

      days = pad(parseInt(seconds_left / 86400));
      seconds_left = seconds_left % 86400;

      hours = pad(parseInt(seconds_left / 3600));
      seconds_left = seconds_left % 3600;

      minutes = pad(parseInt(seconds_left / 60));
      seconds = pad(parseInt(seconds_left % 60));

      // format countdown string + set tag value
      countdown.innerHTML = "<span>" + hours + ":</span><span>" + minutes + ":</span><span>" + seconds + "</span>";


    }


  }

  function pad(n) {
    return (n < 10 ? '0' : '') + n;
  }


}


function tableRowClickable()

{


  $(".table-row").click(function () {
    window.document.location = $(this).data("href");
  });


}


function hiringFlow() {
  var ds = {
    'name': 'Hiring flow',
    'title': 'Company XYZ',
    'children': [{
        'name': 'Step-1',
        'title': 'Applied'
      },
      {
        'name': 'Step-2',
        'title': 'Phone interview'
      },
      {
        'name': 'Step-3',
        'title': 'On-site interview'
      },
      {
        'name': 'Step-4',
        'title': 'Offer'
      },
      {
        'name': 'Step-5',
        'title': 'Hired'
      }
    ]
  };

  var oc = $('#chart-container').orgchart({
    'data': ds,
    'nodeContent': 'title',
    'draggable': true,
    'pan': true,
    'zoom': true
  });


  $('#togglePan').on('click', function () {
    // of course, oc.setOptions({ 'pan': this.checked }); is also OK.
    oc.setOptions('pan', this.checked);
  });

  $('#toggleZoom').on('click', function () {
    // of course, oc.setOptions({ 'zoom': this.checked }); is also OK.
    oc.setOptions('zoom', this.checked);
  });


  oc.$chart.on('nodedrop.orgchart', function (event, extraParams) {
    console.log('draggedNode:' + extraParams.draggedNode.children('.title').text()
      + ', dragZone:' + extraParams.dragZone.children('.title').text()
      + ', dropZone:' + extraParams.dropZone.children('.title').text()
    );
  });

}


function treeSelect() {

  var tree = $('#tree').tree({
    primaryKey: 'id',
    uiLibrary: 'bootstrap',
    //dataSource: '/Locations/Get',
    // dataSource: [ { id: 12, text: 'foo', children: [ { id: 23, text: 'bar' } ] } ]
    dataSource: [{
        id: 1,
        text: 'Math',
        children: [{
          id: 2,
          text: 'Analytical'
        }]
      },
      {
        id: 3,
        text: 'Physics',
        children: [{
            id: 4,
            text: 'Newton Laws'
          },
          {
            id: 5,
            text: 'Inventions of Physics'
          },
        ]
      }
    ],
    checkboxes: true
  });
  $('#btnSave').on('click', function () {
    var checkedIds = tree.getCheckedNodes();
    alert(checkedIds);
  });

}






function dropdownStatic()
{
    
    
    
    
    $(document).on('click', '.filters-dropdown .dropdown', function (e) {
  e.stopPropagation();
});
    
    
    
    
    
    
    
}








function changeTheme(color) {

  let rgb = hexToRgb(color);

  let g = rgb.g;
  let b = rgb.b;
  let r = rgb.r;

  let root = document.documentElement;
  root.style.setProperty('--redC', r);
  root.style.setProperty('--greenC', g);
  root.style.setProperty('--blueC', b);

  $('body').css('--primary', color).attr('data-primary', color);
  $('body').css('--secondary', color).attr('data-secondary', color);


}



function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}






function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "0px";
    $('.sectionE').css("margin-right","200px");
    
    
    
    
}


/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  $('.sectionE').css("margin-right","0px");
}






















