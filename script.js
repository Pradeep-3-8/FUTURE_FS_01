document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("responseMessage").textContent = "Message sent successfully!";
        document.getElementById("responseMessage").style.color = "green";
        
        // Clear input fields
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("responseMessage").textContent = "Please fill all fields.";
        document.getElementById("responseMessage").style.color = "red";
    }
});
