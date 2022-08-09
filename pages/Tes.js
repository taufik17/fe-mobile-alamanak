function Tes({ data }) {
  console.log(data)
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/hello`)
  const data = await res.json()

  // Pass data to the Tes via props
  return { props: { data } }
}

export default Tes