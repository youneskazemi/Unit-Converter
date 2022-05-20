let number

function length(){
    let num1 = (number * 3.28084).toFixed(3)
    let num2 = number / 3.28084
    let result = number + " meters = " + num1 + " " + "feet" + " " + "|" + " " + number + " feet = " + num2.toFixed(3) + " " + "meters"
    
    document.getElementById("length").textContent = result
}

function volume(){
    let num1 = number * 0.264172 
    let num2 = number / 0.264172  
    let result = number + " liters = " + num1.toFixed(3) + " " + "gallons" + " " + "|" + " " + number + " gallons = " + num2.toFixed(3) + " " + "liters"
    
    document.getElementById("volume").textContent = result
}

function mass(){
    let num1 = number * 2.20462
    let num2 = number / 2.20462  
    let result = number + " kilograms = " + num1.toFixed(3) + " " + "pounds" + " " + "|" + " " + number + " pounds = " + num2.toFixed(3) + " " + "kilograms"
    
    document.getElementById("mass").textContent = result
}

function calculator(){
    number = document.getElementById("number").value
    length()
    volume()
    mass()
}
