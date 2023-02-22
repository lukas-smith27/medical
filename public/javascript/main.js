$(document).ready(function(){
    $(window).load("../public/home.html")

    $(".small-menu").click(function(){
        if (!$(".links").hasClass("active")) {
            $(".links").addClass("active")
        } else {
            $(".links").removeClass("active")
            window.location.scrollTop()
        }
    })


    //Open and close specific part modals
    $(".screw-modal").hide()
    $(".plate-modal").hide()
    $(".rasp-modal").hide()

    $(".part-cards-screw").click(function(){
        $(".close-button").addClass("active")
        $(".screw-modal").show()
    })
    $(".close-button").click(function(){
        $(".screw-modal").hide()
        $(".close-button").removeClass("active")
    })
    

    $(".part-cards-plate").click(function(){
        $(".close-button").addClass("active")
        $(".plate-modal").show()
    })
    $(".close-button").click(function(){
        $(".plate-modal").hide()
        $(".close-button").removeClass("active")
    })

    $(".part-cards-rasp").click(function(){
        $(".close-button").addClass("active")
        $(".rasp-modal").show()
    })
    $(".close-button").click(function(){
        $(".rasp-modal").hide()
        $(".close-button").removeClass("active")
    })

    $(".part-cards-graft").click(function(){
        $(".close-button").addClass("active")
        $(".graft-modal").show()
    })
    $(".close-button").click(function(){
        $(".graft-modal").hide()
        $(".close-button").removeClass("active")
    })

    $(".part-cards-sheath").click(function(){
        $(".close-button").addClass("active")
        $(".sheath-modal").show()
    })
    $(".close-button").click(function(){
        $(".sheath-modal").hide()
        $(".close-button").removeClass("active")
    })

    let abs = document.getElementsByClassName("home-photos")[0].offsetHeight
    let info = document.getElementsByClassName("home-slide-image")[0]
    info.style.height = abs = 1000 + "px"
})

