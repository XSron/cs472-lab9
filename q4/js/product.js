$('#frmProduct').submit(function(event) {
    event.preventDefault();
    let str = `<p><b>Product Number: </b>${$('#productNumber').val()}</p>\n`;
    str += `<p><b>Quantity In Stock: </b>${$('#quantityInStock').val()}</p>\n`;
    str += `<p><b>Name: </b>${$('#name').val()}</p>\n`;
    str += `<p><b>Supplier: </b>${$('#supplier').val()}</p>\n`;
    str += `<p><b>Unit Price: </b>${$('#unitPrice').val()}</p>\n`;
    str += `<p><b>Date: </b>${$('#date').val()}</p>\n`;
    $('#display').html(str);
})