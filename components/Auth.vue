<script setup>
  import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';


const authState = ref("entrar")
const authError = ref("")
const showConfirmEmailMessage = ref(false)
const input = reactive({
    password: "",
    email: ""
})
const router = useRouter()


const { signIn, signUp, user } = useAuth()
const screen = ref('mobile');
const emit = defineEmits(['loading']);

if (process.client) {
    const screenWidth = window.innerWidth;
    if (screenWidth > 600) {
        screen.value = 'desktop'
    } else {
        screen.value = 'mobile'
    }
}

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
    let erro

    emit('loading')

    try {
        if (authState.value === 'entrar') {
            await signIn({ email: input.email, password: input.password })
            router.push("/")
        } else {
            await signUp({ email: input.email, password: input.password })
            showConfirmEmailMessage.value = true
            emit('stopLoading')
        }
    } catch (err) {
        if (err.message.includes('You must provide either an email')) {
            // Do something when the error message matches the expected value
            err.message = 'Você precisa adicionar um email e senha para fazer login.'
        } else if (err.message.includes('Invalid login credentials')) {
            // Do something when the error message matches the expected value
            err.message = 'Credenciais inválidas, email ou senha incorretos'
        } else if (err.message.includes('captcha verification process failed')) {
            // Do something when the error message matches the expected value
            err.message = 'Preencha o captcha para fazer login ou registrar-se'
        }

        console.log(err)
        emit('stopLoading')
        authError.value = err.message
    }
}

if (process.client) {
    document.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
            handleSubmit()
        }
    })
}

</script>

<template>
    <div v-if="screen === 'desktop'">
        <div v-if="!showConfirmEmailMessage">
            <div :class="`flex flex-col justify-evenly h-full min-w-[23vw] p-4 border-2 border-escuro`">
                <h3 class="text-escuro mb-5 text-5xl font-aristotelica capitalize font-bold text-center">{{ authState }}
                </h3>
                <p class="px-2 mb-11 text-vermelho font-semibold animate-pulse text-center" v-if="authError">{{ authError }}</p>

                <div class="flex flex-col items-center ">
                    <div class="relative z-0 w-[80%] mb-9 group">

                        <input type="text" v-model="input.email" name="floating_email" id="floating_email"
                            :class="`block py-1.5 px-2  w-full text-lg bg-${'verde'} text-claro bg-transparent transition-all border-0 border-b-4 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer`"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="pl-2 peer-focus:font-medium absolute text-sm text-verde_claro  duration-300 transform -translate-y-9 scale-75 top-[.7rem]  origin-[0] peer-focus:left-0 peer-focus:text-escuro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-9 peer-focus:-pl-0">Email
                        </label>
                    </div>
                    <div class="relative z-0 w-[80%] mb-4 group">

                        <input type="password" v-model="input.password" name="floating_email" id="floating_email"
                            :class="` block py-1.5 px-2 w-full text-lg bg-${'verde'} text-claro bg-transparent transition-all border-0 border-b-4 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer`"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="pl-2 peer-focus:font-medium absolute text-sm text-verde_claro  duration-300 transform -translate-y-9 scale-75 top-[.7rem]  origin-[0] peer-focus:left-0 peer-focus:text-escuro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-9 peer-focus:-pl-0">Senha
                        </label>
                    </div>
                    <vue-hcaptcha sitekey="bb7bc19b-29a9-4865-9bf9-e85c6ed115c8"></vue-hcaptcha>


                    <button
                        class="px-8 py-2 mt-2 w-[80%] self-center rounded transition-all capitalize border-2 bg-escuro text-claro font-bold hover:bg-verde hover:border-verde_claro hover:text-verde_claro"
                        @click="handleSubmit()">{{ authState }}</button>
                    <!-- <input class="p-3 mb-4 bg-escuro text-claro outline" type="text" placeholder="email"
                            v-model="input.email">
                        <input type="password" placeholder="Password" v-model="input.password"> -->


                </div>
                <div class="w-[320px] mt-4">
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
                <h3 class="text-xl font-semibold text-center text-verde">Enviamos um email de confirmação do registro da
                    conta, basta clicar no
                    link enviado. 😉</h3>
                <button @click="showConfirmEmailMessage = false, authState = 'entrar'"
                    class="px-8 py-2 w-[80%] self-center rounded transition-all capitalize border-2 bg-escuro text-claro font-bold hover:bg-verde hover:border-verde_claro hover:text-verde_claro">Já
                    confirmei</button>
            </div>
        </div>
    </div>
    <div v-if="screen === 'mobile'">
        <div v-if="!showConfirmEmailMessage">
            <div :class="`flex flex-col justify-evenly h-full w-[90vw] py-6 rounded-2xl border-escuro bg-claro space-y-10`">
                <h3 class="text-escuro  text-5xl font-aristotelica capitalize font-bold text-center">{{ authState }}
                </h3>
                <p class="px-2 text-vermelho font-semibold animate-pulse text-center" v-if="authError">{{ authError }}</p>

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
                    <vue-hcaptcha sitekey="bb7bc19b-29a9-4865-9bf9-e85c6ed115c8"></vue-hcaptcha>


                    <button
                        class="px-8 py-2 mt-4 w-[80%] self-center rounded transition-all capitalize border-2 bg-escuro text-claro font-bold hover:bg-verde hover:border-verde_claro hover:text-verde_claro"
                        @click="handleSubmit">{{ authState }}</button>
                    <!-- <input class="p-3 mb-4 bg-escuro text-claro outline" type="text" placeholder="email"
                            v-model="input.email">
                        <input type="password" placeholder="Password" v-model="input.password"> -->


                </div>
                <div class="w-[100%] mt-4 text-center flex flex-col justify-center items-center">
                    <p class="text-sm w-[70%] font-bold text-escuro text-center cursor-pointer" @click="toggleAuthState">{{
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
                <h3 class="text-xl font-semibold text-center text-verde">Enviamos um email de confirmação do registro da
                    conta, basta clicar no
                    link enviado. 😉</h3>
                <button @click="showConfirmEmailMessage = false, authState = 'entrar'"
                    class="px-8 py-2 w-[80%] self-center rounded transition-all capitalize border-2 bg-escuro text-claro font-bold hover:bg-verde hover:border-verde_claro hover:text-verde_claro">Já
                    confirmei</button>
            </div>
        </div>
    </div>
</template>

