const inputText = document.getElementById("input-text");
const checkButton = document.getElementById("check-button");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
    const text = inputText.value.trim();
    if (text === "") {
        result.textContent = "Please enter some text.";
        result.style.color = "red";
        return;
    }

    const isPalindrome = checkPalindrome(text);
    if (isPalindrome) {
        result.textContent = `"${text}" is a palindrome!`;
        result.style.color = "green";
    } else {
        result.textContent = `"${text}" is not a palindrome.`;
        result.style.color = "red";
    }
});

function checkPalindrome(str) {
    const cleanedText = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedText = cleanedText.split("").reverse().join("");
    return cleanedText === reversedText;
}
