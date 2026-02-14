import { FormEvent, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useWalletStore } from "@/app/store/useWalletStore";

export function AuthPage() {
  const navigate = useNavigate();
  const setMockUser = useWalletStore((state) => state.setMockUser);
  const user = useWalletStore((state) => state.user);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, navigate]);

  const canContinue = useMemo(
    () => Boolean(password.trim()) && password === confirmPassword,
    [password, confirmPassword]
  );

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canContinue) return;

    setMockUser({
      username: "demo-user",
      lastLogin: new Date().toISOString()
    });
    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden bg-surface px-4">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#1F3E6F]/35 blur-3xl"
        animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0], scale: [1, 1.08, 0.94, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-[#3AD429]/25 blur-3xl"
        animate={{ x: [0, -35, 20, 0], y: [0, -25, 15, 0], scale: [1, 0.95, 1.07, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#22d3ee]/20 blur-3xl"
        animate={{ x: [0, 30, -30, 0], y: [0, -20, 25, 0], scale: [1, 1.06, 0.92, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass relative z-10 w-full max-w-xl rounded-2xl p-7"
      >
        <div className="mb-6 border-b border-[#2B2EC4]/20 pb-4 text-center">
          <h1 className="text-2xl font-bold text-main">Counterwallet</h1>
          <p className="mt-1 text-sm font-medium text-blue2">Wallet for Counterparty</p>
          <p className="mt-2 text-sm text-muted">
            A non-custodial web wallet for Bitcoin &amp; Counterparty assets.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-main">Sign Up</h2>
        <p className="mt-2 text-sm text-muted">Create your wallet password to continue</p>

        <form className="mt-6 space-y-4" onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-xl border border-[#2B2EC4]/35 bg-[#121C2C]/62 px-4 py-3 text-sm text-main outline-none transition focus:border-[#22d3ee]"
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className="w-full rounded-xl border border-[#2B2EC4]/35 bg-[#121C2C]/62 px-4 py-3 text-sm text-main outline-none transition focus:border-[#22d3ee]"
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-light-blue px-4 py-2 text-sm font-semibold text-main transition-all hover:bg-blue2 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={!canContinue}
          >
            Continue
          </button>
        </form>
      </motion.div>
    </div>
  );
}
