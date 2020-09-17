//Task 1

// let user_password= prompt('Enter your password');
// if(user_password.length >= 5){
//     alert('Welcome'+' '+user_password);
// }
// else{

//     alert('Your password must be at least 5 letters')

// }

// task 2

let text = prompt("Enter text")

let result=0;
switch(text[2]){
    case 'a':
        result+=4
        break;
    case 'e':
        result+=4
        break;
        case 'u':
            result+=4
            break;
        case 'i':
            result+=4
            break;
        case 'o':
            result+=4
            break;
        case 'z':
            result+=5
            break;
            
    default :
    result-=1   
 
}


alert('my result number'+' '+result);
