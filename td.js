console.log("working")
tit = document.getElementById("title")
des = document.getElementById("description")




let Add = document.getElementById("add")

Add.addEventListener('click', update);



function update (){

console.log("update")

list = localStorage.getItem('list')




if(list == null){

     items = [];

     items.push([tit.value,des.value])
     localStorage.setItem('list', JSON.stringify(items));
}

else {

items = JSON.parse(list);

items.push([tit.value,des.value])
localStorage.setItem('list', JSON.stringify(items));




}

}

showitems();

function showitems(){

    list = localStorage.getItem('list')




if(list == null){

     items = [];

     
     localStorage.setItem('list', JSON.stringify(items));
}

else {

items = JSON.parse(list);


localStorage.setItem('list', JSON.stringify(items));




}

    let show = document.getElementById("tablebody")

    let str = " ";

    items.forEach(function(element,index){

        str += 
        `
        <tr>
                        <th scope="row">${index}</th>
                        <td>${element[0]}</td>
                        <td>${element[1]}</td>
                        <td> <button class="btn btn-primary" onclick="deleted(${index})">Delete</button></td> 
                        </tr>
        ` ;
    })

    show.innerHTML = str;
    
}


function deleted(item){

    list = localStorage.getItem('list')

    items = JSON.parse(list);

    items.splice(item,1)

    localStorage.setItem('list', JSON.stringify(items));

}


showitems();