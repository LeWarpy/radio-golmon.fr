import { useState } from 'react';
import packageJson from '../package.json';

import { InstallPrompt } from './components/InstallPrompt';
import { LegalModal } from './components/LegalModal';
import { useInstallPrompt } from './hooks/useInstallPrompt';

function App() {
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const { isInstallable, handleInstall, handleDismiss } = useInstallPrompt();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-purple-custom">
      <div className="rays-background"></div>
      <div className="white-light-overlay"></div>
      <div className="content text-center">
        <img 
          src="/logo.png" 
          alt="RADIO GOLMOOOOOOOOOOOOOOOOOOOOOON" 
          className="w-80 h-auto mb-6 mx-auto drop-shadow-lg"
        />
        <p className="rainbow-text text-3xl font-semibold mb-10">écoute le golmon en toi</p>
        <div className="bg-black bg-opacity-50 rounded-lg p-4 mb-8 max-w-md mx-auto">
		<iframe
		   src="https://srv.radio-golmon.fr/public/radio_golmon/embed?theme=dark" 
		   title="Player"
		   className="w-full h-full"
		   allow="autoplay"
		></iframe>
        </div>
        <a
          href="https://discord.com/invite/2MUvQUGEwC"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
	   <img
	      src="/widget_discord.png"
	   />	   
        </a>
      </div>
      <footer className="absolute bottom-4 text-sm text-gray-200">
	      <b className="mr-4">v{packageJson.version}</b>
        <button 
          onClick={() => setIsLegalModalOpen(true)} 
          className="hover:underline mr-4"
        >
          Mentions légales
        </button>
        <a href="mailto:contact@lewarpy.fr" className="hover:underline">Contact</a>
      </footer>
      <LegalModal 
        isOpen={isLegalModalOpen} 
        onClose={() => setIsLegalModalOpen(false)} 
      />

      {isInstallable && (
        <InstallPrompt
          onInstall={handleInstall}
          onClose={handleDismiss}
        />
      )}
    </div>
  );
}

export default App;
