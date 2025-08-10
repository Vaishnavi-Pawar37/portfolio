var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycby8GA2z5z0b41vocalHmzra1HoMlorU-1oFe2JYxK68UcsVvUd00Y2P_-Vp8wGmFHevzQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML = "Message Sent Successfully!"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
