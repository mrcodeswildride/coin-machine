let cents = document.getElementById(`cents`)
let coinsButton = document.getElementById(`coinsButton`)
let box = document.getElementById(`box`)

let coins = [1, 5, 10, 25]

coinsButton.addEventListener(`click`, showCoins)

function showCoins() {
  let centsValue = cents.value.trim()

  if (centsValue != `` && !isNaN(centsValue)) {
    if (centsValue > 99) {
      box.innerHTML = `Number of cents cannot be more than 99.`
    }
    else {
      box.innerHTML = ``

      while (centsValue > 0) {
        let selectedCoin
        
        for (let coin of coins) {
          if (centsValue >= coin) {
            selectedCoin = coin
          }
        }

        let image = document.createElement(`img`)
        image.src = `${selectedCoin}.png`
        box.appendChild(image)

        centsValue -= selectedCoin
      }
    }
  }
}