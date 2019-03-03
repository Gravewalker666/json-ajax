$(function () {
    $.ajax({
        type : 'get',
        url : 'persons.json',
        dataType : 'json',
        success : function (data) {
            console.log(data)
        }
    })
})