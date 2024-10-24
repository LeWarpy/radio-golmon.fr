import React from 'react';
import { Download } from 'lucide-react';

interface InstallPromptProps {
  onInstall: () => void;
}

export function InstallPrompt({ onInstall }: InstallPromptProps) {
  return (
    <div className="fixed bottom-16 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg p-4 flex items-center gap-3 animate-slide-up">
      <Download className="text-indigo-600" size={24} />
      <div className="flex-1">
        <p className="font-medium text-gray-900">Installer l'application</p>
        <p className="text-sm text-gray-600">Accédez à Radio Golmon depuis votre écran d'accueil</p>
      </div>
      <button
        onClick={onInstall}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
      >
        Installer
      </button>
    </div>
  );
}