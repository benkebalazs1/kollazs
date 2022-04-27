

van plakat01 = 2000
van plakat02 = 1500
van plakat03 = :

function hozzaad(termek) {
    db = Number (prompt("db?"))
    localStorage.setItem(termek, db)
}

 function TÖRLÉS() {
    localStorage.clear()
}

function KOSÁR() {
    var list=""
    var termek="localStorage"
    list + ="<tr> <th> név:  </th> <th>db</th> <th>ár</th> </tr>"
    list + ="<tr> <td>"+termék+"</td>"
}

document.getElementById('KOSÁR').innerHTML = list { 

}