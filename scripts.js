let selectedCrush = '';
let selectedCard = null;

function selectCrush(name, cardElement) {
  selectedCrush = name;

  // Visually mark selected card
  if (selectedCard) selectedCard.classList.remove('selected');
  cardElement.classList.add('selected');
  selectedCard = cardElement;
}

function calculateLoveMatch() {
  const name1 = document.getElementById('userName').value.trim();
  const name2 = selectedCrush;

  if (!name1 || !name2) {
    document.getElementById('result').innerText = 'Please enter your name and select a crush!';
    return;
  }

  const options = {
    method: 'GET',
    headers: {
      'x-api-key': '1f0d0629-463a-4850-887e-00149b7addd8'
    }
  };

  fetch(`https://api.apiverve.com/v1/lovecalculator?name1=${encodeURIComponent(name1)}&name2=${encodeURIComponent(name2)}`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      const data = response.data;
      console.log(response.data);
      if (data) {
        document.getElementById('result').innerHTML = `
          💞 ${data.name1} + ${data.name2} = <strong>${data.lovePercentage}%</strong><br>
          📝 "${data.response}"
        `;
      } else {
        document.getElementById('result').innerText = 'Sorry, something went wrong.';
      }
    })
    .catch(err => {
      console.error(err);
      document.getElementById('result').innerText = 'Error contacting the love calculator.';
    });
    function determineMessage(){
        
    }
}