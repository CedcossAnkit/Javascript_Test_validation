function clickk(){
    var a=document.getElementById('namee').value;
    var b=document.getElementById('pno').value;
    validate(a,b);

}

function validate(a,b)
{
    if(a=="" && b==""){
        document.getElementById('nameWar').innerHTML="Name Empty";
        document.getElementById('nameWar').style.color='red';
        document.getElementById('namee').style.borderColor="red"; 
        document.getElementById('mwar').style.color='red';
        document.getElementById('mwar').innerHTML="Phone Empty";
        document.getElementById('pno').style.borderColor="red";  
    }
    else{
        document.getElementById('nameWar').innerHTML="";
        document.getElementById('namee').style.borderColor="black";   
        document.getElementById('mwar').innerHTML="";
        document.getElementById('pno').style.borderColor="black";  
        numbercheck(b);
        
        if(namecheck(a)==true){
        document.getElementById('nameWar').innerHTML="Name is Valid";
        document.getElementById('nameWar').style.color='green';
        document.getElementById('namee').style.borderColor="green";   
        }
        else{
        document.getElementById('nameWar').innerHTML="Name is not Valid";
        document.getElementById('nameWar').style.color='red';
        document.getElementById('namee').style.borderColor="red";                    
        }
        
    }
}

function numbercheck(b){
    if(b.length==10){

        document.getElementById('mwar').innerHTML="10 digit Number Entered";
        document.getElementById('mwar').style.color='green';
        document.getElementById('pno').style.borderColor="green";  
    }
    else{
        document.getElementById('mwar').innerHTML="Please Enter 10 digit Phone Number";
        document.getElementById('pno').style.borderColor="red"; 
        document.getElementById('mwar').style.color="red"; 
    }
}

function namecheck(a){
    // if(isNaN(a)){
    //     console.log('Name is valid');
    //     document.getElementById('nameWar').innerHTML="Name is Valid";
    //     document.getElementById('nameWar').style.color='green';
    //     document.getElementById('namee').style.borderColor="green"; 
    // }
    // else{
        
    //     console.log('Enter a valid Name');
    //     document.getElementById('nameWar').innerHTML="Name is not Valid";
    //     document.getElementById('nameWar').style.color='red';
    //     document.getElementById('namee').style.borderColor="red";
    // }

    var num=[0,1,2,3,4,5,6,7,8,9,0];
    for(var i=0;i<num.length;i++){
        for(var j=0;j<a.length;j++){
            if(num[i]==a[j]){
                return false;
            }
        }
    }
    return true
}