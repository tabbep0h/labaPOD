function js_style(){
    let text = document.getElementById('text')
    text.style = "font-size: 30px;color:red;background:blue;border:2px black solid;width:300px"
    console.log("Ширина экрана = "+screen.width)
    console.log("Высота экрана = "+screen.height)
}
function getFormvalue(){
    event.preventDefault();
    let form = document.querySelector("#form1")
    let abzac = document.createElement('p')
    abzac.innerHTML = `${form.fname.value}<br>${form.lname.value}` 
    document.getElementById("form1").appendChild(abzac)
}
function getAttributes(){
    let data = document.querySelector('#w3r')
    let href = data.getAttribute('href')
    let hreflang = data.getAttribute('hreflang')
    let rel = data.getAttribute('rel')
    let target = data.getAttribute('target')
    let type = data.getAttribute('type')
    let arr = []
    arr.push(href,hreflang,rel,target,type)
    console.log(arr)
    for (let i = 0;i < arr.length;i++){
        let p = document.createElement('p')
        p.classList.add(`style${i}`)
        p.innerHTML = arr[i]
        document.querySelector("#div").appendChild(p)
    }
}
function insert_Row(){
    let table = document.querySelector("#sampleTable")
    let row = table.insertRow()
    row.innerHTML = "<td>Row1 cell1</td><td>Row1 cell2</td>"
}