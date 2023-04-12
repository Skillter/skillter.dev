// import {} from "css/main.css"

particlesJS.load("particles-js", "particles.json");
scrollButtonAnimation(1000)

function fadeIn1(element) {
    element.style.opacity = 1;
} // Needs to have transition: opacity 0.5s ease-out;


// TODO: clean it up man
// Sees element.style.translate always as empty String if there's no delay
// Doesn't work if the element has a class with translate that is !important
function fadeIn(elementID, durationMS, delayMS, amount, isNewInPercentage) {

    if (delayMS === null || delayMS === undefined || delayMS < 100) {
        delayMS = 100
    }
    if (isNewInPercentage === null || isNewInPercentage === undefined) {
        isNewInPercentage = true
    }
    if (amount === null || amount === undefined) {
        if (isNewInPercentage) {
            amount = 10
        } else {
            amount = 32
        }
    }
    if (elementID === null || elementID === undefined) {
        console.log("element is null")
        return
    }
    if (durationMS === null || durationMS === undefined) {
        durationMS = "500ms"
    } else {
        durationMS = durationMS + "ms"
    }
    setTimeout(function () { // delay required to load after css file
        let element = document.getElementById(elementID)
        console.log(element.style.translate)
        console.log(element.style.transition)
        console.log("3")
        if (element.style.transition !== null && element.style.transition !== undefined && element.style.transition !== "") {
            console.log("transition " + element.style.transition)
            element.style.transition = element.style.transition.replace("!important", "") + `, opacity ${durationMS} ease-out, translate ${durationMS} ease-out`
            console.log("first if")
        } else {
            element.style.transition = `opacity ${durationMS} ease-out, translate ${durationMS} ease-out`
            console.log("transition " + element.style.transition)
            console.log("first else")

        }
        console.log(element.style.transition)
        console.log(element.style)
        console.log("translate" + element.style.translate)

        let translate;


        if (element.style.translate !== null && element.style.translate !== undefined && element.style.translate !== "") {
            console.log("if fired")

            element = element.style.translate.split(" ")
            let number;
            console.log("aaaaaaaaaaa" + translate)
            if (translate[1].includes("%")) {
                number = (Number.parseInt(translate[1].split("%")[0]) - percentage) + "%"
                console.log("4")
            } else if (translate[1].includes("px")) {
                number = (Number.parseInt(translate[1].split("px")[0]) - pixels) + "px"
            }
            translate = translate[0] + " " + number + ""
        } else {
            translate = isNewInPercentage ? `-50% ${-amount}%` : translate = `-50% ${-amount}px`
        }
        console.log("5")
        console.log(translate)

        element.style.opacity = 1
        element.style.translate = translate
        console.log(element.style.translate)
        console.log(translate)
    }, delayMS)
}

function scrollButtonAnimation(delay) {
    setInterval(function () {
        console.log("fired")
    }, 1000)
}
