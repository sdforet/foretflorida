//@todo create show/hide method for the DTP using the end-user spec's icon
//@todo create a method to grab blockoutDates from the page/prob inside of disableBlockoutDates function
//@todo add the html selectors to update the form's values here

/**
 * Take a jQuery UI date-picker and turn it into a week-picker
 */
var
    date,
    startDate,
    endDate,
    dateFormat = 'yy-mm-dd', //@todo update this with the format from the db
    selectWeek = function()
    {
        window.setTimeout(function ()
        {
            $('.week-picker').find('.ui-datepicker-current-day a').addClass('ui-state-active')
        },1);
    },
    blockoutDates = ["1-28-2016", "2-2-2016"],
    disableBlockoutDates = function(date)
    {
        var
            m = date.getMonth(),
            d = date.getDate(),
            y = date.getFullYear()
        ;
        for (var i = 0; i < blockoutDates.length; i++) {
            if ($.inArray((m + 1) + '-' + d + '-' + y, blockoutDates) != -1) {
                return true;
            }
        }
        return false;
    }
;

$(document).ready(function ()
{
    $('.week-picker').datepicker(
    {
        showOtherMonths: true,
        selectOtherMonths: true,
        onSelect: function(dateText, inst)
        {
            date = $(this).datepicker('getDate');
            startDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 1);
            endDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 4);

            //@todo add the html selectors to update the form's values here
            $('#startDate').text($.datepicker.formatDate( dateFormat, startDate, inst.settings ));
            $('#endDate').text($.datepicker.formatDate( dateFormat, endDate, inst.settings ));
            /**
             * call selectWeek() to highlight the applicable days
             */
            selectWeek();
        },
        beforeShowDay: function(date)
        {
            $.datepicker.noWeekends(date);
            /**
             * set the css class to highlight days within the range of start and end
             */
            var cssClass = '';
            if(date >= startDate && date <= endDate) {
                cssClass = 'ui-datepicker-current-day';
            }
            /**
             * disable fridays (5) and any date found in the array: blockoutDates[]
             */
            if(date.getDay() == 5 || disableBlockoutDates(date) ){
                cssClass = 'ui-datepicker-week-end';
            }
            return [true, cssClass];
        },
        onChangeMonthYear: function(year, month, inst)
        {
            selectWeek();
        }
    });

    //attach mouse(over/leave) events to dates (monday(1) - thursday(4))
    $('.week-picker .ui-datepicker-calendar tr').on('mouseover', function() {
        $(this).find('td a').slice(1, 5).addClass('ui-state-active');
    });

    $('.week-picker .ui-datepicker-calendar tr').on('mouseleave', function() {
        $(this).find('td a').removeClass('ui-state-active');
    });
});
