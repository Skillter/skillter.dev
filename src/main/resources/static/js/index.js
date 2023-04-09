// import {} from "css/main.css"

particlesJS.load("particles-js", "particles.json");

function fadeIn1(element) {
    element.style.opacity = 1;
} // Needs to have transition: opacity 0.5s ease-out;

function fadeIn(element, durationMS, delayMS, percentage, pixels) { // delay required to load after css file
    if (delayMS === null || delayMS === undefined) {
        delayMS = 100
    }
     if (percentage === null || percentage === undefined) {
        percentage = 5
    }
     if (pixels === null || pixels === undefined) {
        pixels = 32
    }
    setTimeout(function() {
        console.log(element.style.translate)
        console.log("1")
        if (element === null || element === undefined) {
            console.log("element is null")
            return
        }
        console.log("2") //
        if (durationMS === null || durationMS === undefined) {
            durationMS = "500ms"
        } else {
            durationMS = durationMS + "ms"
        }

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

        // Sees element.style.translate always as empty String idk why
        if (element.style.translate !== null && element.style.translate !== undefined && element.style.translate !== "") {
        console.log("if fired")
        
        var translate = element.style.translate.split(" ")
        var number;
        if (translate[1].includes("%")) {
            number = (Number.parseInt(translate[1].split("%")[0]) - percentage) + "%"
            console.log("4")
        } else if (translate[1].includes("px")) {
            number = (Number.parseInt(translate[1].split("px")[0]) - pixels) + "px"
        }
        translate = translate[0] + " " + number + ""
        } else {
            console.log("else fired")
            var translate = `0% -${percentage}%`;
        }
        console.log("5")
        console.log(translate)
    
        element.style.opacity = 1
        element.style.translate = translate
        console.log(element.style.translate)
        console.log(translate)
    }, delayMS)

}