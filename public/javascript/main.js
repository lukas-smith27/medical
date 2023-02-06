$(document).ready(function(){
    $(window).load("http://127.0.0.1:5500/public/home.html")

    $(".logo-home").click(function(){
        url = "http://127.0.0.1:5500/public/home.html"
        window.location.replace(url)
    })

    $(".homeTop").click(function(){
        url = "http://127.0.0.1:5500/public/home.html"
        window.location.replace(url)
    })

    $(".historyTop").click(function(){
        url = "http://127.0.0.1:5500/public/history.html"
        window.location.replace(url)
        $(".history").show().scrollTop()
    })

    $(".teamTop").click(function(){
        url = "http://127.0.0.1:5500/public/team.html"
        window.location.replace(url)
    })

    $(".productsTop").click(function(){
        url = "http://127.0.0.1:5500/public/products.html"
        window.location.replace(url)
    })

    $(".machinesTop").click(function(){
        url = "http://127.0.0.1:5500/public/machines.html"
        window.location.replace(url)
    })

    $(".careersTop").click(function(){
        url = "http://127.0.0.1:5500/public/careers.html"
        window.location.replace(url)
    })

    $(".quoteTop").click(function(){
        url = "http://127.0.0.1:5500/public/quote.html"
        window.location.replace(url)
    })

    $(".contactTop").click(function(){
        url = "http://127.0.0.1:5500/public/contact.html"
        window.location.replace(url)
    })

    $(".small-menu").click(function(){
        if (!$(".links").hasClass("active")) {
            $(".links").addClass("active")
        } else {
            $(".links").removeClass("active")
            window.location.scrollTop()
        }
    })

    let $anchors = $(".links li")
    let $anchors2 = $(".links li ul li a")
    $(".aboutTop").click(function(){ return false })
    $(".servicesTop").click(function(){ return false })

    $($anchors).click(function(){
        $(".links").removeClass("active")
    })
    $($anchors2).click(function(){
        $(".links").removeClass("active")
    })
    $(".logo-home").click(function(){
        $(".links").removeClass("active")
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


    //Email form for quote requests

    $(".form-submit").click(function(){
        console.log({
            To : "ssizemore@bjmedicalinc.com",
            From : $(".email").val(),
            Subject : "Quote Request",
            Body : "Name: " + $(".contact-name").val()
                + "<br>Email: " + $(".email").val()
                + "<br>Phone: " + $(".phone").val()
                + "<br>Fax: " + $(".fax").val()
                + "<br>Company: " + $(".contact-company").val()
                + "<br>Street: " + $(".address").val()
                + "<br>Address Line 2: " + $(".address2").val()
                + "<br>City: " + $(".city").val()
                + "<br>State: " + $(".state").val()
                + "<br>ZIP: " + $(".zip").val()
                + "<br>Country: " + $(".country").val()
                + "<br>Application Requested: " + $("input[name=quote-choice]:checked").val()
                + "<br>Additional info: " + $(".additional-info").val()
                + "<br>Contact Method: " + $("input[name=contact-method]:checked").val()
        })
    })

    let abs = document.getElementsByClassName("home-photos")[0].offsetHeight
    let info = document.getElementsByClassName("home-slide-image")[0]
    info.style.height = abs = 1000 + "px"
    
})

