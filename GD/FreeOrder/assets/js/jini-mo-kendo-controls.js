// Generic function for creatinga Kendo UI window
function createPopup(popupId, caller, isCallerId, popupTitle, popupWidth) {
    var w = $( "#" + popupId );
    var c;
    
    if (isCallerId)
        c = $( "#" + caller );
    else
        c = $( "." + caller );

    c.click(function() {
        w.data("kendoWindow").center().open()
    });
    
    w.kendoWindow({
        width: popupWidth + "px",
        title: popupTitle,
        visible: false,
        actions: [
            "Close"
        ]
    });
}

function createVisiblePopup(popupId, caller, isCallerId, popupTitle, popupWidth) {
    var w = $( "#" + popupId );
    var c;
    
    if (isCallerId)
        c = $( "#" + caller );
    else
        c = $( "." + caller );

    c.click(function() {
        w.data("kendoWindow").center().open()
    });
    
    w.kendoWindow({
        width: popupWidth + "px",
        title: popupTitle,
        visible: true,
        actions: [
            "Close"
        ]
    });
}

function moMainPage() {
    $( "#mo-new-order-type" ).kendoDropDownList();
	createPopup(
        "missing-customer-email-popup",
        "show-missing-customer-email-popup",
        true,
        "Missing customer email",
        400
    );
}

function chooseShopAndCustomerPage() {
    $( "#mo-reason-for-exchange" ).kendoDropDownList();
}

function createOrderPage() {
    createPopup(
        "another-customer-popup",
        "show-another-customer-popup",
        true,
        "Anden kunde",
        900
    );
}

function searchProductsPage() {
    //$( ".prod-count" ).kendoNumericTextBox()
    $( ".search-btn" ).kendoButton();
    $( ".prod-action-button" ).kendoButton();
    $( ".back-to-order" ).kendoButton();
    //$( ".add-products" ).kendoButton();
    //$( ".add-existing-license" ).kendoButton();
    //$( ".confirm-order" ).kendoButton();
    //$( ".cancel-order" ).kendoButton();
    $( ".block-level-actions button" ).kendoButton();
    $( ".sidebar-actions button" ).kendoButton();
    
    var data = [
        { text: "Vælg licens",                                             value: "0" },
        { text: "Skolelicens, 1 års abb. - 12,00 kr. pr elev",             value: "1" },
        { text: "1-brugerlicens, 6 måneders abb. - 250,00 kr. pr. bruger", value: "2" },
        { text: "1-brugerlicens, 1 års abb. - 399,00 kr. pr. bruger",      value: "3" }
    ];

    // create DropDownList from input HTML element
    $("#prod-license-dropdown").kendoDropDownList({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: data,
        index: 0
    });
    
    $("#prod-license-dropdown-2").kendoDropDownList({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: data,
        index: 0
    });
    
    // Popups
    createPopup(
        "validation-success-popup",
        "show-validation-success-popup",
        true,
        "Opret brugerdefineret periode",
        400
    );
    
    createPopup(
        "validation-failure-popup",
        "show-validation-failure-popup",
        true,
        "Kunden har allerede en licens til produktet",
        680
    );
    
    $( ".validation-failure-popup-actions button" ).kendoButton();
    
    createPopup(
        "choose-classes-popup",
        "show-choose-classes-popup",
        true,
        "Vælg klasser",
        400
    );
    
    $( ".calculate-price-btn" ).kendoButton();
    
    var addrs = [
        { text: "Tilføj ny adresse",                                              value: "0" },
        { text: "Krogestykket 33, 2730 Herlev",                                   value: "1" },
        { text: "104 Southside Square, 35801 Huntsville Alabama, United States ", value: "2" }
    ];
    
    $("#b01, #s01").kendoDropDownList({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: addrs,
        index: 1
    });
    
    var lands = [
        { text: "Denmark", value: "0" },
        { text: "Norway",  value: "1" }
    ];
    
    $("#b10, #s10").kendoDropDownList({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: lands,
        index: 0
    });
    
    $(".datepicker").kendoDatePicker();
    
    createPopup(
        "all-prods-in-bundle-popup",
        "show-all-prods-in-bundle-popup",
        false,
        "All products in \"Behovsvurdering (bog og iBog)\"",
        600
    );
    
    createPopup(
        "license-invoice-popup",
        "show-license-invoice-popup",
        false,
        "Fakturainfo for skolelicens",
        480
    );
    
    $( ".li-numeric" ).kendoNumericTextBox();
    $( "#li-num-units" ).kendoDropDownList();
}
