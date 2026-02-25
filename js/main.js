 let nav=document.querySelector("#nav");
    let navItems = [
        { name: "Home", url: "index.html" ,active:true },
        {  name: "About", url: "index.html#about" },
        { name: "Models", url: "index.html#models" },
         { brand:true,name: "Oberlo", url: "index.html" },
        { name: "Price", url: "index.html#price" },
        { name: "Blog", url: "index.html#blog" },
         { name: "Contact", url: "index.html#contact" },
        { name: "Author", url: "author.html" }
        ];
   let navHTML = '';

navItems.forEach(item => {

    if(item.brand){
        navHTML += `
        <li class="nav-item">
            <a class="nav-link navbar-brand" href="${item.url}">
                <span><span>OB</span>erlo</span>
            </a>
        </li>`;
    }
    else if(item.active){
        navHTML += `
        <li class="nav-item active">
            <a class="nav-link" href="${item.url}">
                ${item.name} <span class="sr-only">(current)</span>
            </a>
        </li>`;
    }
    else{
        navHTML += `
        <li class="nav-item">
            <a class="nav-link" href="${item.url}">
                ${item.name}
            </a>
        </li>`;
    }
});

nav.innerHTML = navHTML;

const blogData = {
    title: "What Our Students Say",
    description: "Our students share their experiences and achievements with us. From learning new skills to reaching their goals, they inspire us every day. Hear their stories and see why so many choose to study with us.",
    testimonials: [
        {
            name: "Alex Johnson",
            image: "images/client-img.png",
            text: "Joining this program completely changed the way I see cars. I’ve learned not only about the technical aspects like engines, transmissions, and aerodynamics, but also about design, innovation, and the history behind each model. The hands-on experience and guidance from experts made learning fun and inspiring. Now I feel confident discussing cars with anyone and even dream of building my own custom project one day!"
        }
    ]
};
let html = `
<div class="row">
   <div class="col-md-12">
      <h1 class="client_taital">${blogData.title}</h1>
      <p class="client_text">${blogData.description}</p>
   </div>
</div>

<div class="customer_section_2">
   <div class="container">
      <div class="row">
`;

blogData.testimonials.forEach(t => {
    html += `
    <div class="col-md-12">
        <div class="box_main">
            <div class="customer_main">
                <div class="customer_left">
                    <div class="customer_img">
                        <img src="${t.image}">
                    </div>
                </div>
                <div class="customer_right">
                    <h3 class="customer_name">${t.name}</h3>
                    <p class="enim_text">${t.text}</p>
                    <div class="quick_icon">
                        <img src="images/quick-icon.png">
                    </div>
                </div>
            </div>
        </div>
    </div>`;
});

html += `
      </div>
   </div>
</div>
`;

document.getElementById("blogContent").innerHTML = html;

const factsItems = [
    {
        number: '3700',
        text: 'Happy Clients',
        images:'icon-1.png',
       
    },
    {
        number: '5700',
        text: 'Vehicles In Stock',
        images:'icon-2.png',
       
    },
    {
        number: '124',
        text: 'Awards',
        images:'icon-3.png',
        
    },
    {
        number: '704',
        text: 'Dealer Branches',
        images:'icon-4.png',
        
    }
];
var divFacts = document.querySelector('#facts');
if(divFacts){
    function createFact(item){
        let fact = `<div class="col-lg-3 col-sm-6">
                    
                     <h1 class="rated_text custom-counter"><span class="padding_10"></span>${item.number}</h1>
                     <p class="house_text">${item.text}</p>
                     <img src="images/${item.images}">
                  </div>`
                    
        return fact;
            
    };
    for(let item of factsItems){
        divFacts.innerHTML += createFact(item)
    }
}
function counterUp(elem, duration, delay){
    var animationStarted = false;
    var value = parseFloat(elem.innerText);
    var starter = 0;
    var steps = duration / delay;
    var step = value / steps;
    elem.innerText = starter;
    function startAnimate(){
        var intId = setInterval(function(){
            if(starter >= value){
            starter = value;
            clearInterval(intId);
        }
        elem.innerText = starter.toFixed(0);
        starter += step;
    }, delay)
}

    document.addEventListener("scroll", function(){
        // var windowHeight = window.innerHeight;
        var scrollTop = elem.getBoundingClientRect().top;
        if(scrollTop < 800 && !animationStarted){
            startAnimate();
            animationStarted = true;
        }
    })
}
var elements = document.querySelectorAll(".custom-counter");  
elements.forEach(function(el){
    counterUp(el, 4000, 10);
})

const modal = document.getElementById("aboutModal");
const btn = document.getElementById("readMoreBtn");
const closeBtn = document.querySelector(".close");

btn.onclick = function(e) {
  e.preventDefault(); 
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
const modalc = document.getElementById("carModal");
const btn1 = document.getElementById("car1");
const closeBtn1 = document.querySelector(".close1");

btn1.onclick = function(e) {
  e.preventDefault(); 
  modalc.style.display = "block";
}

closeBtn1.onclick = function() {
  modalc.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modalc.style.display = "none";
  }
}
const modalca = document.getElementById("carModal1");
const btn2 = document.getElementById("car2");
const closeBtn2 = document.querySelector(".close2");

btn2.onclick = function(e) {
  e.preventDefault(); 
  modalca.style.display = "block";
}

closeBtn2.onclick = function() {
  modalca.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modalca.style.display = "none";
  }
}
const modalcar = document.getElementById("carModal2");
const btn3 = document.getElementById("car3");
const closeBtn3 = document.querySelector(".close3");

btn3.onclick = function(e) {
  e.preventDefault(); 
  modalcar.style.display = "block";
}

