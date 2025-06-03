// let id_b = document.getElementById("id_b");
let result = document.getElementById("result");
let btn = document.getElementById("btn");


function toArray(obj){
    let oueterArray = [];
    let innerArray;
    for(let k in obj){
        innerArray = [];
        innerArray.push(k);
        innerArray.push(obj[k]);
        const inner = innerArray.join(',');
        oueterArray.push(innerArray);
    }
    const final = (JSON.stringify(oueterArray));
    result.textContent += `${final}`;

    // oueterArray.forEach(element => {
    //     console.log(element[0],element[1]);
    // });
    /*result.textContent += `${()=>{

    }}`;*/
}

btn.onclick = () => {
    toArray({name:"oussama",age:"20",wife:"ninja"})
};