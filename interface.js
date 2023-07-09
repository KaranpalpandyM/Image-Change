(function(){
    const pictures = [
        "1",
        "2",
        "3",
        "4",
        "5"
    ];
    const btns=document.querySelectorAll(".btn")
    const imgDiv= document.querySelector(".buttons")

    let counter=0

    btns.forEach(function(button){
        button.addEventListener("click",function(e){
            if(button.classList.contains('btn-left')){
                counter--
                if(counter<0){
                    counter = pictures.length -1
                }
                imgDiv.style.background =`url('Images/${pictures[counter]}.jpg')` 
            }

            if(button.classList.contains('btn-right')){
                counter++
                if(counter>pictures.length -1){
                    counter = 0
                }
                imgDiv.style.background =`url('Images/${pictures[counter]}.jpg')`
            }
        })
    })
})();