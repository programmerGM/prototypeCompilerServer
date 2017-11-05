var string = "";
$(document).ready(() => {
  $('#select-all').click(() => {
    $('#textarea').select()
  })

  $('#download').click(() => {
    var text = $('#textarea').val()
    var filename = prompt("Informe o nome do arquivo")
    var element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
    element.setAttribute('download', filename)

    element.style.display = 'none'
    document.body.appendChild(element)

    element.click()

    document.body.removeChild(element)
  })

})