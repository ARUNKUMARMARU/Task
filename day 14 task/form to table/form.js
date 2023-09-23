document.getElementById("dataform").addEventListener("submit", function (event) {
    event.preventDefault()
    
    var firstname= document.getElementById("firstname").value;
    var lastname= document.getElementById("lastname").value;
    var address= document.getElementById("address").value;
   // var pincode= document.getElementById("pincode").value;
    var gender= document.getElementById("gender").value;
    var food= document.getElementById("food").value;
    var country= document.getElementById("country").value;
    var state= document.getElementById("state").value;

    var table=document.getElementById("datatable").getElementsByTagName("tbody" [0])
    var newrow= table.insertRow(table.rows.length);

    var cell1=newrow.insertCell(0);
    var cell2=newrow.insertCell(1);
    var cell3=newrow.insertCell(2);
    var cell4=newrow.insertCell(3);
    var cell5=newrow.insertCell(4);
    var cell6=newrow.insertCell(5);
    var cell7=newrow.insertCell(6);
    var cell8=newrow.insertCell(7);

    cell1.innerHTML=firstname;
    cell2.innerHTML=lastname;
    cell3.innerHTML=address;
    cell4.innerHTML=pincode;
    cell5.innerHTML=gender;
    cell6.innerHTML=food;
    cell7.innerHTML=country;
    cell8.innerHTML=state;

    document.getElementById("dataform").reset();
});

