
//Functionality of menu bar

let fg_menu=1;  
function toggle_menu()
{
  if(fg_menu==1){
    menu_down_box.classList.remove("menu_down_ctr");
    fg_menu=0;
  }
  else{
    menu_down_box.classList.add("menu_down_ctr")
    fg_menu=1;
  }
}


let fg=1;
function toggle_mode_func(id)
{
  if(fg===1)
  {
    document.getElementById(id).classList.add("dark");
    fg=0; 
  }
  else if(fg===0)
  {
    window.location.reload();
    fg=1;
  }
}


function prd_ms_in(id){
     document.getElementById(id).style.backgroundColor="rgb(181, 178, 195)"; 
}

function prd_ms_out(id){
  if(fg===0)
  {
    document.getElementById(id).style.backgroundColor="rgb(40, 40, 40)";      
  }
  else{
    document.getElementById(id).style.backgroundColor="rgb(205, 201, 201)";      
  }
}

// Validation before new registration 

let fg1 = 1;
let fg2 = 1;
let fg3 = 1;
let fg4 = 1;

function validate_regi_name(id)
{
    //console.log(id.value)
    let name = id.value;
    let char = name.match(/[a-z|A-Z ]+/);
      if( name!=char | name.length>12)
      {
        lable_for_regi_name.innerHTML="Enter Only Alpha L(12)";
        form.style.height="380px";
        footer.style.marginTop="32px";
        fg1 = 1;
      }
      else
      {
        lable_for_regi_name.innerHTML="";
        form.style.height="360px";
        footer.style.marginTop="52px";
        fg1 = 0;
      }
}

function validate_regi_pwd(id)
{
  //console.log(id.value)
  let name = id.value;
  if(name.length<4)
  {
    lable_for_regi_pwd.innerHTML="Min Length (4)";
    form.style.height="380px";
    footer.style.marginTop="32px";
    fg2 = 1;
  }
  else if(name.length>6)
    {
      lable_for_regi_pwd.innerHTML="Max Length (6)";
      form.style.height="380px";
      footer.style.marginTop="32px";
      fg2 = 1;
    }
  else
  {
    lable_for_regi_pwd.innerHTML="";
    form.style.height="360px"; 
    footer.style.marginTop="52px";
    fg2 = 0;
  }
}

// validation for confirm password 
function validate_regi_conf_pwd(id)
{
   if(id.value!=regi_user_pwd.value){
      lable_for_regi_c_pwd.innerHTML="Password Not Matching";
      form.style.height="380px"; 
      footer.style.marginTop="32px";
      fg3 = 1;
   }
   else
   {
      lable_for_regi_c_pwd.innerHTML="";
      form.style.height="360px"; 
      footer.style.marginTop="52px";
      fg3 = 0;
   }
}

function validate_regi_ph(id)
{
  lable_for_regi_ph.innerHTML="Validating Number...";      

  setTimeout(() => {
     let data = id.value;
     let nums = data.match(/[0-9]+/) ;
      if( data!=nums | data.length>10 | data.length<10){
     
      
      lable_for_regi_ph.innerHTML="Invalid Number";
      form.style.height="380px"; 
      footer.style.marginTop="32px";
      fg4 = 1;  
    }

    
    else
    {
      lable_for_regi_ph.innerHTML="";
      form.style.height="360px"; 
      footer.style.marginTop="52px";
      fg4 = 0;
  
    }
  }, 5000);

}



//new registration.  have to store login info in local storage / delete when logout
// ADD Flage CONDITION TO PREVENT FALSY VALUE REGISTRATION
  function regi_new(){
    
    if(fg1==0 && fg2==0 && fg3==0 && fg4==0){
        
        let user = regi_user_name.value;
        localStorage.setItem("user_info",user);
    
        let pwd = regi_user_pwd.value;
        localStorage.setItem("pwd_info",pwd);
    
        alert("Account Created succesfully")
    }
    else{
      alert("Invalid inputs")
    }
  }

  function log_in_check()
  {
     let regi_user = localStorage.getItem("user_info")
     let regi_pwd = localStorage.getItem("pwd_info")

     if(log_user_name.value===regi_user && log_user_pwd.value===regi_pwd)
          alert("Login Succesfully")
        else
          alert(`No Account Found Named ${log_user_name.value} ! `)
    // alert(log_user_name.value)
    // alert(log_pwd_name.value)
  }
    
    
