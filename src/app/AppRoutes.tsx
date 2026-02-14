import { Navigate, Route, Routes } from "react-router-dom";
import { SplashPage } from "@/pages/SplashPage";
import { AuthPage } from "@/pages/AuthPage";
import { DashboardPage } from "@/pages/DashboardPage";
import { BuySellPage } from "@/pages/BuySellPage";
import { HistoryPage } from "@/pages/HistoryPage";
import { PortfolioPage } from "@/pages/PortfolioPage";
import { SettingsPage } from "@/pages/SettingsPage";
import { SupportPage } from "@/pages/SupportPage";
import { SystemNoticeModal } from "@/components/SystemNoticeModal";

export function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/splash" replace />} />
        <Route path="/splash" element={<SplashPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/buy-sell" element={<BuySellPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
      <SystemNoticeModal />
    </>
  );
}
