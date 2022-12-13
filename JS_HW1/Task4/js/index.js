const roomsOnFloor = 3;
const floors = 9;
const roomNumber =223;
let roomsInBuilding=floors*roomsOnFloor;
let porch = roomNumber/roomsInBuilding;
let w;
let c;
let q;
let fixedPorch;
if (porch<=1) {
    fixedPorch=1;
}else { 
    c=Math.trunc(porch);
    q=porch-c;
    w=porch-q;
    fixedPorch=w+1;
}
console.log(fixedPorch)

let r = w*roomsInBuilding;
let t = roomNumber-r;
let floor = t/roomsOnFloor;
let fixedFloor;
let u;
let i;
let o;
if (floor<=1){
    floor=floor+1;
}else { 
    u=Math.trunc(floor);
    i=floor-u;
    o=floor-i;
    fixedFloor=o+1;
}

console.log(fixedFloor)










