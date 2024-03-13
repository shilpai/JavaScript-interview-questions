const obj = {
    name: 'shilpa',
    place: 'pune',
    getName: function(){
        return this.name
    }
}
// console.log(obj);

const obj2 = {
    name: 'pooja',
    role: 'web developer',
    __proto__:obj
}
// console.log(obj2.getName());

const obj3 = {
    graduation: 'engineering',
    __proto__: obj2

}
// console.log(obj3);

// const  object = new Object();
// console.log(object);

// const array = new Array();
// console.log(array);

Array.prototype.show = function(){
    return this;
}

const place = ["mumbai"]
console.log(place)