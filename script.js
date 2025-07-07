const musicDatabase = {
  Africa: [
    { title: "Afrobeat Jam", url: "https://example.com/afrobeat.mp3" },
    { title: "Zulu Rhythm", url: "https://example.com/zulu.mp3" }
  ],
  Europe: [
    { title: "EDM Party", url: "https://example.com/edm.mp3" },
  ],
  Asia: [
    { title: "K-Pop Hit", url: "https://example.com/kpop.mp3" },
  ],
  // Add other continents...
};

function loadMusic(continent) {
  const list = document.getElementById("music-list");
  list.innerHTML = `<h3>${continent} Music</h3>`;
  musicDatabase[continent].forEach(song => {
    list.innerHTML += `
      <div class="music-card">
        <h4>${song.title}</h4>
        <audio controls src="${song.url}"></audio>
        <div>
          <button>❤️ Like</button>
          <button>📌 Pin</button>
          <button onclick="shareSong('${song.url}')">🔗 Share</button>
        </div>
      </div>
    `;
  });
}

function shareSong(url) {
  navigator.clipboard.writeText(url);
  alert("Link copied to clipboard!");
  }
