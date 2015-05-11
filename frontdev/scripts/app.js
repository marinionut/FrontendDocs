/**
 * Created by Ionutz on 11.05.2015.
 */
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    { firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }];
    function showList() {
        var myTable = '<table border="1"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>Vizualizare</th><th>Stergere</th></tr>';
        for(var i in employeesList) {
            var detailsEmployee = employeesList[i].firstName+" "+employeesList[i].lastName+" "+employeesList[i].phone+" "+employeesList[i].salary;
            myTable += '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td>' +
                '<td><button type="button" onclick="alert(\'' + detailsEmployee + '\')" class="btn">Vezi</button></td>' +
                '<td><button type="button" onclick="deleteEmployee('+i+')"; class="btn">Sterge</button></td></tr>';
        }
        myTable += '<tr><td>'+ uniqueFirstName() +'</td><td>'+ mostUsedFirstName() + '</td><td>'+ phoneNumber() +'</td><td>'+ averageSalary() +'</td></tr>';
        myTable += '</table>';
        var container = document.getElementById('listcontainer');
        container.innerHTML = myTable;
    }
    var Employee = function (firstName, lastName, phone, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.salary = salary;
    }
    function addEmployee() {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var phone = document.getElementById("phone").value;
        var salary = document.getElementById("salary").value;
        employeesList.push(new Employee(firstName, lastName, phone, salary));
        showList();
    }

    function salaryTotal() {
        var sumOfSalary = 0;
        for(var i in employeesList) {
            sumOfSalary += parseFloat(employeesList[i].salary);
        }
        var container = document.getElementById('listcontainer');
        container.innerHTML = 'Total Salary: ' + sumOfSalary;
    }

    function deleteLastEmployee() {
        employeesList.pop();
        showList();
    }

    function deleteEmployee(i) {
        employeesList.splice(i, 1);
        showList();
    }

    function uniqueFirstName() {
        var count = 0;
        var ok = true;
        var truthTable = [];
        for(var i = 0; i < employeesList.length; i++) {
            truthTable.push('ok'.toString());
        }

        for(var i = 0; i < employeesList.length ;  i++) {
            if(truthTable[i] == 'ok'.toString()) {
                for (var j = i + 1; j < employeesList.length; j++) {
                    if (employeesList[i].firstName.localeCompare(employeesList[j].firstName) == 0) {
                        truthTable[j] = 'notOk';
                        ok = false;
                    }
                }
                count++;
                truthTable[i] = 'notOk';
            }
        }
        return count;
    }

    function mostUsedFirstName() {
        var indexTable = [];
        for(var i = 0; i < employeesList.length; i++) {
            indexTable[i] = 0;
        }
        for (var i = 0; i < employeesList.length; i++) {
            for (var j = 0; j < employeesList.length; j++) {
                if (employeesList[i].firstName.localeCompare(employeesList[j].firstName) == 0) {
                    indexTable[i] += 1;
                }
            }
        }

        var max = -1;
        for (var i = 0; i < employeesList.length; i++) {
            if (indexTable[i] > max) {
                max = i;
            }
        }

        return employeesList[max].firstName;
    }

    function phoneNumber() {
        var list = [];
        for (var i = 0; i < 10; i++) {
            list[i] = 0;
        }

        for(var i = 0; i < employeesList.length; i++) {
            for (var j = 0; j < employeesList[i].phone.length; j++) {
                list[parseInt(employeesList[i].phone[j])] += 1;
            }
        }
        strAux = "";
        keysSorted = Object.keys(list).sort(function (a, b) {
            return list[b] - list[a];
        });
        for(var i = 0; i < 4; i++) {
            strAux += keysSorted[i].toString() + ", ";
        }
        strAux += keysSorted[i].toString();
        return strAux;
    }

    function averageSalary() {
        var sum = 0.0;
        for(var i = 0; i < employeesList.length; i++) {
            sum += parseFloat(employeesList[i].salary);
        }
        return sum/employeesList.length;
    }

function compareFunction(key) {
    return function (a, b) {
        if (a[key] < b[key]) {
            return -1;
        }
        if (a[key] > b[key]) {
            return 1;
        }
        return 0;
    }
}

function sorter() {
    var sortOption = document.getElementById('sortOption');
    var option = parseInt(sortOption.value);
    var key = '';
    switch (option) {
        case 1:
            key = 'firstName';
            break;
        case 2:
            key = 'lastName';
            break;
        case 3:
            key = 'phone';
            break;
        case 4:
            key = 'salary';
            break;
        default:
            break;
    }
    if (key) {
        employeesList.sort(compareFunction(key));
        showList();
    }
}