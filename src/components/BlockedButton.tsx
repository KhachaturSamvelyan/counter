import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/components/cn";
import { useWalletStore } from "@/app/store/useWalletStore";

type BlockedButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export function BlockedButton({ children, className, onClick, ...rest }: BlockedButtonProps) {
  const openNotice = useWalletStore((state) => state.openNotice);

  return (
    <button
      {...rest}
      onClick={(event) => {
        event.preventDefault();
        onClick?.(event);
        openNotice();
      }}
      className={cn(
        "rounded-xl border border-[#2B2EC4]/40 bg-[#121C2C]/65 px-4 py-2 text-sm font-medium text-main transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1F3E6F]/45",
        className
      )}
    >
      {children}
    </button>
  );
}
