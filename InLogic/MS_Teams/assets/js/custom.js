// Alert Toast

function myAlertTop(){
  $(".myAlert-top").show();
  setTimeout(function(){
    $(".myAlert-top").hide(); 
  }, 4000);
}


function myAlertBottom(){
  $(".myAlert-bottom").show();
  setTimeout(function(){
    $(".myAlert-bottom").hide(); 
  }, 4000);
}

// END Alert Toast

// CUSTOM SCROLL SUPPORT
document.addEventListener("DOMContentLoaded", function () {

    OverlayScrollbars(document.querySelectorAll('.table-courses'), {
        className: "os-theme-block-dark"
    });
    OverlayScrollbars(document.querySelectorAll('.custom-scroll'), {
        className: "os-theme-block-dark"
    });
    OverlayScrollbars(document.querySelectorAll('.content-panels'), {
        className: "os-theme-block-dark"
    });
    OverlayScrollbars(document.querySelectorAll('.summary-page'), {
        className: "os-theme-block-dark"
    });
    OverlayScrollbars(document.querySelectorAll('.archive-panel'), {
        className: "os-theme-block-dark"
    });
    OverlayScrollbars(document.querySelectorAll('.latest-feed'), {
        className: "os-theme-block-dark"
    });
    OverlayScrollbars(document.querySelectorAll('.student-courses-card'), {
        className: "os-theme-block-dark"
    });

});
// END CUSTOM SCROLL SUPPORT


// RICH EDITOR support	
var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],

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
        'script': 'sub'
    }, {
        'script': 'super'
    }], // superscript/subscript
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
        'font': []
    }],
    [{
        'align': []
    }],

    ['clean'] // remove formatting button
];


var Delta = Quill.import('delta');
var quill = new Quill('#editor', {
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




// MULTI MODAL SUPPORT

$(document).ready(function () {

    $('.modal').on("hidden.bs.modal", function (e) { //fire on closing modal box
        if ($('.modal:visible').length) { // check whether parent modal is opend after child modal close
            $('body').addClass('modal-open'); // if open mean length is 1 then add a bootstrap css class to body of the page
        }
    });
});

// END MULTI MODAL SUPPORT   



// ENABLE TOOLTIP SUPPORT   
$(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
// END ENABLE TOOLTIP SUPPORT 


// Selection in dropdown
$('select').selectpicker();
// End Selection in dropdown








