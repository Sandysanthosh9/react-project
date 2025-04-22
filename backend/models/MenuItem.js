const db = require("../config/db");

exports.getAllItems = (req, res) => {
  db.query("SELECT * FROM menu_items", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.addItem = (req, res) => {
  const { name, price, description, category } = req.body;
  const image = req.file ? req.file.filename : null;
  db.query("INSERT INTO menu_items (name, price, description, category, image) VALUES (?, ?, ?, ?, ?)",
    [name, price, description, category, image],
    (err, result) => {
      if (err) throw err;
      res.json({ success: true, id: result.insertId });
    }
  );
};
