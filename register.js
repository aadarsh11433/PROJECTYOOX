
import {navbar,openForm , closeForm ,checkLogin} from "../component/navbar.js"

document.getElementById("navbar").innerHTML= navbar();



    let but1 = document.getElementById("google");
    but1.addEventListener('mouseover', e => {
        but1.innerHTML = "REGISTER WITH GOOGLE";
    });
    but1.addEventListener('mouseleave', e => {
        but1.innerHTML = '<img width="20px" style="margin-bottom:3px; margin-right:5px" alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />';
    });


    let butfb = document.getElementById("fb");
    butfb.addEventListener('mouseover', e => {
        butfb.innerHTML = "REGISTER WITH FACEBOOK";
    });
    butfb.addEventListener('mouseleave', e => {
        butfb.innerHTML = '<a href="#" class="fa fa-facebook"></a>';
    });



//registeration page
    document.querySelector("#signupf").addEventListener("submit", register);

    function register(e) {
        e.preventDefault();

        let check;
        if (document.getElementById('female').checked == true) {
            check = document.getElementById('female').value;
        } else {
            check = document.getElementById('male').value;
        }


         console.log(check);
        const fname = document.querySelector("#fname").value;
        const lname = document.querySelector("#lname").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#pass").value;
        const mobile = document.querySelector("#mobile").value;
        const dob = document.querySelector("#bdate").value;
        const gen = check;


 let users = JSON.parse(localStorage.getItem("UserDetails")) || [];
        console.log(users.length);
        var userData = {
            first_name: fname,
            last_name: lname,
            email_id: email,
            pass: password,
            mobile_no: mobile,
            date_of_b: dob,
            gender: gen,
        };
        var flag = 0;
        if (users.length == 0) {
            users.push(userData);
            localStorage.setItem('UserDetails', JSON.stringify(users));
            alert("Register Sucessfully...")
        } else {
            for (let i = 0; i < users.length; i++) {
                if (users[i].email_id == email) {
                    flag=1;
                    break;
                } 
            }
            if (flag !=1) {
                users.push(userData);
                localStorage.setItem('UserDetails', JSON.stringify(users));
                alert("Register Sucessfully...");
                window.location.reload();
            }else{
                document.getElementById("error").innerText="Email already existed......";
            }
        }

    }

// Login Page 
document.getElementById("open").addEventListener("click",openForm);
document.querySelector("#login").addEventListener("click",checkLogin);
document.getElementById("close").addEventListener("click",closeForm);