function acc_info(){
 // console.log("acc info out : "+document.getElementById("log_user_name").value

 alert(` user_info is ${localStorage.getItem("user_info")}`)
 alert(` pwd_info is ${localStorage.getItem("pwd_info")}`)

//variable data got destroyed due to page refresh
//have to store login info in local storage / delete when logout
}

function cart_info_from_menu(){
     
}

function log_out(){
  alert("logout succesfully")
}

function del_acc(){
  responce = confirm(`Are You Sure Want To Delete Account ? \n ${localStorage.getItem("user_info")}`)
  if(responce){
    alert(`Account ${localStorage.getItem("user_info")} Deleted succesfully`)
    localStorage.removeItem("user_info");
    localStorage.removeItem("pwd_info");
  }
}





function prd_img_to_cart(prd)    //save clicked img url in local storage
{
  
  localStorage.setItem(`${prd}-key`,prd);
//  console.log(`product " ${prd} " Added `) ;
}

var ct = 0;
function Load_cart_prd(prd)
{  localStorage.setItem("IMGS/cheses-2.jpg-key","IMGS/cheses-2.jpg")
  //define value as prd ----------------------------------
  let img_src = localStorage.getItem(`${prd}-key`);
  let prd_container = document.querySelector(".prd_con")
  
  let newEle = document.createElement("div");
  console.log("img = ",img_src)
  newEle.innerHTML = ` <img id="img_in_cart" src="${img_src}" alt="prd_img"> <br> <b style="margin-left:20px"> Quntity</b> <input max=5 min=1  id="inpt" type="number" value="1" > <br> <button id="remove_prd_btn" >Remove</button>  `;
  prd_container.appendChild(newEle);
  ct++;
  
  newEle.querySelector("button").addEventListener("click",remove_prd)
  function remove_prd(){
    newEle.remove();
    localStorage.removeItem(`${prd}-key`);

  }
  
  
    if(ct===0){
      if(localStorage.getItem("IMGS/cheses-2.jpg-key"))
      {
        Load_cart_prd('IMGS/cheses-2.jpg')
      }else{
        ct++;
      }
     }
    if(ct===1){
      if(localStorage.getItem("IMGS/exaust.avif-key"))
      {
        Load_cart_prd('IMGS/exaust.avif')
      }else{
        ct++;
      }
       
    }  
   if(ct===2){
      if(localStorage.getItem("IMGS/Truck-steering.jpg-key"))
      {
        Load_cart_prd('IMGS/Truck-steering.jpg')
      }else{
        ct++;
      }
      
    }
   if(ct===3){
      if(localStorage.getItem("IMGS/alloy.webp-key"))
        {
          Load_cart_prd('IMGS/alloy.webp')
        }else{
          ct++;
        }
            
    }
   if(ct===4){
      if(localStorage.getItem("IMGS/wheel.webp-key"))
        {
          Load_cart_prd('IMGS/wheel.webp')
        }else{
          ct++;
        }
        
    }
     if(ct===5){
      if(localStorage.getItem("IMGS/steering-2.jpg-key"))
        {
          Load_cart_prd('IMGS/steering-2.jpg')
        }else{
          ct++;
        }
      
    }
   
}




var x = Math.floor((Math.random() * 1000) +1);
cart_prd_net_price_label.innerText = x*999;

function Payment_page()
{ 
  location.href="Payment.html";
}


function load_net_price_qr()
{ 
  net_price_label.innerText = x*999;

  let newElm = document.createElement("div")
  newElm.innerHTML=`<font style="color:green; margin-left:25px">Generated Succesfully....</font> <br><img src="IMGS/IMG_20241205_214850.png" height="230px" width="230px" style="border-radius:15px " alt="Payment server Down" </img> <br>Pay Here`;
  // console.log(newElm)
  setTimeout(() => {  
    document.querySelector(".qr").appendChild(newElm)
  }, 1800);
  
          cont_down_pt.innerHTML = `<font style="color:red " >Pay Within 1 min...</font>` 
}




//creating data in key value form

// let key = "user name";
// let value = ["yug",1234];



// storing as key vlaue pair in local storage

// localStorage.setItem(key,value);



//accecing value from key

//localStorage.getItem(key)
// console.log(` value at ${key} is ${localStorage.getItem(key)}`)



//removing value from storage with use of key

//localStorage.removeItem(key)



// clearing local storage

//localStorage.clear()
