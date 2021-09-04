// console.log('hi');

setInterval(display, 500);

var task = ['go to meet', 'join lect', 'take notes'];

function add() {
    let work = document.querySelector('#task-input').value;
    task.unshift(work);
    document.querySelector('#task-input').value = '';
}

function display() {
    document.getElementById("display-div").innerHTML = "";
    for (let i = 0; i < task.length; i++) {
        var p = document.createElement("p");
        p.id = "task-"+i;
        p.innerHTML = task[i]
        document.getElementById("display-div").appendChild(p);

        var u = document.createElement('button');
        u.innerHTML = "Update";
        u.onclick = async function(){
            var update = document.getElementById('task-'+i);
            tag = document.createElement('input');
            update.replaceWith(tag);
            task[i] = tag.value;
        };
        document.getElementById("display-div").appendChild(u);        

        var d = document.createElement("button");
        d.innerHTML = "Delete";
        d.onclick = function () {
            task.splice(i, 1);
        };
        document.getElementById("display-div").appendChild(d);
    }
}

function clr() {
    task = [];
}
