'use client';

import { useState, useEffect } from 'react';
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [minuscules, setMinuscules] = useState(true);
  const [majuscules, setMajuscules] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const generatePassword = async () => {
    const res = await fetch(`http://localhost:5000/api/password/generate?length=${length}&minuscules=${minuscules}&majuscules=${majuscules}&numbers=${numbers}&symbols=${symbols}`);
    const data = await res.json();
    setPassword(data.password);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  useEffect(() => {
    generatePassword();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white flex flex-col items-center justify-center px-4">
      <section className="bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-md w-full animate-fadeIn space-y-6">
        <h1 className="text-3xl font-extrabold text-center text-cyan-400">CyberVigilant</h1>
        <p className="text-sm text-center text-gray-300">Générez des mots de passe ultra sécurisés en un clic</p>

        <input
          type="text"
          value={password}
          readOnly
          className="w-full p-3 text-black rounded font-mono text-lg"
        />

        <div>
          <label className="block font-medium mb-1">Nombre de caractères</label>
          <div className="flex items-center space-x-4">
            <span className="bg-white text-black px-3 py-1 rounded">{length}</span>
            <input
              type="range"
              min="8"
              max="32"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="flex-1 accent-cyan-500"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label><input type="checkbox" checked={minuscules} onChange={() => setMinuscules(!minuscules)} className="mr-2" /> Minuscules</label><br />
          <label><input type="checkbox" checked={majuscules} onChange={() => setMajuscules(!majuscules)} className="mr-2" /> Majuscules</label><br />
          <label><input type="checkbox" checked={numbers} onChange={() => setNumbers(!numbers)} className="mr-2" /> Chiffres</label><br />
          <label><input type="checkbox" checked={symbols} onChange={() => setSymbols(!symbols)} className="mr-2" /> Symboles</label>
        </div>

        <div className="flex space-x-4 justify-center">
          <button onClick={generatePassword} className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded transition">🔄 Générer</button>
          <button onClick={copyToClipboard} className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition">📋 Copier</button>
        </div>

        {copied && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow-md transition">
            Mot de passe copié !
          </div>
        )}
      </section>

      {/* 🔐 Section sécurité */}
      <section className="mt-12 max-w-2xl text-center space-y-4 animate-fadeIn">
        <h2 className="text-2xl font-bold text-cyan-300">🔐 Conseils pour un mot de passe sécurisé</h2>
        <ul className="text-gray-300 text-sm list-disc list-inside space-y-2">
          <li>Utilisez au moins 12 caractères, avec lettres, chiffres et symboles.</li>
          <li>N’utilisez jamais le même mot de passe pour plusieurs comptes.</li>
          <li>Évitez les infos personnelles (nom, date de naissance...)</li>
          <li>Changez régulièrement vos mots de passe sensibles.</li>
          <li>Utilisez un gestionnaire de mots de passe pour les stocker.</li>
        </ul>
      </section>
    </main>
  );
}
