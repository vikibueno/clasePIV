const gallery = document.getElementById('gallery');

memes.forEach(item => {
  const card = document.createElement('article');
  card.className = 'meme-card';
  
  card.innerHTML = `
    <div class="card-image-wrapper">
      <img src="${item.imagenUrl}" alt="${item.titulo}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=Error+al+cargar+imagen'">
    </div>
    <div class="card-content">
      <h2 class="card-title">${item.titulo}</h2>
      <p class="card-description">${item.descripcion}</p>
      <span class="card-author">Aporte de: <strong>${item.autor}</strong></span>
    </div>
  `;
  
  gallery.appendChild(card);
});