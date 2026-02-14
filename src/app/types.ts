export type WalletMode = "create" | "import" | "login";

export interface Asset {
  symbol: string;
  balance: number;
  color: string;
}

export interface WalletAddress {
  id: string;
  name: string;
  address: string;
  primed: number;
  assets: Asset[];
}

export interface MockUser {
  username: string;
  lastLogin: string;
}
