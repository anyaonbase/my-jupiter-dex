import { SwapWidget } from "@jup-ag/swap-widget";

function App() {
  const referralAccount = import.meta.env.VITE_JUPITER_REFERRAL_ADDRESS;
  const referralFeeBps = Number(import.meta.env.VITE_REFERRAL_FEE_BPS);

  return (
    <div style={{ maxWidth: 480, margin: "50px auto" }}>
      <h1 style={{ textAlign: "center" }}>My Jupiter DEX</h1>
      <SwapWidget
        endpoint="https://api.devnet.solana.com"
        strictTokenList={false}
        referral={referralAccount}
        referralFeeBps={referralFeeBps}
      />
    </div>
  );
}

export default App;
