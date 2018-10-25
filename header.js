$(function(){
    $("<link rel='stylesheet' href='css/header.css'>").appendTo("head")
    $("<link rel='stylesheet' href='css/footer.css'>").appendTo("head")
    $.ajax({
        url:"http://localhost:2000/header.html",
        type:"get",
        success:function(res){
            $("#header").replaceWith(res)//用参数标签替换目标标签
        }
    })
})