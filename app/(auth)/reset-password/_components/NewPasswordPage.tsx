"use client";

import { Check, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

async function resetPassword(data: { email: string; newPassword: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/reset-password`,
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

export default function NewPasswordPage() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";

  const mutation = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      setShowSuccessModal(true);
    },
    onError: (error: Error) => {
      toast.error("Failed to reset password", {
        description: error.message || "Please try again.",
      });
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email) {
      toast.warning("Email is missing. Please restart the reset flow.");
      return;
    }

    if (!newPassword || !confirmPassword) {
      toast.warning("Please fill in both password fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.warning("Passwords do not match.");
      return;
    }

    mutation.mutate({ email, newPassword });
  };

  return (
    <section className="min-h-screen bg-[#f3f3f3]">
      <div className="mx-auto grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div className="hidden h-screen lg:block">
          <Image
            src="/auth.png"
            alt="Reset password side"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex items-center justify-center px-4 py-10 sm:px-6 md:px-10 lg:px-14">
          <div className="w-full max-w-[520px]">
            <div className="mx-auto w-full max-w-[430px]">
              <h1 className="text-center text-[34px] font-semibold leading-tight text-[#131313] sm:text-[42px] lg:text-[40px]">
                New Password
              </h1>

              <p className="mt-2 text-center text-[12px] text-[#7a7a7a] sm:text-[13px]">
                Please create your new password
              </p>

              <form className="mt-10 space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="mb-2 block text-base font-medium text-[#1f1f1f]">
                    New Password <span className="text-[#b94b2e]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      placeholder="Enter Password..."
                      value={newPassword}
                      onChange={(event) => setNewPassword(event.target.value)}
                      disabled={mutation.isPending}
                      className="h-[48px] w-full rounded-[5px] border border-[#6C6C6C] bg-transparent px-4 pr-11 text-sm outline-none placeholder:text-[#9a9a9a] focus:border-[#8f8f8f] disabled:cursor-not-allowed disabled:opacity-70"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword((prev) => !prev)}
                      disabled={mutation.isPending}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9b9b9b] disabled:cursor-not-allowed"
                    >
                      {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-base font-medium text-[#1f1f1f]">
                    Re-enter Password <span className="text-[#b94b2e]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Enter Password..."
                      value={confirmPassword}
                      onChange={(event) => setConfirmPassword(event.target.value)}
                      disabled={mutation.isPending}
                      className="h-[48px] w-full rounded-[5px] border border-[#6C6C6C] bg-transparent px-4 pr-11 text-sm outline-none placeholder:text-[#9a9a9a] focus:border-[#8f8f8f] disabled:cursor-not-allowed disabled:opacity-70"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      disabled={mutation.isPending}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9b9b9b] disabled:cursor-not-allowed"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="h-[44px] w-full rounded-[5px] bg-[#FBBF24] text-sm font-medium text-[#1a1a1a] transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {mutation.isPending ? "Saving..." : "Continue"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showSuccessModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 backdrop-blur-[2px]">
          <div className="w-full max-w-[360px] rounded-[12px] bg-white px-6 py-7 text-center shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e5e5e5]">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6A93B6]">
                <Check className="h-5 w-5 text-white" strokeWidth={3} />
              </div>
            </div>

            <h2 className="mt-4 text-[24px] font-semibold text-[#000000]">
              Password Changed
              <br />
              Successfully
            </h2>

            <p className="mt-2 text-[12px] text-[#6f6f6f]">
              Your password has been updated successfully
            </p>

            <button
              type="button"
              onClick={() => router.push("/login")}
              className="mt-5 h-[40px] w-full rounded-[6px] bg-[#FBBF24] text-[13px] font-semibold text-[#1a1a1a] transition hover:brightness-95"
            >
              Back to Login
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
