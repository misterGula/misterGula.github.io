$(function() {
    $("#my_list1").collapsorz({
        minimum: 1
        , showText: "узнать больше >>>"
        , hideText: "свернуть <<<"
    });
    
    $("#my_list2").collapsorz({
        minimum: 1
        , showText: "узнать больше >>>"
        , hideText: "свернуть <<<"
    });

    $("#my_list3").collapsorz({
        minimum: 1
        , showText: "узнать больше >>>"
        , hideText: "свернуть <<<"
    });

    $("#my_list4").collapsorz({
        minimum: 1
        , showText: "узнать больше >>>"
        , hideText: "свернуть <<<"
    });

    $("#my_list5").collapsorz({
        minimum: 1
        , showText: "узнать больше >>>"
        , hideText: "свернуть <<<"
    });

    $("#my_div").collapsorz({
        minimum: 3
        , showText: "Другие ссылки >>>"
        , hideText: "Скрыть <<<"
        , toggle: "a"
    });
});