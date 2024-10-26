function submitForm(event){
    // Prevents the form from submitting/reloading the page
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message1").value;

    console.log("Name: ", name);
    console.log('Email: ', email);
    console.log("Message: ", message);

    if (name !== null & email !== null & message !== null){
        document.getElementById('output').innerText = "Success";
    }
}