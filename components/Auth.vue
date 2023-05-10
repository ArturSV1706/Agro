<script setup>

const authState = ref("entrar")
const authError = ref("")
const showConfirmEmailMessage = ref(false)
const input = reactive({
    password: "",
    email: ""
})
const router = useRouter()


const { signIn, signUp, user } = useAuth()

const toggleAuthState = () => {
    if (authState.value === "entrar") {
        authState.value = "registrar"
    } else {
        authState.value = "entrar"
    }
    input.email = ""
    input.password = ""
}

const handleSubmit = async () => {
    try {
        if (authState.value === 'entrar') {
            await signIn({ email: input.email, password: input.password })
            router.push("/")
        } else {
            await signUp({ email: input.email, password: input.password })
            showConfirmEmailMessage.value = true
        }
    } catch (err) {
        authError.value = err.message
    }
}

if(process.client){
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    handleSubmit()
  }
})
}

</script>

<template>
    <div>
        <div v-if="!showConfirmEmailMessage">
            <div :class="`flex flex-col justify-evenly h-full w-full p-4 border-2 border-escuro`">
                <h3 class="text-escuro mb-11 text-5xl font-aristotelica capitalize font-bold text-center">{{ authState }}
                </h3>
                <div class="flex flex-col items-center ">
                    <div class="relative z-0 w-[80%] mb-9 group">

                        <input type="text" v-model="input.email" name="floating_email" id="floating_email"
                            :class="`block py-1.5 px-2  w-full text-lg bg-${'verde'} text-claro bg-transparent transition-all border-0 border-b-4 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer`"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="pl-2 peer-focus:font-medium absolute text-sm text-verde_claro  duration-300 transform -translate-y-9 scale-75 top-[.7rem]  origin-[0] peer-focus:left-0 peer-focus:text-escuro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-9 peer-focus:-pl-0">Email
                        </label>
                    </div>
                    <div class="relative z-0 w-[80%] mb-9 group">

                        <input type="password" v-model="input.password" name="floating_email" id="floating_email"
                            :class="` block py-1.5 px-2 w-full text-lg bg-${'verde'} text-claro bg-transparent transition-all border-0 border-b-4 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer`"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="pl-2 peer-focus:font-medium absolute text-sm text-verde_claro  duration-300 transform -translate-y-9 scale-75 top-[.7rem]  origin-[0] peer-focus:left-0 peer-focus:text-escuro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-9 peer-focus:-pl-0">Senha
                        </label>
                    </div>

                    <button
                        class="px-8 py-2 w-[80%] self-center rounded transition-all capitalize border-2 bg-escuro text-claro font-bold hover:bg-verde hover:border-verde_claro hover:text-verde_claro"
                        @click="handleSubmit">{{ authState }}</button>
                    <!-- <input class="p-3 mb-4 bg-escuro text-claro outline" type="text" placeholder="email"
                            v-model="input.email">
                        <input type="password" placeholder="Password" v-model="input.password"> -->


                </div>
                <div class="w-[320px] mt-4">
                    <p class="error" v-if="authError">{{ authError }}</p>
                    <p class="text-sm font-bold text-escuro text-center cursor-pointer" @click="toggleAuthState">{{
                        authState === "entrar" ? "Não possui uma conta? Clique para se registrar"
                        :
                        "Já possui uma conta? Clique para entrar"
                    }}</p>
                </div>
            </div>
        </div>
        <div v-else>
            <div :class="`flex flex-col justify-evenly h-full w-full p-4 border-2 border-escuro text-center`">
                <h1 class="text-center text-5xl">📨</h1>
                <h1 class="text-2xl text-center font-bold text-escuro animate-bounce">Cheque o seu email</h1>
                <h3 class="text-xl font-semibold text-center text-verde">Enviamos um email de confirmação do registro da conta, basta clicar no
                    link enviado. 😉</h3>
                <button @click="showConfirmEmailMessage = false, authState = 'entrar'" class="px-8 py-2 w-[80%] self-center rounded transition-all capitalize border-2 bg-escuro text-claro font-bold hover:bg-verde hover:border-verde_claro hover:text-verde_claro">Já confirmei</button>
            </div>
        </div>
    </div>
</template>

