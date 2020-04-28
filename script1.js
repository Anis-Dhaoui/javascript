// ******** Immediately Invoked Function Expressions (IIFE) ************
(function (window) {
    var mohamedGreeter = {};
    mohamedGreeter.name = "Mohamed ";
    var greeting = "Hi "
    mohamedGreeter.sayHi = function () {
        console.log(greeting + mohamedGreeter.name)
};
window.mohamedGreeter = mohamedGreeter;
})(window)