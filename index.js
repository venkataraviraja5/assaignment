let data = [
    { name: "John", email: "john@gmail.com", date: "2024-12-25", salary: 6767, status: "Resigned", action: "" },
    { name: "Jane", email: "jane@gmail.com", date: "2024-12-25", salary: 7890, status: "Current", action: "" },
    { name: "Doe", email: "doe@gmail.com", date: "2024-12-25", salary: 5500, status: "Resigned", action: "" },
    { name: "Smith", email: "smith@gmail.com", date: "2024-12-25", salary: 6900, status: "Professional", action: "" },
    { name: "John", email: "john@gmail.com", date: "2024-12-25", salary: 6767, status: "Resigned", action: "" },
    { name: "Jane", email: "jane@gmail.com", date: "2024-12-25", salary: 7890, status: "Current", action: "" },
    { name: "Doe", email: "doe@gmail.com", date: "2024-12-25", salary: 5500, status: "Resigned", action: "" },
    { name: "Smith", email: "smith@gmail.com", date: "2024-12-25", salary: 6900, status: "Professional", action: "" },
    { name: "John", email: "john@gmail.com", date: "2024-12-25", salary: 6767, status: "Resigned", action: "" },
    { name: "Jane", email: "jane@gmail.com", date: "2024-12-25", salary: 7890, status: "Current", action: "" },
    { name: "Doe", email: "doe@gmail.com", date: "2024-12-25", salary: 5500, status: "Resigned", action: "" },
    { name: "Smith", email: "smith@gmail.com", date: "2024-12-25", salary: 6900, status: "Professional", action: "" },
    { name: "John", email: "john@gmail.com", date: "2024-12-25", salary: 6767, status: "Resigned", action: "" },
    { name: "Jane", email: "jane@gmail.com", date: "2024-12-25", salary: 7890, status: "Current", action: "" },
    { name: "Doe", email: "doe@gmail.com", date: "2024-12-25", salary: 5500, status: "Resigned", action: "" },
    { name: "Smith", email: "smith@gmail.com", date: "2024-12-25", salary: 6900, status: "Professional", action: "" },
    { name: "John", email: "john@gmail.com", date: "2024-12-25", salary: 6767, status: "Resigned", action: "" },
    { name: "Jane", email: "jane@gmail.com", date: "2024-12-25", salary: 7890, status: "Current", action: "" },
    { name: "Doe", email: "doe@gmail.com", date: "2024-12-25", salary: 5500, status: "Resigned", action: "" },
    { name: "Smith", email: "smith@gmail.com", date: "2024-12-25", salary: 6900, status: "Professional", action: "" },
    { name: "John", email: "john@gmail.com", date: "2024-12-25", salary: 6767, status: "Resigned", action: "" },
    { name: "Jane", email: "jane@gmail.com", date: "2024-12-25", salary: 7890, status: "Current", action: "" },
    { name: "Doe", email: "doe@gmail.com", date: "2024-12-25", salary: 5500, status: "Resigned", action: "" },
    { name: "Smith", email: "smith@gmail.com", date: "2024-12-25", salary: 6900, status: "Professional", action: "" },
    { name: "John", email: "john@gmail.com", date: "2024-12-25", salary: 6767, status: "Resigned", action: "" },
    { name: "Jane", email: "jane@gmail.com", date: "2024-12-25", salary: 7890, status: "Current", action: "" },
    { name: "Doe", email: "doe@gmail.com", date: "2024-12-25", salary: 5500, status: "Resigned", action: "" },
    { name: "Smith", email: "smith@gmail.com", date: "2024-12-25", salary: 6900, status: "Professional", action: "" },
    { name: "John", email: "john@gmail.com", date: "2024-12-25", salary: 6767, status: "Resigned", action: "" },
    { name: "Jane", email: "jane@gmail.com", date: "2024-12-25", salary: 7890, status: "Current", action: "" },
    { name: "Doe", email: "doe@gmail.com", date: "2024-12-25", salary: 5500, status: "Resigned", action: "" },
    { name: "Smith", email: "smith@gmail.com", date: "2024-12-25", salary: 6900, status: "Professional", action: "" },
    { name: "John", email: "john@gmail.com", date: "2024-12-25", salary: 6767, status: "Resigned", action: "" },
    { name: "Jane", email: "jane@gmail.com", date: "2024-12-25", salary: 7890, status: "Current", action: "" },
    { name: "Doe", email: "doe@gmail.com", date: "2024-12-25", salary: 5500, status: "Resigned", action: "" },
    { name: "Smith", email: "smith@gmail.com", date: "2024-12-25", salary: 6900, status: "Professional", action: "" },
    { name: "John", email: "john@gmail.com", date: "2024-12-25", salary: 6767, status: "Resigned", action: "" },
    { name: "Jane", email: "jane@gmail.com", date: "2024-12-25", salary: 7890, status: "Current", action: "" },
    { name: "Doe", email: "doe@gmail.com", date: "2024-12-25", salary: 5500, status: "Resigned", action: "" },
    { name: "Smith", email: "smith@gmail.com", date: "2024-12-25", salary: 6900, status: "Professional", action: "" },
    { name: "John", email: "john@gmail.com", date: "2024-12-25", salary: 6767, status: "Resigned", action: "" },
    { name: "Jane", email: "jane@gmail.com", date: "2024-12-25", salary: 7890, status: "Current", action: "" },
    { name: "Doe", email: "doe@gmail.com", date: "2024-12-25", salary: 5500, status: "Resigned", action: "" },
    { name: "Smith", email: "smith@gmail.com", date: "2024-12-25", salary: 6900, status: "Professional", action: "" },
    { name: "John", email: "john@gmail.com", date: "2024-12-25", salary: 6767, status: "Resigned", action: "" },
    { name: "Jane", email: "jane@gmail.com", date: "2024-12-25", salary: 7890, status: "Current", action: "" },
    { name: "Doe", email: "doe@gmail.com", date: "2024-12-25", salary: 5500, status: "Resigned", action: "" },
    { name: "Smith", email: "smith@gmail.com", date: "2024-12-25", salary: 6900, status: "Professional", action: "" },
  
  
]


