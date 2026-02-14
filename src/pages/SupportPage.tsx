import { CircleHelp, MessageCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { AppLayoutWithActive } from "@/layouts/AppLayout";
import { BlockedButton } from "@/components/BlockedButton";

const supportCards = [
  { icon: MessageCircle, title: "Live Chat", subtitle: "Chat with support engineer" },
  { icon: CircleHelp, title: "Knowledge Base", subtitle: "Common questions and guides" },
  { icon: ShieldCheck, title: "Security Help", subtitle: "Get help with wallet safety" }
];

export function SupportPage() {
  return (
    <AppLayoutWithActive activeSection="Support">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl border border-[#2B2EC4]/20 bg-[#121C2C]/70 p-7"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(31,62,111,0.32),transparent_48%),radial-gradient(circle_at_82%_22%,rgba(34,211,238,0.2),transparent_40%)]" />
        <div className="relative z-10">
          <h2 className="text-4xl font-light text-main">Support</h2>
          <p className="mt-2 text-sm text-muted">We are here to help you 24/7</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {supportCards.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="glass rounded-xl p-5"
              >
                <item.icon size={22} className="text-[#c4b5fd]" />
                <h3 className="mt-3 text-lg font-semibold text-main">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.subtitle}</p>
                <BlockedButton className="mt-4">Open</BlockedButton>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </AppLayoutWithActive>
  );
}
