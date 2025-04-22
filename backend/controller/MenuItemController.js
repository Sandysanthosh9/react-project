const MenuItem = require("../models/MenuItem");

// Get all menu items from MongoDB
exports.getAllItems = (req, res) => {
  MenuItem.find()
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// Add a new menu item to MongoDB
exports.addItem = (req, res) => {
  const { name, price, description, category } = req.body;
  const image = req.file ? req.file.filename : null;

  const newItem = new MenuItem({
    name,
    price,
    description,
    category,
    image,
  });

  newItem.save()
    .then(result => {
      res.json({ success: true, id: result._id });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};
