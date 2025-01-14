export default async function ProducrDetails({params,}: {params:Promise< {productId: string}>}) {
  
  const { productId } = await params;
  
  return (
      <main>
        <h1>Details about Product {productId} !</h1>
      </main>
    );
}