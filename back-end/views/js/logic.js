$(document).ready(function(){
  $("#cat-button").click(function(){
    var value = $('#options').val();
    var product_data;
    var body = [];
    $.ajax({
      method:'POST',
      data: {'value': value},
      url:'/admin/catselected'
    })
    .done(function(data) {
      product_data = data.products;
      product_data.forEach(function(element) {
        var tr = $('<tr/>');
        tr.append($('<td/>').html(element.name));
        tr.append($('<td/>').html(element.offer));
        tr.append($('<td/>').html(element.price));
        tr.append($('<td/>').html('<img class="product-image" src=/product/'+ element.productImage[0].image +'>'));
        tr.append($('<td/>').html('<a id="editButton" class="btn btn-raised btn-primary" data-selector="'+ element._id +'">Edit</a> <a id="delete-button" href="/admin/delete/'+ element._id +'" data-selector="'+ element._id +'" class="btn btn-raised btn-danger">Delete</a>'));
        tr.append($('<td/>').html());
        body.push(tr);
      });
      $('table').find('tbody').html(body);
    })
  });
  $(document).on('click', '#editButton', function(){ 
    var id = $(this).data('selector');
    var productId = document.getElementsByName("update_product_id");
    // var productName = document.getElementsByName("update-product-name");
    // var productCategory = document.getElementsByName("update-product-category");
    // var productPrice = document.getElementsByName("update-product-price");
    // var productQty = document.getElementsByName("update-product-qty");
    // var productOffer = document.getElementsByName("update-product-offer");
    productId[0].value=id;
    // productName[0].value=oldProduct.name;
    // productCategory[0].value=oldProduct.category;
    // productPrice[0].value=oldProduct.price;
    // productQty[0].value=oldProduct.qty;
    // productOffer[0].value=oldProduct.offer;
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("editButton");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function() 
    {modal.style.display = "none";}
    window.onclick = function(event)
    {
      if (event.target == modal)
      {
        modal.style.display = "none";
      }
    }
  });

  $(document).on('click', '#deleteButton', function(){
    var id = $(this).data('selector');
    var body = [];
    $.ajax({
      method:'POST',
      data: {'id': id},
      url:'/admin/delete/'
    })
    .done(function(data) {
      console.log(data);
      // product_data = data.products;
      // product_data.forEach(function(element) {
      //   var tr = $('<tr/>');
      //   tr.append($('<td/>').html(element.name));
      //   tr.append($('<td/>').html(element.offer));
      //   tr.append($('<td/>').html(element.price));
      //   tr.append($('<td/>').html('<img class="product-image" src=/product/'+ element.productImage[0].image +'>'));
      //   tr.append($('<td/>').html('<a id="editButton" class="btn btn-raised btn-primary" data-selector="'+ element._id +'">Edit</a> <a id="delete-button" href="/admin/delete/'+ element._id +'" data-selector="'+ element._id +'" class="btn btn-raised btn-danger">Delete</a>'));
      //   tr.append($('<td/>').html());
      //   body.push(tr);
      });
      // $('table').find('tbody').html(body);
    });

    $(document).on('click', '#tabbutton', function(){
      alert("hello");
    });

});

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// function optionselected() { 
// }
// function openModal(id) { 
// }