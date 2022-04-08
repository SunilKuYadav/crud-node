// init a empty array of product
const products: any = [];

// simulate id, init in 0
let id = 0;

const productControllers = {
  // here we will add the product handling functions.

  // list products
  index(req: any, res: any) {
    res.status(200).json({
      status: "success",
      data: { products },
    });
  },

  // create a product
  create(req: any, res: any) {
    // increse id by 1
    id++;

    // get the body of request and organize product
    const product = {
      id,
      name: req.body.name,
      price: req.body.price,
    };
    products.push(product);

    res.status(200).json({
      status: "success",
      message: "Product created",
    });
  },

  // update the product
  update(req: any, res: any) {
    const { id } = req.query;
    const { name, price } = req.body;

    const product = products.find((item: any) => item.id == id);
    if (product) {
      product.name = name;
      product.price = price;
    }

    res.status(200).json({
      status: "success",
      message: "Product updated",
    });
  },

  // delete the product
  delete(req: any, res: any) {
    const { id } = req.query;

    const product = products.find((item: any) => item.id == id);
    if (product) {
      products.splice(products.indexOf(product), 1);
    }

    res.status(200).json({
      status: "success",
      message: "Product deleted",
    });
  },
};

export default productControllers;
