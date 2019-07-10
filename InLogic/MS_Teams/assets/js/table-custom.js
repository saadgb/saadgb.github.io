import $ from "shared/utils/jqueryloader";
(function ($) {
    "use strict";
    $.fn.responsiveTable = function () {
        var toggleColumns = function ($table) {
            var selectedControls = [];
            $table.find(".Accordion-timetable, .Tab").each(function () {
                selectedControls.push($(this).attr("aria-selected"));
            });
            var cellCount = 0, colCount = 0;
            var setNum = $table.find(".Rtable-cell").length / Math.max($table.find(".Tab").length, $table.find(".Accordion-timetable").length);
            $table.find(".Rtable-cell").each(function () {
                $(this).addClass("hiddenSmall");
                if (selectedControls[colCount] === "true") $(this).removeClass("hiddenSmall");
                cellCount++;
                if (cellCount % setNum === 0) colCount++;
            });
        };
        $(this).each(function () { toggleColumns($(this)); });

        $(this).find(".Tab").click(function () {
            $(this).attr("aria-selected", "true").siblings().attr("aria-selected", "false");
            toggleColumns($(this).parents(".Rtable"));
        });

        $(this).find(".Accordion-timetable").click(function () {
            $(this).attr("aria-selected", $(this).attr("aria-selected") !== "true");
            toggleColumns($(this).parents(".Rtable"));
        });

    };
}($));


//$(".js-RtableTabs, .js-RtableAccordions").responsiveTable();

function makeResponsiveTable() {
    $(".js-RtableTabs, .js-RtableAccordions").responsiveTable();
}

makeResponsiveTable();

export default makeResponsiveTable;