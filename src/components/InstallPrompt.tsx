import { Download, X } from 'lucide-react';

interface InstallPromptProps {
  onInstall: () => void;
  onClose: () => void;
}

export function InstallPrompt({ onInstall, onClose }: InstallPromptProps) {
  return (
    <div className="fixed bottom-16 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg p-4 flex items-center gap-3 animate-slide-up z-40">
      <Download className="text-indigo-600 flex-shrink-0" size={24} />
      <div className="flex-1">
        <p className="font-medium text-gray-900">Installer l'application</p>
        <p className="text-sm text-gray-600">Accédez à Radio Golmon depuis votre écran d'accueil</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onInstall}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
        >
          Installer
        </button>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Fermer"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}