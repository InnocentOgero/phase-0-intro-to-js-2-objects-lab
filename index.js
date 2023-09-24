// Write your solution in this file!
let employee={name:'victor Wekesa',streetAdress:'Greenspan'}
function updateEmployeeWithKeyAndValue(employee, key, value){
    let newObject=Object.assign({},employee)
    newObject[key]=value;
    return newObject
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    let newObject=Object.assign({},employee);
    delete newObject[key]
    return newObject
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}