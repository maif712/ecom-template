
const mainForms = document.querySelectorAll(".needs-validation")
const requiredInputes = document.querySelectorAll(".form-input-needs-validation")

requiredInputes.forEach(input => {
    input.addEventListener("input", () => {
        if (input.value) {
            input.classList.remove("error")
        }
    })
});

mainForms.forEach(form => {
    form.addEventListener("submit", (e) => {
        requiredInputes.forEach(input => {
            if (!input.value) {
                input.classList.add("error")
                console.log("Error");
                e.preventDefault()
            }
            else {
                input.classList.remove("error")
            }
        })
    })
})