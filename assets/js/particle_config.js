$(function() {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 30,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": ["#8A0000", "#B11212", "#EC5151", "#FF7F7F", "#DB2828"]
      },
      "shape": {
        "type": ["circle", "triangle", "polygon", "edge"],
        "stroke": {
          "width": 1,
          "color": ["#8A0000", "#B11212", "#EC5151", "#FF7F7F", "#DB2828"]
        },
        "polygon": {
          "nb_sides": 6
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "opacity_min": 0.7,
          "sync": false
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 200,
        "color": "#FACADE",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
})
