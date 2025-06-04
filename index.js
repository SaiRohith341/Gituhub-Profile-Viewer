let btn = document.querySelector(".btn");
let userid = document.querySelector(".userid");

async function fetchuser(username) {
  
        let response = await fetch(`https://api.github.com/users/${username}`);
        let result = await response.json();
        display(result);
    
}

btn.addEventListener('click', () => {
    let value = userid.value;
    document.querySelector("#userprofile").classList.remove("secondDivHidden");
     document.querySelector("#userprofile").classList.add("secondDiv")
        fetchuser(value); 
     
});

function display({avatar_url,name,bio,followers,following,public_repos,html_url}) {
    if(!avatar_url){
        document.querySelector(".userdetails").innerHTML="<h1>user not found<h1>"
        return
    }

    if(!bio){
        bio='';
    }
    document.querySelector(".secondDiv").innerHTML = `
        <div class="userinfo">
            <img src="${avatar_url}"/>
            <p>${name}</p>
            <p> ${bio}</p>
        </div>

        <div class="userfollow">
            <div class="follow">
                <div>
                <p> followers</p>
                <p> ${followers}</p>
                </div>
                <div>
                <p> following</p>
                <p> ${following}</p>
                </div>
                <div>
                <p> repo</p>
                <p> ${public_repos}</p>
                </div>
                
            </div>

            <div class="visit"><a href="${html_url}" target="_blank">Visit Profile</a></div>
        </div>`;
}
