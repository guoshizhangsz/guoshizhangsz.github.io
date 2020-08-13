// author by removef
// https://removeif.github.io/
$(function () { //获取处理友链数据
    $.getJSON("../json-data/friend.json", function (data) {

        // var data0 = data[0];
        $('.links-content').html("");
        // $('.links-content').append("<div class=\"link-navigation\"><div class='friend-title-item'>本站博客</div>");
        // {
        //     var e = data0;
        //     var html = "<div class=\"cardm cardm-c\">";
        //     html += "    <img class=\"ava\" src=\"" + e.src + "\">";
        //     html +=
        //         "<div class='text-desc'>    网址：<a href=\"" + e.url + "\" target=\"_blank\">" + e.name + "</a>" +
        //         "    <br>时间：" + e.date +
        //         "<br>简介：" + e.desc + "</div>" +
        //         "    </div><br>";
        //     $('.links-content').append(html);
        // }
        //
        // // 去掉第一个
        // data.splice(0, 1);

        // 随机排序过滤失效的
        let notValid = data.filter((item, a, b) => item.valid == 0);
        data = data.filter((item, a, b) => item.valid != 0).sort(function (a, b) {
            return Math.random() > .5 ? -1 : 1;
        });
        $('.links-content').append("<div class='friends-title'>--- 本 站 的 小 伙 伴 们 ---</div>");
        $.each(data, function (i, e) {
            var html = "<div class=\"cardm\">";
            if (e.src == undefined) {
                html += "    <img class=\"ava\" src=\"/images/avatar.png\" title=\"图片链接不可用，使用的默认图片\">";
            } else {
                html += "    <img class=\"ava\" src=\"" + e.src + "\">";
            }
            html +=
                "<div class='text-desc' title=\""+e.desc+"\">    网址：<a href=\"" + e.url + "\" target=\"_blank\">" + e.name + "</a>" +
                "    <br>时间：" + e.date +
                "<br>简介：" + e.desc + "</div>" +
                "    </div>";

            $('.links-content').append(html);
        });

        // 过期的
        if (notValid.length > 0) {
            $('.links-content').append("<div class='friend-title-item'><br>异常的大佬们<hr></div></div>");
            $.each(notValid, function (i, e) {
                var html = "<div class=\"cardm\">";
                html += "    <img class=\"ava\" src=\"/images/links/nopic.jpg\" title=\"图片链接不可用，使用的默认图片\">";
                html +=
                    "<div class='text-desc' title=\""+e.desc+"\">    网址：<a href=\"" + e.url + "\" target=\"_blank\">" + e.name + "</a>" +
                    "    <br>访问时间：" + e.stopTime +
                    "<br>简介：" + e.desc + "</div>" +
                    "    </div>";

                $('.links-content').append(html);
            })
        }

        $('.links-content').append("</div>");
    })
});
