import React, { useState } from 'react';
import { Clock, MapPin } from 'lucide-react';
import { ContactSection } from '../components/ContactSection';

interface Schedule {
  day: string;
  slots: string[];
}

interface Center {
  name: string;
  address: string;
  schedules: {
    activity: string;
    times: Schedule[];
  }[];
}

const centers: Center[] = [
  {
    id: 'castelnau',
    name: 'CASTELNAU-LE-LEZ',
    address: '155 Rue Alphonse Beau de Rochas, 34170 Castelnau-le-Lez',
    phone: '07 67 27 41 87',
    email: 'contact@aquabikecenter.club',
    schedules: [
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
      },
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
      }
    ]
  },
  {
    id: 'montpellier',
    name: 'MONTPELLIER - LE NUAGE',
    address: '769 Av. de la Mer-Raymond Dugrand, 34000 Montpellier',
    phone: '07.49.32.41.38',
    email: 'contact@aquabikecenter.club',
    schedules: [
      {
        activity: "AQUAMIX",
        times: [
          { day: "Lundi", slots: ["10h15", "11h15", "17h45", "19h30"] },
          { day: "Mardi", slots: ["11h30"] },
          { day: "Mercredi", slots: ["11h30", "19h30"] },
          { day: "Jeudi", slots: ["11h30"] },
          { day: "Vendredi", slots: ["11h00", "17h45", "19h45"] },
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
      },
      {
        activity: "AQUABIKE",
        times: [
          { day: "Lundi", slots: ["18h45"] },
          { day: "Mardi", slots: ["09h30", "12h30", "18h15", "19h00"] },
          { day: "Mercredi", slots: ["09h30", "12h30", "18h45"] },
          { day: "Jeudi", slots: ["09h30", "10h00", "12h30", "18h45"] },
          { day: "Dimanche", slots: ["10h15"] }
        ]
      }
    ]
  }
];
export const Horaires = () => {
  const [selectedCenter, setSelectedCenter] = useState(centers[0].name);

  const currentCenter = centers.find(center => center.name === selectedCenter)!;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-amatic font-bold text-center mb-4">HORAIRES</h1>
          <p className="text-center text-blue-100 max-w-2xl mx-auto">
            Consultez les horaires de nos activités dans nos différents centres
          </p>
        </div>
      </div>

      {/* Center Selection */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
          {centers.map(center => (
            <button
              key={center.name}
              onClick={() => setSelectedCenter(center.name)}
              className={`flex-1 p-6 rounded-xl transition-all transform hover:scale-105 ${
                selectedCenter === center.name
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

      {/* Schedule Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {currentCenter.schedules.map((schedule, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-amatic font-bold text-blue-800">
                  {schedule.activity}
                </h2>
              </div>
              <div className="space-y-6">
                {schedule.times.map((time, timeIndex) => (
                  <div key={timeIndex} className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-semibold text-blue-800 mb-4">{time.day}</h3>
                    <div className="flex flex-wrap gap-2">
                      {time.slots.map((slot, slotIndex) => (
                        <span
                          key={slotIndex}
                          className="bg-white px-4 py-2 rounded-full text-blue-600 shadow-sm"
                        >
                          {slot}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-amatic font-bold text-blue-800 mb-6">Informations pratiques</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Réservations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Réservation conseillée pour tous les cours</li>
                  <li>• Annulation possible jusqu'à 24h avant</li>
                  <li>• Places limitées pour un meilleur confort</li>
                  <li>• Possibilité de réserver en ligne</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Recommandations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Arriver 10 minutes avant le cours</li>
                  <li>• Prévoir une tenue adaptée</li>
                  <li>• Bonnet de bain obligatoire</li>
                  <li>• Douche obligatoire avant la séance</li>
                </ul>
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
