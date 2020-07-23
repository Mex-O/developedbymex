    var bar=document.getElementById('bar');
   var nav=document.getElementById('navbar');
   var xe=document.getElementById('xe');
    bar.addEventListener('click', function(){
        nav.style.display='block';
        bar.style.display='none';
        xe.style.display='block';
        bar.style.cursor='pointer';
        nav.style.transition='all 4s';
        nav.style.opacity=0.5;
    });
    xe.addEventListener('click', function(){
        nav.style.display='none';
       setTimeout(function(){
        nav.style.opacity=1;  
       },1000) ;
        xe.style.display='none';
        bar.style.display='block';
        xe.style.cursor='pointer';
    })
  

$(document).ready(function(){
    $("#myinput").on("keyup", function(){
        var value=$(this).val().toLowerCase();
        $("#veg *").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});


function validation(){
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var success=document.getElementById('success');
    var danger=document.getElementById('danger');
    if(email<5 ||password==""  && email<5 || password<5){
        setInterval(function(){
            danger.style.display="block";
        },10)
    }
    else{
        setTimeout(function(){
            success.style.display="block";
        },30)
        window.open('https://mexdev.netlify.app/')
    }
}
function cart(){
    let con=confirm("Are you sure you want this item to be added to your cart?")
    if(con==true){
        alert("Item added to cart")
        alert("Thanks For Patronising Us.")
    }
    else{
        alert("Oops!")
    }
}


function vegetable(){
    var h6=document.getElementById('hr');
    var vege1=document.getElementById('vege1');
    var fruit=document.getElementById('fruit');
    var others=document.getElementById('others');
    others.style.display="none";
    fruit.style.display="none";
}

function fruit(){
    var h6=document.getElementById('hrr');
    var vege1=document.getElementById('vege1');
    var fruit=document.getElementById('fruit');
    var others=document.getElementById('others');
    others.style.display="none";
    fruit.style.display="none";
    vege1.style.display="block";
}
function all(){
    var h6=document.getElementById('hre');
    var vege1=document.getElementById('vege1');
    var fruit=document.getElementById('fruit');
    var others=document.getElementById('others');
    others.style.display="block";
    fruit.style.display="block";
    vege1.style.display="block";
}
function burde(){
var burden=document.getElementById('burden');
setTimeout(function(){
    alert("Welcome To FreshFoods inc, We are pleased to inform you that our products are 100% natural.")
},4000);
}
function psw(){
    var forg=document.getElementById('forg');
    alert('Opps you seem to have forgotten your password!')
    if(true){
        window.open('signup.html')
    }
}