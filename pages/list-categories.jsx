import Link from 'next/link';

export default function ListCategories({ categories }) {
  return (
    <>
    <ul>
      {categories.map(cat => (
        <li key={cat.id}>
          <Link href={`/categoria/edit/${cat.id}`} passHref>
            <a>{cat.name}</a>
          </Link>
        </li>
      ))}
    </ul>
      </>
  );
}
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/category');
  const categories = await res.json();
  return {
    props: {
      categories
    }
  };
}
