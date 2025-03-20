"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/card";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Globe, Laptop, GraduationCap, Key } from "lucide-react";
import tdbImage from "@/assets/tdb.png"; // Import correct de l'image

// ✅ Définition du type des fonctionnalités
type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  details: string;
};

// ✅ Liste des fonctionnalités
const features: Feature[] = [
  {
    icon: <Lock size={40} className="text-blue-400" />,
    title: "Détection des fuites de mots de passe",
    description: "Analyse en temps réel des bases de données compromises.",
    image: tdbImage.src,
    details: "Notre outil analyse constamment les bases de données accessibles sur le Dark Web afin de détecter toute compromission de vos informations d'identification."
  },
  {
    icon: <ShieldCheck size={40} className="text-green-400" />,
    title: "Audit de conformité aux normes",
    description: "Scannez votre infrastructure et détectez les failles.",
    image: tdbImage.src,
    details: "Grâce à notre scanner automatisé, nous vous aidons à identifier les non-conformités et à obtenir des recommandations adaptées pour améliorer votre niveau de sécurité."
  },
  {
    icon: <Globe size={40} className="text-purple-400" />,
    title: "Outil de veille cyber",
    description: "Surveillance des cyberattaques émergentes.",
    image: tdbImage.src,
    details: "Restez informé des nouvelles menaces et vulnérabilités grâce à notre outil de veille qui surveille en permanence les sources officielles et le dark web."
  },
  {
    icon: <Laptop size={40} className="text-yellow-400" />,
    title: "Suivi des équipements et logiciels",
    description: "Gestion automatisée des mises à jour et des correctifs.",
    image: tdbImage.src,
    details: "Notre solution analyse vos logiciels et équipements afin d'identifier ceux nécessitant une mise à jour pour éviter les failles de sécurité exploitables."
  },
  {
    icon: <GraduationCap size={40} className="text-orange-400" />,
    title: "Sensibilisation et formation à la cybersécurité",
    description: "Simulations de phishing interactives.",
    image: tdbImage.src,
    details: "Formez vos employés aux meilleures pratiques en cybersécurité grâce à des exercices pratiques et interactifs, y compris des simulations d'attaques."
  },
  {
    icon: <Key size={40} className="text-red-400" />,
    title: "Générateur de mots de passe sécurisé",
    description: "Génération de mots de passe inviolables.",
    image: tdbImage.src,
    details: "Utilisez notre générateur pour créer des mots de passe robustes et uniques, et stockez-les en toute sécurité dans notre coffre-fort chiffré."
  }
];

const FeaturesPresentation: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  const [isImageLeft, setIsImageLeft] = useState<boolean>(true);

  const handleFeatureClick = (feature: Feature) => {
    setSelectedFeature(feature);
    setIsImageLeft(Math.random() > 0.5); // Placement aléatoire de l'image
  };

  return (
    <section className="p-12 bg-gradient-to-b from-white to-blue-300 text-gray-900 text-center">
      {!selectedFeature ? (
        <>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Découvrez Nos Fonctionnalités</h2>
          <p className="mb-8 text-gray-700">Une suite complète pour assurer la sécurité de vos données et de votre entreprise.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, boxShadow: "0px 0px 20px rgba(0, 140, 255, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleFeatureClick(feature)}
                className="cursor-pointer"
              >
                <Card className="p-3 rounded-xl bg-gray-800 shadow-md border border-gray-700 transition-all duration-300">
                  <CardContent className="flex flex-col items-center text-center">
                    {feature.icon}
                    <h3 className="text-lg font-bold mt-4 text-gray-200">{feature.title}</h3>
                    <p className="text-sm mt-2 text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </>
      ) : (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={() => setSelectedFeature(null)}>
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center max-w-4xl w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            {isImageLeft && <img src={selectedFeature.image} alt={selectedFeature.title} className="w-1/2 rounded-lg shadow-md" />}
            <div className="w-1 h-full bg-gray-300 mx-4"></div>
            <div className="w-1/2 text-gray-800">
              <h3 className="text-2xl font-bold mb-4">{selectedFeature.title}</h3>
              <p className="text-md text-gray-600">{selectedFeature.details}</p>
            </div>
            {!isImageLeft && <img src={selectedFeature.image} alt={selectedFeature.title} className="w-1/2 rounded-lg shadow-md" />}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default FeaturesPresentation;
