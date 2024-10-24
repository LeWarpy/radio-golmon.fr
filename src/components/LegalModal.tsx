import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LegalModal({ isOpen, onClose }: LegalModalProps) {
    if (!isOpen) return null;
  
    return(
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Mentions Légales</h2><h5>Version 1</h5>
          <hr className="p-2"></hr>
          <div className="space-y-4 text-gray-600">
            <i>Ces mentions légales peuvent changer ─ Dernière MàJ : 24/10/2024</i>

            <section>
              <h3 className="text-lg font-semibold mb-2">1. Édition du site</h3>
              <p>Le site radio-golmon.fr est édité par Monsieur Anthony BILLON.</p>
              <p>Siège social : 67 Rue d'Auron, 18000 Bourges</p>
              <p>Contact e-mail : contact [arobase] lewarpy.fr</p>
              <p>Directeur de la publication : Anthony Billon</p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-2">2. Hébergement</h3>
              <p>Le site est hébergé en France par Monsieur Anthony BILLON.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">3. Propriété intellectuelle</h3>
              <p>L'ensemble du contenu de ce site est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">4. Protection des données</h3>
              <p>Conformément à la loi "Informatique et Libertés" du 6 janvier 1978, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">5. Cookies</h3>
              <p>Ce site utilise uniquement des cookies pour le bon fonctionnement du service, aucun traçage et/ou utilisation commercial possible.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}