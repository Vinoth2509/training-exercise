const employeeDetails = [{
        name: "vinoth",
        age: 26,
        native: "tirunelveli",
        active: true
    },
    {
        name: "umar",
        age: 25,
        native: "chennai",
        active: true
    },
    {
        name: "dhanu",
        age: 28,
        native: "dubai",
        active: false
    },
    {
        name: "bala",
        age: 29,
        native: "kanchipuram",
        active: false
    }
]

// seperaet array same as above only add active falg true

function employeeList(employee) {
    var activeEmployees = []

    employee.forEach(element => {
        if (element.active) {
            activeEmployees.push(element)
        }


    });
    return activeEmployees
}
console.log(employeeList(employeeDetails))