
/// WHEN FEEDER IS CLICKED ALL ARTICLES WILL BE REMOVED
$("a h1").on( "click", function(){
  $(".article").remove()
});

/// when the x is clicked the popup will close
$(".closePopUp").on( "click", function(){
  $("#popUp").hide()
});


$("#news").on( "click", function() {
  // AJAX
  $(function(){

    //     //  event.preventdefault()

    // When the application first loads display the loading container
    $("#popUp").attr("hidden",false);

    $.ajax({
      url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=4474a36a48bc41ebb37454d592870026",
      type: "get",
      data: { api_key : "4474a36a48bc41ebb37454d592870026"},
      success: function(res){
                    // REPLACING THE PREVIOUS ARTICLES WITH THE NEW ONES
                    $(".article").remove();
                    res.articles.forEach(function(element){       
                        // ADDING EACH ARTICLE TO THE PAGE
                        const article = document.createElement('article');
                        article.setAttribute('class', 'article')
                        const main= document.getElementById("main")
                        main.appendChild(article)
                        const featuredImage = document.createElement("section") 
                        featuredImage.setAttribute('class', 'featuredImage')
                        article.appendChild(featuredImage)
                        const img= document.createElement("img")
                        img.setAttribute('src', `${element.urlToImage}`)
                        featuredImage.appendChild(img)
                        const articleContent= document.createElement('section')
                        articleContent.setAttribute('class', 'articleContent')
                        article.appendChild(articleContent)
                        const a = document.createElement('a');
                        a.setAttribute('href', '#')
                        articleContent.appendChild(a)
                        const h3= document.createElement('h3')
                        h3.setAttribute('class', 'title' )
                        h3.textContent = `${element.title}`; 
                        a.appendChild(h3)
                        const h6= document.createElement('h6');
                        h6.textContent = `${element.author}`;
                        articleContent.appendChild(h6)
                        const impressions= document.createElement('section')
                        impressions.setAttribute('class', 'impressions')
                        $('.impressions').text("NEWS")
                        article.appendChild(impressions)
                        const clearfix= document.createElement('div')
                        clearfix.setAttribute('class', 'clearfix')
                        article.appendChild(clearfix)
                        ///////////////////////////////////////////
                        // The content of the article inserted in the .container
                        // failed :(
                        // h1.textContent = `${element.title}`;
                        // p.textContent = `${element.content}`;
                        // popUpAction.setAttribute('href', `${element.url}`)
                    });
    
      // When the application finishes loading, hide the loading container                 
      $("#popUp").attr("hidden",true);
      
      /// when an article is clicked the popUp will show 
      $(".article").on("click", function(){
          $("div.loader  div").css("display", "block")
          $("#popUp").show()
      })

      },
      error: function(xhr, status, err){
          alert("not working")
      }
    });

  });

});


