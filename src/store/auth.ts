import { ref } from "vue";
import { supabase } from "@/lib/supabase.ts";

const user: any = ref(null);

export function useAuth() {
  const checkUser = async () => {
    const { data } = await supabase.auth.getUser();
    user.value = data.user;
  };

  const login = async (email: any, password: any) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    await checkUser();
  };

  const logout = async () => {
    await supabase.auth.signOut();
    user.value = null;
  };

  return {
    user,
    login,
    logout,
    checkUser,
  };
}
