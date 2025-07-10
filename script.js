// Handle likes with localStorage
document.querySelectorAll('.like-btn').forEach((btn, i) => {
  const card = btn.closest('.anime-card');
  const id = card.dataset.id;

  // Restore liked state
  if (localStorage.getItem(`liked_${id}`)) {
    btn.textContent = '❤️ Liked';
    btn.style.background = '#28a745';
  }

  btn.addEventListener('click', () => {
    localStorage.setItem(`liked_${id}`, 'true');
    btn.textContent = '❤️ Liked';
    btn.style.background = '#28a745';
  });
});

// Share anime
function shareAnime(name) {
  const text = `Check out this anime: ${name} at AnimeVerse! (Offline link or share video)`;
  if (navigator.share) {
    navigator.share({ title: 'AnimeVerse', text });
  } else {
    alert("Sharing isn't supported on this device.\nYou can copy this text:\n\n" + text);
  }
}
