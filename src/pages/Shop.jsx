import { useState } from "react";
import { ShoppingCart, Leaf } from "lucide-react";
import { Select, MenuItem } from "@mui/material";



// const Select = ({ options, onValueChange }) => {
//   return (
//     <select
//       onChange={(e) => onValueChange(e.target.value)}
//       className="p-2 border rounded-lg bg-white"
//     >
//       {options.map((option) => (
//         <option key={option} value={option}>
//           {option}
//         </option>
//       ))}
//     </select>
//   );
// };

const products = [
  { id: 1, name: "Eco-friendly Water Bottle", price: "$25", category: "Reusables", image: "https://th.bing.com/th/id/OIP.KzIjocsS0QhhsSBsPiobEQHaI9?w=167&h=201&c=7&r=0&o=5&dpr=1.1&pid=1.7", link: "https://shop.sensworldwide.com/products/hydrawooden-500ml?variant=44669508124926" },
  { id: 2, name: "Biodegradable Toothbrush", price: "$10", category: "Personal Care", image: "https://i.etsystatic.com/19705537/r/il/2e83f1/2692601631/il_1140xN.2692601631_5xv4.jpg", link: "https://barenecessities.in/products/compostable-bamboo-tooth-brush-zero-waste-eco-friendly" },
  { id: 3, name: "Organic Cotton Tote Bag", price: "$15", category: "Fashion", image: "https://tinygreenmom.com/wp-content/uploads/2010/07/Canvas_Bag_P_L_O.jpg", link: "https://brownliving.in/products/knot-white-100-cotton-canvas-eco-friendly-tote-bag-with-zip" },
  { id: 4, name: "Solar Powered Charger", price: "$45", category: "Technology", image: "https://th.bing.com/th/id/OIP.Aa9BoYAczx--FX6NaM3O4QHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain", link: "https://amzn.in/d/828L5md" },
  { id: 5, name: "Recycled A4 Paper", price: "$14", category: "Technology", image: "https://www.rescript.in/assets/uploads/inventory/fetauredImg/fea_66b4ad5907eaa17230554004526.png", link: "https://www.rescript.in/Shop/paper" },
  { id: 6, name: "Eco-Friendly plates", price: "$10", category: "Technology", image: "https://www.pappcoindia.com/cdn/shop/products/11inch4CPRoundPlate_2_590x.jpg?v=1671792331", link: "https://www.pappcoindia.com/collections/tableware/products/11-four-compartment-plate" },
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter(
    (product) =>
      (category === "All" || product.category === category) &&
      product.name.toLowerCase().includes(search.toLowerCase())
  );

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  return (
    <div className="min-h-screen bg-green-100 !py-30 !px-4 sm:!px-12 text-gray-900">
      <h1 className="text-2xl sm:text-4xl font-Bricolage text-green-950 font-bold flex items-center gap-2 !mb-6">
        <Leaf className="text-green-600" /> Sustainable Product Marketplace
      </h1>

      <div className="flex items-center gap-4 !mb-8 md:w-1/2">
        <input
          placeholder="Search for products..."
          type="text"
          value={search}
          className="w-full border-2 border-black !py-3 !px-6 bg-transparent rounded-lg outline-none placeholder:text-gray-600 placeholder:font-Outfit font-Outfit"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          sx={{
            outline: "none",
            border: "none",
            width: "100%",
            fontFamily: 'Outfit',
            bgcolor: '#e5e7eb',
            color: "black",
            flex: '1',
            transition: 'all',
            borderRadius: "4px",
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            "&:hover": { backgroundColor: "#d1d5db" },
          }}
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat} className="font-Outfit">
              {cat}
            </MenuItem>
          ))}
        </Select>
      </div>

      <h1 className="font-Bricolage text-3xl text-green-950 !pb-4">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="hover:shadow-xl transition !p-4 border-2 border-black rounded-lg">
            <img src={product.image} alt={product.name} className="w-full max-h-70 min-h-70 brightness-90 object-cover rounded-lg" />
            <h3 className="text-2xl font-Bricolage text-green-950 font-semibold !my-3">{product.name}</h3>
            <div className="flex font-Outfit justify-between items-center">
              <p className="text-green-700 font-semibold text-xl">{product.price}</p>
              <a href={product.link} target="_blank" rel="noopener noreferrer" className="flex bg-cyan-950 text-white items-center gap-2 !py-1 !px-3 rounded-sm hover:bg-cyan-800 transition-all hover:underline">
                Buy Now <ShoppingCart />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