closeBtn3.onclick = function() {
  modalcar.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modalcar.style.display = "none";
  }
}
const modalmodel = document.getElementById("modelModal");
const btnm = document.getElementById("model1");
const closeBtnm = document.querySelector(".closem");

btnm.onclick = function(e) {
  e.preventDefault(); 
  modalmodel.style.display = "block";
}

closeBtnm.onclick = function() {
  modalmodel.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
   modalmodel.style.display = "none";
  }
}
const modalmodel1 = document.getElementById("modelModal1");
const btnm1 = document.getElementById("model2");
const closeBtnm1 = document.querySelector(".closem1");

btnm1.onclick = function(e) {
  e.preventDefault(); 
  modalmodel1.style.display = "block";
}

closeBtnm1.onclick = function() {
  modalmodel1.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
   modalmodel1.style.display = "none";
  }
}
const modalmodel2 = document.getElementById("modelModal2");
const btnm2 = document.getElementById("model3");
const closeBtnm2 = document.querySelector(".closem2");

btnm2.onclick = function(e) {
  e.preventDefault(); 
  modalmodel2.style.display = "block";
}

closeBtnm2.onclick = function() {
  modalmodel2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
   modalmodel2.style.display = "none";
  }
}

const nameReg = /^[A-ZČĆŽŠĐ][A-Za-zČĆŽŠĐčćžšđ]{2,}( [A-ZČĆŽŠĐ][A-Za-zČĆŽŠĐčćžšđ]{2,})+$/;
const emailReg = /^[a-z0-9.]+@[a-z]{2,7}(\.[a-z]{2,4})+$/
const phoneReg = /^[\d]{9,10}$/
const form = document.querySelector('#form')
const linkbutton=document.querySelector('#agree')
linkbutton.addEventListener('click', (event)=>{
    const nameInput = document.querySelector('#name')
    const emailInput = document.querySelector('#email')
    const phoneInput = document.querySelector('#phone')
    const checkbox = document.querySelector('#terms');
    const errorMsg = document.querySelector('#errorMsg')
    let errors = []
    let invalid = []
    if (!nameReg.test(nameInput.value)) {
        invalid.push(nameInput)
        errors.push('The name must start with a capital letter, must not contain numbers, must be at least 3 characters long, and must contain at least two words separated by a space.')
    } 
    
    if (!emailReg.test(emailInput.value)) {
        invalid.push(emailInput)
        errors.push('Please enter the email in the correct format.')
    }

    if (!phoneReg.test(phoneInput.value)) {
        invalid.push(phoneInput)
        errors.push('The phone number format must be: 1234567891.')
    }
    if (!checkbox.checked) {
        errors.push('Please check "I agree to terms and contidions " first.');
    }
    if (errors.length > 0) {
        event.preventDefault()
        errorMsg.innerHTML = errors.join('<br>');
        errorMsg.classList.add('error')
    } else {
        event.preventDefault()
        errorMsg.innerHTML = 'The form has been successfully submitted.'
        if (errorMsg.classList.contains('error')) {
            errorMsg.classList.remove('error')
        }
        errorMsg.classList.add('success')
    }
   
  })
  document.getElementById("searchlink").addEventListener("click", function(e){

    e.preventDefault(); 

    let value = document.getElementById("searchinput").value.toLowerCase();

    if(value.includes("sport")){
        document.getElementById("sportCar").scrollIntoView({
            behavior: "smooth"
        });
    }
});
 document.getElementById("searchlink").addEventListener("click", function(e){

    e.preventDefault(); 

    let value = document.getElementById("searchinput").value.toLowerCase();

    if(value.includes("classic")){
        document.getElementById("classicCar").scrollIntoView({
            behavior: "smooth"
        });
    }
});
 document.getElementById("searchlink").addEventListener("click", function(e){

    e.preventDefault(); 

    let value = document.getElementById("searchinput").value.toLowerCase();

    if(value.includes("bmw")){
        document.getElementById("bmwCar").scrollIntoView({
            behavior: "smooth"
        });
    }
});
document.getElementById("searchlink1").addEventListener("click", function(e){

    e.preventDefault(); 

    let value = document.getElementById("searchinput1").value.toLowerCase();

    if(value.includes("sport")){
        document.getElementById("sportCar").scrollIntoView({
            behavior: "smooth"
        });
    }
});
document.getElementById("searchlink1").addEventListener("click", function(e){

    e.preventDefault(); 

    let value = document.getElementById("searchinput1").value.toLowerCase();

    if(value.includes("classic")){
        document.getElementById("classicCar").scrollIntoView({
            behavior: "smooth"
        });
    }
});
document.getElementById("searchlink1").addEventListener("click", function(e){

    e.preventDefault(); 

    let value = document.getElementById("searchinput1").value.toLowerCase();

    if(value.includes("bmw")){
        document.getElementById("bmwCar").scrollIntoView({
            behavior: "smooth"
        });
    }
});
document.getElementById("searchlink2").addEventListener("click", function(e){

    e.preventDefault(); 

    let value = document.getElementById("searchinput2").value.toLowerCase();

    if(value.includes("sport")){
        document.getElementById("sportCar").scrollIntoView({
            behavior: "smooth"
        });
    }
});
document.getElementById("searchlink2").addEventListener("click", function(e){

    e.preventDefault(); 

    let value = document.getElementById("searchinput2").value.toLowerCase();

    if(value.includes("classic")){
        document.getElementById("classicCar").scrollIntoView({
            behavior: "smooth"
        });
    }
});
document.getElementById("searchlink2").addEventListener("click", function(e){

    e.preventDefault(); 

    let value = document.getElementById("searchinput2").value.toLowerCase();

    if(value.includes("bmw")){
        document.getElementById("bmwCar").scrollIntoView({
            behavior: "smooth"
        });
    }
});



