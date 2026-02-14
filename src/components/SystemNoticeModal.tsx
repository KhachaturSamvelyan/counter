import { AnimatePresence, motion } from "framer-motion";
import { useWalletStore } from "@/app/store/useWalletStore";

export function SystemNoticeModal() {
  const isOpen = useWalletStore((state) => state.isNoticeOpen);
  const closeNotice = useWalletStore((state) => state.closeNotice);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center bg-[#0b1020]/88 px-4"
        >
          <motion.div
            initial={{ y: 16, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 6, opacity: 0 }}
            className="w-full max-w-lg rounded-2xl border border-[#2B2EC4]/30 bg-[#121C2C] p-6 shadow-[0_14px_38px_rgba(8,9,27,0.58)]"
          >
            <h2 className="text-xl font-semibold text-main">System Notice</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Our nodes are currently unavailable.
              <br />
              Please use another wallet until we resolve our issues.
              <br />
              Thank you for your understanding.
            </p>
            <button
              onClick={closeNotice}
              className="mt-6 rounded-xl bg-light-blue px-5 py-2 text-sm font-semibold text-main transition-all hover:bg-blue2"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
