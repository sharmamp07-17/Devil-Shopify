const Switch = document.getElementById('Switch')
const turn = document.getElementById('on-off')
const FaHeart = document.querySelectorAll('.fa-heart')

Switch.addEventListener('click', () => {
    document.body.classList.toggle('chang')
    if (document.body.classList.contains('chang')) {
        turn.classList.remove('fa-toggle-off')
        turn.classList.add('fa-toggle-on')
        turn.style.color = "#fff"
    }
    else {
        turn.classList.remove('fa-toggle-on')
        turn.classList.add('fa-toggle-off')
        turn.style.color = "#000"
    }
})

FaHeart.forEach(hearts => {
    hearts.addEventListener('click', () => {
        hearts.classList.toggle('fa-solid')
    })
})

const fSearch = document.querySelector('.fa-search')
fSearch.addEventListener('click', () => document.getElementById('text').style.borderBottom = "2px solid crimson")


const NavLink = document.getElementById('navLink')
const Slide = document.getElementById('search')
const Menu = document.getElementById('Menu')
Menu.addEventListener('click', () => {
    Menu.classList.toggle('fa-xmark')

    if (Menu.classList.contains('fa-xmark')) {
        document.getElementById('navLink').style.display = "block"
        NavLink.classList.add('show')
        Slide.classList.add('slide')
    }
    else {
        NavLink.classList.remove('show')
        Slide.classList.remove('slide')
    }

})

const AncHor = document.querySelectorAll('.anchor')
AncHor.forEach(anchor => {
    anchor.addEventListener('click', () => {
        Menu.classList.remove('fa-xmark')
        NavLink.classList.remove('show')
        Slide.classList.remove('slide')
    })
})

const SrhBtn = document.getElementById('srhbtn')
SrhBtn.addEventListener('click', () => {
    Menu.classList.remove('fa-xmark')
    NavLink.classList.remove('show')
    Slide.classList.remove('slide')
})

function ShowMore() {
    const Extra = document.querySelectorAll('.extra')
    Extra.forEach(extra => {
        extra.classList.remove('invisible')
    })
    document.getElementById('more').classList.add('invisible')
    document.getElementById('less').classList.remove('invisible')
}

function ShowLess() {
    const Extra = document.querySelectorAll('.extra')
    Extra.forEach(extra => {
        extra.classList.add('invisible')
    })

    document.getElementById('less').classList.add('invisible')
    document.getElementById('more').classList.remove('invisible')
}

const ShopNow = document.querySelectorAll('.now')
ShopNow.forEach(now =>{
    now.addEventListener('click', () =>{
        alert('This Page is Currently Inactive')
        alert('It just a demo Page')
    })
})