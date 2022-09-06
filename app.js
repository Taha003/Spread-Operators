let arr=[1,[2,["hello world"]],3,[4,["good day"]]];
let arrNes=[...arr[1],[1]];
let arrNes1=[...arr[3],[1]];
console.log(arrNes)
console.log(arrNes1);



let obj={
     data:{
        name:"Taha",
        age:21,
        gender:"male",
        languages:{
            javaScript:"yes",
            html:"yes",
            css:"yes",
            python:"basics"
        }
    },

    marks:{
        maths:78,
        physics:{
            theory:81,
            practical:45,
        },
        chemistry:{
            theory:77,
            practical:42,
        }
    }
}
let obj2={...obj.data};
let obj22={...obj.data.languages};
let obj3={...obj.marks};
let obj33={...obj.marks.physics};
let obj333={...obj.marks.chemistry};

console.log(obj2);
console.log(obj22);
console.log(obj3);
console.log(obj33);
console.log(obj333);

