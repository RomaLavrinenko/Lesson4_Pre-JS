class MyString{
    reverse(str){
        return str.split('').reverse().join('');
    }
    ucFirst(str){
        return str[0].toUpperCase() + str.slice(1);
    }
    ucWords(str){
        return str.split(' ').map((elem) => elem[0].toUpperCase()+ elem.slice(1)).join(' ');
    }
}

const str = new MyString();
console.log(str.reverse('IVAN')); 
console.log(str.ucFirst('arsenal')); 
console.log(str.ucWords('arsenal arsenal arsenal')); 
