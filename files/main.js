$(function() {
    $("#my_list").collapsorz({
        minimum: 4
        , showText: "Развернуть >>>"
        , hideText: "Свернуть <<<"
    });
    
    $("#my_div").collapsorz({
        minimum: 3
        , showText: "Другие ссылки >>>"
        , hideText: "Скрыть <<<"
        , toggle: "a"
    });
});