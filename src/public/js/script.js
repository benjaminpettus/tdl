$(document).ready(function(){
  console.log('we in this bih')

  // $('#modal1').modal()


  const addSubmit = document.querySelector('.addButton')
  addSubmit.addEventListener('click', () => {
    const ee = document.getElementById('addTodo').value
    newPost(ee)
  })


  const newPost = (formValue) => {
    console.log(formValue)
    fetch('http://localhost:3000/new', {
      method: 'post',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: formValue
      })
    })
  }


})
