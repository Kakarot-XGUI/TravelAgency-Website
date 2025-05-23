
function handleMenu() {
    const menu = document.getElementById("offcanvasMenu");
    menu.classList.toggle("-translate-x-full");
}
const monthDataSet1 = [
    { name: "May", ranges: ["10-14", "16-20", "21-25", "26-30"] },
    { name: "June", ranges: ["01-05", "06-10", "11-15", "16-20", "21-25", "26-30"] },
    { name: "September", ranges: ["10-15", "16-20", "21-25", "26-30"] },
    { name: "October", ranges: ["01-05", "06-10", "11-15", "16-20", "21-25", "26-30"] },
    { name: "November", ranges: ["01-05", "06-10", "11-15"] }
];

const monthDataSet2 = [
    { name: "May", ranges: ["10-17", "19-26", "28-04"] },
    { name: "June", ranges: ["06-13", "15-22", "24-01"] },
    { name: "September", ranges: ["10-17", "19-26", "28-05"] },
    { name: "October", ranges: ["07-14", "16-23", "26-03"] },
    { name: "November", ranges: ["05-12"] }
];

const buttons = document.querySelectorAll(".month-btn");
const contentContainer = document.getElementById("content-container");
const extraContainer = document.getElementById("extra-container");

function displayMonthData(monthData, container, monthName) {
    const monthInfo = monthData.find(m => m.name === monthName);
    container.innerHTML = "";

    monthInfo.ranges.forEach(range => {
        const div = document.createElement("div");
        div.className = "w-[90%] px-9 py-3 border-2 rounded-[2rem] border-[#647855]  shadow-md flex-wrap";
        div.innerHTML = `<h2 class="text-[#647855] mb-4 text-center font-bold">${range}</h2>
                         <h1 class="text-lg text-center text-[#647855]">${monthInfo.name}</h1>`;
        container.appendChild(div);
    });
}

// 🚀 Load May by default in both sections
document.addEventListener("DOMContentLoaded", () => {
    displayMonthData(monthDataSet1, contentContainer, "May");
    displayMonthData(monthDataSet2, extraContainer, "May");
});

// 🔘 Clicking a button updates both sections
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const monthName = button.dataset.month;
        displayMonthData(monthDataSet1, contentContainer, monthName);
        displayMonthData(monthDataSet2, extraContainer, monthName);
    });
});





