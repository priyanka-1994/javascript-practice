document.addEventListener('DOMContentLoaded', () => {
  const openPopupBtn = document.getElementById('openPopButton');
  const closePopupBtn  = document.getElementById('closepop'); 
  const popupOverlay = document.getElementById('popup-overlay');
  
  function openPopup() {
    popupOverlay.classList.add('active');
  }
  function closePopup() {
    popupOverlay.classList.remove('active');
  }
  if(openPopupBtn) {
    openPopupBtn.addEventListener('click',openPopup);
  }
  closePopupBtn.addEventListener('click',closePopup);
  
  document.addEventListener("keydown",(event) => {
    if(event.key === "Escape" && popupOverlay.classList.contains('active')) {
      closePopup();
    }
  });
});
