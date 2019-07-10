
/*Search-button*/
function SearchBtn() {
	
	$( ".search-btn" ).kendoButton();
	
}



/*Popup UI*/

function PopupOrderAdmin() {

	
 $(document).ready(function() {
                    var myWindow = $("#window"),
                        undo = $(".undo");

                    undo.click(function() {
                        myWindow.data("kendoWindow").open();
                        undo.fadeOut();
                    });

                    function onClose() {
                        undo.fadeIn();
                    }

                    myWindow.kendoWindow({
                        width: "1100px",
						height: "650px",
                        title: "Error",
                        visible: false,
                        actions: [
                            "Pin",
                            "Minimize",
                            "Maximize",
                            "Close"
                        ],
                        close: onClose
                    }).data("kendoWindow").center();
                });


}


/*Popup UI back order error*/

function PopupOrderAdmin1() {

	
 $(document).ready(function() {
                    var myWindow = $("#window2"),
                        undo = $(".undo2");

                    undo.click(function() {
                        myWindow.data("kendoWindow").open();
                        undo.fadeOut();
                    });

                    function onClose() {
                        undo.fadeIn();
                    }

                    myWindow.kendoWindow({
                        width: "1100px",
						height: "650px",
                        title: "Back Order Error",
                        visible: false,
                        actions: [
                            "Pin",
                            "Minimize",
                            "Maximize",
                            "Close"
                        ],
                        close: onClose
                    }).data("kendoWindow").center();
                });


}


/*Top menu control bar*/

function TopMenuBar() {

 $(document).ready(function() {
                $("#menu").kendoMenu();
            });

}


/*Grid*/


function OrdersGrid() {

$(document).ready(function() {
                    $("#grid").kendoGrid({
                        dataSource: {
                            data: createRandomData(50),
                            schema: {
                                model: {
                                    fields: {
                                        City: { type: "string" },
                                        Title: { type: "string" },
                                        BirthDate: { type: "date" }
                                    }
                                }
                            },
                            pageSize: 15
                        },
                        height: 550,
                        scrollable: true,
                        filterable: {
                            extra: false,
                            operators: {
                                string: {
                                    startswith: "Starts with",
                                    eq: "Is equal to",
                                    neq: "Is not equal to"
                                }
                            }
                        },
                        pageable: true,
                        columns: [
                            {
                                title: "Name",
                                width: 160,
                                filterable: false,
                                template: "#=FirstName# #=LastName#"
                            },
                            {
                                field: "City",
                                width: 130,
                                filterable: {
                                    ui: cityFilter
                               }
                            },
                            {
                                field: "Title",
                                filterable: {
                                    ui: titleFilter
                                }
                            },
                            {
                                field: "BirthDate",
                                title: "Birth Date",
                                format: "{0:MM/dd/yyyy HH:mm tt}",
                                filterable: {
                                    ui: "datetimepicker"
                                }
                            }
                       ]
                    });
                });

                function titleFilter(element) {
                    element.kendoAutoComplete({
                        dataSource: titles
                    });
                }

                function cityFilter(element) {
                    element.kendoDropDownList({
                        dataSource: cities,
                        optionLabel: "--Select Value--"
                    });
                }

}








