document.getElementById('lg-blog-btn').addEventListener('click', function(){
  window.location.href = './blog.html';
})
document.getElementById('sm-blog-btn').addEventListener('click', function(){
  window.location.href = './blog.html';
})



// donation layout show function
document.getElementById('donation-layout-btn').addEventListener('click', function(){
  document.getElementById('donation-layout-btn').classList.remove('bg-transparent');
  document.getElementById('donation-layout-btn').classList.remove('border-darkTwo');
  document.getElementById('donation-layout-btn').classList.add('bg-primary');
  document.getElementById('donation-layout-btn').classList.add('border-transparent');

  document.getElementById('history-layout-btn').classList.remove('bg-primary');
  document.getElementById('history-layout-btn').classList.remove('border-transparent');
  document.getElementById('history-layout-btn').classList.add('bg-transparent');
  document.getElementById('history-layout-btn').classList.add('border-darkTwo');


  document.getElementById('donation-section').classList.add('hidden');
  document.getElementById('history').classList.add('hidden');

  document.getElementById('donation-section').classList.remove('hidden');

});

// history layout show btn
document.getElementById('history-layout-btn').addEventListener('click', function(){
  document.getElementById('donation-layout-btn').classList.remove('bg-primary');
  document.getElementById('donation-layout-btn').classList.remove('border-transparent');
  document.getElementById('donation-layout-btn').classList.add('bg-transparent');
  document.getElementById('donation-layout-btn').classList.add('border-darkTwo');

  document.getElementById('history-layout-btn').classList.remove('bg-transparent');
  document.getElementById('history-layout-btn').classList.remove('border-darkTwo');
  document.getElementById('history-layout-btn').classList.add('bg-primary');
  document.getElementById('history-layout-btn').classList.add('border-transparent');

  
  document.getElementById('history-layout-btn').classList.add('bg-primary');
  document.getElementById('history-layout-btn').classList.add('border-transparent');

  document.getElementById('donation-section').classList.add('hidden');
  document.getElementById('history').classList.add('hidden');

  document.getElementById('history').classList.remove('hidden');

});




document.getElementById("noakhali-donation-submit-btn").addEventListener('click', function() {
  const donatedAmount = getInputValueById('noakhali-donated-amount');
  const availableBalance = getTextValueById('lg-available-balance');
  const donatedBalanceShow = getTextValueById('noakhali-donated-amount-show');
  const date = new Date();

  if(!isNaN(donatedAmount) && donatedAmount < availableBalance && donatedAmount > 0){
    document.getElementById('lg-available-balance').innerText = availableBalance - donatedAmount;
    document.getElementById('sm-available-balance').innerText = availableBalance - donatedAmount;
    document.getElementById('noakhali-donated-amount-show').innerText= donatedBalanceShow + donatedAmount;
    my_modal_1.showModal();

    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
      <div class="border border-darkTwo rounded-2xl p-8"> 
          <p id="donated-in">${donatedAmount} Taka is Donate for Flood at Noakhali, Bangladesh.</p>
          <small is="time">${date}</small>
        </div>
      `;
    document.getElementById('history').appendChild(newDiv);
  }else if(donatedAmount === 0){
    alert('Please donate at least 1Tk for humanity.')
  }
  else if(isNaN(donatedAmount)){
    alert("Only Number Input Allowed!");
  } else if(donatedAmount > availableBalance){
    alert("You Have Insufficient Balance!");
  }else if(donatedAmount < 0 ){
    alert("Only Positive Number Allowed!")
  }
})


document.getElementById("feni-donation-submit-btn").addEventListener('click', function() {
  const donatedAmount = getInputValueById('feni-donated-amount');
  const availableBalance = getTextValueById('lg-available-balance');
  const donatedBalanceShow = getTextValueById('feni-donated-amount-show');
  const date = new Date();

  if(!isNaN(donatedAmount) && donatedAmount < availableBalance && donatedAmount > 0){
    document.getElementById('lg-available-balance').innerText = availableBalance - donatedAmount;
    document.getElementById('sm-available-balance').innerText = availableBalance - donatedAmount;
    document.getElementById('feni-donated-amount-show').innerText= donatedBalanceShow + donatedAmount;
    my_modal_1.showModal();

    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
      <div class="border border-darkTwo rounded-2xl p-8"> 
          <p id="donated-in">${donatedAmount} Taka is Donate for Flood Relief in Feni, Bangladesh.</p>
          <small is="time">${date}</small>
        </div>
      `;
    document.getElementById('history').appendChild(newDiv);
  }else if(donatedAmount === 0){
    alert('Please donate at least 1Tk for humanity.')
  }
  else if(isNaN(donatedAmount)){
    alert("Only Number Input Allowed!");
  } else if(donatedAmount > availableBalance){
    alert("You Have Insufficient Balance!");
  }else if(donatedAmount < 0 ){
    alert("Only Positive Number Allowed!")
  }
})


document.getElementById("quota-donation-submit-btn").addEventListener('click', function() {
  const donatedAmount = getInputValueById('quota-donated-amount');
  const availableBalance = getTextValueById('lg-available-balance');
  const donatedBalanceShow = getTextValueById('quota-donated-amount-show');
  const date = new Date();

  if(!isNaN(donatedAmount) && donatedAmount < availableBalance && donatedAmount > 0){
    document.getElementById('lg-available-balance').innerText = availableBalance - donatedAmount;
    document.getElementById('sm-available-balance').innerText = availableBalance - donatedAmount;
    document.getElementById('quota-donated-amount-show').innerText= donatedBalanceShow + donatedAmount;
    my_modal_1.showModal();

    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
      <div class="border border-darkTwo rounded-2xl p-8"> 
          <p id="donated-in">${donatedAmount} Taka is Aid for Injured in the Quota Movement.</p>
          <small is="time">${date}</small>
        </div>
      `;
    document.getElementById('history').appendChild(newDiv);
  }else if(donatedAmount === 0){
    alert('Please donate at least 1Tk for humanity.')
  }
  else if(isNaN(donatedAmount)){
    alert("Only Number Input Allowed!");
  } else if(donatedAmount > availableBalance){
    alert("You Have Insufficient Balance!");
  }else if(donatedAmount < 0 ){
    alert("Only Positive Number Allowed!")
  }
})


