const stockForm = document.querySelector(".forms-sample .btn.btn-gradient-primary.me-2").addEventListener("click", (event) => {
    let valid = true;

    const produceName = document.getElementById("producename").value;
    const produceType = document.getElementById("producetype").value;
    const procurementDate = document.getElementById("procurementdate").value;
    const procurementTime = document.getElementById("procurementtime").value;
    const produceWeight = document.getElementById("produceweight").value;
    const produceCost = document.getElementById("producecost").value;
    const dealerName = document.getElementById("dealername").value;
    const branch = document.getElementById("branch").value;
    const branchContact = document.getElementById("branchcontact").value;
    const sellingPrice = document.getElementById("sellingprice").value;

    const errorProduceName = document.getElementById("error-producename");
    const errorProduceType = document.getElementById("error-producetype");
    const errorProcurementDate = document.getElementById("error-procurementdate");
    const errorProcurementTime = document.getElementById("error-procurementtime");
    const errorProduceWeight = document.getElementById("error-produceweight");
    const errorProduceCost = document.getElementById("error-producecost");
    const errorDealerName = document.getElementById("error-dealername");
    const errorBranch = document.getElementById("error-branch");
    const errorBranchContact = document.getElementById("error-branchcontact");
    const errorSellingPrice = document.getElementById("error-sellingprice");


    if (!produceName) {
        errorProduceName.textContent = "fill in field!";
        valid = false;
    } else if (produceName.length < 2) {
        errorProduceName.textContent = "name must be atlest 2 characters long!";
        valid = false;
    } else {
        errorProduceName.textContent = "";
    }
    if (!produceType) {
        errorProduceType.textContent = "fill in field!";
        valid = false;
    } else if (produceType.length < 2) {
        errorProduceType.textContent = "name must be atlest 2 characters long!";
        valid = false;
    } else {
        errorProduceType.textContent = "";
    }
    if (!procurementDate) {
        errorProcurementDate.textContent = "fill in field!";
        valid = false;
    } else {
        errorProcurementDate.textContent = "";
    }
    if (!procurementTime) {
        errorProcurementTime.textContent = "fill in field!";
        valid = false;
    } else {
        errorProcurementTime.textContent = "";
    }
    if (!produceWeight) {
        errorProduceWeight.textContent = "fill in field!";
        valid = false;
    } else if(produceWeight.length < 3) {
        errorProduceWeight.textContent = "weight must be atleast 3 characters long";
        valid = false;
    } else {
        errorProduceWeight.textContent = "";
    }
    if (!produceCost) {
        errorProduceCost.textContent = "fill in field!";
        valid = false;
    } else if(produceCost.length < 5){
        errorProduceCost.textContent = "cost must be atleast 5 characters long";
        valid = false;
    } else {
        errorProduceCost.textContent = "";
    }
    if (!dealerName) {
        errorDealerName.textContent = "fill in field!";
        valid = false;
    } else {
        errorDealerName.textContent = "";
    }
    if (!branch) {
        errorBranch.textContent = "fill in field!";
        valid = false;
    } else {
        errorBranch.textContent = "";
    }
    if (!branchContact) {
        errorBranchContact.textContent = "fill in field!";
        valid = false;
    } else {
        errorBranchContact.textContent = "";
    }
    if (!sellingPrice) {
        errorSellingPrice.textContent = "fill in field!";
        valid = false;
    } else {
        errorSellingPrice.textContent = "";
    }

    if (valid) {
        alert("form submitted successfully");
    } else {
        event.preventDefault();
    }
})