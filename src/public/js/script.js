$(document).ready(function(){
  console.log('we in this bih')

  $('#modal1').modal()

  const addContent = $('#addTodo')
  const addSubmit = document.querySelector('.addButton')
  addSubmit.addEventListener('click', () => {
    console.log('clickin it')
  })

})
