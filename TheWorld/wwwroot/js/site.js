// site.js
(function startup() {
    var ele = $("#username")
    ele.text("Fernando Levi Marquardt")

    var main = $("#main")
    main.on("mouseenter", function () {
        main.style.backgroundColor = "#888"
    })
    main.on("mouseleave", function () {
        main.style.backgroundColor = ""
    })

    var menuitems = $("ul.menu li a")
    menuitems.on("click", function () {
        alert("Hello")
    })
})()