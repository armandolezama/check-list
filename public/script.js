const list = document.getElementById('list');
const subButton = document.getElementById('put-work');
const workText = document.getElementById('work-text');

let worksIds = [];

const addDeleteButton = (button, id) => {
    document.getElementById(button).addEventListener('click', () => {
        document.getElementById(id).remove();
    });
};

const changeGray = (idCheck, idP) => {
    const checkboxNode = document.getElementById(idCheck);
    const pNode =  document.getElementById(idP);
    checkboxNode.addEventListener('click', () => {
        pNode.className = checkboxNode.checked ? 'work-finished': 'work-text';
    });
};

subButton.addEventListener('click', () => {
    let newID = worksIds.length++;
    worksIds.push(newID);
    list.insertAdjacentHTML('beforeend', 
    `<div id="${newID}">
        <button id="${newID}Btn">X</button>
        <p id="${newID}P" class="work-text">${workText.value}</p>
        <input id="${newID}In" class="checkbox" type="checkbox">
    </div>`);

    addDeleteButton(`${newID}Btn`, newID);
    changeGray(`${newID}In`, `${newID}P`);
})

