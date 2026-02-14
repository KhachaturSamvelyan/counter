import { Bell, Globe, Lock, Palette, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { AppLayoutWithActive } from "@/layouts/AppLayout";
import { BlockedButton } from "@/components/BlockedButton";

const settingItems = [
  { icon: Shield, title: "Security", value: "Standard protection enabled" },
  { icon: Bell, title: "Notifications", value: "Push and email alerts enabled" },
  { icon: Globe, title: "Language", value: "English (US)" },
  { icon: Palette, title: "Theme", value: "Exodus-inspired gradient" },
  { icon: Lock, title: "Privacy", value: "Non-custodial mode" }
];

export function SettingsPage() {
  return (
    <AppLayoutWithActive activeSection="Settings">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl border border-[#2B2EC4]/20 bg-[#121C2C]/70 p-7"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(31,62,111,0.32),transparent_48%),radial-gradient(circle_at_82%_22%,rgba(34,211,238,0.2),transparent_40%)]" />
        <div className="relative z-10">
          <h2 className="text-4xl font-light text-main">Settings</h2>
          <p className="mt-2 text-sm text-muted">Customize your wallet preferences</p>

          <div className="mt-6 space-y-3">
            {settingItems.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="glass flex items-center justify-between rounded-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <item.icon size={20} className="text-[#c4b5fd]" />
                  <div>
                    <p className="font-medium text-main">{item.title}</p>
                    <p className="text-xs text-muted">{item.value}</p>
                  </div>
                </div>
                <BlockedButton className="px-4 py-2 text-xs">Change</BlockedButton>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </AppLayoutWithActive>
  );
}
