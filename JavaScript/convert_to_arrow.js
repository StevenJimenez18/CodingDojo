document.getElementById("button").onclick = () =>  setBackgroundColorById("paragraph", "blue")



document.getElementById("alert").onclick = () => alert(document.getElementById("popup-input").value)



document.getElementById("hover-this").onmouseover = () => setBackgroundColorById("body", "red")



document.getElementById("hover-this").onmouseout = () =>
    setBackgroundColorById("body", "white")


let getValueFromId = (id) => document.getElementById(id).value


let setBackgroundColorById = (id, color) => document.getElementById(id).style = "background-color: " + color


let mouseOverFunction = (el) => el.style = "background-color: black"