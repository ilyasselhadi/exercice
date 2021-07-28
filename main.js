
let users = [
    {
      id: "123456789",
      createdDate: "2021-01-06T00:00:00.000Z",
      status: "Envalidation",
      firstName: "Mohamed",
      lastName: "Taha",
      userName: "mtaha",
      registrationNumber: "2584",
    },
     {
      id: "987654321",
      createdDate: "2021-07-25T00:00:00.000Z",
      status: "Validé",
      firstName: "Hamid",
      lastName: "Orrich",
      userName: "horrich",
      registrationNumber: "1594",
    },
       {
      id: "852963741",
      createdDate: "2021-09-15T00:00:00.000Z",
      status: "Rejeté",
      firstName: "Rachid",
      lastName: "Mahidi",
      userName: "rmahidi",
      registrationNumber: "3576",
    }
  ]


  function getDetail() {
      
      let infos = "" ; 
       

      for(i=0;i<users.length ; i++){

      infos +='<tr><td>'+ users[i].id +"</td><td>" + 
      users[i].createdDate +"</td><td class='" +users[i].status+ "'>" + users[i].status+"</td><td>" + 
      users[i].firstName+"</td><td>" + users[i].lastName+"</td><td>"+ 
      users[i].userName+"</td><td>" + users[i].registrationNumber + "</td><td>" + 
      '<button class="btn" onclick="delet(' +i+')"><i class="uil uil-trash-alt"></i></button></td>'  
 
      }

      document.getElementById("details").innerHTML = infos;

     
  }

  function delet(x) {
     
  
    users.splice(x,1)
  
    let infos = "" ; 
       

    for(i=0;i<users.length ; i++){

    infos +='<tr><td>'+ users[i].id +"</td><td>" + 
    users[i].createdDate +"</td><td class='" +users[i].status+ "'>" + users[i].status+"</td><td>" + 
    users[i].firstName+"</td><td>" + users[i].lastName+"</td><td>"+ 
    users[i].userName+"</td><td>" + users[i].registrationNumber + "</td><td>" + 
    '<button class="btn" onclick="delet(i)"><i class="uil uil-trash-alt"></i></button></td>'  

    }

    document.getElementById("details").innerHTML = infos;
    

    getDetail()
    
  }

  function Ajout(){

    
    
    let user = {
      id: Math.floor(Math.random() * (1000000000 - 900000000) ) + 9000000000,
      createdDate: document.getElementById("dc").value,
      status: document.getElementById("e").value,
      firstName: document.getElementById("p").value,
      lastName: document.getElementById("n").value,
      userName: document.getElementById("ni").value,
      registrationNumber:document.getElementById("m").value ,

    }
    users.push(user)

    getDetail();
    
      document.getElementById("dc").value=""
      document.getElementById("e").value=""
      document.getElementById("p").value=""
      document.getElementById("n").value=""
      document.getElementById("ni").value=""
      document.getElementById("m").value="" 
  
    }

  function AfficheModal(){
    

    document.getElementById("Modal").innerHTML= '<div id="contact"><form  ><h3>Ajout d utilisateur</h3><fieldset >'+
    '<p>Nom</p><input  type="text"   id="n"></fieldset><fieldset><p>Nom d utilisateur</p><input  type="text"  id="ni" >'+
    '</fieldset><fieldset><p>Matricule</p><input  type="text"  id="m" > </fieldset><fieldset class="in1"><p>Prénom</p><input  type="text"  id="p" ></fieldset><fieldset class="in2">'
    +'<p>Date de creation</p><input  type="text"  id="dc" ></fieldset><fieldset class="in3"><p>Etat</p><input  type="text"  id="e" ></fieldset>'
    +'</form><button id="contact-submit" class="btn btnc" onclick="Ajout()" >Enregistrer</button></div>' ;

  }

  
  


  