document.addEventListener("DOMContentLoaded", function(){
    var count = 3;
var actions = document.querySelectorAll(".selects");
 var l = Array.from(actions);

var inputs = document.getElementsByTagName("input")

var trcount = document.querySelectorAll('#trcount');
console.log(trcount)
// handling clicks
var add_btn = document.getElementById('add-btn');
add_btn.addEventListener('click', function(){
    var idfield = document.getElementById('idfield');
    idfield.value = count
   console.log('clicked')
})

var actions_btn = document.querySelectorAll(".ok-btn");
 
for (let i = actions_btn.length - 1; i >= 0; i--) { 
    let b = actions_btn[i]; 
    b.addEventListener("click", handleClickOk)
}

    function handleClickOk(){
       let actionValue =  this.parentNode.querySelector("select").value;
       let tbody = this.parentNode;
       let tbody_tr =   tbody.parentNode
       let tds = tbody_tr.querySelectorAll("td")
       let tabletxt = Array.from(tds)
       /*
       for (let i = tds.length - 1; i >= 0; i--) { 
        let b = actions_btn[i]; 
        b.addEventListener("click", handleClickOk)
    }*/
       let _id = tds[0].innerText;
       let fname = tds[1].innerText;
       let lname = tds[2].innerText;
       let email = tds[3].innerText;
       let telephone =tds[4].innerText;

       
       console.log()
        var lower = String(actionValue).toLowerCase();
       if(lower == "choose.."){
           console.log("yo chose nothing")
       }
       if(lower == "edit"){
        console.log("yo chose edit");
        var clickbox = document.getElementById("click");
        //console.log(clickbox.checked)
        for (let para of Array.from(inputs)) {
            if (para.getAttribute("name") == "id") { 
            
                    para.value = _id
               } 
               if (para.getAttribute("name") == "fname") { 
                para.value = fname
               }
               if (para.getAttribute("name") == "lname") { 
                para.value = lname
               }
               if (para.getAttribute("name") == "email") { 
                para.value =email
               }
               if (para.getAttribute("name") == "telephone") { 
                para.value = telephone
               }
           } 
        clickbox.checked = true;
       }
       if(lower == "delete"){
            if(alert("are you sure?")){
                para.remove()
            }

       }
    }



    //clear text button
var cleartxt = document.getElementById("clear");
cleartxt.addEventListener('click', function(){
    for (let para of Array.from(inputs)) {
        /*
        if (para.getAttribute("name") == "id") { 
            para.value = '';
            
           } 
           */
           if (para.getAttribute("name") == "fname") { 
            para.value = '';
           }
           if (para.getAttribute("name") == "lname") { 
            para.value = '';
           }
           if (para.getAttribute("name") == "email") { 
            para.value = '';
           }
           if (para.getAttribute("name") == "telephone") { 
            para.value = '';
           }
       } 
})

// handling input values
//////1. SAVING

var addbtn101 = document.getElementById('add-btn');
 addbtn101.addEventListener('click', function(){
    
  
     console.log('btn add clicked');
     var fname101, lname101, id101, email101, telephone101, fb101, ig101, twitter101;
    
   let countempty = 0;
     for (let para of Array.from(inputs)) {
        if (para.getAttribute("name") == "id") { 
            
            sessionStorage.setItem('count', count)
            
            var count2 = sessionStorage.getItem('count')
            let count3 = Number(count2)+1
            count=count3;
         
               
            
            if(para.value === '' || para.value.length<1 || para.value === ' ' ){
                countempty+=1
            }
            else{
                if(para.value !==count ){
                    alert('unable to edit: Added it to the list')
                    break;
                }
                // id101 = para.value;
                 id101 = count;
               
            }
            
           }
        if (para.getAttribute("name") == "fname") { 
            if(para.value === '' || para.value.length<1 || para.value === ' ' ){
                countempty+=1
            }
           
                console.log(para.value+ 'para value')
               
                fname101 =  11;
            
            
            
        }
        if (para.getAttribute("name") == "lname") { 
            if(para.value === '' || para.value.length<1 || para.value === ' ' ){
                countempty+=1
            }
            else{
               
                lname101 = para.value;
            }
            
            
        }
        if (para.getAttribute("name") == "email") { 
            if(para.value === '' || para.value.length<1 || para.value === ' ' ){
                countempty+=1
            }
            else{
               
                email101 = para.value;
            }
            
            
        }
        if (para.getAttribute("name") == "telephone") { 
            if(para.value === '' || para.value.length<1 || para.value === ' ' ){
                countempty+=1
            }
            else{
               
                telephone101 = para.value;
            }
            
            
        }
        if (para.getAttribute("name") == "fb") { 
            fb101 = para.checked;
        }
        if (para.getAttribute("name") == "ig") { 
            ig101 = para.checked;
        }
        if (para.getAttribute("name") == "twitter") { 
            twitter101 = para.checked;
        }
     }

     let newContact = {
         id: count,
         firstName: fname101,
         lastName: lname101,
         email: email101,
         telephone: telephone101,
         socialMedia: {
             facebook: fb101,
             instagram: ig101,
             twitter: twitter101
         }
     }
    

     if(countempty>1){
         
         alert('no filled should be empty ')
         return;
     }
     else{
     localStorage.setItem('meme',  JSON.stringify(newContact));
     function getItems(name){
       return  localStorage.getItem(name)
      
     }
     let contactSaved =  getItems('meme')
     
    
console.log(JSON.stringify(contactSaved))
    


//adding saved item to DOM
var tbody = document.getElementById('tablebody');

var elem = document.createElement("tr");
//var trcount = document.querySelectorAll('#trcount');
elem.setAttribute("value", 'trcount')  ;
for(let i =0;i<9;i++){
    // comback heregjhfsjkfhajkdshkgadsjkghakjsdhgde 

    let tdelem = document.createElement("td");
    if(i== 0){
        tdelem.innerHTML = contactSaved.id
        tdelem.innerHTML = count;
        elem.appendChild(tdelem);
    }
    if(i== 1){
        tdelem.innerHTML = contactSaved.firstName;
        elem.appendChild(tdelem);
    }
    if(i== 2){
        tdelem.innerHTML =  newContact.lastName;
        elem.appendChild(tdelem);
    }
    if(i== 3){
        tdelem.innerHTML =  contactSaved.email
        elem.appendChild(tdelem);
    }
    if(i== 4){
        tdelem.innerHTML =  contactSaved.telephone;
        elem.appendChild(tdelem);
    }
    if(i== 5){
        if(contactSaved.socialMedia.facebook == true){
            tdelem.innerHTML = '<a href="#"><span class= "on" >fb</span></a>'
            elem.appendChild(tdelem);
        }else {
            tdelem.innerHTML = '<a href="#"><span class= "off" >fb</span></a>'
            elem.appendChild(tdelem);
        }
       
       
    }
    if(i== 6){
        if(contactSaved.socialMedia.instagram == true){
            tdelem.innerHTML = '<a href="#"><span class= "on" >ig</span></a>'
            elem.appendChild(tdelem);
        }else {
            tdelem.innerHTML = '<a href="#"><span class= "off" >ig</span></a>'
            elem.appendChild(tdelem);
        }
    }
    if(i== 7){
        if(contactSaved.socialMedia.twitter == true){
            tdelem.innerHTML = '<a href="#"><span class= "on" >twt</span></a>'
            elem.appendChild(tdelem);
        }else {
            tdelem.innerHTML = '<a href="#"><span class= "off" >twt</span></a>'
            elem.appendChild(tdelem);
        }
    }
    if(i== 8){
        tdelem.innerHTML = '<select class="selects"><option>Choose..</option> <option>Edit</option><option>delete</option></select><a  href="#" class="ok-btn" onClick="">OK</a>'
         elem.appendChild(tdelem);
    }
    elem.appendChild(tdelem);
    
}
tbody.appendChild(elem)

console.log(trcount)
     }

 })





})