//////////////////////////////////////////////////////////////////////

                                            
$("#TNYT").on( "click", function() {
  // AJAX
$(function(){


      //     //  event.preventdefault()

  // When the application first loads display the loading container
  $("#popUp").attr("hidden",false);

  $.ajax({
    url: "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=EcK5t2MyGl9dJrLYpYAvYZnBie1KhN9D",
    type: "get",
    data: { api_key : "EcK5t2MyGl9dJrLYpYAvYZnBie1KhN9D"},
    success: function(res){
                  // REPLACING THE PREVIOUS ARTICLES WITH THE NEW ONES
                  $(".article").remove();
                  res.results.forEach(function(element){             
                      // ADDING EACH ARTICLE TO THE PAGE
                      const article = document.createElement('article');
                      article.setAttribute('class', 'article')
                      const main= document.getElementById("main")
                      main.appendChild(article)
                      const featuredImage = document.createElement("section") 
                      featuredImage.setAttribute('class', 'featuredImage')
                      article.appendChild(featuredImage)
                      const img= document.createElement("img")
                      img.setAttribute('src', `${element.thumbnail_standard}`)
                      featuredImage.appendChild(img)
                      const articleContent= document.createElement('section')
                      articleContent.setAttribute('class', 'articleContent')
                      article.appendChild(articleContent)
                      const a = document.createElement('a');
                      a.setAttribute('href', '#')
                      articleContent.appendChild(a)
                      const h3= document.createElement('h3')
                      h3.setAttribute('class', 'title' )
                      h3.textContent = `${element.title}`;
                      a.appendChild(h3)
                      const h6= document.createElement('h6');
                      h6.textContent = `${element.section}`;
                      articleContent.appendChild(h6)
                      const impressions= document.createElement('section')
                      impressions.setAttribute('class', 'impressions')
                      $('.impressions').text("NY Times")
                      article.appendChild(impressions)
                      const clearfix= document.createElement('div')
                      clearfix.setAttribute('class', 'clearfix')
                      article.appendChild(clearfix)
                      ///////////////////////////////////////////
                      // The content of the article inserted in the .container
                      // failed :(
                      // h1.textContent = `${element.title}`;
                      // p.textContent = `${element.content}`;
                      // popUpAction.setAttribute('href', `${element.url}`)
                  });

    // When the application finishes loading, hide the loading container                 
    $("#popUp").attr("hidden",true);

    // when an article is clicked the popUp will show 
    $(".article").on("click", function(){
      $("div.loader  div").css("display", "block")
      $("#popUp").show()
    })

    },
    error: function(xhr, status, err){
        alert("not working")
    }
  });


});

});




                                                                        // Done 




























                                                                        // Drafts

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// /// WHEN FEEDER IS CLICKED ALL ARTICLES WILL BE REMOVED
// $("a h1").on( "click", function(){
//   $(".article").remove()
// });

// /// when the x is clicked the popup will close
// $(".closePopUp").on( "click", function(){
//   $("#popUp").hide()
// });

// // /// when the x is clicked the popup will close
// // $(".closePopUp").on( "click", function(){
// //   $("#popUp").css("display", "none")
// // });


// $("#news").on( "click", function() {
//   // AJAX
// $(function(){

//   // When the application first loads display the loading container
//   $("#popUp").attr("hidden",false);

//   $.ajax({
//     url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=4474a36a48bc41ebb37454d592870026",
//     type: "get",
//     data: { api_key : "4474a36a48bc41ebb37454d592870026"},
//     success: function(res){
//                   // REPLACING THE PREVIOUS ARTICLES WITH THE NEW ONES
//                   $(".article").remove();
//                   res.articles.forEach(function(element){       
//                       // ADDING EACH ARTICLE TO THE PAGE
//                       const article = document.createElement('article');
//                       article.setAttribute('class', 'article')
//                       const main= document.getElementById("main")
//                       main.appendChild(article)
//                       const featuredImage = document.createElement("section") 
//                       featuredImage.setAttribute('class', 'featuredImage')
//                       article.appendChild(featuredImage)
//                       const img= document.createElement("img")
//                       img.setAttribute('src', `${element.urlToImage}`)
//                       featuredImage.appendChild(img)
//                       const articleContent= document.createElement('section')
//                       articleContent.setAttribute('class', 'articleContent')
//                       article.appendChild(articleContent)
//                       const a = document.createElement('a');
//                       a.setAttribute('href', '#')
//                       articleContent.appendChild(a)
//                       const h3= document.createElement('h3')
//                       h3.setAttribute('class', 'title' )
//                       h3.textContent = `${element.title}`; 
//                       a.appendChild(h3)
//                       const h6= document.createElement('h6');
//                       // $('h6').text("Lifestyle")
//                       h6.textContent = `${element.author}`;
//                       articleContent.appendChild(h6)
//                       const impressions= document.createElement('section')
//                       impressions.setAttribute('class', 'impressions')
//                       $('.impressions').text("NEWS")
//                       article.appendChild(impressions)
//                       const clearfix= document.createElement('div')
//                       clearfix.setAttribute('class', 'clearfix')
//                       article.appendChild(clearfix)
//                       ///////////////////////////////////////////
//                       // The content of the article inserted in the .container
//                       // failed :(
//                       // h1.textContent = `${element.title}`;
//                       // p.textContent = `${element.content}`;
//                       // popUpAction.setAttribute('href', `${element.url}`)
//                   });
   
