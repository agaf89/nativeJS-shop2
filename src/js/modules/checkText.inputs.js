const checkNumInput = (selector) => {
    const txtInputs = document.querySelectorAll(selector);
    txtInputs.forEach ( input => {
        input.addEventListener( 'keypress', function(e){
            if (e.key.match(/[^а-яё 0-9]/ig)){
                e.preventDefault();
            } 
        });
        input.addEventListener( 'change', function(e){
            e.target.value = '';
        });
    });
};

export default checkNumInput;