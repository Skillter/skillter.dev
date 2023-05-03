


window.addEventListener("DOMContentLoaded", () => {
    fadeIn("scroll-down-button", 750, 200, 0, false)
    animateProfile()

    // Adjust section-bar-line's to the height of the text lines
    document.getElementById("section-bar-line").style.height = (--document.getElementById("section-bar-sections").getElementsByTagName('*').length * (18 + 12)) + "px"

})

window.addEventListener("scroll", (info) => {
    let pages = ["particles-js", "second-page"]
    let equivalentSections = ["section-bar-sections-intro", "section-bar-sections-about-me"]

    // Sectionbar handler
    for (let i=0; i < pages.length; i++) {
        const elementString = pages[i];
        // if (elementString === "second-page") return
        let element = document.getElementById(elementString)


        elementVisibleInPercent(element).then(function(percentage) {
            if (percentage >= 50) {
                let posY = i * (18 + 12) /* 18 + 12 per every line */
                let currentSectionElement = document.getElementById(equivalentSections[i])
                currentSectionElement.style.fontSize = 0.8 + "rem"
                equivalentSections.forEach((elementString, index) => {
                    if (index != i) {
                        let element = document.getElementById(elementString)
                        element.style.fontSize = 0.75 + "rem"
                    }
                });
                document.getElementById("section-bar-pointer").style.top = posY + "px"
            }
        });
    }

    // sections.forEach(elementString => {
    //     if (elementString === "second-page") return
    //     let element = document.getElementById(elementString)
    //     elementVisibleInPercent(element).then(function(percentage) {
    //         console.log(elementString + ": " + percentage)
    //     });
    // });

})

const elementVisibleInPercent = (element) => {
    return new Promise((resolve, reject) => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                resolve(Math.floor(entry.intersectionRatio * 100));
                clearTimeout(timeout);
                observer.disconnect();
            });
        });

        observer.observe(element);
        // Probably not needed, but in case something goes wrong.
        const timeout = setTimeout(() => {
            reject();
        }, 500);
    });
};



function animateProfile() {
    document.getElementById('avatar').style.opacity = 1
    document.getElementById('avatar').style.translate = "-50% -85%"
    // document.getElementById('avatar').style.transform = "translate(-50%, -100%)"
    setTimeout(function () {
        document.getElementById('name').style.opacity = 1
        document.getElementById('name').style.top = "12px"
        setTimeout(function () {
            document.getElementById('tld').style.opacity = 1
            document.getElementById('tld').style.top = "12px"
        }, 750)
    }, 500)
}

// TODO: clean it up man
// Sees element.style.translate always as empty String if there's no delay
// Doesn't work if the element has a class with translate that is !important
// To use this, call the method INSIDE THIS CLASS (otherwise it might not be defined in time), put class "fade" on the element, and use style="transition: all 100ms;" lastly pray it'll work
function fadeIn(elementID, durationMS, delayMS, amount, isNewInPercentage) {
    if (delayMS === null || delayMS === undefined || delayMS < 0) {
        delayMS = 0
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

    // warning spaghetti code, just close eyes
    setTimeout(function () { // delay required to load after css file

        var element = document.getElementById(elementID)

        if (element === null) {
            return
        }
        if (element.style.transition !== undefined && element.style.transition !== "") {
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

            translate = element.style.translate.split(" ")
            let number, position = 1
            if (translate.length <= 1) position = 0 // When style.translate is eg "-50% 0" then it will appear as "-50%" so we need to reduce position by 1 
            console.log("aaaaaaaaaaa" + element + "     " + translate)
            if (translate[position].includes("%")) {
                number = (Number.parseInt(translate[position].split("%")[0]) - amount) + "%"
                console.log("4")
            } else if (translate[position].includes("px")) {
                number = (Number.parseInt(translate[position].split("px")[0]) - amount) + "px"
            }
            translate = translate[0] + " " + number + ""
        } else {
            translate = isNewInPercentage ? `0% ${-amount}%` : `0% ${-amount}px`
        }
        console.log("5")
        console.log(translate)

        element.style.opacity = 1
        element.style.translate = translate
        console.log(element.style.translate)
        console.log(translate)
    }, delayMS)

}

