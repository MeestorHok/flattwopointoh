(function ($) {
    // Forms
    $('input, .input').each(function () {
        
        var getLabel = function (element) {
            var id = $(element).attr('id');
            var label = id ? $('label[for=' + id + ']') : undefined;
            
            console.log(label);
            // Fallback if no id was set or no corresponding label was found
            if (!label) label = $(element).siblings('label, .label').first();
            
            console.log(label);
            return label ? label : false;
        };
        
        $(this).focusin(function () {
            var label = getLabel(this);
            
            // Tell it to float up
            if (label) label.addClass('moved');
        });
        
        $(this).focusout(function () {
            // if there is nothing in the element
            if (!$(this).val()) {
                $(this).removeClass('has-value');
                
                var label = getLabel(this);
                
                // Send it back to the resting place
                if (label) label.removeClass('moved');
            } else {
                $(this).addClass('has-value');
            }
        });
    });
})(jQuery);