let users = {
    'kat@myemail.com':
        {
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
        "password": "1234"
        },

    'thawkins@mail.com':    
        {    
        "name": "Tom",
        "profile_pic": "https://scontent-yyz1-1.xx.fbcdn.net/v/t31.0-8/12783822_10154453429976490_2966296857043012891_o.jpg?_nc_cat=111&_nc_ht=scontent-yyz1-1.xx&oh=c91bf1237b53490b640c640f507c7f68&oe=5CBDA181",
        "full_name" : "Thomas Hawkins",
        "handle" : "@thawkins",
        "phone_number" : "613-123-1234",
        "city" : "Toronto, ON",
        "email_address" : "thawkins@mail.com",
        "address" : "22 Broadway st, M63 3N2",
        "description" : "Thomas is an aspiring full stack developer. He is currently taking a course at York University on the weekends. He also works full time at Celstica Inc. as a software developer doing automated quality assurance. He graduated from McMaster University with a Bachelor of Mechatronics Engineering.",
        "description_extended" : "His other hobbies include working out, playing hockey, playing video games with friends and building models.",
        "password": "1234"
        }
    };


let submit_button = document.getElementById('submit');
let user_name = document.getElementById('username');
let password = document.getElementById('password');

submit_button.addEventListener("click", function() {submit(users)});

function submit(users) {

    let successful_login = false;
    if (users[user_name.value]["password"] == password.value){
        console.log('Successful Login');
        successful_login = true;
    }

    if (!(successful_login)){
        console.log('Incorrect username or password');
    }
}