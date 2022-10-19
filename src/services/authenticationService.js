class authenticationService{
    registerSuccesfulUser(username,password){
        sessionStorage.setItem('authenticateduser',username)
    }

    removeSuccesfulUser(){
        sessionStorage.removeItem('authenticateduser')
    }

    isUserloggedIn(){
        let User = sessionStorage.getItem('authenticateduser')
        if(User===null) return false
        return true

    }
}

export default new authenticationService;