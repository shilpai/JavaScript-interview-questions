let person = {
  firstName: "Shilpa ",
  lastName: "Sonule",
};

let printFullname = function (city, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + city + " " + state
  );
};

printFullname.call(person, "Pune", "Maharashtra");

let person2 = {
  firstName: "Jigiksha",
  lastName: "Zade",
};

// Function Borrowing
// Call method
printFullname.call(person2, "Gadchiroli", "Maharashtra");

// Apply method
printFullname.apply(person2, ["Gadchiroli", "Maharashtra"]);

// Bind Method
let printMyName = printFullname.bind(person, "Gadchiroli", "Maharashtra");
printMyName();
