function BookCard({ titre, auteur, categorie }) {
  return (
    <div className="card">
      <h3>Livre</h3>
      <p><strong>Titre :</strong> {titre}</p>
      <p><strong>Auteur :</strong> {auteur}</p>
      <p><strong>Catégorie :</strong> {categorie}</p>
    </div>
  );
}

export default BookCard;