//     // When the application finishes loading, hide the loading container                 
//     $("#popUp").attr("hidden",true);
    
//     /// when an article is clicked the popUp will show 
//     $(".article").on("click", function(){
//         $("div.loader  div").css("display", "block")
//         // $("#popUp").attr("hidden",false);
//         $("#popUp").show()
    
//           // $("#popUp.loader").css("background-image", none) not working :(
//     })

//     // $("div.loader  div").css("display", "none")
//     // $("#popUp").attr("hidden",true);
//     // $("#popUp.loader").css("background-size", "auto")


//     },
//     error: function(xhr, status, err){
//         alert("not working")
//     }
//   });

// });

// });





// //////////////////////////////////////////////////////////////////////

                                            
// $("#TNYT").on( "click", function() {
//   // AJAX
// $(function(){

//   // When the application first loads display the loading container
//   $("#popUp").attr("hidden",false);

//   $.ajax({
//     url: "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=EcK5t2MyGl9dJrLYpYAvYZnBie1KhN9D",
//     type: "get",
//     data: { api_key : "EcK5t2MyGl9dJrLYpYAvYZnBie1KhN9D"},
//     success: function(res){
//                   // REPLACING THE PREVIOUS ARTICLES WITH THE NEW ONES
//                   $(".article").remove();
//                   res.results.forEach(function(element){             
//                       // ADDING EACH ARTICLE TO THE PAGE
//                       const article = document.createElement('article');
//                       article.setAttribute('class', 'article')
//                       const main= document.getElementById("main")
//                       main.appendChild(article)
//                       const featuredImage = document.createElement("section") 
//                       featuredImage.setAttribute('class', 'featuredImage')
//                       article.appendChild(featuredImage)
//                       const img= document.createElement("img")
//                       img.setAttribute('src', `${element.thumbnail_standard}`)
//                       featuredImage.appendChild(img)
//                       const articleContent= document.createElement('section')
//                       articleContent.setAttribute('class', 'articleContent')
//                       article.appendChild(articleContent)
//                       const a = document.createElement('a');
//                       a.setAttribute('href', '#')
//                       articleContent.appendChild(a)
//                       const h3= document.createElement('h3')
//                       h3.setAttribute('class', 'title' )
//                       h3.textContent = `${element.title}`;
//                       a.appendChild(h3)
//                       const h6= document.createElement('h6');
//                       h6.textContent = `${element.section}`;
//                       articleContent.appendChild(h6)
//                       const impressions= document.createElement('section')
//                       impressions.setAttribute('class', 'impressions')
//                       $('.impressions').text("NY Times")
//                       article.appendChild(impressions)
//                       const clearfix= document.createElement('div')
//                       clearfix.setAttribute('class', 'clearfix')
//                       article.appendChild(clearfix)
//                       ///////////////////////////////////////////
//                       // The content of the article inserted in the .container
//                       // failed :(
//                       // h1.textContent = `${element.title}`;
//                       // p.textContent = `${element.content}`;
//                       // popUpAction.setAttribute('href', `${element.url}`)
//                   });

//     // When the application finishes loading, hide the loading container                 
//     $("#popUp").attr("hidden",true);

//           /// when an article is clicked the popUp will show 
//     $(".article").on("click", function(){
//       $("div.loader  div").css("display", "block")
//       // $("#popUp").attr("hidden",false);
//       $("#popUp").show()

//       // $("#popUp.loader").css("background-image", none) not working :(
//     })

//     },
//     error: function(xhr, status, err){
//         alert("not working")
//     }
//   });


