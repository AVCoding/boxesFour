


// =========================================================================



$(document).ready(function(){
    // Mobile nav touch
    // $('.left-sb-wrapper').on("swipeleft", closeNav);


    // function disabledraggable(item){
    //   if(item.find('.total').val() < 1){
    //     $(item).draggable({ disabled: true });
    //   }
    //   else{
    //     return;
    //   }
    // }

  var fakeWrapper = `<div class="dropped-box-wrapper">
                        <div class="dropped-box">

                      </div>
                    </div>

                   `;
  var fakeDropbox = `<div class="dropped-box"></div>`;

   var fakeItems = `<div class="item" data-item="milk" >  
              <a href="javascript:void(0)">
                <img src="https://ychef.files.bbci.co.uk/976x549/p07vvrpj.jpg" width="35" height="35">
              </a>
              <input type="text" name="total" class="total" value="5" readonly="readonly"> шт.
            </div>
        
            <div class="item"  data-item="cola" > 
              <a href="javascript:void(0)">
                <img src="https://media.istockphoto.com/photos/coke-picture-id458464735?k=20&m=458464735&s=612x612&w=0&h=CW8rzEiIMvuO23X9I3b6U_g2aBUQSZnWYLjWauLMxtg=" width="35" height="35">
              </a>
              <input type="text" name="total" class="total" value="3" readonly="readonly"> шт.
            </div>

            <div class="item" data-item="fanta" > 
              <a href="javascript:void(0)">
                <img src="https://www.coca-cola.ru/content/dam/one/ru/ru/products/fanta-orange-330-glass.png" width="35" height="35">
              </a>
              <input type="text" name="total" class="total" value="1" readonly="readonly"> шт.
            </div>`;

    var fakeBasket = `<div class="basket">  
            <p>Перетащите товар сюда</p>
            <img src="https://media.istockphoto.com/photos/isolated-shot-of-opened-blank-cardboard-box-on-white-background-picture-id1128890899?k=20&m=1128890899&s=612x612&w=0&h=GfjgLKbgACDs0WcVQXie7fw0_NNwu2w01RmX2MKcC-Q=" class="open-box">   
          </div>`;

     // ========================

    // $('#main').append(fakeWrapper);
    $('.dropped-box-wrapper .dropped-box:nth-child(1) ').append(fakeItems);
    $('.dropped-box-wrapper:nth-child(1)').append(fakeBasket);



    $(".item").draggable({
      revert: "invalid",
      containment: "document",
      helper: "clone",
      cursor: "move"
    });


    updateDroppables();

    function updateDroppables(){
        $( ".basket" ).droppable({
            accept: ".item",
            // activeClass: "ui-droppable",
            drop: function(event, ui) {
                event.preventDefault();
                // $(this).find( "p" ).html( "Dropped!" );
                // var clone = $(this).clone();
                // clone.appendTo('.dropped-box');
                alert($(this).next('.dropped-box').length);

                if ($(this).next('.dropped-box').length == 0) {
                   $(this).after(fakeDropbox);
                   $(this).next('.dropped-box').append($(ui.draggable).clone().draggable({
                                                              revert: "invalid",
                                                              containment: "document",
                                                              helper: "clone",
                                                              cursor: "move"
                                                            }));

                    
                   $(this).next('.dropped-box').after(fakeBasket);

                }
                else{
                   $(this).next('.dropped-box').append($(ui.draggable).clone().draggable({
                                                              revert: "invalid",
                                                              containment: "document",
                                                              helper: "clone",
                                                              cursor: "move"
                                                            }));
                }
                // if($(this).next('.dropped-box').length > 0 ){
                //   $(this).next('.dropped-box').append($(ui.draggable).clone().draggable({
                //                                               revert: "invalid",
                //                                               containment: "document",
                //                                               helper: "clone",
                //                                               cursor: "move"
                //                                             }));

                // }

                

               
                // alert($(this).nextUntil('.basket').length);

                // $(this).nextUntil('.basket').each(function(index, e){
                //   console.log(e);
                  
                // });
                


                
                
                // alert($(this).nextAll('.dropped-box').length);

                // if ($(this).nextAll('.dropped-box').length == 1) {

                //   $(this).next('.dropped-box').append(fakeBasket);
                // }












                // else{
                //   $(this).next('.dropped-box').remove();
                // }


                

                // $(this).parents('.dropped-box-wrapper').next('.dropped-box-wrapper')


                // $(this).parents('.dropped-box-wrapper').next('.dropped-box-wrapper').append(fakeBasket);


                // if ($(this).siblings('.dropped-box').children('.item').length == 1 ) {
                //   $(this).parents('.dropped-box-wrapper').after('<div class="dropped-box-wrapper"></div>' );
                //   $(this).parents('.dropped-box-wrapper').next().append($(`<div class="basket"> 
                //       <p>Перетащите товар сюда</p>
                //       <img src="https://media.istockphoto.com/photos/isolated-shot-of-opened-blank-cardboard-box-on-white-background-picture-id1128890899?k=20&m=1128890899&s=612x612&w=0&h=GfjgLKbgACDs0WcVQXie7fw0_NNwu2w01RmX2MKcC-Q=" class="open-box">   
                //     </div>`)).droppable();
                //             alert('fdvd');
                // }

                // var openBoxItems =  $(this).next('.dropped-box').find('.item');

                updateDroppables();
            }
        });
    };






    // function updateDroppables(){
    //     $( ".basket" ).droppable({
    //         accept: ".item",
    //         drop: function(event, ui) {
    //             // $(this).find( "p" ).html( "Dropped!" );
    //             var clone = $(this).clone();
    //             clone.appendTo('.dropped-box');



    //             updateDroppables();
    //         }
    //     });
    // };

  


    // $('.basket').droppable({
    //   // accept: ".item",
    //   // activeClass: "ui-state-highlight",
    //   drop: function( event, ui ) {

    //     // console.log($(ui.helper).clone().html());

    //     $(this).parents('.dropped-box-wrapper ').after( $(this).parents('.dropped-box-wrapper ').eq(0).clone(true, true)   );
    //     // $(this).siblings('.dropped-box').children('.item').draggable({
    //     //                                                       revert: "invalid",
    //     //                                                       containment: "document",
    //     //                                                       helper: "clone",
    //     //                                                       cursor: "move"
    //     //                                                     });

    //     let openBoxItems =  $(this).next('.dropped-box').find('.item');

    //     // alert(openBoxItems.length );
    //     if (openBoxItems.length == 1) {
    //     // alert(openBoxItems.length );


    //       // let openBox =  '<div class="basket"><p>Перетащите товар сюда</p><img src="https://media.istockphoto.com/photos/isolated-shot-of-opened-blank-cardboard-box-on-white-background-picture-id1128890899?k=20&amp;m=1128890899&amp;s=612x612&amp;w=0&amp;h=GfjgLKbgACDs0WcVQXie7fw0_NNwu2w01RmX2MKcC-Q=" class="open-box"></div>'
    //       // console.log($(this).parents('.dropped-box-wrapper').html());
    //       // $(this).parents('.dropped-box-wrapper').after(
    //       //     '<div class="dropped-box-wrapper">' + $(this).clone() +

    //       //     '</div><div class="droped-box"> </div> </div>'

    //       // );
    //       // console.log($(this).html());
    //       // $(this).parents('.dropped-box-wrapper')[0].append($(this).outerHTML );
    //     }
    //     else{
    //       return;
    //     }
        

    //     // $(this).parents('.dropped-box-wrapper').next().find('.basket').droppable();


    //   }







        // update quantity of items  in rest items
        // $(ui.draggable).find('.total').attr('value', $(ui.draggable).find('.total').val() - 1);
        // $(ui.draggable).find('.total').val( parseInt($(ui.draggable).find('.total').val())  );




        // $('.rest-items .item').each(function(){
        //   if ($(this).find('.total').val() < 1) {
        //     $(this).draggable({ disabled: true });
        //   }
          
        // });

       //  // checking if item not exist in dropped box then create
       //  // if ($('.dropped-box .item[data-item="'+ $(ui.draggable).data('item') +'"]').length == 0) {
       //      let newdroppedBox = $(this).append('<div class="item"  data-item="'+ $(ui.draggable).data('item') +'">' + $(ui.draggable).html() + '</div>');
       //      $('.dropped-box  .item[data-item="'+ $(ui.draggable).data('item') +'"]').find('.total').val(0);
            
       //  // }
       

       //  // minus item from rest items
       //  // if ($(ui.draggable).find('.total').val() < 0) {
       //  //   (ui.draggable).find('.total').val(0);
       //  // }

       //  // plus one to quantity of dropped box item 
       // $('.dropped-box .item').each(function(){
       //  if ($(ui.draggable).data('item') == $(this).data('item')) {
       //      $(this).find('.total').val(parseInt($(this).find('.total').val()) + 1);

       //  }
        
       // });



        // if ($(this).children('.item').length > 0) {
        //   // alert($(this).children('.item').length);
        //   $(this).parents('.dropped-box-wrapper').after(
        //     '<div class="dropped-box-wrapper"><div class="basket"><p>Перетащите товар сюда</p><img src="https://media.istockphoto.com/photos/isolated-shot-of-opened-blank-cardboard-box-on-white-background-picture-id1128890899?k=20&amp;m=1128890899&amp;s=612x612&amp;w=0&amp;h=GfjgLKbgACDs0WcVQXie7fw0_NNwu2w01RmX2MKcC-Q=" class="open-box"> ' +

        //     '</div></div> </div>'

        //     );
        // }
        
        // $(this).append('<div class="item" data-item="'+ $(ui.draggable).data('item') +'">' + $(ui.draggable).html() + '</div>');



      // }
    // });





    //Test 
    // $("aside div").draggable({
    //   revert: "invalid",
    //   containment: "document",
    //   helper: "clone",
    //   cursor: "move"
    // });
 
    // $('section').droppable({
    //   accept: "aside div",
    //   activeClass: "ui-state-highlight",
    //   over: function( event, ui ) {
    //     //valami
    //     $(this).css('background-color', 'blue');
    //   }
    // });


  // $(document).on('click','input', function(){

  //   $(this).attr('value', function() {
  //       return $(this).val();
  //     });

  // });









});





// $( ".basket" ).droppable( "enable" );



  
