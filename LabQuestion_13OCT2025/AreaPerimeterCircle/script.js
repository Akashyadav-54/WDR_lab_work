function calculateCircle() {
    let r = Number(document.getElementById("radius").value);

    let area = 3.14 * r * r;
    let perimeter = 2 * 3.14 * r;

    document.getElementById("circleResult").innerHTML =
        "Area = " + area + "<br>Perimeter = " + perimeter;
}
