
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

    getLoggedUsername(){
        let User = sessionStorage.getItem('authenticateduser')
        if(User===null) return ''
            return User
    }

    // isUserAdmin(){
    //     console.log(role);
    //     if(role==="ADMIN"){
    //         return false;
    //     }
    //     else return true;
    // }

}



export default new authenticationService();