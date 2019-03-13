$(function () {
    $.ajax({
        type : 'get',
        url : 'persons.json',
        dataType : 'json',
        success : function (data) {
            let object = Mustache.render($("#temp").html(),data)
            $("#content").append(object)
            console.log(data)
        }
    })
})