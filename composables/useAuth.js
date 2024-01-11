const useAuth = () => {
  const user = useState("user", () => null);
  const router = useRouter()
  const { supabase } = useSupabase();

  supabase.auth.onAuthStateChange((e, session) => {
    user.value = session?.user || null;
  });

  const signUp = async ({ email, password, ...metadata }) => {
    const { user: u, error } = await supabase.auth.signUp(
      {
        email,
        password,
        options: { captchaToken }
      },
      {
        data: metadata,
        redirectTo: `${window.location.origin}/myProfile?source=email`,
      }
    );
    if (error) throw error;
    return u;
  };

  const signIn = async ({ email, password }) => {
    const { user: u, error } = await supabase.auth.signIn({
      email,
      password
    });
    if(error) throw error;
    return u;
  };
  const recover = async ({ email, password }) => {
    const { user: u, error } = await supabase.auth.update({password: password})
    if(error) throw error;
    router.push("/login")
    return u;
  };
  const signOut = async({}) => {
    const {error} = await supabase.auth.signOut();
    if(error) throw error
    router.push("/")
  }
  const isLoggedIn = async() =>{
  const u = await supabase.auth.session()
  // console.log(u)
    return u
  }
  return {
    user,
    signUp,
    signIn,
    recover,
    signOut,
    isLoggedIn
  };
};

export default useAuth;
