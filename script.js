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
    },
    {
        id: 7,
        topic: "DSA Trees",
        desc: "Covered 50% of questions on trees",
        lang: ["Java"]
    },
    {
        id: 8,
        topic: "Chess game",
        desc: "This is Chess game",
        lang: ["Python"]
    },
    {
        id: 9,
        topic: "Api project",
        desc: "This project is based on api project",
        lang: ["JavaScript, React.js"]
    },
    {
        id: 10,
        topic: "Calculator",
        desc: "This is calculator",
        lang: ["Html", "Css", "JavaScript"],
    },
    {
        id: 11,
        topic: "Personal Portfolio",
        desc: "Created my personal portfolio",
        lang: ["React.js", "JavaScript"]
    },
    {
        id: 12,
        topic: "Freelance Project",
        desc: "This is freelance project",
        lang: ["Html", "Css", "JavaScript"]
    },
    {
        id: 13,
        topic: "Basic intro",
        desc: "This is basic introductory project",
        lang: ["Html", "Css", "JavaScript"]
    },
    {
        id: 14,
        topic: "Practice languages",
        desc: "Practice basic to advance",
        lang: ["Java", "Python"]
    },
]

const rContainer = document.getElementById("repos-container");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

// Creating elements for html to display
let eArr = [];
const perPage = (si, ei) => {
    for (let i = si; i <= ei; i=i+2){
        let elem = document.createElement("div");
        if (i+1 < arr.length){
            elem.innerHTML = `
            <div class="col-md-5">
                <h2 class="text-primary repo-heading">${i+1} ${arr[i].topic}</h2>
                <p>${arr[i].desc}</p>
                ${
                    arr[i].lang.map((lg) => {
                        return `<button type="button" class="btn btn-sm btn-primary">${lg}</button>`
                    }).join(" ")
                }
            </div>
            <div class="col-md-5">
                <h2 class="text-primary repo-heading">${i+2} ${arr[i+1].topic}</h2>
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
        elem.classList.add("repos-container");
        eArr.push(elem);
    }
}

// Displaying the no of pages according to items 1, 2, 3, ,....
const pageList = document.getElementById("pageList");
let x = 1;
let pageArr = [];
for (let i = 0; i < arr.length; i=i+10){
    let elem = document.createElement("li");
    let a = document.createElement("a");
    a.innerHTML = x++;
    a.classList.add("page-link")
    elem.appendChild(a);
    elem.classList.add("page-item");
    pageArr.push(elem);
    pageList.before(elem);
}


// Displaing repositories functionality
perPage(0, arr.length);

let si = 0, ei = 5, pi = 0;

for (let i = si; i < ei; i++){
    rContainer.appendChild(eArr[i]);
}
pageArr[0].classList.add("active");

nextBtn.addEventListener("click", () => {
    pi++;
    if (pi < pageArr.length){
        pageArr.forEach((e) => {
            e.classList.remove("active");
        });
        pageArr[pi].classList.add("active");

        si = ei+5;
        ei += 10;
        if (si < arr.length){
            rContainer.innerHTML = "";
            eArr = [];
            perPage(si, ei);
            eArr.forEach((e) => {
                rContainer.appendChild(e);
            });
        }
    }else{
        alert("Done with all repositories!");
        pi = pageArr.length-1;
    }
});

prevBtn.addEventListener("click", () => {
    pi--;
    if (pi >= 0){
        pageArr.forEach((e) => {
            e.classList.remove("active");
        });
        pageArr[pi].classList.add("active");

        if (si < arr.length){
            rContainer.innerHTML = "";
            eArr = [];
            ei = si-2;
            si = 0;
            perPage(si, ei);
            eArr.forEach((e) => {
                rContainer.appendChild(e);
            });
        }
    }else{
        alert("You're on the first page!");
        pi = 0;
    }
})