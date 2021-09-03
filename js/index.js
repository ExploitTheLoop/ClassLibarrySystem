console.log('working');
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display{

    add(Book){

        let table = document.getElementById('tableBody');
        let elem = `<tr>
        <td>${Book.name}</td>
        <td>${Book.author}</td>
        <td>${Book.type}</td>
    </tr>`;
    table.innerHTML += elem;

    }
    validate(Book){

        if (Book.name.length < 2 || Book.author.length < 2) {
            return false
        }
        else {
            return true;
        }

    }
    clear(){

        let form = document.getElementById('libraryForm');
        form.reset()

    }
    show(type,displayMessage){

        let message = document.getElementById('message');
        let boldText;
        if(type==='success'){
            boldText = 'Success';
        }
        else{
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
       // message.innerHTML=html;

       setTimeout(function () {
        message.innerHTML = ''
    }, 5000);
      


    }
}

let form = document.getElementById('libraryForm');
form.addEventListener('submit',libraryFormSubmit)
function libraryFormSubmit(e){
    console.log('hello')

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    if(fiction.checked){
        type=fiction.value;
       // console.log(type);
    }
    if(programming.checked){
        type = programming.value;
    }
    if(cooking.checked){
        type = cooking.value;
    }
    
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }

    e.preventDefault();

}
