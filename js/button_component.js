const x = document.getElementById("button-Id"),
    $xAdd = x.classList,
    $y = document.querySelector(".submenu");

    console.log($y)



    x.addEventListener("click",()=>{
        if ($xAdd.contains("is-active")===false) {
            x.classList.add("is-active");
            $y.style.setProperty("display","block")            
        } else if ($xAdd.contains("is-active")===true){
            x.classList.remove("is-active");
            $y.style.setProperty("display","none");
        }else{
            console.log("wow")
        }
    })  


