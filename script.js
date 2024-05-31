// function loco() {
//     gsap.registerPlugin(ScrollTrigger);


//     locoScroll.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy("#main", {
//         scrollTop(value) {
//             return arguments.length
//                 ? locoScroll.scrollTo(value, 0, 0)
//                 : locoScroll.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//             return {
//                 top: 0,
//                 left: 0,
//                 width: window.innerWidth,
//                 height: window.innerHeight,
//             };
//         },

//         // follwoing line is not required to work pinning on touch screen

//         /* pinType: document.querySelector("#main").style.transform
//         ? "transform"
//         : "fixed"*/
//     });

//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     ScrollTrigger.refresh();
// }

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    multiplier: 1.8,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
});


function menu() {
    document.querySelectorAll("#Menu a").forEach(function (elem) {
        elem.classList.toggle("opacityy");
    });
}

const blob = document.getElementById("cursor");
window.onpointermove = (event) => {
    const { clientX, clientY } = event;
    blob.animate(
        {
            left: `${clientX}px`,
            top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
    );
};

gsap.from("#name a,#Menu h5", {
    y: 120,
    opacity: 0,
    duration: 0.5,
});

gsap.from("#header h1,#header h5", {
    y: 70,
    opacity: 0,
    duration: 0.5,
    stagger: 0.4,
});

gsap.from("#freelance h5", {
    y: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
});

gsap.from("#page1footer a", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.4,
});

gsap.from(".projects img,.projects h1,.projects h5", {
    y: 60,
    duration: 0.5,
    opacity: 0,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 65%",
        end: "top 80%",
        scrub: 1,
        // markers: true,
    },
});

gsap.from("#textabout h5,#textabout p", {
    y: 90,
    opacity: 0,
    duration: 0.8,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#textabout",
        start: "top 70%",
        end: "top 90%",
        scrub: 1,
        markers: true,
    },
});

gsap.from("#sub a,#sub h5", {
    y: 90,
    opacity: 0,
    duration: 0.5,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#sub",
        scroller: "#main",
        start: "bottom 10%",
        end: "bottom 4%",
        scrub: 1,
        markers: true,
    },
});

gsap.from("#footer a,#footer h4,#footer h5", {
    y: 90,
    opacity: 0,
    duration: 0.5,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#footer",
        scroller: "body",
        start: "top 80%",
        end: "top 90%",
        scrub: 1,
        markers: true,
    },
});

document.querySelectorAll(".projects").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function () {
        gsap.to(elem.querySelector("h1"), {
            x: 0,
            ease: Power3,
            opacity: 1,
            duration: 1,
        });
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
        });
    });

    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("h1"), {
            x: 70,
            ease: Power3,
            opacity: 0.3,
            duration: 1,
        });
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.8),
        });
    });
});

function time() {
    var date = new Date();

    hour = date.getHours();

    minute = date.getMinutes();

    if (minute < 10) {
        minute = "0" + minute;
    }

    var current_time = hour + ":" + minute + " EST";
    document.querySelector("#footerleft h5").innerHTML = current_time;
    setTimeout(function () {
        time();
    }, 1000);
}
