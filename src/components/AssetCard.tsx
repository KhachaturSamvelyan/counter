import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import type { Asset } from "@/app/types";
import { cn } from "@/components/cn";

interface AssetCardProps {
  asset: Asset;
}

export function AssetCard({ asset }: AssetCardProps) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "min-h-28 rounded-xl p-4 text-main shadow-lg transition-all",
        asset.color
      )}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-3xl font-black tracking-tight">{asset.symbol}</h4>
        <ChevronDown size={18} />
      </div>
      <p className="mt-5 text-sm font-semibold">Balance: {asset.balance.toLocaleString()}</p>
    </motion.article>
  );
}
