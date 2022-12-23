import axios from "axios"

class authenticationService{

    setupJWTInterceptor(token){
        axios.interceptors.request.use(
            (config)=>{
                if(this.isUserloggedIn()){
                    config.headers.authorization = token
                }
                return config
            }
        )

    }
    
    registerSuccesfulUser(username,token){
        sessionStorage.setItem('JWT_token','Bearer '+token)
        sessionStorage.setItem('authenticateduser',username)
        console.log("Token: ",token)
        console.log("User: ",username)
    }

    setRoleOfUser(role){
        sessionStorage.setItem('role',role)
    }

    setUserId(user_id){
        sessionStorage.setItem('user_id',user_id)
    }

    

    removeSuccesfulUser(){
        sessionStorage.removeItem('authenticateduser')
        sessionStorage.removeItem('JWT_token')
        sessionStorage.removeItem('role')
        sessionStorage.removeItem('user_id')
        
    }

    isUserloggedIn(){
        let jwttoken = sessionStorage.getItem('authenticateduser')
        if(jwttoken===null) return false
            return true
    }

    getLoggedUsername(){
        let User = sessionStorage.getItem('authenticateduser')
        if(User===null) return ''
            return User
    }


}



export default new authenticationService();