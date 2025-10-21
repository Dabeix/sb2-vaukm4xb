import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, Phone, Mail, Download, Waves } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { ContactSection } from '../components/ContactSection';

interface Schedule {
  activity: string; 
  times: {
    day: string;
    slots: string[];
  }[];
}

interface Center {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  schedules: Schedule[];
  planningPdf: string;
}

const centers: Center[] = [
  {
    id: 'montpellier',
    name: 'MONTPELLIER - LE NUAGE',
    address: '769 Av. de la Mer-Raymond Dugrand, 34000 Montpellier',
    phone: '07.49.32.41.38',
    email: 'contact@aquabikecenter.club',
    planningPdf: '/plannings/montpellier-aquafitness.pdf',
    schedules: [
       {
        activity: "AQUABIKE",
        times: [
          { day: "Lundi", slots: ["18h45"] },
          { day: "Mardi", slots: ["09h30", "12h30", "18h15", "19h00"] },
          { day: "Mercredi", slots: ["09h30", "12h30", "18h45"] },
          { day: "Jeudi", slots: ["09h30", "10h00", "12h30", "18h45"] },
             { day: "Vendredi", slots: ["9h15", "12h30", "18h45"] },
          { day: "Dimanche", slots: ["10h15"] }
        ]
      },
      {
        activity: "AQUAMIX",
        times: [
          { day: "Lundi", slots: ["10h15", "11h15", "17h45", "19h30"] },
          { day: "Mardi", slots: ["11h30"] },
          { day: "Mercredi", slots: ["11h30", "19h30"] },
          { day: "Jeudi", slots: ["11h30"] },
          { day: "Vendredi", slots: ["14h00", "17h45", "19h45"] },
          { day: "Dimanche", slots: ["09h15", "11h15"] }
        ]
      },
      {
        activity: "AQUAGYM",
        times: [
          { day: "Lundi", slots: ["09h15"] },
          { day: "Mardi", slots: ["10h30"] },
          { day: "Mercredi", slots: ["17h45"] },
          { day: "Jeudi", slots: ["10h30"] },
          { day: "Vendredi", slots: ["11h15"] }
        ]
      }
     
    ]
  },
  {
    id: 'castelnau',
    name: 'CASTELNAU-LE-LEZ',
    address: '155 Rue Alphonse Beau de Rochas, 34170 Castelnau-le-Lez',
    phone: '07 67 27 41 87',
    email: 'contact@aquabikecenter.club',
    planningPdf: '/plannings/castelnau-aquafitness.pdf',
    schedules: [
       {
        activity: "AQUABIKE",
        times: [
          { day: "Lundi", slots: ["08h30", "09h30", "12h30", "19h00", "20h00"] },
          { day: "Mardi", slots: ["09h45", "12h30", "14h00", "18h30", "19h30", "20h15"] },
          { day: "Mercredi", slots: ["09h45", "11h30", "12h30", "14h00", "18h30", "19h30"] },
          { day: "Jeudi", slots: ["08h30", "10h00", "12h15", "13h00", "17h45", "18h30"] },
          { day: "Samedi", slots: ["10h00", "10h45", "11h30", "12h30"] },
          { day: "Dimanche", slots: ["09h30", "10h15", "11h15"] }
        ]
      },
      {
        activity: "AQUAMIX",
        times: [
          { day: "Lundi", slots: ["10h15", "15h00"] },
          { day: "Mardi", slots: ["10h30", "15h00"] },
          { day: "Mercredi", slots: ["09h00"] },
          { day: "Jeudi", slots: ["19h30"] },
          { day: "Samedi", slots: ["09h00"] }
        ]
      },
      {
        activity: "AQUAGYM",
        times: [
          { day: "Lundi", slots: ["11h15", "14h00", "17h00"] },
          { day: "Mardi", slots: ["08h45"] },
          { day: "Mercredi", slots: ["09h00"] },
          { day: "Jeudi", slots: ["19h30"] },
          { day: "Samedi", slots: ["09h00"] }
        ]
      }
     
    ]
  }
  
];


const prices = [
  {
    name: "Les cartes à partir de :",
    price: 10,
    validity: "La séance"
  },
  {
    name: "Les abonnements à partir de :",
    price: 5.90,
    note: "La séance"
  },
  {
    name: "Première séance",
    price: 0,
    note: "Cours d'essai"
  }
];