// });

// });

// // Done



// ////////////////////
// // It worked:
//           /// when an article is clicked the popUp will show 
//           $(".article").on("click", function(){
//             $("#popUp").show()
      
//           })
// ///////////////////










// // /*
// //   Please add all Javascript code to this file.
// // */

// // ///////////////////////////////Attempt 1

// // news API "4474a36a48bc41ebb37454d592870026"
// // The Gaurdian Open Platform API "bb981d1e-5765-4b84-8f38-31c3db05a992"
// // The New York Times API "EcK5t2MyGl9dJrLYpYAvYZnBie1KhN9D"



// /// WHEN FEEDER IS CLICKED ALL ARTICLES WILL BE REMOVED
//   $("a h1").on( "click", function(){
//     $(".article").remove()
//     // $('#popUp').removeAttr('hidden'); ????????????????????????/

//   });

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////



// //                                                     /*NEWS TRY 1*/
// // //////
                                            
// //   $("#news").on( "click", function() {
//     //  event.preventdefault()
//     // $('#popUp').removeAttr('hidden');??????????????????????????????????????????????

//   //     $(function(){
//   //       var NEWSurl = 'https://newsapi.org/v2/top-headlines?' +
//   //             'country=us&' +
//   //             'apiKey=4474a36a48bc41ebb37454d592870026';

//   //       // $("#popup").css("visibility", "visible") ???????????????????????????????????????????????????????
//   //             //////////////////////////////////////////////////////////
//   //       $.get(NEWSurl, function(res){
//   //         // console.log(res.articles)
//   //         // REPLACING THE PREVIOUS ARTICLES WITH THE NEW ONES
//   //         $(".article").remove();
//   //         res.articles.forEach(function(element){
//   //             // console.log(element.title)
//   //             // console.log(element.urlToImage)
//   //             console.log(element.source.name)


//   //             /////////////////////////////////////////////////////////////////

//   //             // ADDING EACH ARTICLE TO THE PAGE
//   //             const article = document.createElement('article');
//   //             article.setAttribute('class', 'article')
//   //             const main= document.getElementById("main")
//   //             main.appendChild(article)
//   //             const featuredImage = document.createElement("section") 
//   //             featuredImage.setAttribute('class', 'featuredImage')
//   //             article.appendChild(featuredImage)
//   //             const img= document.createElement("img")
//   //             img.setAttribute('src', `${element.urlToImage}`)
//   //             featuredImage.appendChild(img)
//   //             const articleContent= document.createElement('section')
//   //             articleContent.setAttribute('class', 'articleContent')
//   //             article.appendChild(articleContent)
//   //             const a = document.createElement('a');
//   //             a.setAttribute('href', '#')
//   //             articleContent.appendChild(a)
//   //             const h3= document.createElement('h3')
//   //             h3.setAttribute('class', 'title' )
//   //             h3.textContent = `${element.title}`; 
//   //             a.appendChild(h3)
//   //             const h6= document.createElement('h6');
//   //             // $('h6').text("Lifestyle")
//   //             h6.textContent = `${element.author}`;
//   //             articleContent.appendChild(h6)
//   //             const impressions= document.createElement('section')
//   //             impressions.setAttribute('class', 'impressions')
//   //             $('.impressions').text("NEWS")
//   //             article.appendChild(impressions)
//   //             const clearfix= document.createElement('div')
//   //             clearfix.setAttribute('class', 'clearfix')
//   //             article.appendChild(clearfix)
//   //       });

//   //       // $('#popUp').setAttribute('hidden');?????????????????????????????/
        

//   //       /// when an article is clicked the popUp will show 
//   //       $(".article").on("click", function(){
//   //         $("div.loader  div").css("display", "block")
//   //         $("#popUp").attr("hidden",false);
//   //       })

//   //     });
    
//   //   })

//   // })
  
