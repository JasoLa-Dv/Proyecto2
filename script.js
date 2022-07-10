var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    formData["phone"] = document.getElementById("phone").value;
    formData["description"] = document.getElementById("description").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("clientesList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.phone;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.description;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `
    <a type="button" class="btn btn-warning" onClick="onEdit(this)">Editar</a>
    <a type="button" class="btn btn-danger" onClick="onDelete(this)">Borrar</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("description").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("phone").value = selectedRow.cells[2].innerHTML;
    document.getElementById("description").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.phone;
    selectedRow.cells[3].innerHTML = formData.description;
}

function onDelete(td) {
    if (confirm('Estas seguro de querer borrar este campo ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("clientesList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}


