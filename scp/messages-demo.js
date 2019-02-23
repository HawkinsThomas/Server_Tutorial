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

let messages_landing = [
    {
        "user": {
            "name": "Kat",
            "image": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=25"
        },
        "message": {
            "text": "I'm changing the due date on the landing page because I need more time. The designs look great!",
            "date": 1534885670000
        }
    },
    {
        "user": {
            "name": "Ron",
            "image": "https://images.pexels.com/photos/1498335/pexels-photo-1498335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=25"
        },
        "message": {
            "text": "I'm changing the due date on the landing page because I need more time. The designs look great!",
            "date": 1534485670000
        }
    },
    {
        "user": {
            "name": "Benny",
            "image": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=25"
        },
        "message": {
            "text": "It is great to finally see this project complete",
            "date": 1534785670000
        }
    },
    {
        "user": {
            "name": "Betty",
            "image": "https://images.pexels.com/photos/1498778/pexels-photo-1498778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=25"
        },
        "message": {
            "text": "Next time I will be able to see things better",
            "date": 1537564070000
        }
    }
];

let messages_sports = [
    {
        "user": {
            "name": "Ron",
            "image": "https://images.pexels.com/photos/1498335/pexels-photo-1498335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=25"
        },
        "message": {
            "text": "Go leafs!",
            "date": 1534485670000
        }
    }
];

let messages_shows = [];
let messages_movies = [];
let messages_pets = [
    {
        "user": {
            "name": "Betty",
            "image": "https://images.pexels.com/photos/1498778/pexels-photo-1498778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=25"
        },
        "message": {
            "text": "I love my stupid cat.",
            "date": 1537564070000
        }
    }
];


function createArticle($message) {

    let $article = $("<article>").addClass("message-row");
    let $image = $("<img>").attr("src" , $message.user.image);
    let $message_image = $("<div>").addClass("message-image").append($image);
    let $message_author = $("<span>").addClass("message-author").text($message.user.name);
    let $dateMessage = new Date(Number.parseInt($message.message.date));
    let $dateTimeOnly = $dateMessage.toLocaleTimeString();
    let $dateDateOnly = $dateMessage.toLocaleDateString();

    let $timePieces = $dateTimeOnly.replace(/ /gi , ":").split(":"); 
    let $message_time = $("<span>").addClass("message-time").text($timePieces[ 0 ] + ":" + $timePieces[ 1 ] + " " +  $timePieces [ 3 ] + " " + $dateDateOnly);
    console.log("message-2" , $message);
    let $message_text = $("<span>").addClass("message-text").text($message.message.text);			
    let $message_meta_text = $("<div>").addClass("message-meta-text");
    $message_meta_text.append($message_author);
    $message_meta_text.append($message_time);	
    $message_meta_text.append($message_text);

    $article.append($message_image);
    $article.append($message_meta_text);

    return $article;
}

function renderMessages(messages) {
    console.log ("Data: " ,  messages);
    messages.forEach((message) => {
        let $article = createArticle(message);
        $("#messages-list").append($article);
    });
}	

function submitMessage(message) {
    console.log("Message : " + message);
}

let user_name = document.getElementById("user_name");
user_name.innerHTML = user["name"];

let current_channel = messages_landing;


let sports_button = document.getElementById("Sports");
let shows_button = document.getElementById("Shows");
let movies_button = document.getElementById("Movies");
let pets_button = document.getElementById("Pets");

let buttons=[sports_button, shows_button, movies_button, pets_button];



sports_button.addEventListener("click", function() {open_channel(sports_button, messages_sports)});
shows_button.addEventListener("click", function() {open_channel(shows_button, messages_shows)});
movies_button.addEventListener("click", function() {open_channel(movies_button, messages_movies)});
pets_button.addEventListener("click", function() {open_channel(pets_button, messages_pets)});

function open_channel(channel_button, messages) {
    
    for (let i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor="#7851A9";
    }
    channel_button.style.backgroundColor="red";
    $("#messages-list").empty();
    renderMessages(messages);
    current_channel = messages;
}



$(document).ready(function() {

    $("#message").keydown(function(event){
        if (event.which === 13) {
            event.preventDefault();
            let message = {
                "user": {
                    "name": user["name"],
                    "image": user["profile_pic"]
                },
                "message": {
                    "text": event.target.value,
                    "date": (new Date()).getTime()
                }
            };		
            let $article = createArticle(message);
            $("#messages-list").prepend($article);
            //push the new message to the front of the messages array
            current_channel.unshift(message);
            event.target.value = "";
            console.log($article);			
            submitMessage(message);
        }
        });				

    renderMessages(messages_landing);

});