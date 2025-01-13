const divContainer = document.getElementById("container")

const fetchUsers = ()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp) => resp.json())
    .then((data) =>{
        console.log({data}) 

        if(data == null){
            return

        } else {

            data.forEach((each, idx)=>(
                divContainer.innerHTML += `
                    <div class="card">
                        <h3>${each.name}</h3>
                        <h5>${each.username}</h5>
                        <h5>${each.email}</h5>
                        <p class="phone">${each.phone}</p>
                    </div>
                `
            ))
        }

    })
}

fetchUsers()