export const Aquafitness = () => {
  const [selectedCenter, setSelectedCenter] = useState(centers[0].id);
  const navigate = useNavigate();
  
  const currentCenter = centers.find(center => center.id === selectedCenter)!;


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-amatic font-bold text-center mb-4">AQUAFITNESS</h1>
          <p className="text-center text-blue-100 max-w-2xl mx-auto">
            Découvrez nos activités aquatiques pour tous les niveaux dans nos deux centres
          </p>
        </div>
      </div>

      {/* Center Selection */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
          {centers.map(center => (
            <button
              key={center.id}
              onClick={() => setSelectedCenter(center.id)}
              className={`flex-1 p-6 rounded-xl transition-all transform hover:scale-105 ${
                selectedCenter === center.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              }`}
            >
              <h2 className="text-xl font-bold mb-2">{center.name}</h2>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <MapPin size={16} />
                <span className="truncate">{center.address}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Video */}
            <div className="relative h-[500px] rounded-2xl shadow-lg overflow-hidden">
              <ReactPlayer
                url="https://www.youtube.com/shorts/mKvJeftPNLQ"
                width="100%"
                height="100%"
                playing={false}
                controls={true}
                light={true}
                className="absolute top-0 left-0"
              />
              
              {/* Center Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 p-6 text-white">
                <h3 className="text-xl font-bold mb-4">{currentCenter.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-blue-300" />
                    <span>{currentCenter.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-blue-300" />
                    <span>{currentCenter.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-blue-300" />
                    <span>{currentCenter.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Schedule */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                  <h2 className="text-2xl font-amatic font-bold text-blue-800">
                    Planning des cours
                  </h2>
                </div>
                <a
                  href={currentCenter.planningPdf}
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download size={20} />
                  <span className="hidden sm:inline">PDF</span>
                </a>
              </div>
              <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2">
                {currentCenter.schedules.map((schedule, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-semibold text-blue-800 mb-4 text-lg">
                      {schedule.activity}
                    </h3>
                    <div className="grid gap-4">
                      {schedule.times.map((time, timeIndex) => (
                        <div key={timeIndex} className="text-blue-700">
                          <div className="font-medium mb-1">{time.day}</div>
                          <div className="flex flex-wrap gap-2">
                            {time.slots.map((slot, slotIndex) => (
                              <button
                                key={slotIndex}
                                onClick={() => navigate('/booking/aquafitness')}
                                className="bg-white px-3 py-1 rounded-full text-sm shadow-sm hover:bg-blue-600 hover:text-white transition-colors"
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-amatic font-bold text-blue-800">Nos Tarifs</h2>
              <a
                href="/tarifs/aquafitness.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download size={20} />
                <span>Télécharger les tarifs</span>
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {prices.map((price, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{price.name}</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-2">{price.price}€</p>
                  {price.validity && (
                    <p className="text-blue-600 text-sm">{price.validity}</p>
                  )}
                  {price.note && (
                    <p className="text-blue-600 text-sm">{price.note}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Sections - Horizontal Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Description des activités */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <Waves className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-amatic font-bold text-blue-800">
                  Nos activités
                </h2>
              </div>
              <div className="space-y-4">
                  <div>
                  <h3 className="font-semibold text-blue-800 mb-2">AQUABIKE</h3>
                  <p className="text-gray-600">
                  Découvrez l'Aquabike, l'alliance parfaite entre cardio et plaisir aquatique, pour un entraînement dynamique et rafraîchissant.
                  </p>
                </div>
                    <div>
                  <h3 className="font-semibold text-blue-800 mb-2">AQUAGYM</h3>
                  <p className="text-gray-600">
                   Bougez, tonifiez, éclatez-vous ! L’aquagym, c’est l’énergie du sport dans la légèreté de l’eau.

                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">AQUAMIX</h3>
                  <p className="text-gray-600">
                 Un cocktail explosif de cardio et de renforcement dans l’eau : pédalez, bougez, tonifiez sans impact… et avec le sourire !
                  </p>
                </div>
            
              
              </div>
            </div>

            {/* Informations pratiques */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Informations pratiques
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-blue-700 mb-2">Ce qu'il faut apporter</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Maillot de bain
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                     Bonne humeur
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Serviette
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Bouteille d'eau
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-700 mb-2">Recommandations</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Arriver 10 minutes avant le cours
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Douche obligatoire avant la séance
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Durée des séances : 45 minutes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};
