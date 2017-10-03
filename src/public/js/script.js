$(document).ready(function(){
  console.log('fully loaded')


  const url = 'http://localhost:3000'


//task counter
  const itemCount = document.querySelector('.pending')
  let numberOfTodos;
  if (itemCount) {
    console.log(itemCount.innerHTML[0])
    numberOfTodos = parseInt(itemCount.innerHTML[0])
    console.log(typeof numberOfTodos)
  }


  const subtractTodo = () => {
    console.log(itemCount);
   let num = numberOfTodos -= 1
   itemCount.innerHTML = num.toString() + " tasks pending"
   console.log(itemCount)
  }

//date format
  const dateField = document.querySelector('.today')
  const formattedDate = moment(Date.now()).format("dddd, MMMM Do YYYY")
  if(dateField){
    dateField.innerHTML = formattedDate
  }


//add todo
  const addSubmit = document.querySelector('.addButton')
  const ee = document.getElementById('addTodo')
  if(ee) {
    addSubmit.addEventListener('click', (event) => {
      if(ee.value === ''){
        alert('You must enter somtething to do!!')
      } else {
        newPost(ee.value)
        window.location = url
      }
    })
    console.log(ee)
    ee.addEventListener('keyup', (event) => {
      if(ee.value === ''){
        alert('You must enter somtething to do!!')
      } else {
        newPost(ee.value)
        window.location = url
      }
    })
}

//delete function
  const remove = document.querySelectorAll('.delete')
  remove.forEach(row => {
    row.addEventListener('click', (event) => {
      console.log('event data:::',event.target.dataset.id)
      confirm('are you sure you want to delete?')
        ? deleteTodo(event.target.dataset.id, event.target)
        : event.preventDefault()
    })

  })

//   const checkStatus = (response) => {
//     if(response.status === 200) {
//       return Promise.resolve(response)
//     } else {
//       return Promise.reject(
//         new Error(response.statusText))
//     }
//   }
//
//   const getJSON = (response) => {
//       console.log('from browser',response.json())
//     return response.json()
//   }
//
//   const getTodos = () => {
//     fetch( url, {
//       method:'get',
//       headers:{
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//     })
//       .then(checkStatus)
//       .then(getJSON)
//       .catch( error => { console.log(error) })
//   }
//
// getTodos()


  const newPost = (formValue) => {
    fetch(url + '/new', {
      method: "post",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: formValue
      })
    })
  }

//delete todo
const deleteTodo = (id, target) => {
  console.log('from fetch ::::', `${url}/${id}`);
  fetch(`${url}/${id}`, {method: 'delete'})
  .then(response => {
    return response.text()
  })
  .then(() => {
    const row = target.parentNode.parentNode
    row.parentNode.removeChild(row)
    subtractTodo()
    console.log(itemCount)

  })
  .catch( error => console.error )

}

//update todo
const contentField = document.querySelectorAll('.content')
contentField.forEach(todo => {
  todo.addEventListener('click', (event) => {
    console.log('li clicked')
    let todoContent = event.target
    let todoValue = todoContent.innerHTML
    let liNode = todoContent.parentNode
    liNode.innerHTML = `<textarea id="textarea1" class="materialize-textarea">${todoValue}</textarea>`
  })
})

const editTodo = (id, target) => {


}

})
