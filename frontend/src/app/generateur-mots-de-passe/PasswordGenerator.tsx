'use client';

import { useState } from 'react';

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [minuscules, setMinuscules] = useState(true);
  const [majuscules, setMajuscules] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = async () => {
    const res = await fetch(`http://localhost:5000/api/password/generate?length=${length}&minuscules=${minuscules}&majuscules=${majuscules}&numbers=${numbers}&symbols=${symbols}`);
    const data = await res.json();
    setPassword(data.password);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Mot de passe copié !');
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg w-full max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-bold text-center">Générateur de mot de passe</h2>

      <input
        type="text"
        value={password}
        readOnly
        className="w-full p-2 text-black rounded"
      />
      <div className="flex justify-between items-center">
        <label>Longueur :</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="w-20 text-black p-1 rounded"
          min={4}
          max={64}
        />
      </div>
      <div className="space-y-1">
        <label><input type="checkbox" checked={minuscules} onChange={() => setMinuscules(!minuscules)} /> Minuscules</label><br />
        <label><input type="checkbox" checked={majuscules} onChange={() => setMajuscules(!majuscules)} /> Majuscules</label><br />
        <label><input type="checkbox" checked={numbers} onChange={() => setNumbers(!numbers)} /> Chiffres</label><br />
        <label><input type="checkbox" checked={symbols} onChange={() => setSymbols(!symbols)} /> Symboles</label>
      </div>
      <div className="flex space-x-2 justify-center">
        <button onClick={generatePassword} className="bg-blue-600 px-4 py-2 rounded">Générer</button>
        <button onClick={copyToClipboard} className="bg-green-600 px-4 py-2 rounded">Copier</button>
      </div>
    </div>
  );
}
