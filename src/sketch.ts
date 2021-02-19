// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    N: 8,
    Download_Image: () => save(),
}
gui.add(params, "N", 0, 50, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    for (let i = 0; i < params.N; ++i) {
        for (let j = 0; j < params.N; ++j) {
            if ((i+j)%2 === 0)
                fill("black")
            else
                fill("white")
            rect(i * width / params.N, j * height / params.N, width/params.N, height/params.N)
        }
    }
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}