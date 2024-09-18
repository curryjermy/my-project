document.addEventListener('DOMContentLoaded', function() {
    const salesForm = document.querySelector(".forms-sample .btn.btn-gradient-primary.me-2");
    salesForm.addEventListener("click", (event) => {

        let valid = true; // flag to track form validity

        const nameOfProduce = document.getElementById("producename").value;
        const typeOfProduce = document.getElementById("producetype").value;
        const saleDate = document.getElementById("saledate").value;
        const saleTime = document.getElementById("saletime").value;
        const weightOfProduce = document.getElementById("weight").value;
        const amountPaid = document.getElementById("amountpaid").value;
        const nameOfTheBuyer = document.getElementById("buyername").value;
        const branchName = document.getElementById("branchname").value;
        const branchContactInfo = document.getElementById("branchcontact").value;
        const salesagentName = document.getElementById("salesagentName").value;

        const spanError = document.getElementById("produceError");
        const spanError2 = document.getElementById("produceTypeError");
        const spanError3 = document.getElementById("weightError");
        const spanError4 = document.getElementById("amountPaidError");
        const spanError5 = document.getElementById("buyerNameError");
        const spanError6 = document.getElementById("branchNameError");
        const spanError7 = document.getElementById("branchContactError");
        const spanError8 = document.getElementById("salesagentname");
        const spanError9 = document.getElementById("saleDateError");
        const spanError10 = document.getElementById("saleTimeError");

        // Success message container (make sure you have this element in your HTML)
        const successMessage = document.createElement("div");
        successMessage.id = "successMessage";
        successMessage.style.color = "green";
        document.body.appendChild(successMessage); // Append the message to the document body

        // Clear previous success message
        successMessage.textContent = "";

        // Validation checks
        if (!nameOfProduce) {
            spanError.textContent = "Produce name required";
            valid = false;
        } else {
            spanError.textContent = "";
        }

        if (!typeOfProduce) {
            spanError2.textContent = "Produce type required";
            valid = false;
        } else {
            spanError2.textContent = "";
        }

        if (!weightOfProduce) {
            spanError3.textContent = "Produce weight required";
            valid = false;
        } else {
            spanError3.textContent = "";
        }

        if (!amountPaid) {
            spanError4.textContent = "Amount paid required";
            valid = false;
        } else if (amountPaid.length < 5) {
            spanError4.textContent = "Amount must be at least 5 characters long";
            valid = false;
        } else {
            spanError4.textContent = "";
        }

        if (!nameOfTheBuyer) {
            spanError5.textContent = "Buyer name required";
            valid = false;
        } else if (nameOfTheBuyer.length < 2) {
            spanError5.textContent = "Name must be at least 2 characters long";
            valid = false;
        } else {
            spanError5.textContent = "";
        }

        if (!branchName) {
            spanError6.textContent = "Branch name required";
            valid = false;
        } else {
            spanError6.textContent = "";
        }

        if (!branchContactInfo) {
            spanError7.textContent = "Branch contact required";
            valid = false;
        } else {
            spanError7.textContent = "";
        }

        if (!salesagentName) {
            spanError8.textContent = "Salesagent name required";
            valid = false;
        } else if (salesagentName.length < 2) {
            spanError8.textContent = "Name must be at least 2 characters long";
            valid = false;
        } else {
            spanError8.textContent = "";
        }

        if (!saleDate) {
            spanError9.textContent = "Date of sale required";
            valid = false;
        } else {
            spanError9.textContent = "";
        }

        if (!saleTime) {
            spanError10.textContent = "Time of sale required";
            valid = false;
        } else {
            spanError10.textContent = "";
        }

        // If form is valid, show success message
        if (valid) {
            successMessage.textContent = "Form submitted successfully!";
            // You can also submit the form programmatically if needed, e.g., document.querySelector("form#salesagent").submit();
        } else {
            event.preventDefault(); // Prevent form submission if there are validation errors
        }
    });
});