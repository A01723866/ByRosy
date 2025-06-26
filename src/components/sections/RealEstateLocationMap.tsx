import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Definir las coordenadas de las ubicaciones
const locations = [
  {
    id: 'san-pedro',
    name: 'San Pedro Garza García',
    coordinates: [25.6500, -100.4000] as [number, number],
    description: 'Zona residencial de lujo con propiedades exclusivas y desarrollos premium.',
    details: 'Especializada en residencias de alto valor y condominios de lujo.'
  },
  {
    id: 'monterrey',
    name: 'Monterrey Centro',
    coordinates: [25.6866, -100.3161] as [number, number],
    description: 'Corazón comercial y empresarial de la zona metropolitana.',
    details: 'Propiedades comerciales, departamentos y oportunidades de inversión.'
  }
];

// Centro del mapa (punto intermedio entre ambas ubicaciones)
const mapCenter: [number, number] = [25.6683, -100.3580];

const RealEstateLocationMap: React.FC = () => {
  useEffect(() => {
    // Fix for default markers in react-leaflet
    if (typeof window !== 'undefined') {
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
    }
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-soft-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 
            className="text-4xl lg:text-5xl text-deep-charcoal mb-6 font-light"
            style={{fontFamily: 'var(--font-family-playfair)'}}
          >
            Ubicaciones de Servicio
          </h2>
          <p 
            className="text-lg text-warm-gray max-w-2xl mx-auto leading-relaxed"
            style={{fontFamily: 'var(--font-family-inter)'}}
          >
            Ofrezco mis servicios inmobiliarios en las zonas más exclusivas del área metropolitana de Monterrey.
          </p>
        </div>

        {/* Contenedor del mapa */}
        <div className="bg-white rounded-2xl p-4 lg:p-8 shadow-sm">
          <div className="w-full h-96 md:h-[500px] rounded-xl overflow-hidden">
            <MapContainer
              center={mapCenter}
              zoom={12}
              style={{ height: '100%', width: '100%' }}
              className="z-10"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {locations.map((location) => (
                <Marker 
                  key={location.id} 
                  position={location.coordinates}
                >
                  <Popup>
                    <div className="p-2">
                      <h3 
                        className="text-lg font-semibold text-deep-charcoal mb-2"
                        style={{fontFamily: 'var(--font-family-playfair)'}}
                      >
                        {location.name}
                      </h3>
                      <p 
                        className="text-sm text-warm-gray mb-2 leading-relaxed"
                        style={{fontFamily: 'var(--font-family-inter)'}}
                      >
                        {location.description}
                      </p>
                      <p 
                        className="text-xs text-gold-accent font-medium"
                        style={{fontFamily: 'var(--font-family-inter)'}}
                      >
                        {location.details}
                      </p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default RealEstateLocationMap; 