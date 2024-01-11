import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "table wooden",
      price: 200,
      image:
        "https://www.istockphoto.com/photo/curvy-road-on-the-mountains-of-tehri-garhwal-uttarakhand-tehri-lake-is-an-artificial-gm1419289243-465689243?utm_campaign=srp_photos_noresults&utm_content=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fhitesh%2F&utm_medium=affiliate&utm_source=pexels&utm_term=hitesh",
    },
    {
      id: 2,
      name: "dinner metal",
      price: 300,
      image:
        "https://www.istockphoto.com/photo/curvy-road-on-the-mountains-of-tehri-garhwal-uttarakhand-tehri-lake-is-an-artificial-gm1419289243-465689243?utm_campaign=srp_photos_noresults&utm_content=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fhitesh%2F&utm_medium=affiliate&utm_source=pexels&utm_term=hitesh",
    },
    {
      id: 3,
      name: "table",
      price: 500,
      image:
        "https://www.istockphoto.com/photo/curvy-road-on-the-mountains-of-tehri-garhwal-uttarakhand-tehri-lake-is-an-artificial-gm1419289243-465689243?utm_campaign=srp_photos_noresults&utm_content=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fhitesh%2F&utm_medium=affiliate&utm_source=pexels&utm_term=hitesh",
    },
    {
      id: 4,
      name: "chair",
      price: 300,
      image:
        "https://www.istockphoto.com/photo/curvy-road-on-the-mountains-of-tehri-garhwal-uttarakhand-tehri-lake-is-an-artificial-gm1419289243-465689243?utm_campaign=srp_photos_noresults&utm_content=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fhitesh%2F&utm_medium=affiliate&utm_source=pexels&utm_term=hitesh",
    },
  ];

  if (req.query.search) {
    const filterProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filterProducts);
    return;
  }

  //   res.send(products);
  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server Runnig on port ${port}`);
});
