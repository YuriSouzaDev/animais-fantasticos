export default function initFecthBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = (1000 / bitcoin.BRL.buy).toFixed(4);
    })
    .catch((error) => {
      console.log(error);
    });
}
