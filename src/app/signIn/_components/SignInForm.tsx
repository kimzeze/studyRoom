"use client";

import { supabase } from "@/supa-auth/lib/supabase";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function SignInForm() {
  // 깃허브 로그인 함수
  async function signInWithGithub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: { queryParams: { access_type: "offline", prompt: "consent" } },
    });

    if (data) alert("깃허브 로그인 성공");
    alert(data);
    if (error) console.log("깃허브 로그인 실패", error);
  }
  // 구글 로그인 함수
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { queryParams: { access_type: "offline", prompt: "consent" } },
    });

    if (data) alert("구글 로그인 성공");
    if (error) console.log("구글 로그인 실패", error);
  }
  return (
    <section className="h-[200px] flex flex-col justify-between items-center">
      <h2 className="text-[30px] font-bold text-white">
        TEST THIRD PARTY LOGIN
      </h2>
      <button
        className="border-[2px] rounded-[10px] font-semibold w-[400px] text-[30px] flex items-center p-[5px] justify-between pr-[30px] pl-[30px] hover:text-black hover:bg-white"
        onClick={signInWithGithub}
      >
        <FaGithub className="w-[40px] h-[40px]" />
        Sign in with Github
      </button>
      <button
        className="border-[2px] rounded-[10px] font-semibold w-[400px] text-[30px] flex items-center p-[5px] justify-between pr-[30px] pl-[30px] hover:text-black hover:bg-white"
        onClick={signInWithGoogle}
      >
        <FaGoogle className="w-[40px] h-[40px]" />
        Sign in with Google
      </button>
    </section>
  );
}
