const addForm = document.querySelector(".add")
const todos = document.querySelector(".todos")
const searchForm = document.querySelector(".search input")

function addNewItem(item){
    let html =
    `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span class="text-light">${item}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>
    `

    todos.innerHTML += html
    

}

addForm.addEventListener("submit", e=>{
    e.preventDefault()

    addNewItem(addForm.add.value.trim())

    addForm.reset()

})

todos.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
        e.target.parentNode.remove()
    }
})

// search filtering

const filterTodos = (searchTerm)=>{
    console.log(searchTerm)
    Array.from(todos.children)
        .filter((todo)=>!todo.textContent.includes(searchTerm))
        .forEach((todo)=>todo.classList.add('filtered'))
}

// keyup for search event

searchForm.addEventListener("keyup",()=>{
    const searchTerm = searchForm.value.trim()
    filterTodos(searchTerm)
})