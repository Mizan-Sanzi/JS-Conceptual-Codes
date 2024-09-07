// module 22, video 22.7
const today = new Date();
console.log(today);
const date = new Date('2050-10-19');
console.log(date.getMonth());
console.log(date.getFullYear());

for (var i= 0; i <5; i++){
    setTimeout(function(){
        console.log(i);
    }, 100);
}