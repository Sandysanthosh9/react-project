const connectDB = require("../config/db");

exports.getAllItems = async (req, res) => {
  try {
    const db = await connectDB();
    const items = await db.collection("menu_items").find({}).toArray();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch menu items" });
  }
};

exports.addItem = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const db = await connectDB();

    const { name, price, description, category } = req.body;
    const image = req.file ? req.file.filename : null;

    const newItem = {
      name,
      price: parseFloat(price), // Ensure price is a number
      description,
      category,
      image
    };
    
    console.log("New Item:", newItem);

    const result = await db.collection("menu_items").insertOne(newItem);

    res.json({ success: true, id: result.insertedId });
  } catch (err) {
    console.error("Error adding item:", err);
    res.status(500).json({ error: "Failed to add menu item" });
  }
};
