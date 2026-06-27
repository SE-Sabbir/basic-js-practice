const fetchUser =async ()=>{
    try {
        const response =await fetch("")
        console.log(response)
        if(!response.ok){
            console.log("Data fetching failed")
        }
        const users = await response.json()
        console.log("this is from user data",users)
    } catch (error) {
        console.log("this is error",error.message)
    }
}

fetchUser()