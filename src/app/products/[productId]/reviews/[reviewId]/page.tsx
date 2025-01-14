export default async function ProductDetailsReview({params,}: {params:Promise< {productId: string, reviewId: string}>}) {   
  
    const { productId, reviewId } = await params;
    
    return (
        <main>
          <h1>Review for {reviewId} about Product {productId} !</h1>
        </main>
      );
  }