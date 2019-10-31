const list = document.getElementById('list')
const subBtn = document.getElementById('put-work')
const workText = document.getElementById('work-text')

let worksIds = [];
let checks = {};
function addDelBtn(btn, id){
    document.getElementById(btn).addEventListener('click', ()=>{
        document.getElementById(id).remove()
    })
}

// function changeGray(idCheck, idP){
//     temp = document.getElementById(idCheck)
//     text = document.getElementById(idP)
//     temp.addEventListener('click'()=>{
//         if (temp.checked) {
            
//         }
//     })
// }

subBtn.addEventListener('click', ()=>{
    let newID = worksIds.length++
    worksIds.push(newID)
    list.insertAdjacentHTML('beforeend', 
    `<div id="${newID}">
        <button id="${newID}Btn">X</button>
        <p id="${newID}P" class="work-text">${workText.value}</p>
        <input id="${newID}In" class="checkbox" type="checkbox">
    </div>`)

    addDelBtn(`${newID}Btn`, newID)
    checks[`${newID}In`] = document.getElementById(`${newID}In`)
    checks[`${newID}P`] = document.getElementById(`${newID}P`)

    checks[`${newID}In`].addEventListener('click', ()=>{
        if (checks[`${newID}In`].checked) {
            checks[`${newID}P`].className = 'work-finished'
        } else{
            checks[`${newID}P`].className = 'work-text'
        }
    })

    
})

