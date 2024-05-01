"use client";

import useAuthStore from "@/app/stores/useAuthStore";
import { supabase } from "@/supa-auth/lib/supabase";
import { FaGithub } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

export default function SignInForm() {
  const { isLoggedIn, setIsLoggedIn } = useAuthStore();

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN") {
      setIsLoggedIn(true);
    } else if (event === "SIGNED_OUT") {
      setIsLoggedIn(false);
    }
  });

  // 깃허브 로그인 함수
  async function signInWithGithub() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
          redirectTo: "http://localhost:3000/signIn",
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
        },
      });
      if (error) {
        throw error;
      }
      console.log("깃허브 로그인 성공");
    } catch (error) {
      console.error("깃허브 로그인 실패", error);
    }
  }

  // 로그아웃 함수
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    alert("로그아웃 성공");
    if (error) console.log("로그아웃 실패", error);
  }

  // 유저 로그인 데이터 확인
  async function checkLoginStatus() {
    try {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        throw error;
      }
      if (data.user) {
        console.log("사용자가 로그인되어 있습니다.");
        console.log("사용자 정보:", data.user);
        // 사용자 정보를 사용하여 필요한 작업 수행
      } else {
        console.log("사용자가 로그인되어 있지 않습니다.");
      }
    } catch (error) {
      console.error("로그인 상태 확인 실패", error);
    }
  }

  // 유저 세션 확인
  async function checkSession() {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        throw error;
      }
      if (data.session) {
        console.log("세션이 존재합니다.");
        // 세션 정보를 사용하여 필요한 작업 수행
      } else {
        console.log("세션이 존재하지 않습니다.");
      }
    } catch (error) {
      console.error("세션 확인 실패", error);
    }
  }

  return (
    <section className="h-[500px] flex flex-col items-center">
      <h2 className="text-[30px] font-bold pt-[50px] pb-[30px]">
        Let&apos;s connect your GitHub account
      </h2>
      {isLoggedIn ? (
        <>
          <h2 className="text-[30px] font-bold pt-[50px] pb-[30px]">
            당신은 로그인에 성공하였습니다.
          </h2>
          <button
            className="border-[2px] rounded-[10px] font-semibold w-[400px] text-[30px] flex items-center p-[5px] justify-between pr-[30px] pl-[30px] hover:text-black hover:bg-white"
            onClick={signOut}
          >
            <FiLogOut className="w-[40px] h-[40px]" />
            Logout
          </button>
          <button
            className="border-[2px] rounded-[10px] font-semibold w-[400px] text-[30px] flex items-center p-[5px] justify-between pr-[30px] pl-[30px] hover:text-black hover:bg-white"
            onClick={checkLoginStatus}
          >
            <FiLogOut className="w-[40px] h-[40px]" />
            Check User Data
          </button>
          <button
            className="border-[2px] rounded-[10px] font-semibold w-[400px] text-[30px] flex items-center p-[5px] justify-between pr-[30px] pl-[30px] hover:text-black hover:bg-white"
            onClick={checkSession}
          >
            <FiLogOut className="w-[40px] h-[40px]" />
            Check Session
          </button>
        </>
      ) : (
        <button
          className="border-[2px] rounded-[10px] font-semibold w-[400px] text-[30px] flex items-center p-[5px] justify-between pr-[30px] pl-[30px] hover:text-black hover:bg-white"
          onClick={signInWithGithub}
        >
          <FaGithub className="w-[40px] h-[40px]" />
          Sign in with Github
        </button>
      )}
    </section>
  );
}