//   /// when the x is clicked the popup will close
//   $(".closePopUp").on( "click", function(){
//     $("#popUp").css("display", "none")
//   });





//   ///////////////////////////////////////
  
//                                                     /*NEWS TRY 2*/
// //////
                                            
// $("#news").on( "click", function() {
//     // AJAX
// $(function(){

//     $("#popUp").attr("hidden",false);

//     $.ajax({
//       url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=4474a36a48bc41ebb37454d592870026",
//       type: "get",
//       data: { api_key : "4474a36a48bc41ebb37454d592870026"},
//       success: function(res){
//                     // REPLACING THE PREVIOUS ARTICLES WITH THE NEW ONES
//                     $(".article").remove();
//                     res.articles.forEach(function(element){
//                         // console.log(element.title)
//                         // console.log(element.urlToImage)
//                         // console.log(element.source.name)
          
          

//                         /////////////////////////////////////////////////////////////////
          
//                         // ADDING EACH ARTICLE TO THE PAGE
//                         const article = document.createElement('article');
//                         article.setAttribute('class', 'article')
//                         const main= document.getElementById("main")
//                         main.appendChild(article)
//                         const featuredImage = document.createElement("section") 
//                         featuredImage.setAttribute('class', 'featuredImage')
//                         article.appendChild(featuredImage)
//                         const img= document.createElement("img")
//                         img.setAttribute('src', `${element.urlToImage}`)
//                         featuredImage.appendChild(img)
//                         const articleContent= document.createElement('section')
//                         articleContent.setAttribute('class', 'articleContent')
//                         article.appendChild(articleContent)
//                         const a = document.createElement('a');
//                         a.setAttribute('href', '#')
//                         articleContent.appendChild(a)
//                         const h3= document.createElement('h3')
//                         h3.setAttribute('class', 'title' )
//                         h3.textContent = `${element.title}`; 
//                         a.appendChild(h3)
//                         const h6= document.createElement('h6');
//                         // $('h6').text("Lifestyle")
//                         h6.textContent = `${element.author}`;
//                         articleContent.appendChild(h6)
//                         const impressions= document.createElement('section')
//                         impressions.setAttribute('class', 'impressions')
//                         $('.impressions').text("NEWS")
//                         article.appendChild(impressions)
//                         const clearfix= document.createElement('div')
//                         clearfix.setAttribute('class', 'clearfix')
//                         article.appendChild(clearfix)
//                         ///////////////////////////////////////////
//                         // LETS TRY THE CONTENT SARAAAAAAAAAAA

//                         // 1: failed :(
//                         // h1.textContent = `${element.title}`;
//                         // p.textContent = `${element.content}`;
//                         // popUpAction.setAttribute('href', `${element.url}`)

//                         // 2:




//                         ///////////////////////
//                       //   <div id="popUp" class="loader" hidden= "True"> 
//                       //   <a href="#" class="closePopUp">X</a>
//                       //   <div class="container">
//                       //     <h1>Article title here</h1>
//                       //     <p>
//                       //       Article description/content here.
//                       //     </p>
//                       //      <!-- Sara: change the hashtag with the -->
//                       //     <a href="#" class="popUpAction" target="_blank">Read more from source</a>
//                       //   </div>
//                       // </div>

//                       ////////////////////////////////////////////////////////////////
//                     });
                    
//       $("#popUp").attr("hidden",true);
//             /// when an article is clicked the popUp will show 
//       $(".article").on("click", function(){
//         $("div.loader  div").css("display", "block")
//         $("#popUp").attr("hidden",false);
//       })

//       },
//       error: function(xhr, status, err){
//           console.log("not working")
//       }
//     });


// });

// });


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                     /*TNYT TRY 1*/
// // $("#TNYT").on( "click", function() {
// //   //  document.preventdefault()

// //     $(function(){
// //       var TNYTurl = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=EcK5t2MyGl9dJrLYpYAvYZnBie1KhN9D';


