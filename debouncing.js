// Debouncing in JavaScript

let counter = 0;

const getData = () => {
  console.log("fetching data", counter++);
};

const doSomeMagic = function (fn, d) {
  let timer;
  return function () {
    let context = this,
      args = arguments;

    clearInterval(timer);

    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, d);
  };
};

const betterFunction = doSomeMagic(getData, 300);
