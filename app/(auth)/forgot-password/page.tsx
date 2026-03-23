"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

async function requestPasswordReset(data: { email: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/forget-password`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Server responded with status ${response.status}`);
  }

  return response.json();
}

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const mutation = useMutation({
    mutationFn: requestPasswordReset,
    onSuccess: (_data, variables) => {
      toast.success("OTP sent successfully!", {
        description: "Please check your email to verify your account.",
      });
      router.push(`/verify-otp?email=${encodeURIComponent(variables.email)}`);
    },
    onError: (error: Error) => {
      toast.error("Failed to send OTP", {
        description: error.message || "Please try again later.",
      });
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      toast.warning("Please enter your email address.");
      return;
    }

    mutation.mutate({ email: trimmedEmail });
  };

  return (
    <section className="min-h-screen  w-full">
 

      <div className="w-full grid h-screen grid-cols-1 px-3 pb-3 sm:px-0 sm:pb-4 lg:grid-cols-2">
        {/* Left Image */}
        <div className="relative hidden h-screen  lg:block ">
          <Image
            src="/auth.png"
            alt="Automotive inspection"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex items-center justify-center bg-[#f7f7f7] px-4 py-10 sm:px-8 md:px-10 lg:px-4">
          <div className="w-full max-w-[420px]">
            <h1 className="text-center text-[34px] font-semibold leading-tight text-[#252525] sm:text-[42px] lg:text-[40px]">
              Forget Password
            </h1>

            <p className="mx-auto mt-3 max-w-[360px] text-center text-[12px] leading-6 text-[#9E9E9E] sm:text-[16px]">
              Please enter the email address linked to your account. We’ll send
              a one-time password (OTP) to your email for verification.
            </p>

            <form className="mt-8 sm:mt-10" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-base font-medium text-[##2A2A2A]">
                  Email <span className="text-[#b84f36]">*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your mail address..."
                  disabled={mutation.isPending}
                  className="h-[48px] w-full rounded-[5px] border border-[#6C6C6C] bg-transparent px-4 text-sm text-[#222] outline-none transition placeholder:text-[#9b9b9b] focus:border-[#8f8f8f] disabled:cursor-not-allowed disabled:opacity-70"
                />
              </div>

              <button
                type="submit"
                disabled={mutation.isPending}
                className="mt-5 h-[44px] w-full rounded-[5px] bg-[#FBBF24] text-sm font-medium text-[#1a1a1a] transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {mutation.isPending ? "Sending..." : "Send OTP"}
              </button>

              <p className="mt-4 text-center text-[12px] text-[#8d8d8d] sm:text-[13px]">
                Back to{" "}
                <Link href="#" className="font-medium text-[#244a73] underline">
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
