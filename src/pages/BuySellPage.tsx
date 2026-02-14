import { useState } from "react";
import { History } from "lucide-react";
import { motion } from "framer-motion";
import { BlockedButton } from "@/components/BlockedButton";
import { AppLayoutWithActive } from "@/layouts/AppLayout";

export function BuySellPage() {
  const [activeTab, setActiveTab] = useState<"buy" | "history">("buy");

  return (
    <AppLayoutWithActive activeSection="Buy & Sell">
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl border border-[#2B2EC4]/20 bg-[#121C2C]/70 p-8"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(31,62,111,0.38),transparent_48%),radial-gradient(circle_at_82%_22%,rgba(34,211,238,0.26),transparent_40%)]" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="mb-6 flex items-center justify-center gap-3">
            <button
              className={`rounded-xl px-8 py-2 text-sm font-semibold transition ${
                activeTab === "buy"
                  ? "bg-light-blue text-main"
                  : "border border-[#2B2EC4]/35 bg-[#121C2C]/55 text-muted hover:bg-[#1F3E6F]/25"
              }`}
              onClick={() => setActiveTab("buy")}
            >
              Buy Crypto
            </button>
            <button
              className={`rounded-xl px-8 py-2 text-sm font-semibold transition ${
                activeTab === "history"
                  ? "bg-light-blue text-main"
                  : "border border-[#2B2EC4]/35 bg-[#121C2C]/55 text-muted hover:bg-[#1F3E6F]/25"
              }`}
              onClick={() => setActiveTab("history")}
            >
              History
            </button>
          </div>

          {activeTab === "buy" ? (
            <>
              <div className="glass rounded-2xl p-5">
                <div className="grid gap-4 md:grid-cols-[1fr_auto]">
                  <div>
                    <p className="text-xs text-muted">You pay</p>
                    <BlockedButton className="mt-2 w-[260px] max-w-full justify-start px-4 py-3 text-base">
                      USD
                    </BlockedButton>
                  </div>
                  <div className="flex items-end">
                    <div className="rounded-xl border border-[#2B2EC4]/30 bg-[#121C2C]/65 px-5 py-3 text-3xl font-semibold text-main">
                      100
                    </div>
                  </div>
                </div>

                <div className="my-4 h-px bg-[#2B2EC4]/25" />

                <div className="grid gap-4 md:grid-cols-[1fr_auto]">
                  <div>
                    <p className="text-xs text-muted">You receive</p>
                    <BlockedButton className="mt-2 w-[260px] max-w-full justify-start px-4 py-3 text-base">
                      BTC
                    </BlockedButton>
                  </div>
                  <div className="flex items-end">
                    <div className="rounded-xl border border-[#22d3ee]/35 bg-[#121C2C]/65 px-5 py-3 text-3xl font-semibold text-main">
                      0.0014
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2 rounded-xl bg-[#121C2C]/55 p-1">
                <BlockedButton className="bg-[#1F3E6F]/45">$100</BlockedButton>
                <BlockedButton>$500</BlockedButton>
                <BlockedButton>MAX</BlockedButton>
              </div>

              <BlockedButton className="mt-8 w-full rounded-full bg-light-blue py-3 text-base font-semibold hover:bg-blue2">
                Continue
              </BlockedButton>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-[#2B2EC4]/20 bg-[#121C2C]/60 py-14 text-center"
            >
              <h3 className="text-5xl font-light text-main">Transaction History</h3>
              <p className="mt-2 text-sm text-muted">No transactions yet</p>

              <div className="mx-auto mt-16 grid h-28 w-28 place-items-center rounded-full border border-[#2B2EC4]/30 bg-[#1F3E6F]/15">
                <History size={46} className="text-[#c4b5fd]" />
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>
    </AppLayoutWithActive>
  );
}
