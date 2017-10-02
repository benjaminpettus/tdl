$(document).ready(function(){
  console.log('fully loaded')


  const url = 'http://localhost:3000'

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


  const dateField = document.querySelector('.today')
  const formattedDate = moment(Date.now()).format("dddd, MMMM Do YYYY")
  if(dateField){
    dateField.innerHTML = formattedDate
  }



  const addSubmit = document.querySelector('.addButton')
  addSubmit.addEventListener('click', () => {
    const ee = document.getElementById('addTodo').value
    if(ee === ''){
      alert('You must enter somtething to do!!')
    } else {
      newPost(ee)
      window.location = url
    }

  })

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

})
