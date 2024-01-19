const arr = [
    {
        id: 1,
        topic: "Notemaking website",
        desc: "This is notemaking website",
        lang: ["Html", "Css", "JavaScript"]
    },
    {
        id: 2,
        topic: "Face detection app",
        desc: "This is face detection app",
        lang: ["Python"]
    },
    {
        id: 3,
        topic: "Sudoku game",
        desc: "This is sudoku game",
        lang: ["Java"]
    },
    {
        id: 4,
        topic: "Ecommerce website",
        desc: "This is an ecommerce website",
        lang: ["React.js", "Node.js", "Express.js", "MongoDB"]
    },
    {
        id: 5,
        topic: "Ludo",
        desc: "This is a ludo game",
        lang: ["Angular"]
    },
    {
        id: 6,
        topic: "DSA Arrays",
        desc: "Covered all types of ques of arrays",
        lang: ["Java"]
    }
]

const rContainer = document.getElementById("repos-container");

const perPage = () => {
    for (let i = 0; i < arr.length; i=i+2){
        let elem = document.createElement("div");
        if (i+1 < arr.length){
            elem.innerHTML = `
            <div class="col-md-5">
                <h2 class="text-primary">${arr[i].topic}</h2>
                <p>${arr[i].desc}</p>
                ${
                    arr[i].lang.map((lg) => {
                        return `<button type="button" class="btn btn-sm btn-primary">${lg}</button>`
                    }).join(" ")
                }
            </div>
            <div class="col-md-5">
                <h2 class="text-primary">${arr[i+1].topic}</h2>
                <p>${arr[i+1].desc}</p>
                ${
                    arr[i+1].lang.map((lg) => {
                        return `<button type="button" class="btn btn-sm btn-primary">${lg}</button>`
                    }).join(" ")
                }
            </div>
        `
        }
        elem.classList.add("row");
        elem.classList.add("repos-container")
        rContainer.appendChild(elem);
    }
}

perPage();