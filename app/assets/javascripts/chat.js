$(function(){
    $(document).on("change", "#chat_img", function () { 
        var input = $(this)
        var reader = new FileReader();   //filereaderを起動
        reader.readAsDataURL(this.files[0]);  //最初の写真を読み込む
        reader.onload = function (e) {        //読み込み終わったら発火
            $('#chat_prev_img').attr('src', e.target.result);
            $('#chat_prev_img').removeClass("display_none");
            $(".delete_chat_img").removeClass("display_none")
            $(".chat_img_save").empty();
            input.appendTo(".chat_img_save");
            $(".chat_img_label").append('<input id="chat_img" class="hidden" data-reference="cd5284fb1759a32976d0d10ed113009b" include_hidden="false" type="file" name="chat_message[image]" accept="image/*">');
        }
    });

    $(document).on("click", ".delete_chat_img", function () { 
        $(".chat_img_save").empty();
        $('#chat_prev_img').addClass("display_none");
        $(this).addClass("display_none");
    });
})

$(function(){
    $(document).on("click", "#chat_style_images", function () { 
        $(".dark_chat").fadeIn();
    })

    $(document).on("click", ".circle2", function () { //美容師のヘアカタログの右上のまるをクリックした時
        if (!$(this).hasClass("click")) {
            $(this).css({
                "background-color": "red"
            })
            $(this).addClass("click");
            href = $(this).parent("div").attr('href');
            $("#message_form").children("form").append(`<input type="hidden" name="chat_message[style_images][]" value=${href} class="chat_style_image_${href} chat_style_img">`)
        } 
        else {
            $(this).css({
                "background-color": "white"
            })
            $(this).removeClass("click");
            href = $(this).parent("div").attr('href');
            $(`.chat_style_image_${href}`).remove();
        }
    })

    $(document).on("click", ".dark_remove", function () {
        $(".dark_chat").fadeOut();
    })
})

$(function() { //chat画面があるときはfooterをなくす スクロールのとき邪魔
    var width = $(window).width();
    if (gon.chat) {
        $("footer").addClass("display_none");
        
        if (width>425) {
            $("#yield").css({
                "min-height": "87vh"
            });
        }
    }
    if (gon.room_token) {
        $("#search_form").after($(`#chat_${gon.room_token}`));
    }
})
