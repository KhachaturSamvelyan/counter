import { History } from "lucide-react";
import { motion } from "framer-motion";
import { AppLayoutWithActive } from "@/layouts/AppLayout";

export function HistoryPage() {
  return (
    <AppLayoutWithActive activeSection="History">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl border border-[#2B2EC4]/20 bg-[#121C2C]/70 py-20 text-center"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(31,62,111,0.36),transparent_48%),radial-gradient(circle_at_82%_22%,rgba(34,211,238,0.22),transparent_40%)]" />

        <div className="relative z-10">
          <h2 className="text-5xl font-light text-main">Transaction History</h2>
          <p className="mt-3 text-sm text-muted">No transactions yet</p>
          <div className="mx-auto mt-16 grid h-28 w-28 place-items-center rounded-full border border-[#2B2EC4]/30 bg-[#1F3E6F]/15">
            <History size={46} className="text-[#c4b5fd]" />
          </div>
        </div>
      </motion.section>
    </AppLayoutWithActive>
  );
}
