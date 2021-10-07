var elements = document.getElementById("headerTopMenu").getElementsByTagName("li");

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    elements[i].addEventListener('click', function(e){
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
    }, false);
}
