$(function(){
    $.ajax({
        url: '/update_blog/',
        type: 'GET',
        success: function (response) {
            $.each(response.data, function (index, value) {
                $('#blogPosts').append("<li><a href='" + value.url + "' target='_blank'> " + value.title +" </a></li>");
            });
        },
        error: function (e) {}
    });
});