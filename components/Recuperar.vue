<script setup>

const authState = ref("Recuperar senha")
const authError = ref("")
const showConfirmEmailMessage = ref(false)
const input = reactive({
    password: "",
    email: ""
})
const router = useRouter()


const { recover, user } = useAuth()



const handleSubmit = async () => {
    try {
            await recover({password: input.password })
            router.push("/login")
    } catch (err) {
        authError.value = err.message
    }
}
</script>

<template>
    <div>
        <div v-if="!showConfirmEmailMessage">
            <div class="flex flex-col justify-evenly h-[50vh] w-[25vw] p-4 border-2 border-escuro">
                <h3 class="text-escuro text-5xl font-aristotelica capitalize font-bold text-center">{{ authState }}</h3>
                <div class="flex flex-col items-center">
                    <div class="relative z-0 w-[80%] mb-9 group">

                        <input type="text" v-model="input.email" name="floating_email" id="floating_email"
                            class="block py-3.5 px-2  w-full text-lg bg-escuro text-claro bg-transparent transition-all border-0 border-b-4 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="pl-2 peer-focus:font-medium absolute text-sm text-verde_claro  duration-300 transform -translate-y-11 scale-75 top-[1.2rem]  origin-[0] peer-focus:left-0 peer-focus:text-escuro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-11 peer-focus:-pl-0">Email
                        </label>
                    </div>
                    <div class="relative z-0 w-[80%] mb-9 group">

                        <input type="password" v-model="input.password" name="floating_email" id="floating_email"
                            class=" block py-3.5 px-2 w-full text-lg bg-escuro text-claro bg-transparent transition-all border-0 border-b-4 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="pl-2 peer-focus:font-medium absolute text-sm text-verde_claro  duration-300 transform -translate-y-11 scale-75 top-[1.2rem] origin-[0] peer-focus:left-0 peer-focus:text-escuro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-11 peer-focus:-pl-0">Senha
                        </label>
                    </div>

                    <button
                        class="px-8 py-2 w-[80%] self-center rounded transition-all capitalize border-2 bg-escuro text-claro font-bold hover:bg-verde hover:border-verde_claro hover:text-verde_claro"
                        @click="handleSubmit">{{ authState }}</button>
                    <!-- <input class="p-3 mb-4 bg-escuro text-claro outline" type="text" placeholder="email"
                            v-model="input.email">
                        <input type="password" placeholder="Password" v-model="input.password"> -->


                </div>
                <div>
                    <p class="error" v-if="authError">{{ authError }}</p>
                    
                </div>
            </div>
        </div>
        <div v-else>
            <h3>Cheque seu email por uma confirmação</h3>
        </div>
    </div>
</template>