// //         //////////////////////////////////////////////////////////
// //       $.get(TNYTurl, function(res){
// //         // console.log(res.results)

// //         // REPLACING THE PREVIOUS ARTICLES WITH THE NEW ONES
// //         $(".article").remove();
// //         res.results.forEach(function(element){
// //             // console.log(element.title)
// //             // console.log(element.thumbnail_standard)

// //     //         /////////////////////////////////////////////////////////////////

// //     //      // ADDING EACH ARTICLE TO THE PAGE
// //             const article = document.createElement('article');
// //             article.setAttribute('class', 'article')
// //             const main= document.getElementById("main")
// //             main.appendChild(article)
// //             const featuredImage = document.createElement("section") 
// //             featuredImage.setAttribute('class', 'featuredImage')
// //             article.appendChild(featuredImage)
// //             const img= document.createElement("img")
// //             img.setAttribute('src', `${element.thumbnail_standard}`)
// //             featuredImage.appendChild(img)
// //             const articleContent= document.createElement('section')
// //             articleContent.setAttribute('class', 'articleContent')
// //             article.appendChild(articleContent)
// //             const a = document.createElement('a');
// //             a.setAttribute('href', '#')
// //             articleContent.appendChild(a)
// //             const h3= document.createElement('h3')
// //             h3.setAttribute('class', 'title' )
// //             h3.textContent = `${element.title}`;
// //             a.appendChild(h3)
// //             const h6= document.createElement('h6');
// //             h6.textContent = `${element.section}`;
// //             articleContent.appendChild(h6)
// //             const impressions= document.createElement('section')
// //             impressions.setAttribute('class', 'impressions')
// //             $('.impressions').text("NY Times")
// //             article.appendChild(impressions)
// //             const clearfix= document.createElement('div')
// //             clearfix.setAttribute('class', 'clearfix')
// //             article.appendChild(clearfix)
// //       });

// //     });
  
// //   })

// // })


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //////                                                     /*TNYT TRY 2*/

                                            
// $("#TNYT").on( "click", function() {
//   // AJAX
// $(function(){

//   $("#popUp").attr("hidden",false);

//   $.ajax({
//     url: "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=EcK5t2MyGl9dJrLYpYAvYZnBie1KhN9D",
//     type: "get",
//     data: { api_key : "EcK5t2MyGl9dJrLYpYAvYZnBie1KhN9D"},
//     success: function(res){
//                   // REPLACING THE PREVIOUS ARTICLES WITH THE NEW ONES
//                   $(".article").remove();
//                   res.results.forEach(function(element){
//                       // console.log(element.title)
//                       // console.log(element.urlToImage)
//                       // console.log(element.source.name)
        
        

//                       /////////////////////////////////////////////////////////////////
        
//                       // ADDING EACH ARTICLE TO THE PAGE
//                       const article = document.createElement('article');
//                       article.setAttribute('class', 'article')
//                       const main= document.getElementById("main")
//                       main.appendChild(article)
//                       const featuredImage = document.createElement("section") 
//                       featuredImage.setAttribute('class', 'featuredImage')
//                       article.appendChild(featuredImage)
//                       const img= document.createElement("img")
//                       img.setAttribute('src', `${element.thumbnail_standard}`)
//                       featuredImage.appendChild(img)
//                       const articleContent= document.createElement('section')
//                       articleContent.setAttribute('class', 'articleContent')
//                       article.appendChild(articleContent)
//                       const a = document.createElement('a');
//                       a.setAttribute('href', '#')
//                       articleContent.appendChild(a)
//                       const h3= document.createElement('h3')
//                       h3.setAttribute('class', 'title' )
//                       h3.textContent = `${element.title}`;
//                       a.appendChild(h3)
//                       const h6= document.createElement('h6');
//                       h6.textContent = `${element.section}`;
//                       articleContent.appendChild(h6)
//                       const impressions= document.createElement('section')
//                       impressions.setAttribute('class', 'impressions')
//                       $('.impressions').text("NY Times")
//                       article.appendChild(impressions)
//                       const clearfix= document.createElement('div')
//                       clearfix.setAttribute('class', 'clearfix')
//                       article.appendChild(clearfix)
//                   });
                  
