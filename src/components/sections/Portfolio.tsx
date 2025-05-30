import React from 'react';

const ByRosyPortfolio = () => {
  const projects = [
    {
      title: "Modern Minimalist",
      description: "Clean lines meet warm textures",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
    },
    {
      title: "Classic Elegance",
      description: "Timeless design with contemporary function",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
    },
    {
      title: "Industrial Chic",
      description: "Bold materials, sophisticated finish",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
    },
    {
      title: "Rustic Luxury",
      description: "Natural beauty meets modern convenience",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
    },
    {
      title: "Contemporary Grace",
      description: "Flowing spaces, premium finishes",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
    },
    {
      title: "Coastal Serenity",
      description: "Light, airy, effortlessly elegant",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="pt-0 pb-20 bg-soft-cream -mt-1">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-charcoal mb-6">
            Featured Projects
          </h2>
          <p className="font-inter text-lg text-warm-gray max-w-2xl mx-auto">
            Each kitchen tells a unique story. Explore our portfolio of bespoke designs 
            that showcase our commitment to excellence and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg bg-off-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-deep-charcoal mb-2">
                  {project.title}
                </h3>
                <p className="font-inter text-warm-gray">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ByRosyPortfolio; 