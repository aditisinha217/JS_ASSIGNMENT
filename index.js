var firstPerson={
    firstName: "Aditi",
    lastName: "Sinha",
    officeAdress: "Jabalpur"
};

var secondPerson={
    firstName: "Shikha",
    lastName: "Singh",
    officeAdress: "Jabalpur"
};

var thirdPerson={
    firstName: "Rohit",
    lastName: "Kumar",
    officeAdress: "Bhagalpur"
};

function displayPerson(person){
    console.log("First Name:" + person.firstName);
    console.log("Last Name:" + person.lastName);
    console.log("Office Adress:" + person.officeAdress);
}

displayPerson(firstPerson);
 displayPerson(secondPerson);
 displayPerson(thirdPerson);

