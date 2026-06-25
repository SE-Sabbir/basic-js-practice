const list = document.getElementById("list")
const add_btn = document.getElementById("add_btn")
const remove_btn = document.getElementById("remove_btn")

// add event
console.log(list.children.length)
// add item on list
add_btn.addEventListener("click",() => {
    const newItem = document.createElement("li")
    newItem.textContent = `Item ${list.children.length + 1}`
    list.appendChild(newItem)
    console.log("Item add hossa")
})
// remove item from list
remove_btn.addEventListener("click",() => {
    list.removeChild(list.lastChild)
    console.log('remove hossa')
})