

// similar to unity 
//functio(e) function is like lambda
//an anonymus function an event handler
//and 'e' the parameter stores the data of the object
let x;
document.addEventListener('click',function(obj){
    switch(obj.target.id){
        case 'one': x = 1;
        break;
        case 'two': x = 2;
        break;
        case 'three': x = 3;
        break;
        case 'four': x = 4;
        break;
        case 'five': x = 5;
        break;
        case 'six': x = 6;
        break;
        case 'seven': x = 7;
        break;
        case 'eight': x = 8;
        break;
        case 'nine': x = 9;
        break;
        case 'zero': x = 0;
        break;
        case 'plus': x = '+';
        break;
        case 'minus': x = '-';
        break;
        case 'star': x = '*';
        break;
        case 'slash': x = '/';
        break;
        case 'dot': x = '.';
        break;
        case 'equals': x = '=';
        break;
        case('cl'): x = 'c';
            break;
        default : return;
    }
    console.log(x)
    display(x);
});

var y = 0;
var z =0;
var p = '';
function display(show=0){
    //show parameter to get single ele
    const output = document.getElementById('output');

    if(show == 'c'){
            y =0;
            z =0;
            output.innerText = y;
            return;
        }
        
    if(typeof show != typeof(1) && show!='='){
        p = show;
        z = y;
        y = 0;
        output.append(p);
        return;
    }

    if(show=='='){
        console.log(show,y,z)
        switch(p){
            case('+'):z+=y;
            output.innerText = (z);
            // y = 0;
            break;
            case('-'):z-=y;
            output.innerText = (z);
            y = 0;
            break;
            case('*'):z*=y;
            output.innerText = (z);
            y = 0;
            break;
            case('/'):z/=y;
            output.innerText = (z);
            y = 0;
            break;
            default:return;
            // case('/'):z+=y;
            // output.innerText = (z);
            // break;
            
    }
        // z,y = 0,0;
        return;
    }

    
    //y to actually get proper number
    y = y*10;
    y+=show;
    output.innerText = y;
    console.log(z);
}

