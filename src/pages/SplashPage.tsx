import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/img/logo.png";
import { useWalletStore } from "@/app/store/useWalletStore";

export function SplashPage() {
  const navigate = useNavigate();
  const user = useWalletStore((state) => state.user);

  useEffect(() => {
    const timer = setTimeout(() => navigate(user ? "/dashboard" : "/auth", { replace: true }), 2000);
    return () => clearTimeout(timer);
  }, [navigate, user]);

  return (
    <div className="grid min-h-screen place-items-center bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass flex w-[360px] flex-col items-center rounded-2xl p-10 text-center"
      >
        <img
          src={logo}
          alt="Counterwallet logo"
          className="h-20 w-20 rounded-2xl object-cover shadow-glass"
        />
        <h1 className="mt-5 text-2xl font-bold text-main">Counterwallet Desktop</h1>
        <p className="mt-2 text-sm text-muted">A non-custodial wallet for Bitcoin &amp; Counterparty assets.</p>

        <div className="mt-7 h-1.5 w-full overflow-hidden rounded-full bg-[#121C2C]/65">
          <motion.div
            className="h-full bg-tint-blue"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.9, ease: "linear" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
