
const convert_form = document.querySelector("form")

convert_form.addEventListener("submit", calculateForm)

function calculateForm(event){

    event.preventDefault()

    let convert_value = document.querySelector(".text").value

    if(convert_value === ""){
        alert("Please enter a value")

    }else{
        document.querySelector(".cels").innerHTML = convert_value

        let fare = (Number(convert_value * 1.8)/ 32)

        document.querySelector(".fare").innerHTML = fare.toFixed(2)
    }

}