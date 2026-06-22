async function loadPrices() {
  try {
    let res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd");
    let data = await res.json();

    document.getElementById("prices").innerHTML =
      "BTC: $" + data.bitcoin.usd +
      " | ETH: $" + data.ethereum.usd +
      " | SOL: $" + data.solana.usd;
  } catch (e) {
    document.getElementById("prices").innerHTML = "Market data unavailable";
  }
}

loadPrices();
setInterval(loadPrices, 10000);
