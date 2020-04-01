$('#frmLogin').submit(function(event) {
    event.preventDefault();
    console.log($('#email').val());
    console.log($('#password').val());
    console.log($('#url').val());
})