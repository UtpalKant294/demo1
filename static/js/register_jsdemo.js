
document.getElementById("myForm").onsubmit = function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    if (name === "") {
        document.getElementById("result").textContent = "Please enter your name.";
    } else {
        document.getElementById("result").textContent = "Hello, " + name + "!";
    }
};
