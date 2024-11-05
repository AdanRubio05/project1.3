const batForm = document.querySelector('.closed')
const vampForm = document.querySelector('.open')

batForm.addEventListener('click', () => {
    if(vampForm.classList.contains('open')) {
        vampForm.classList.add('active');
        batForm.classList.remove('active'); 
    }
}) ;

vampForm.addEventListener('click', () => {
    if(batForm.classList.contains('closed')) {
        batForm.classList.add('active'); 
        vampForm.classList.remove('active');
    }
}) ;

console.log('Listen to them! Children of the night, what music they make!') ;
console.log('By Adan Rubio') ;