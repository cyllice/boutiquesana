'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Produit = {
  nom: string;
  rarete: "commun" | "peu commun" | "rare" | "très rare" | "pas rare" | "unique";
  type: "encens" | "à appliquer" | "livres" | "objet" | "jeu" | "boisson" | "textile" | "accessoire" | "parfum" | "infusion";
};

const produits: Produit[] = [
  { nom: "Feu de Mulgore", rarete: "pas rare", type: "infusion" },
  { nom: "Baume de Lys d’Ashenvale", rarete: "pas rare", type: "à appliquer" },
  { nom: "Sève de Gilnéas", rarete: "pas rare", type: "parfum" },
  { nom: "Pierre de lune polie de Suramar", rarete: "pas rare", type: "objet" },
  { nom: "Brume d’Azshara", rarete: "pas rare", type: "infusion" },
  { nom: "Éveil de Teldrassil", rarete: "rare", type: "infusion" },
  { nom: "Pommade de Serres-Rocheuses", rarete: "rare", type: "à appliquer" },
  { nom: "Huile de Rosée de Sombrevallon", rarete: "rare", type: "à appliquer" },
  { nom: "Encens d’Elune", rarete: "rare", type: "encens" },
  { nom: "Grimoire des Saisons", rarete: "commun", type: "livres" },
  { nom: "Encens de Tranquillité", rarete: "commun", type: "encens" },
  { nom: "Échecs de Dalaran", rarete: "commun", type: "jeu" },
  { nom: "Légendes de la Mer Brumeuse", rarete: "peu commun", type: "livres" },
  { nom: "Tome de la Respiration Lunaire", rarete: "peu commun", type: "livres" },
  { nom: "Lampe de Lave de Sombrivage", rarete: "peu commun", type: "objet" },
  { nom: "Grimoire de Paix Intérieure", rarete: "peu commun", type: "livres" },
  { nom: "Boîte à Musique de Shattrath", rarete: "rare", type: "objet" },
  { nom: "Tapis de Yoga Tissé de Nagrand", rarete: "rare", type: "textile" },
  { nom: "Encens de l’Âme Bleue", rarete: "rare", type: "encens" },
  { nom: "Fleur de Rêve", rarete: "rare", type: "objet" },
  { nom: "Console", rarete: "rare", type: "jeu" },
  { nom: "Larmes de la Sylvanière", rarete: "rare", type: "accessoire" },
  { nom: "Thé de l’Ombre-Bleue", rarete: "très rare", type: "boisson" },
  { nom: "Encens de Clair-Rêve", rarete: "très rare", type: "encens" },
  { nom: "Couverture d’Ombrelune", rarete: "très rare", type: "textile" },
  { nom: "Cristal de Chant-Silencieux", rarete: "très rare", type: "objet" },
];

const raretes = ["tous", "pas rare", "commun", "peu commun", "rare", "très rare", "unique"] as const;
const types = ["tous", "encens", "à appliquer", "livres", "objet", "jeu", "boisson", "textile", "accessoire", "parfum", "infusion"] as const;
type RareteFiltre = typeof raretes[number];
type TypeFiltre = typeof types[number];

export default function ProduitsPage() {
  const [filtreActif, setFiltreActif] = useState<"rarete" | "type">("rarete");
  const [filtreRarete, setFiltreRarete] = useState<RareteFiltre>("tous");
  const [filtreType, setFiltreType] = useState<TypeFiltre>("tous");

  const produitsFiltres = produits.filter(p => {
    if (filtreActif === "rarete") {
      return filtreRarete === "tous" || p.rarete === filtreRarete;
    } else {
      return filtreType === "tous" || p.type === filtreType;
    }
  });

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-purple-950/80 backdrop-blur z-50 border-b border-purple-800">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white text-sm md:text-base">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-sanarellia.png"
              alt="Logo Sanarellia"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-bold text-amber-400 text-lg">Sanarellia</span>
          </Link>
          <Link href="/" className="hover:text-amber-300 transition">
            Retour à l’accueil
          </Link>
        </nav>
      </header>

      <main className="min-h-screen bg-gradient-to-b from-purple-950 to-black text-white px-6 py-12 pt-28">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2">Nos produits</h1>
          <p className="text-center italic text-amber-300 mb-8">
            Certains ne sont révélés qu’à ceux qui ont gagné la confiance des étoiles...
          </p>

          {/* Message RP */}
          <div className="bg-purple-900/40 text-sm text-gray-300 p-4 rounded-xl mb-10 text-center shadow-lg">
            <p>
              <span className="text-amber-400 font-semibold">Note :</span> certains articles spéciaux ne sont révélés qu’aux détenteurs
              d’une carte de fidélité. Le stock évolue selon les lunes et les récoltes.
            </p>
          </div>

          {/* Menu de sélection de filtre */}
          <div className="flex justify-center mb-4">
            <select
              value={filtreActif}
              onChange={(e) => setFiltreActif(e.target.value as "rarete" | "type")}
              className="bg-purple-800 text-white px-4 py-2 rounded-xl text-sm shadow-md"
            >
              <option value="rarete">Filtrer par rareté</option>
              <option value="type">Filtrer par type</option>
            </select>
          </div>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {(filtreActif === "rarete" ? raretes : types).map((val) => (
              <button
                key={val}
                onClick={() =>
                  filtreActif === "rarete"
                    ? setFiltreRarete(val as RareteFiltre)
                    : setFiltreType(val as TypeFiltre)
                }
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  (filtreActif === "rarete" ? filtreRarete : filtreType) === val
                    ? "bg-amber-400 text-purple-900"
                    : "bg-purple-800 text-white hover:bg-purple-700"
                }`}
              >
                {val === "tous" ? "Tous les produits" : val.charAt(0).toUpperCase() + val.slice(1)}
              </button>
            ))}
          </div>

          {/* Grille produits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {produitsFiltres.map((prod, idx) => (
              <div
                key={idx}
                className="bg-purple-800/80 backdrop-blur p-6 rounded-xl shadow-xl hover:scale-105 transition-transform"
              >
                <h2 className="text-xl font-semibold text-amber-200">{prod.nom}</h2>
                <p className="text-sm text-gray-300 italic mt-1 capitalize">
                  {prod.type}
                </p>
              </div>
            ))}

            {produitsFiltres.length === 0 && (
              <p className="col-span-full text-center text-gray-400 italic">
                Aucun produit dans cette catégorie pour le moment...
              </p>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-purple-700 pt-6 text-sm text-gray-400 text-center">
        <p>
          © {new Date().getFullYear()} Sanarellia — Boutique mystique fondée sur l'Île de la Lune.
        </p>
        <p className="italic text-xs mt-1">
          Chaque élixir est testé par les anciens. Aucun dragon n’a été blessé durant l’enchantement des fioles.
        </p>
      </footer>
    </>
  );
}
