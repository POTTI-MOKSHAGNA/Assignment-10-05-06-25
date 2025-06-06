document.getElementById("btn").addEventListener("click", function () {
    const birthDate = new Date(document.getElementById("date").value);
    const today = new Date();


    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("years").textContent = years < 10 ? "0" + years : years;
    document.getElementById("months").textContent = months < 10 ? "0" + months : months;
    document.getElementById("days").textContent = days < 10 ? "0" + days : days;
});