let entry = 5
let currentPage =1
let filteredData = [...data]
let currentEditingRecordIndex = null

const showValue = document.getElementsByClassName('show')[0]

showValue.addEventListener('change', function () {
    entry = parseInt(showValue.value)
    currentPage = 1
    renderTableData()
    updatePagination()
})

function paginateData() {
    const start = (currentPage - 1) * entry
    const end = start + entry
    return filteredData.slice(start, end)
}

document.getElementById("search").addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase().trim()

    // Filter data based on the search term
    filteredData = data.filter(item => {
        return (
            item.name.toLowerCase().includes(searchTerm) 
        )
    })

    currentPage = 1 // Reset to first page after searching
    renderTableData()
    updatePagination()
})

function renderTableData() {
    const tableBody = document.getElementById("data-body")
tableBody.innerHTML = ''

const paginatedData = paginateData()

// if(paginateData.length === 0){
//     return `<p>No Records Found</p>`
// }
paginatedData.forEach((item, index) => {
    const row = document.createElement("tr")

    const cellCheckbox = document.createElement("td")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.classList.add("row-checkbox")
    cellCheckbox.appendChild(checkbox)

    const cellName = document.createElement("td")
    cellName.textContent = item.name

    const cellEmail = document.createElement("td")
    cellEmail.textContent = item.email

    const cellDate = document.createElement("td")
    cellDate.textContent = item.date

    const cellSalary = document.createElement("td")
    cellSalary.textContent = `$${item.salary}`

    const cellStatus = document.createElement("td")

    const statusText = document.createElement("span");

    // Assign a class based on the status value
    if (item.status === "Resigned") {
        statusText.classList.add("status-resigned");
    } else if (item.status === "Current") {
        statusText.classList.add("status-current");
    } else if (item.status === "Professional") {
        statusText.classList.add("status-professional");
    }

    statusText.textContent = item.status;
    cellStatus.appendChild(statusText);

    const cellAction = document.createElement("td")
    const actionDiv = document.createElement("div")

    const threeDotButton = document.createElement("button")
    threeDotButton.classList.add("btn", "btn-link")
    threeDotButton.innerHTML = '<i class="fas fa-edit"></i>'
    threeDotButton.onclick = () => openEditModal(index)
    actionDiv.appendChild(threeDotButton)
    cellAction.appendChild(actionDiv)

    row.append(cellCheckbox, cellName, cellEmail, cellDate, cellSalary, cellStatus, cellAction)
    tableBody.appendChild(row)
})

    updateTotalEntries()
}


//funvtion for update total entries
function updateTotalEntries() {
    const totalEntries = filteredData.length
    const start = (currentPage - 1) * entry + 1
    const end = Math.min(start + entry - 1, totalEntries)
    document.getElementById("total-entries").textContent = `${start} to ${end} of ${totalEntries} entries`
}

