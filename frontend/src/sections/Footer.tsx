export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li>Détection de fuites de données</li>
            <li>Audit RGPD / NIS2</li>
            <li>Analyse de vulnérabilités</li>
            <li>Simulation d’attaques phishing</li>
            <li>Simulation de ransomware</li>
            <li>Générateur de mots de passe</li>
            <li>Surveillance en temps réel</li>
            <li>Formation à la cybersécurité</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Ressources</h4>
          <ul className="space-y-2 text-sm">
            <li>Blog cybersécurité</li>
            <li>Études de cas</li>
            <li>Webinars</li>
            <li>Guides & Livres blancs</li>
            <li>Vidéos</li>
            <li>Témoignages</li>
            <li>FAQ</li>
            <li>Documentation</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-lg mb-4">CyberVigilant</h4>
          <ul className="space-y-2 text-sm">
            <li>À propos</li>
            <li>Notre mission</li>
            <li>Recrutement</li>
            <li>Espace client</li>
            <li>Demander une démo</li>
            <li>Aide & support</li>
            <li>Contact</li>
            <li>Mentions légales</li>
            <li>Politique de confidentialité</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        <p>© 2025 CyberVigilant – Tous droits réservés.</p>
        <p>Conçu pour protéger vos données, anticiper les menaces et garantir votre conformité.</p>
      </div>
    </footer>
    );
};