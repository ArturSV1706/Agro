

export default defineNuxtRouteMiddleware(async() =>{
    const {isLoggedIn} = useAuth()
    if(process.client){
    const isLoggedIn_ = async() =>{
         const result = await isLoggedIn()
        console.log(result)
        if( result === null){
            console.log("entrou")
            return true
        }else{
            return false
        }
    }

    if(await isLoggedIn_()){
        console.log( await isLoggedIn_())
        return navigateTo('/login')
    }
        

}
})