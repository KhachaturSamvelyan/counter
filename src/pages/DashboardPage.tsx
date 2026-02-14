import { ArrowUpRight, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { AppLayout } from "@/layouts/AppLayout";
import { AssetCard } from "@/components/AssetCard";
import { BlockedButton } from "@/components/BlockedButton";
import { useWalletStore } from "@/app/store/useWalletStore";

export function DashboardPage() {
  const addresses = useWalletStore((state) => state.addresses);

  return (
    <AppLayout>
      <div className="space-y-5">
        {addresses.map((address, index) => (
          <motion.section
            key={address.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07 }}
            className="glass rounded-2xl"
          >
            <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[#2B2EC4]/20 px-4 py-3">
              <div>
                <p className="text-sm text-main">{address.name}</p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-xs text-muted">{address.address}</p>
                <span className="rounded-full bg-[#1F3E6F]/30 px-2 py-0.5 text-xs text-[#ddd6fe]">
                  Primed: {address.primed}
                </span>
                <BlockedButton className="px-3 py-1 text-xs">Address Actions</BlockedButton>
                <BlockedButton className="rounded-md p-1">
                  <Minus size={16} />
                </BlockedButton>
                <BlockedButton className="rounded-md p-1">
                  <ArrowUpRight size={16} />
                </BlockedButton>
              </div>
            </header>
            <div className="grid gap-3 p-4 md:grid-cols-3">
              {address.assets.map((asset) => (
                <AssetCard key={`${address.id}-${asset.symbol}`} asset={asset} />
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </AppLayout>
  );
}
