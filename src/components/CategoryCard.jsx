function CategoryCard({ nom, description }) {
  return (
    <div className="card">
      <h3>Catégorie : {nom}</h3>
      <p>{description}</p>
    </div>
  );
}

export default CategoryCard;