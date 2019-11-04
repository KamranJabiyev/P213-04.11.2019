// let items = document.querySelectorAll(".item");
// let drop_area = document.querySelector(".drop_area");
// // let id;
// for (let item of items) {
//     item.ondragstart = function(event) {
//         event.dataTransfer.setData("text", this.id);
//         // console.log(event.target)
//         // id = this.id;
//     }
// }

// drop_area.ondragover = e => e.preventDefault();

// drop_area.ondrop = function(event) {
//     let id = event.dataTransfer.getData("text");
//     let elm = document.getElementById(id);
//     elm.style.margin = "50px";
//     this.appendChild(elm)

// }

// item.ondragend = function() {
//     console.log("drag bitti")
// }

// item.ondrag = function() {
//     console.log("drag davam edir")
// }

// drop_area.ondragenter = function() {
//     console.log("element daxil oldu")
// }

// drop_area.ondragleave = function() {
//     console.log("element chixdi")
// }

//Task

let logo = document.getElementById("logo");
let left_drop = document.querySelector(".left_drop");
let rigth_drop = document.querySelector(".rigth_drop");
let id;
logo.ondragstart = function() {
    id = this.id;
    // console.log(id)
}

rigth_drop.ondragover = e => e.preventDefault();
left_drop.ondragover = e => e.preventDefault();

rigth_drop.ondrop = function(e) {
    let elm = document.getElementById(id);
    // console.log(elm)
    e.target.appendChild(elm)
}

left_drop.ondrop = function(e) {
    let elm = document.getElementById(id);
    // console.log(elm)
    e.target.appendChild(elm)
}