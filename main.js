var pname=document.getElementById("pname");
var pCatogery=document.getElementById("pCatogery");
var pPrice=document.getElementById("pPrice");
var pDescrip=document.getElementById("pDescrip");
var submit=document.getElementById("submit");
var tbody=document.getElementById("tbody");
var alert=document.getElementById("alert1");
var alert2=document.getElementById("alert2");
var alert3=document.getElementById("alert3");
var alert4=document.getElementById("alert4");

var Mood="create";
var tmp;
if(localStorage.getItem("allProducts")==null)
{
    var data=[];
}
else
{
    var data=JSON.parse(localStorage.allProducts);
}

    
   



function addProduct() {
    validateInputs();
   
    if(validateInputs())
    {
        if(Mood=="create")
        {
            var dataPro={
                pname:pname.value,
                pCatogery: pCatogery.value,
                pPrice:pPrice.value,
                pDescrip:pDescrip.value,
        
        
        
        
        
            }
            
                data.push(dataPro);
            
            
            
            localStorage.setItem("allProducts",JSON.stringify(data));
            
            displayData();
            clearForms();
    
        }
        else
        {
            data[tmp].pname=pname.value;
            data[tmp].pCatogery=pCatogery.value;
            data[tmp].pPrice=pPrice.value;
            data[tmp].pDescrip=pDescrip.value;
            localStorage.setItem("allProducts",JSON.stringify(data));
            submit.innerHTML="create";
            displayData();
            clearForms();
    
    
    
        }
    }
        
     
    
    

}
submit.onclick=function()
{
    addProduct();
}
displayData();
function displayData()
{
    var tr="";
   
    for(i=0;i<data.length;i++)
    {
        tbody.innerHTML=tr+=` 
        <tr>
         <td>${i}</td>
         <td>${data[i].pname}</td>
         <td>${data[i].pCatogery}</td>
         <td>${data[i].pPrice}</td>
         <td>${data[i].pDescrip}</td>
         <td><button type="button" class="btn btn-success mt-3" onclick=Update(${i})>Update</button></td>
         <td><button type="button" class="btn btn-danger mt-3" onclick=Delete(${i});>Delete</button></td>
        </tr>
         `

    }
}
function Delete(index)
{
    data.splice(index,1);
    localStorage.allProducts=JSON.stringify(data);
    displayData();

}
function clearForms()
{
    pname.value="";
    pCatogery.value="";
    pPrice.value="";
    pDescrip.value="";

}
function Update(index) {
    pname.value=data[index].pname;
    pCatogery.value=data[index].pCatogery;
    pPrice.value=data[index].pPrice;
    pDescrip.value=data[index].pDescrip;
    submit.innerHTML="Update";
    Mood="update";
    tmp=index;


}
function search()
{
    var search=document.getElementById("pSearch").value;
    for(i=0;i<data.length;i++)
    {
        var tr="";
        if(data[i].pname.toLowerCase().includes(search.toLowerCase()))
        {
            tbody.innerHTML=tr+=`
            <tr>
         <td>${i}</td>
         <td>${data[i].pname}</td>
         <td>${data[i].pCatogery}</td>
         <td>${data[i].pPrice}</td>
         <td>${data[i].pDescrip}</td>
         <td><button type="button" class="btn btn-success mt-3" onclick=Update(${i})>Update</button></td>
         <td><button type="button" class="btn btn-danger mt-3" onclick=Delete(${i});>Delete</button></td>
        </tr>

            `
        

        }
else
   {
    tbody.innerHTML="not found";
   }
    }

    
}
function validateProname()
{
  let  Proname=pname.value;
    let Regex=/^[A-Z][a-z]{3,10}$/
    if(Regex.test(Proname)==true&&pname.value!="")
    {
        pname.classList.remove("is-invalid");
        pname.classList.add("is-valid");
        alert.classList.replace("d-block","d-none");
        return true;




    }
    else
    {
        
        pname.classList.remove("is-valid");
        pname.classList.add("is-invalid");
        alert.classList.replace("d-none","d-block");
        return false;

    }
}
function validateProCatogery()
{
    let ProCatogery=pCatogery.value;
    let Regex=/[a-z]{5,}/
    if(Regex.test(ProCatogery)==true&&pCatogery.value!="")
    {
        pCatogery.classList.remove("is-invalid");
        pCatogery.classList.add("is-valid");
        alert2.classList.replace("d-block","d-none");
        return true;




    }
    else
    {
        
        pCatogery.classList.remove("is-valid");
        pCatogery.classList.add("is-invalid");
        alert2.classList.replace("d-none","d-block");
        return false;

    }
}
function validateDiscription()
{
    let ProDiscription=pDescrip.value;
    let Regex=/[a-z]{3,}/
    if(Regex.test(ProDiscription)==true&&pDescrip.value!="")
    {
        pDescrip.classList.remove("is-invalid");
        pDescrip.classList.add("is-valid");
        alert3.classList.replace("d-block","d-none");
        return true;




    }
    else
    {
        
        pDescrip.classList.remove("is-valid");
        pDescrip.classList.add("is-invalid");
        alert3.classList.replace("d-none","d-block");
        return false;

    }
}
function validatePrice()
{
    let ProPrice=pPrice.value;
    let Regex=/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/;
    if(Regex.test(ProPrice)==true&&pPrice.value!="")
    {
        pPrice.classList.remove("is-invalid");
        pPrice.classList.add("is-valid");
        alert4.classList.replace("d-block","d-none");
        return true;




    }
    else
    {
        
        pPrice.classList.remove("is-valid");
        pPrice.classList.add("is-invalid");
        alert4.classList.replace("d-none","d-block");
        return false;

    }
}
function validateInputs()
{
    validateProname();
    validateProCatogery();
    validateDiscription();
    validatePrice();
    if( validateProname()==true&&validateProCatogery()==true&&validateDiscription()==true&&validatePrice()==true)
    {
        return true;
    }
    else
    {
        return false;
    }
    
}

