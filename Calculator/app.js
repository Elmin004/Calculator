const monitor = document.querySelector(".monitor");
const buttons = document.querySelectorAll("button");

    buttons.forEach((item)=>{
        item.onclick = () => {
            if(item.id == "reset"){
                monitor.innerText = "";
            }else if(monitor.innerText != '' && item.id == "equal"){
                monitor.innerText = eval(monitor.innerText);
            }else if(monitor.innerText == '' && item.id == "equal"){
                monitor.innerText = "";
            }else if(item.id == "delete"){
                let string = monitor.innerText.toString();
                monitor.innerText = string.substr(0,string.length-1);
                /*The substr() method extracts a part of a string. */
            }else{
                monitor.innerText += item.id;
            }
        }
    });
