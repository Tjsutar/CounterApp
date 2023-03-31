// const daysElement = document.querySelector(".days");
// const hoursElement = document.querySelector(".hours");
// const minutesElement = document.querySelector(".minutes");
// const secsElement = document.querySelector(".secs");
// const heading = document.querySelector("h1");
// const counterTimer = document.querySelector(".timer");

// // Converting second, minute, hour, day in milliseconds
// const second = 1000,
//     minute = 60 * second,
//     hour = 60 * minute,
//     day = 24 * hour;

// const timerFunction = () => {
//     // Generating current date in dd/mm/yyyy format
//     const now = new Date();
//     const dd = String(now.getDate()).padStart(2, "0");
//     const mm = String(now.getMonth() + 1).padStart(2, "0");
//     const yyyy = now.getFullYear();
//     const currentDate = `${mm}/${dd}/${yyyy}`;

//     // Taking target date from user
//     let enteredDay = prompt("Enter Day").padStart(2, "0");
//     enteredDay = enteredDay > 31 ? prompt("Enter less than 31") : enteredDay;
//     let enteredMonth = prompt("Enter Month").padStart(2, "0");
//     enteredMonth = enteredMonth > 12 ? prompt("Enter less than 12") : enteredMonth;
//     const targetDate = new Date(`${yyyy}-${enteredMonth}-${enteredDay}`);
//     const targetTime = targetDate.getTime();
//     const nextYearTime = new Date(`${yyyy + 1}-01-01`).getTime();
//     const timer = targetTime < now.getTime() ? nextYearTime + targetTime : targetTime;

//     const intervalId = setInterval(() => {
//         // Taking current date in milliseconds
//         const today = new Date().getTime();

//         // Finding difference between target date and today's date
//         let difference = timer - today;

//         // Finding left day, hour, minute, second
//         const leftDay = Math.floor(difference / day);
//         const leftHour = Math.floor((difference % day) / hour);
//         const leftMinute = Math.floor((difference % hour) / minute);
//         const leftSecond = Math.floor((difference % minute) / second);

//         // Showing timer in the DOM
//         daysElement.innerText = leftDay;
//         hoursElement.innerText = leftHour;
//         minutesElement.innerText = leftMinute;
//         secsElement.innerText = leftSecond;

//         // Stopping setInterval after reaching the target time
//         if (difference <= 0) {
//             counterTimer.style.display = "none";
//             heading.innerText = "Time's Over";
//             clearInterval(intervalId);
//         }
//     }, 0);
// };

// timerFunction();

const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secsElement = document.querySelector(".secs");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".timer");

// Converting second, minute, hour, day in milliseconds
const second = 1000,
    minute = 60 * second,
    hour = 60 * minute,
    day = 24 * hour;

const timerFunction = () => {
    // Generating current date in dd/mm/yyyy format
    const now = new Date();
    const dd = String(now.getDate()).padStart(2, "0");
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const yyyy = now.getFullYear();
    const currentDate = `${mm}/${dd}/${yyyy}`;

    // Taking target date from user
    let enteredDay = prompt("Enter Day").padStart(2, "0");
    while (enteredDay > 31) {
        enteredDay = prompt("Enter a day less than or equal to 31").padStart(2, "0");
    }
    let enteredMonth = prompt("Enter Month").padStart(2, "0");
    enteredMonth = enteredMonth > 12 ? prompt("Enter less than 12") : enteredMonth;
    const targetDate = new Date(`${yyyy}-${enteredMonth}-${enteredDay}`);
    const targetTime = targetDate.getTime();
    const nextYearTime = new Date(`${yyyy + 1}-01-01`).getTime();
    const timer = targetTime < now.getTime() ? nextYearTime + targetTime : targetTime;

    const intervalId = setInterval(() => {
        // Taking current date in milliseconds
        const today = new Date().getTime();

        // Finding difference between target date and today's date
        let difference = timer - today;

        // Finding left day, hour, minute, second
        const leftDay = Math.floor(difference / day);
        const leftHour = Math.floor((difference % day) / hour);
        const leftMinute = Math.floor((difference % hour) / minute);
        const leftSecond = Math.floor((difference % minute) / second);

        // Showing timer in the DOM
        daysElement.innerText = leftDay;
        hoursElement.innerText = leftHour;
        minutesElement.innerText = leftMinute;
        secsElement.innerText = leftSecond;

        // Stopping setInterval after reaching the target time
        if (difference <= 0) {
            counterTimer.style.display = "none";
            heading.innerText = "Time's Over";
            clearInterval(intervalId);
        }
    }, 0);
};

timerFunction();

