let boxs = document.querySelectorAll(".box");

let result = document.querySelector(".result");

let ClickSong = new Audio("ting.mp3");
let resetSong = new Audio("gameover.mp3");
let move = document.querySelector(".move");

let arr = Array(9).fill(null);
let CurrentPlayer = 'X';

function CheckWin(){
    if(arr[0]!=null && arr[0] == arr[1] && arr[1]==arr[2])
    {
        result.innerText = "You Won The Match 😎";
        boxs.forEach((el)=>{
            if(el.id === "0"  || el.id ==="1" || el.id==="2")
            {
                el.style.backgroundColor ="rgb(15, 227, 15)";
                return
            }
        })
        return
    }
    else if(arr[3]!=null && arr[3] == arr[4] && arr[4]==arr[5])
    {
        result.innerText = "You Won The Match 😎";
        boxs.forEach((el)=>{
            if(el.id === "3"  || el.id ==="4" || el.id==="5")
            {
                el.style.backgroundColor ="rgb(15, 227, 15)";
                return
            }
        })
        return
    }
    else if(arr[6]!=null && arr[6] == arr[7] && arr[7]==arr[8])
    {
        result.innerText = "You Won The Match 😎";
        boxs.forEach((el)=>{
            if(el.id === "6"  || el.id ==="7" || el.id==="8")
            {
                el.style.backgroundColor ="rgb(15, 227, 15)";
                return
            }
        })
        return
    }
    else if(arr[0]!=null && arr[0] == arr[3] && arr[3]==arr[6])
    {
        result.innerText = "You Won The Match 😎";
        boxs.forEach((el)=>{
            if(el.id === "0"  || el.id ==="3" || el.id==="6")
            {
                el.style.backgroundColor ="rgb(15, 227, 15)";
                return
            }
        })
        return
    }
    else if(arr[1]!=null && arr[1] == arr[4] && arr[4]==arr[7])
    {
        result.innerText = "You Won The Match 😎";
        boxs.forEach((el)=>{
            if(el.id === "1"  || el.id ==="4" || el.id==="7")
            {
                el.style.backgroundColor ="rgb(15, 227, 15)";
                return
            }
        })
        return
    }
    else if(arr[2]!=null && arr[2] == arr[5] && arr[5]==arr[8])
    {
        result.innerText = "You Won The Match 😎";
        boxs.forEach((el)=>{
            if(el.id === "2"  || el.id ==="5" || el.id==="8")
            {
                el.style.backgroundColor ="rgb(15, 227, 15)";
                return
            }
        })
        return
    }
    else if(arr[0]!=null && arr[0] == arr[4] && arr[4]==arr[8])
    {
        result.innerText = "You Won The Match 😎";
        boxs.forEach((el)=>{
            if(el.id === "0"  || el.id ==="4" || el.id==="8")
            {
                el.style.backgroundColor ="rgb(15, 227, 15)";
                return
            }
        })
        return
    }
    else if(arr[2]!=null && arr[2] == arr[4] && arr[4]==arr[6])
    {
        result.innerText = "You Won The Match 😎";
        boxs.forEach((el)=>{
            if(el.id === "2"  || el.id ==="4" || el.id==="6")
            {
                el.style.backgroundColor ="rgb(15, 227, 15)";
                return
            }
        })
        return
    }




    if(!arr.some((e)=> e === null))
    {
         result.innerText = "Match was Draw 🙁";
        return
    }
}

boxs.forEach((el)=>{
    el.addEventListener('click',()=>{
        ClickSong.play();
        let id = el.id;
        if(arr[id] !== null)
        {
            return
        }

        arr[id] =CurrentPlayer;
        CurrentPlayer = CurrentPlayer === "X" ? "O" : "X";

        el.innerText = arr[id];
        CheckWin();
    })
})


function reset(){
    resetSong.play();
    move.classList.toggle("moveStyle");
    setTimeout(function(){
        move.classList.remove("moveStyle");
    },1000)
    arr.fill(null);
    boxs.forEach((el)=>{
        el.innerText="";
        el.style.backgroundColor="transparent";
    })
    result.innerText="";
}