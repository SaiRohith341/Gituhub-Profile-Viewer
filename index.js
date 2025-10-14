

let btn = document.querySelector(".btn");
let btn2 = document.querySelector("#btn2");
let userid = document.querySelector(".userid");
let img = document.querySelector(".img")
let userprofile = document.querySelector("#userprofile");
async function fetching(name){
    let response=await fetch(`https://api.github.com/users/${name}`)
    let result=await response.json()
    console.log(result);
    if(!result.login){
        document.querySelector(".main").innerHTML="USER NOT FOUND"
    }
    userprofile.innerHTML=` <div class="secondinner1">
                <div>
                    <img src=${result.avatar_url} alt="" class="img">
                </div>
                <div>
                    <div class="bio">${result.bio}</div>
                </div>
            </div>
            <div class="secondinner2">
                  <div class="sec">

                     <div>
                    <p>Followers</p>
                    <p>${result.followers}</p>
                   </div>

                   <div>
                    <p>Following</p>
                    <p>${result.following}</p>
                   </div>

                   <div>
                    <p>repo</p>
                    <p>${result.public_repos}</p>
                   </div>
                 <div>
                </div>

                  </div>
                    <a href=https://github.com/${name} target="_blank"><button id="btn2">Visit profile</button></a>
                   </div>`
}
btn.addEventListener("click",()=>{
    let val=userid.value
    fetching(val)
})
