import type { PropsWithChildren } from "react";
import { HelpCircle, History, Landmark, LayoutDashboard, Moon, Settings, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BlockedButton } from "@/components/BlockedButton";
import { useWalletStore } from "@/app/store/useWalletStore";
import { cn } from "@/components/cn";
import logo from "@/assets/img/logo.png";

const sidebarItems = [
  { label: "Balances & Assets", icon: LayoutDashboard },
  { label: "Buy & Sell", icon: Wallet },
  { label: "History", icon: History },
  { label: "Portfolio", icon: Landmark },
  { label: "Settings", icon: Settings },
  { label: "Support", icon: HelpCircle }
];

export function AppLayout({ children }: PropsWithChildren) {
  return <AppLayoutWithActive children={children} activeSection="Balances & Assets" />;
}

interface AppLayoutWithActiveProps extends PropsWithChildren {
  activeSection?: string;
}

export function AppLayoutWithActive({ children, activeSection = "Balances & Assets" }: AppLayoutWithActiveProps) {
  const navigate = useNavigate();
  const addresses = useWalletStore((state) => state.addresses);
  const activeAddressId = useWalletStore((state) => state.activeAddressId);
  const setActiveAddress = useWalletStore((state) => state.setActiveAddress);
  const openNotice = useWalletStore((state) => state.openNotice);

  const showThemeNotice = () => openNotice();

  return (
    <div className="grid min-h-screen grid-cols-[240px_1fr] bg-surface text-main">
      <aside className="flex flex-col border-r border-[#2B2EC4]/20 bg-[#0b1020]/78 p-5">
        <div className="mb-8 flex items-center gap-3">
          <img src={logo} alt="Counterwallet logo" className="h-10 w-10 rounded-xl object-cover" />
          <div>
            <p className="text-xs uppercase text-muted">Wallet</p>
            <p className="font-semibold">Counterwallet</p>
          </div>
        </div>

        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            const itemClass = cn(
              "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition-colors",
              item.label === activeSection ? "bg-[#1F3E6F]/35 text-main" : "text-muted hover:bg-[#121C2C]/50"
            );

            if (item.label === "Buy & Sell") {
              return (
                <button key={item.label} className={itemClass} onClick={() => navigate("/buy-sell")}>
                  <item.icon size={17} />
                  <span>{item.label}</span>
                </button>
              );
            }

            if (item.label === "Balances & Assets") {
              return (
                <button key={item.label} className={itemClass} onClick={() => navigate("/dashboard")}>
                  <item.icon size={17} />
                  <span>{item.label}</span>
                </button>
              );
            }

            if (item.label === "History") {
              return (
                <button key={item.label} className={itemClass} onClick={() => navigate("/history")}>
                  <item.icon size={17} />
                  <span>{item.label}</span>
                </button>
              );
            }

            if (item.label === "Portfolio") {
              return (
                <button key={item.label} className={itemClass} onClick={() => navigate("/portfolio")}>
                  <item.icon size={17} />
                  <span>{item.label}</span>
                </button>
              );
            }

            if (item.label === "Settings") {
              return (
                <button key={item.label} className={itemClass} onClick={() => navigate("/settings")}>
                  <item.icon size={17} />
                  <span>{item.label}</span>
                </button>
              );
            }

            if (item.label === "Support") {
              return (
                <button key={item.label} className={itemClass} onClick={() => navigate("/support")}>
                  <item.icon size={17} />
                  <span>{item.label}</span>
                </button>
              );
            }

            return (
              <BlockedButton key={item.label} className={itemClass}>
                <item.icon size={17} />
                <span>{item.label}</span>
              </BlockedButton>
            );
          })}
        </nav>

        <div className="mt-auto pt-6">
          <button
            onClick={showThemeNotice}
            className="flex w-full items-center justify-between rounded-xl border border-[#2B2EC4]/25 bg-[#121C2C]/55 px-3 py-2 text-sm text-main transition-colors hover:bg-[#121C2C]/80"
          >
            <span className="flex items-center gap-2">
              <Moon size={16} />
              Theme
            </span>
            <span className="text-xs uppercase tracking-wide text-muted">dark mode</span>
          </button>
        </div>
      </aside>

      <section className="p-8">
        <header className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <div className="glass flex items-center gap-3 rounded-xl px-4 py-2">
            <label htmlFor="account-selector" className="text-sm text-muted">
              Account
            </label>
            <select
              id="account-selector"
              value={activeAddressId}
              onChange={(event) => setActiveAddress(event.target.value)}
              className="rounded-lg border border-[#2B2EC4]/35 bg-[#121C2C]/70 px-3 py-1 text-sm text-main"
            >
              {addresses.map((address) => (
                <option key={address.id} value={address.id}>
                  {address.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3">
            <BlockedButton>Create New Address</BlockedButton>
            <BlockedButton>Import Funds</BlockedButton>
          </div>
        </header>
        {children}
      </section>
    </div>
  );
}
