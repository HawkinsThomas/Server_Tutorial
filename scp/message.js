function createArticle( $message ) {
    let $article = $("<article>").addClass( "message-row");
    let $image = $("<img>").attr( "src" , $message.user.image );
    let $message_image = $("<div>").addClass( "message-image").append( $image );

    let $message_author = $("<span>").addClass( "message-author").text( $message.user.name );

    let $dateMessage = new Date( Number.parseInt( $message.message.date ) );
    let $dateTimeOnly = $dateMessage.toLocaleTimeString( );
    let $dateDateOnly = $dateMessage.toLocaleDateString( );

    let $timePieces = $dateTimeOnly.replace( / /gi , ":" ).split( ":"); 
    let $message_time = $("<span>").addClass( "message-time").text( $timePieces[ 0 ] + ":" + $timePieces[ 1 ] + " " +  $timePieces [ 3 ] + " " + $dateDateOnly);
    console.log( "message-2" , $message );
    let $message_text = $("<span>").addClass( "message-text").text( $message.message.text );      
    let $message_meta_text = $("<div>").addClass( "message-meta-text");
    $message_meta_text.append( $message_author );
    $message_meta_text.append( $message_time ); 
    $message_meta_text.append( $message_text );

    $article.append( $message_image );
    $article.append( $message_meta_text );
    return $article;
  }

  function loadMessages( ) {
    // not expecting use of promises or for them to understand them at least.
    $.ajax('/messages', { method: 'GET', dataType: "json" })
    .then(function (result) {
      renderMessages(result);
    });
  }

  function renderMessages( messages ) {
      console.log ("Data: " ,  messages );
      messages.forEach( ( message ) => {
        let $article = createArticle( message );
        $("#messages-list").append( $article );
      });
    } 

  function submitMessage( message ) {
      $.post("/messages/new" , message , function(data, status){
          console.log("Data: " + data + "\nStatus: " + status);
      });

  }

let user = {
    "name": "Kat",
    "profile_pic": "https://pbs.twimg.com/profile_images/811351709008220160/pJfRFPnq_400x400.jpg",
    "full_name" : "Katherine Vicks",
    "handle" : "@K_Vicks",
    "phone_number" : "416-382-3820",
    "city" : "Toronto, ON",
    "email_address" : "kat@myemail.com",
    "address" : "34 Leval St, M63 3N2",
    "description" : "Strong user experience (UX) design skills. Experience in user research and interaction design gained through corporate and nonprofit externships. Completed three externships during summer breaks to gain experience in UX design and information architecture. Excels at managing usability testing for XYZ landing pages in preparation for Web site redesign. Very competent in testing parameters, prepared prototypes, recruited users, facilitated tests and reported results.",
    "description_extended" : "",
};


let user_name = document.getElementById("user_name");
user_name.innerHTML = user["name"];


  $( document ).ready(function() {

    $("#message").keydown(function(event){
      if ( event.which === 13 ) {
        event.preventDefault( );
        let message = {
          "user": {
              "name": user["name"],
              "image": user["profile_pic"]
          },
         "message": {
         "text": event.target.value,
         "date": ( new Date( ) ).getTime( )
         }
       };   
        let $article = createArticle( message );
          $("#messages-list").prepend( $article );  
          event.target.value = "";
        console.log( message );     
        submitMessage( message );
      }
     });        

    loadMessages( );

  });
