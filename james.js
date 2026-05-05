document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let user = {
        name: name,
        email: email
    };

    // 🔸 Store in localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    // 🔸 AJAX POST request
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 201) {
            console.log("Data sent successfully:", xhr.responseText);
            // redirect to display page
            window.location.href = "display1.html";
        }
    };

    xhr.send(JSON.stringify(user));
});