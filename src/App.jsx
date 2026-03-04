import MessageBienvenue from "./components/MessageBienvenue";
import BookCard from "./components/BookCard";
import CategoryCard from "./components/CategoryCard";

function App() {
  return (
    <div className="container">
      <h1>Ma bibliothèque</h1>
      <MessageBienvenue />
      <h2>Liste des livres</h2>
      <BookCard titre="Le Petit Prince" auteur="Antoine de Saint-Exupéry" categorie="Roman"/>
      <BookCard titre="Les Misérables" auteur="Victor Hugo" categorie="Littérature"/>
      <BookCard titre="Clean Code" auteur="Robert C. Martin" categorie="Informatique"/>
      <BookCard titre="Harry Potter" auteur="J.K.Rowling" categorie="Fantasy"/>

      <h2>Catégories</h2>
      <CategoryCard nom="Roman" description="Histoires et récits narratifs"/>
      <CategoryCard nom="Informatique" description="Livres sur la programmation et les bonnes pratiques"/>
    </div>
  );
}

export default App;