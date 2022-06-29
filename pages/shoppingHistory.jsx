export default function ShoppingHistory({ data }) {
  return (
    <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
      <tr>
        <th style={{ border: '1px solid black', padding: '0 15px' }}>id</th>
        <th style={{ border: '1px solid black', padding: '0 15px' }}>
          product id
        </th>
        <th style={{ border: '1px solid black', padding: '0 15px' }}>name</th>
        <th style={{ border: '1px solid black', padding: '0 15px' }}>price</th>
        <th style={{ border: '1px solid black', padding: '0 15px' }}>
          nickname
        </th>
      </tr>
      {data.map(({ id, purchaseId, name, price, nickname }) => (
        <tr>
          <td style={{ border: '1px solid black', padding: '0 15px' }}>
            {purchaseId}
          </td>
          <td style={{ border: '1px solid black', padding: '0 15px' }}>{id}</td>
          <td style={{ border: '1px solid black', padding: '0 15px' }}>
            {name}
          </td>
          <td style={{ border: '1px solid black', padding: '0 15px' }}>
            {price}
          </td>
          <td style={{ border: '1px solid black', padding: '0 15px' }}>
            {nickname}
          </td>
        </tr>
      ))}
    </table>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch(
    `${process.env.BASE_HOSTNAME}/api/shoppingCart`
  ).then(res => res.json());

  console.log(data);
  return {
    props: {
      data
    }
  };
}
