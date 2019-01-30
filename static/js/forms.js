$(function(){
	$(".custom_form").submit(function(event) {
		event.preventDefault();
		event.stopPropagation();

		var form = $(this);
			var form_serialized = form.serialize();
			var url = form.attr('action');

			$.ajax({
	        type: 'post',
	        url: url,
	        data: form_serialized,
	        dataType: 'json',
	        success: function(response) {
	        	render_form_success(form);
	        },
	        error: function(response) {
	        	render_form_errors(response, form);
	        }
	    });
	});
})

function render_form_success(form) {
	var msg = form.data("message");
	var url = form.data("download");

	form.html('<p class=form-success-message>'+msg+'</p>');

	if (url) {
		downloadURI(url);
	}
}


function render_form_errors(response, form) {
	var data = response.responseJSON;
    form.find(".form-error").remove();

    jQuery.each(data, function (index, value) {
        var field_name = index;
        var field_error = '<span class=form-error>'+value[0]+'</span>';
        form.find('input[name='+field_name+'],textarea[name='+field_name+']').after(field_error);
    });
}

function downloadURI(url) {
    var link = document.createElement("a");
    link.download = 'ExO-Canvas.pdf';
    link.href = url;
    link.click();
}