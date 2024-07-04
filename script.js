


const options = document.querySelectorAll('.options');
options.forEach(option => {
    option.addEventListener('click', () => {
        menutoggle(option)
    });
});
function menutoggle(option){
    let id = option.id
        let menu = option.children[1].classList
        let col = option.parentElement.parentElement.classList
        if(id == 'false'){
            option.classList.add('selectedbtn')
            menu.add("expandMenu")
            col.add('moveleft')
            option.id = 'true'
        }else{
            option.classList.remove('selectedbtn')
            menu.remove("expandMenu")
            col.remove('moveleft')
            option.id = 'false'
        }
}





