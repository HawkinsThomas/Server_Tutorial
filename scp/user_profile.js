
//write json data to the DOM objects
function load_user_profile(users, user_email){

    let user = users[user_email];

    //load references to the DOM object
    let user_name = document.getElementById("full_name");
    let profile_pic = document.getElementById("profile_pic");
    let handle = document.getElementById("handle");
    let city = document.getElementById("city");
    let address = document.getElementById("address");
    let email_address = document.getElementById("email_address");
    let phone_number = document.getElementById("phone_number");
    let p1 = document.getElementById("p1");
    let p2 = document.getElementById("p2");

    user_name.innerHTML = user["full_name"];
    profile_pic.src = user["profile_pic"];
    handle.innerHTML = user["handle"];
    city.innerHTML = user["city"];
    address.innerHTML = user["address"];
    email_address.innerHTML = user["email_address"];
    phone_number.innerHTML = user["phone_number"];
    p1.innerHTML = user["description"];
    p2.innerHTML = user["description_extended"];
}

function main(){

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
            "description_extended" : "His other hobbies include working out, playing hockey, playing video games with friends and building models."
            }
        };
    
    load_user_profile(users, 'kat@myemail.com');
    
}

main();