//     $("#popUp").attr("hidden",true);
//           /// when an article is clicked the popUp will show 
//     $(".article").on("click", function(){
//       $("div.loader  div").css("display", "block")
//       $("#popUp").attr("hidden",false);
//       // $("#popUp.loader").css("background-image", none) not working :(
//     })

//     },
//     error: function(xhr, status, err){
//         console.log("not working")
//     }
//   });


// });

// });


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                     /* TG TRY 1*/
// // $("#TGOP").on( "click", function() {
// //   //  document.preventdefault()

//     // $(function(){
//     //   var TGOPurl = 'https://accesscontrolalloworiginall.herokuapp.com/https://content.guardianapis.com/search?api-key=bb981d1e-5765-4b84-8f38-31c3db05a992';


//     //     //////////////////////////////////////////////////////////
//     //   $.get(TGOPurl, function(res){
//     //     console.log(res.response.results)
//         // res.articles.forEach(function(element){
//         //     console.log(element.title)
//         //     console.log(element.urlToImage)

// //             /////////////////////////////////////////////////////////////////
// //             // ADDING EACH ARTICLE TO THE PAGE
// //             const article = document.createElement('article');
// //             article.setAttribute('class', 'article')
// //             const main= document.getElementById("main")
// //             main.appendChild(article)
// //             const featuredImage = document.createElement("section") 
// //             featuredImage.setAttribute('class', 'featuredImage')
// //             article.appendChild(featuredImage)
// //             const img= document.createElement("img")
// //             img.setAttribute('src', `${element.urlToImage}`)
// //             featuredImage.appendChild(img)
// //             const articleContent= document.createElement('section')
// //             articleContent.setAttribute('class', 'articleContent')
// //             article.appendChild(articleContent)
// //             const a = document.createElement('a');
// //             a.setAttribute('href', '#')
// //             articleContent.appendChild(a)
// //             const h3= document.createElement('h3')
// //             $('h3').text(`${element.title}`)
// //             a.appendChild(h3)
// //             const h6= document.createElement('h6');
// //             $('h6').text("Lifestyle")
// //             articleContent.appendChild(h6)
// //             const impressions= document.createElement('section')
// //             impressions.setAttribute('class', 'impressions')
// //             $('.impressions').text("526")
// //             article.appendChild(impressions)
// //             const clearfix= document.createElement('div')
// //             clearfix.setAttribute('class', 'clearfix')
// //             article.appendChild(clearfix)
//       // });

//   //   });
  
//   // })

// // })
 









// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////flickr
// // $(function(){

// //   if(navigator.geolocation){
// //       navigator.geolocation.getCurrentPosition(function(position) {
// //           console.log(position.coords.latitude + "-" + position.coords.longitude);
        
// //         let url = "https://api.flickr.com/services/rest/?"
// //         let params = {
// //             api_key : "5bb64e545d706386c2748ea4b6b79929",
// //             lat : position.coords.latitude.toFixed(1),
// //             lon : position.coords.longitude.toFixed(1),
// //             method:"flickr.photos.search",
// //             extras: "url_n", 
// //             format:"json",
// //             tags : "places",
// //             nojsoncallback : 1,

// //         }

// //         for(let key in params){
// //           url += "&"+ key + "=" + params[key]
// //         }

// //         $.get(url, function(res){
// //           console.log(res.photos.photo)
// //           if(res.photos.photo.length > 1){
// //               res.photos.photo.forEach(element => {
// //                   $(".info").append(
  

// //               });
// //           }else{
// //               $(".info").append("Nothing Found!")
// //           }
// //       })
// //   })
// //   }else{
// //       $(".info").append("Could find anything without your location!")
// //   }
  




