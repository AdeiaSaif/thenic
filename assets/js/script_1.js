const mobileMenuToggle = document.getElementById('id_14');
const mobileMenu = document.getElementById('id_13');
const mobileMenuIcon = mobileMenuToggle.querySelector('i');

mobileMenuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('cls_3');

    if (mobileMenu.classList.contains('cls_3')) {
        mobileMenuIcon.classList.remove('cls_18');
        mobileMenuIcon.classList.add('fa-times');
    } else {
        mobileMenuIcon.classList.remove('fa-times');
        mobileMenuIcon.classList.add('cls_18');
    }
});

const mobileNavLinks = document.querySelectorAll('.cls_71 a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', function () {
        mobileMenu.classList.remove('cls_3');
        mobileMenuIcon.classList.remove('fa-times');
        mobileMenuIcon.classList.add('cls_18');
    });
});

document.addEventListener('click', function (event) {
    if (!mobileMenuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.remove('cls_3');
        mobileMenuIcon.classList.remove('fa-times');
        mobileMenuIcon.classList.add('cls_18');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
