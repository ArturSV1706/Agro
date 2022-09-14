<script setup lang="ts">

const authState = ref<"login" | "signup">("login");
const authError = ref("")
const showConfirmEmailMessage = ref(false)
const input = reactive({
    password: "",
    email: ""
})
const router = useRouter()


const { signUp, signIn, signOut, user } = useAuth()
const toggleAuthState = () => {
    if (authState.value === "login") {
        authState.value = "signup"
    } else {
        authState.value = "login"
    }
    input.email = ""
    input.password = ""
}

const handleSubmit = async () => {
    try {
        if (authState.value === 'login') {
            await signIn({ email: input.email, password: input.password })
            router.push("/myProfile")
        } else {
            await signUp({ email: input.email, password: input.password })
            showConfirmEmailMessage.value = true
        }
    } catch (err) {
        authError.value = err.message
    }
}
</script>

<template>
    <div>
        <div v-if="!showConfirmEmailMessage">
            <NCard class="card">
                <h3>{{ authState }}</h3>
                <div class="input-container">
                    {{ input.password }}
                    <input type="text" placeholder="email" v-model="input.email">
                    <input type="password" placeholder="Password" v-model="input.password">

                </div>
                <NButton @click="handleSubmit">Submit</NButton>
                <p class="error" v-if="authError">{{ authError }}</p>
                <p @click="toggleAuthState">{{ authState === "login" ? "Don't have an account? Creato one now" :
                        "Alreadyhave an account? Go ahead and login"
                }}</p>
            </NCard>
        </div>
        <div v-else>
            <h3>Check email for confirmation message</h3>
        </div>
    </div>
</template>

<style scoped>
.card {
    padding: 2rem;
    width: 25rem;
}

.card h3 {
    font-size: 1.75rem;
    text-transform: capitalize;
}

.input-container {
    display: flex;
    flex-direction: column;
}

.input-container input {
    margin-bottom: .3rem;
    padding: .5rem;
    outline: none;
    border: .1rem solid rgba(0, 0, 0, .5);
    border-radius: .2rem;
}

p {
    color: lightblue;
    font-size: .8rem;
    cursor: pointer;
}

.error {
    color: red
}
</style>