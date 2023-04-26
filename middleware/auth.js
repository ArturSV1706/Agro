

export default defineNuxtRouteMiddleware(() =>{
    const {isLoggedIn} = useAuth()


    if(process.client){
        if(isLoggedIn() === null){
            return navigateTo("/login")
        }
    }

   
})