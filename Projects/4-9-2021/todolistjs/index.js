// console.log('hi');

setInterval(display,500);

var task = ['go to meet', 'join lect', 'send hi to onkar'];

function add(){
    let work = document.querySelector('#task-input').value; 
    task.unshift(work);
}

function display(){
    document.getElementById("display-div").innerHTML = "";
    for (let i = 0; i < task.length; i++) {
        var p = document.createElement("p");
        p.innerHTML = task[i]
        document.getElementById("display-div").appendChild(p);
        
        var d = document.createElement("button");
        d.id= i;
        d.innerHTML = "Delete";
        d.onclick =  deleteFun(i);        
        document.getElementById("display-div").appendChild(d);
        
    }
}

function deleteFun(index){
    console.log('hi man');
    
}