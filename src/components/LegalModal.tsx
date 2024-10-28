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
          <h2 className="text-2xl font-bold mb-4">Mentions Légales</h2><h5>Version 2</h5>
          <hr className="p-2"></hr>
          <div className="space-y-4 text-gray-600">
            <i>Ces mentions légales peuvent changer ─ Dernière MàJ : 28/10/2024</i>

            <section>
              <h3 className="text-lg font-semibold mb-2">1. Éditeur</h3>
              <p>Le site radio-golmon.fr est édité par Monsieur Anthony BILLON.</p>
              <p>Siège social : 67 Rue d'Auron, 18000 Bourges</p>
              <p>Directeur de la publication : Anthony Billon</p>
              <p>Toute demande relative à ce site peut être addressé à contact [arobase] lewarpy.fr</p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-2">2. Hébergement</h3>
              <p>Le site radio-golmon.fr est auto-hébergé en France par Monsieur Anthony BILLON.</p>
            </section>

            <section>
              <h3 className='text-lg font-semibold mb-2'>3. Décharge de Responsabilité</h3>
              <p>Le site Internet s'efforcent d'actualiser régulièrement les informations contenues dans le site et veille à leur exactitude, aucune responsabilité ne pourrait être toutefois recherchée pour erreur ou omission dans les informations présentes sur le site Internet.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">4. Propriété intellectuelle</h3>
              <p>L'ensemble du contenu de ce site est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">5. Mesure d'audience</h3>
              <p>Notre outil de mesure d'audience est notre serveur de diffusion Icecast. Il enregistre uniquement le nombre d'écoutes sur le flux audio et ne collecte pas les adresses IP.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">6. Protection des données</h3>
              <p>Conformément à la loi "Informatique et Libertés" du 6 janvier 1978, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">7. Politique de cookies</h3>
              <p>Ce site utilise uniquement des cookies pour le bon fonctionnement du service, aucun traçage et/ou utilisation commercial.</p>
              <br></br>
              <p>Un cookie est un fichier qui est téléchargé sur un dispositif électronique de l'utilisateur lors de l'accès à certaines pages Web pour stocker et récupérer des informations sur la navigation effectuée à partir dudit ordinateur.</p>
              <br></br>
              <p>Les cookies peuvent être de différents types :</p>
              <br></br>
              <ul>
                <li><b>Cookies techniques</b> : sont ceux qui permettent à l'utilisateur de naviguer à travers une page Web et l'utilisation des différentes options ou services qui y existent, par exemple, contrôler le trafic et la communication de données, faire la demande d'enregistrement ou la participation à un événement, utiliser des éléments de sécurité lors de la navigation, stocker des contenus pour la diffusion de vidéos ou de son ou partager du contenu à travers les réseaux sociaux.</li>
                <li><b>Cookies de personnalisation</b> : Ce sont ceux qui permettent à l'utilisateur d'accéder au service avec certaines caractéristiques générales prédéfinies basées sur une série de critères dans le terminal de l'utilisateur, tels que la langue, le type de navigateur à travers lequel l'utilisateur accède au service, la configuration régionale d'où vous accédez au service, etc.</li>
                <li><b>Cookies d'analyse</b> : Ce sont ceux qui permettent à la personne responsable de surveiller et d'analyser le comportement des utilisateurs des sites Web auxquels ils sont liés. Les informations collectées à travers ce type de cookie sont utilisées dans la mesure de l'activité des sites Web, application ou plate-forme et pour la création de profils de navigation des utilisateurs desdits sites, applications et plateformes, afin d'introduire des améliorations basées sur l'analyse des données d'utilisation faites par les utilisateurs du service.</li>
                <li><b>Cookies de session</b> : Ces cookies permettent à l'opérateur du site de lier les actions de l'utilisateur pendant la session. Une session commence lorsqu'un utilisateur ouvre la fenêtre du navigateur et finit quand il la ferme. Les cookies de session sont temporaires. Une fois le navigateur fermé, tous les cookies de session sont supprimés.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}