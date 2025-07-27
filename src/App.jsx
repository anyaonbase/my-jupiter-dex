function App() {
  const referralLink = "https://jup.ag/swap?referrer=CE58s2TnGqg4CgNmFswQPVnGBva5Vd9X4MpcKUr4hnDx&feeBps=20";

  return (
    <div style={{ width: '500px', margin: '50px auto', textAlign: 'center' }}>
      <h1>My Jupiter DEX</h1>
      <iframe
        src={referralLink}
        width="100%"
        height="600"
        style={{ border: 'none', borderRadius: '12px' }}
        title="Jupiter Swap"
      ></iframe>
    </div>
  );
}

export default App;
