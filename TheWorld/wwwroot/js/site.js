﻿// site.js
(function startup() {
    //var ele = $("#username")
    //ele.text("Fernando Levi Marquardt")

    //var main = $("#main")
    //main.on("mouseenter", function () {
    //    main.style.backgroundColor = "#888"
    //})
    //main.on("mouseleave", function () {
    //    main.style.backgroundColor = ""
    //})

    //var menuitems = $("ul.menu li a")
    //menuitems.on("click", function () {
    //    var me = $(this)
    //    alert(me.text())
    //})

    var $sidebarAndWrapper = $("#sidebar,#wrapper")

    $("#sidebarToggle").on("click", function () {
        $sidebarAndWrapper.toggleClass("hide-sidebar")
        if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
            $(this).text("Show menu")
        } else {
            $(this).text("Hide menu")
        }
    })

})()