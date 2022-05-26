function removeElement(event) {
    event.target.parentElement.remove()
}
(function load(){
    const $form = document.getElementById("frmUsers")
    const $divElements = document.getElementById("divElements")
    const $btnSave = document.getElementById("agregar")

        const templateElement = data => {
            return (`
            <button class="delete" onclick="removeElement(event)"></button>
            <strong>User - </strong> ${data}
            `
            )
        }


    $btnSave.addEventListener("click", (event) => {
        if($form.nombre.value != "" && $form.precio.value != "" && $form.anio.value != ""){
            const $div = document.createElement("div")
            $div.classList.add("notification", "is-warning", "py-2", "my-1")
            $div.innerHTML = templateElement(`${$form.nombre.value} ${$form.precio.value} ${$form.anio.value}`)
            $divElements.appendChild($div)
            
            $form.reset()
        }else{
            alert("Complete los Campos")
        }
    })
})()