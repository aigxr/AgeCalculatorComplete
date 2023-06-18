const redBord = "hsl(0, 100%, 67%)"
const dayInput = document.querySelector("#day")
const monthInput = document.querySelector("#month")
const yearInput = document.querySelector("#year")

function calculate() {
    const dayText = dayInput.value
    const monthText = monthInput.value
    const yearText = yearInput.value

    if (dayText > 31 || dayText < 1) {
        dayInput.style.borderColor = redBord;
        document.querySelector("#error1").innerHTML = "Wrong Date";
    } else if (monthText.length <= 1 || monthText > 12 || monthText < 1) {
        monthInput.style.borderColor = redBord;
        document.querySelector("#error1").innerHTML = "Wrong Month";
    } else if (yearText.length !== 4 || yearText > 2023 || yearText < 1920) {
        yearInput.style.borderColor = redBord;
        document.querySelector("#error1").innerHTML = "Wrong Year";
    } else {
        dayInput.style.borderColor = "hsl(0, 0%, 86%)";
        monthInput.style.borderColor = "hsl(0, 0%, 86%)";
        yearInput.style.borderColor = "hsl(0, 0%, 86%)";
        document.querySelector("#error1").innerHTML = "";

        const date = new Date

        const day = date.getDate()
        const month = (date.getMonth() + 1)
        const year = date.getFullYear()
        
        let finalYear = year - yearText;
        let finalMonth = month - monthText;
        let finalDay = day - dayText;

        if (finalDay < 0) {
            finalMonth--;
            const daysInPreviousMonth = new Date(year, month - 1, 0).getDate();
            finalDay += daysInPreviousMonth;
        }
        
        if (finalMonth < 0) {
            finalYear--;
            finalMonth += 12;
        }


        document.querySelector("#years").innerHTML = finalYear
        document.querySelector("#months").innerHTML = finalMonth
        document.querySelector("#days").innerHTML = finalDay
    }
}