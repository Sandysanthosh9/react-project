import React, { useEffect, useState } from "react";
import axios from "axios";

const MenuList = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://my-backend.onrender.com/api/menu")
      .then(res => {
        setMenu(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching menu:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">📋 Our Digital Menu</h2>
      {loading ? (
        <div className="text-center">Loading menu...</div>
      ) : menu.length === 0 ? (
        <div className="text-center text-muted">No menu items available yet.</div>
      ) : (
        <div className="row g-4">
          {menu.map(item => (
            <div className="col-md-4" key={item.id}>
              <div className="card h-100 shadow-sm">
                {item.image && (
                  <img
                    src={`https://my-backend.onrender.com/uploads/${item.image}`}
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text text-muted">{item.description}</p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-success">${item.price}</span>
                    <span className="badge bg-secondary">{item.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuList;
