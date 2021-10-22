import { set, ref, get, child, remove } from "@firebase/database";
import db from "../firebase";
import Product from "../models/Product";

export const getEntireData = () => {
  const dbRef = ref(db);

  get(child(dbRef, "products"))
    .then((snapshot) => {
      const product = snapshot.val();
      if (snapshot.exists()) {
        return product;
      }
    })
    .catch((err) => `Error: ${err}`);
};

export const getSingleData = (id: string) => {
  const dbRef = ref(db);

  get(child(dbRef, `products/${id}`))
    .then((snapshot) => {
      const product = snapshot.val();
      if (snapshot.exists()) {
        return product;
      }
    })
    .catch((err) => `Error: ${err}`);
};

export const insertData = (product: Product) => {
  set(ref(db, "products"), {
    ...product,
  })
    .then(() => console.log("data stored successfully"))
    .catch((err) => `Error: ${err}`);
};

export const updateData = (updatedProduct: Product, id: string) => {
  set(ref(db, `products/${id}`), {
    ...updatedProduct,
  })
    .then(() => console.log("data updated successfully"))
    .catch((err) => `Error: ${err}`);
};

export const deleteData = (id: string) => {
  remove(ref(db, `products/${id}`))
    .then(() => console.log("data deleted successfully"))
    .catch((err) => console.log(`Error: ${err}`));
};
