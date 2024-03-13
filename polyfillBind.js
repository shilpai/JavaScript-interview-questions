/**
 * What is polyfill
 - Polyfill is a fallback for a method that is not supported by the browser by default.
 */

let person = {
  firstName: "Shilpa",
  lastName: "Sonule",
};

let printName = function (hometown, state) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      " " +
      hometown +
      " " +
      state
  );
};

let printMyName = printName.bind(person, "Gadchiroli", "Maharashtra");
printMyName();

Function.prototype.myBind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.myBind(person, "Gadchiroli", "Maharashtra");
printMyName2();
