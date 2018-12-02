function carry(a) {
    if (a.length == 0) return a;
    var arg = [];
    return n(a, 1, arg);
}
function n(a, i, arg) {
    return (x) => { arg.push(x);
    if( i == a.length) return a(...arg);
    return n(a, i+1, arg);
    };
}