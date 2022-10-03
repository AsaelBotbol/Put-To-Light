var el = document.getElementById('container');

el.addEventListener('click', function() {
    if (this.style.backgroundColor === 'blue') {
        this.style.backgroundColor = '';
    } else {
        this.style.backgroundColor = 'blue';
    }
});