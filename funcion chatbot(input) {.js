funcion chatbot(input) {
    let output = "";
    input = input.tolowercase();
    if (input.includes("hello") || input.includes("hi")) {
        output = "Hello, nice to meet you!";
    } else if (input.includes("who are you")) {
        output = " I am Intertly AI, thank you for asking.";
    }
}