function updatePagination() {
    const pagination = document.getElementById('pagination')
    const totalPages = Math.ceil(filteredData.length / entry)
    let paginationHTML = ''


    // If totalPages is less than or equal to 5, show all pages
    if (totalPages <= 3) {
        for (let i = 1; i <= totalPages; i++) {
            paginationHTML += `
                <button class="${i === currentPage ? 'page_btn disabled' : 'non_page_btn disabled'}" onclick="changePage(${i})">
                    ${i}
                </button>
            `
        }
    } else {
        // Always show the first page button
        paginationHTML += `
            <button class="previous_btn" onclick="previousPage()">Previous</button><button class="${1 === currentPage ? 'page_btn disabled' : 'non_page_btn disabled'}" onclick="changePage(1)">
                1
            </button>
        `

        // If current page is more than 2, show ellipsis before the range
        if (currentPage > 2) {
            paginationHTML += `<span>..</span>`
        }

        // Determine the range of pages to show around the current page
        const start = Math.max(currentPage - 1, 2) // Start at least from page 2
        const end = Math.min(currentPage + 1, totalPages - 1) // End at most at totalPages - 1

        // Loop through and add page buttons in the range
        for (let i = start; i <= end; i++) {
            paginationHTML += `
                <button class="${i === currentPage ? 'page_btn disabled' : 'non_page_btn disabled'}" onclick="changePage(${i})">
                    ${i}
                </button>
            `
        }

        // If current page is near the end, show ellipsis after the range
        if (currentPage < totalPages - 2) {
            paginationHTML += `<span>..</span>`
        }

        // Always show the last page button
        paginationHTML += `
            <button class="${totalPages === currentPage ? 'page_btn disabled' : 'non_page_btn disabled'}" onclick="changePage(${totalPages})">
                ${totalPages}
            </button>
            <button class="next_btn" onclick="nextPage()">Next</button>
        `
    }

    // Update the pagination container's HTML
    pagination.innerHTML = paginationHTML
}


//function for previous button
function previousPage() {
    if (currentPage > 1) {
        changePage(currentPage - 1)
    }
}

//function for next button
function nextPage() {
    if (currentPage < data.length/entry) {
        changePage(currentPage + 1) 
    }
}

// Function to handle page change
function changePage(pageNumber) {
    currentPage = pageNumber
    renderTableData() 
    updatePagination() 
}


//funtion for all check boxes

function toggleAllCheckboxes() {
    const checkboxes = document.querySelectorAll(".row-checkbox")
    const selectAllCheckbox = document.getElementById("selectAll")
    checkboxes.forEach(checkbox => checkbox.checked = selectAllCheckbox.checked)
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block'
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none'
}

document.getElementById("record").addEventListener("click", () => openModal("addRecordModal"))

//function for save record

document.getElementById("saveRecord").addEventListener("click", function () {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const date = document.getElementById("date").value
    const salary = document.getElementById("salary").value
    const status = document.getElementById("status").value

    const newRecord = { name, email, date, salary, status, action: "" }
    data.push(newRecord)

    filteredData.push(newRecord) 

    closeModal('addRecordModal')
    renderTableData()
    updatePagination()
})

function openEditModal(index) {
    const record = data[index]
    currentEditingRecordIndex = index

    document.getElementById("edit-name").value = record.name
    document.getElementById("edit-email").value = record.email
    document.getElementById("edit-date").value = record.date
    document.getElementById("edit-salary").value = record.salary
    document.getElementById("edit-status").value = record.status

    openModal('editRecordModal')
}


//function to update record
document.getElementById("updateRecord").addEventListener("click", function () {
    const name = document.getElementById("edit-name").value
    const email = document.getElementById("edit-email").value
    const date = document.getElementById("edit-date").value
    const salary = document.getElementById("edit-salary").value
    const status = document.getElementById("edit-status").value


    data[currentEditingRecordIndex] = { name, email, date, salary, status, action: "" }
    filteredData[currentEditingRecordIndex] = { name, email, date, salary, status, action: "" }

    renderTableData()
    updatePagination()
    closeModal('editRecordModal')
})


//function to delete record
document.getElementById("deleteRecord").addEventListener("click", function () {
    data.splice(currentEditingRecordIndex, 1)
    filteredData.splice(currentEditingRecordIndex, 1) 
    closeModal('editRecordModal')
    renderTableData()
    updatePagination()
})


//intial render data
renderTableData()
updatePagination()
