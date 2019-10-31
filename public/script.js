const list = document.getElementById('list')
const subBtn = document.getElementById('put-work')
const workText = document.getElementById('work-text')

let worksIds = [];
function addDelBtn(btn, id){
    document.getElementById(btn).addEventListener('click', ()=>{
        document.getElementById(id).remove()
    })
}

function changeGray(idCheck, idP){
    document.getElementById(idP)

    document.getElementById(idCheck).addEventListener('click', ()=>{
        if (document.getElementById(idCheck).checked) {
            document.getElementById(idP).className = 'work-finished'
        } else{
            document.getElementById(idP).className = 'work-text'
        }
    })
}

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


    changeGray(`${newID}In`, `${newID}P`)
})

