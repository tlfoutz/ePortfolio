var dt = new Date();
document.getElementById("date").innerHTML =
    (("0" + (dt.getMonth() + 1)).slice(-2)) + "/"
    + (("0" + dt.getDate()).slice(-2)) + "/"
    + (dt.getFullYear());