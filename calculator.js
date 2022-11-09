var container=document.createElement("div");
container.innerHTML=`<div id=display></div>
<div class=buttons>
<div class=button>c</div>
<div class=button>←</div>
<div class=button>.</div>
<div class=button>*</div>
<div class=button>+</div>
<div class=button>-</div>
<div class=button>/</div>
<div class=button>00</div>
<div class=button>1</div>
<div class=button>2</div>
<div class=button>3</div>
<div class=button>4</div>
<div class=button>5</div>
<div class=button>6</div>
<div class=button>7</div>
<div class=button>8</div>
<div class=button>9</div>
<div class=button>0</div>
<div id="equal" class=button>=</div>
</div>
</div>`;
container.setAttribute("class","containers");
document.body.append(container);
let display=document.getElementById('display');
let buttons= Array.from(document.getElementsByClassName('button'));
buttons.map(button=>{
button.addEventListener('click',(e)=>{
    switch (e.target.innerText) {
        case 'c':
            display.innerText=''
            break;
            case '←':
                if(display.innerText){
                    display.innerText=display.innerText.slice(0,-1);
                }
                break;
                case '=':
                    try{
                        display.innerText=eval(display.innerText);
                    
                    }
                    catch{
                        display.innerText='ERROR';
                    }
                    break;
        default:
            display.innerText +=e.target.innerText;
            break;
    }
});
});
