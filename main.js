var bookmarkName = document.getElementById('BookmarkName');
var webSiteURL = document.getElementById('WebSite URL');
var btnSubmit = document.getElementById('BtnSumbit');
var tableContent = document.getElementById('tableContent');


var markList;

if (localStorage.getItem('list') == null) {

    markList = []
}
else {
    markList = JSON.parse(localStorage.getItem('list')) // get data from local storge and convert array

    display() // when open browser the data still there
}


btnSubmit.onclick = function () {

    addBookMark()


}





// add Book Marker
function addBookMark() {
    if(validationboolmarkName()&&validationboolmarkurl()){
        
  
    var markobj = {
        Nmark: bookmarkName.value,
        Website: webSiteURL.value,
    }

    markList.push(markobj)
    localStorage.setItem('list', JSON.stringify(markList)) // storage of  array and converting it into texts
    clear()
    display()
}

}

// Clear inputs

function clear() {
    bookmarkName.value = null
    webSiteURL.value = null
}

// display data in html

function display() {
    var box = ''
    for (var i = 0; i < markList.length; i++) {

        box += `
        <tr>
        <td class="fw-semibold">${i + 1}</td>
        <td class="fw-semibold ">${markList[i].Nmark}</td>
        <td><button type="button" class="btn text-white visit"> <i class="fa-solid fa-eye pe-1"></i>
                Visit</button></td>
        <td><button type="button" class="btn text-white bg-danger " onclick="deletFun(${i})"> <i
                    class="fa-solid fa-trash pe-1"></i> Delete</button></td>
    </tr>
        
        `
    }
    tableContent.innerHTML = box

}

// delet data


function deletFun(index) {
    markList.splice(index, 1)
    localStorage.setItem('list', JSON.stringify(markList))
    display()
}




// validation name

function validationboolmarkName() {
    var regex = /^([a-z]{3})[a-z]*$/i
    if (regex.test(bookmarkName.value)) {
        console.log('match');
        bookmarkName.nextElementSibling.classList.replace('d-block', 'd-none')
        bookmarkName.classList.add('is-vaild')
        bookmarkName.classList.remove('is-invaild')
        return true
    }
    else {
        console.log('not match');
        bookmarkName.nextElementSibling.classList.replace('d-none', 'd-block')

        bookmarkName.classList.add('is-invaild')
        bookmarkName.classList.remove('is-vaild')
        return false
    }
}

// validation url site
function validationboolmarkurl() {
    var regex =  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    
    

    if (regex.test(webSiteURL.value)) {
        
        webSiteURL.nextElementSibling.classList.replace('d-block', 'd-none')
        webSiteURL.classList.add('is-vaild')
        webSiteURL.classList.remove('is-invaild')
        return true
    }
    else {
       
        webSiteURL.nextElementSibling.classList.replace('d-none', 'd-block')

        webSiteURL.classList.add('is-invaild')
        webSiteURL.classList.remove('is-vaild')
        return false
    }
}

