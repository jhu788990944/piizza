/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const pizzas = [
    {
      name: "Margherita",
      price: "$14",
      ingredients: "San Marzano tomatoes, fresh mozzarella, extra virgin olive oil, fresh basil"
    },
    {
      name: "Marinara",
      price: "$12",
      ingredients: "San Marzano tomatoes, sliced garlic, Sicilian oregano, extra virgin olive oil"
    },
    {
      name: "Diavola",
      price: "$16",
      ingredients: "San Marzano tomatoes, fresh mozzarella, spicy Calabrian salami, chili oil"
    },
    {
      name: "Quattro Formaggi",
      price: "$17",
      ingredients: "Mozzarella, gorgonzola dolce, creamy ricotta, parmigiano-reggiano"
    },
    {
      name: "Prosciutto e Rucola",
      price: "$18",
      ingredients: "Mozzarella, cherry tomatoes, aged prosciutto di Parma, wild arugula, shaved parmesan"
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2c2421] font-sans antialiased selection:bg-amber-100 py-12 px-6">
      <div className="max-w-xl mx-auto border border-[#e6dfd5] bg-white p-8 md:p-12 shadow-sm rounded-lg">
        
        {/* Header / Logo */}
        <header className="text-center pb-8 border-b border-[#ebdcd0]">
          <span className="text-[11px] font-mono tracking-widest text-[#a0785d] uppercase block mb-1">
            Naples Wood-Fired Tradition
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#1a110e]">
            Piazza Sourdough
          </h1>
          <p className="text-xs text-[#70645f] mt-2 italic">
            Lightly charred sourdough baked at 800°F in our oak-fired oven.
          </p>
        </header>

        {/* Menu Section */}
        <main className="py-8 space-y-8">
          <h2 className="font-serif text-xl font-bold text-center text-[#1a110e] uppercase tracking-wider">
            Le Pizze
          </h2>
          
          <div className="space-y-6">
            {pizzas.map((pizza, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-baseline gap-2">
                  <h3 className="font-serif font-bold text-base text-[#1a110e]">
                    {pizza.name}
                  </h3>
                  <div className="flex-1 border-b border-dashed border-[#e6dfd5] mx-2 h-1"></div>
                  <span className="font-mono text-sm font-semibold text-[#a0785d]">
                    {pizza.price}
                  </span>
                </div>
                <p className="text-xs text-[#70645f] mt-1 leading-relaxed">
                  {pizza.ingredients}
                </p>
              </div>
            ))}
          </div>
        </main>

        {/* Info & Contact Footer */}
        <footer className="pt-8 border-t border-[#ebdcd0] text-center space-y-4">
          <div className="text-xs text-[#70645f] space-y-1">
            <p className="font-semibold text-[#1a110e]">Hours of Baking</p>
            <p>Everyday • 12:00 PM – 10:00 PM</p>
          </div>

          <div className="text-xs text-[#70645f] space-y-1">
            <p className="font-semibold text-[#1a110e]">Location & Contact</p>
            <p>14 Piazza del Popolo, Florence, Italy</p>
            <p className="font-mono mt-1 text-[#a0785d]">+39 055 123456</p>
          </div>

          <p className="text-[10px] text-[#b0a095] pt-4 font-mono tracking-wider uppercase">
            Est. 2026 • Buon Appetito!
          </p>
        </footer>

      </div>
    </div>
  );
}
