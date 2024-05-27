document.getElementById("year").innerHTML = new Date().getFullYear();

const navbar = document.querySelector('.nav-fixed');
window.onscroll = () => {
    if (window.scrollY > 200) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

const searchBarBtn = document.querySelector('.s-button');
searchBarBtn.addEventListener('click', function(){
    const searchBarInput = document.querySelector('.search-input').value;
    if(searchBarInput !== ''){
        document.querySelector('.search-suggestions').style.display = 'block';
    }
});

const closeButton = document.querySelector('.clear-btn');
closeButton.addEventListener('click', function(){
    document.querySelector('.search-suggestions').style.display = 'none';
});
