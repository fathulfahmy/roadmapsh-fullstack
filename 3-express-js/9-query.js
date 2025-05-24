const express = require("express");

const app = express();

const { products } = require("./8-data");

app.get("/api/v1/query", (req, res) => {
  console.log("query", req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    // res.status(200).send("No products matched your search");
    return res.status(200).json({ success: true, data: [] });
  }

  return res.status(200).json(sortedProducts);
  res.send("hello world");
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
