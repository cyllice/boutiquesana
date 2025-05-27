"use client";

import Image from "next/image";
import Link from "next/link";

export default function Secret() {
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
            <span className="font-bold text-amber-400 text-lg">Retour à l’accueil</span>
          </Link>
          <Link
            href="/produits"
            className="text-amber-300 hover:text-amber-200 transition font-medium"
          >
            Aller vers la boutique
          </Link>
        </nav>
      </header>

      {/* Contenu Secret */}
      <main className="min-h-screen bg-gradient-to-b from-purple-950 to-black text-white px-6 py-12 pt-28">
        <div className="max-w-3xl mx-auto text-center">
          <Image
            src="/logo-sanarellia.png"
            alt="Logo Sanarellia"
            width={80}
            height={80}
            className="mx-auto mb-6 rounded-full shadow-lg"
          />

          <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6">
            Sanctuaire caché
          </h1>

          <p className="text-gray-200 text-lg leading-relaxed mb-10">
            Félicitations, voyageur... Tu as su entendre l’appel silencieux des Sanarellia.
            Ici ne viennent que ceux guidés par l’instinct mystique. D’autres secrets reposent entre les lignes...
          </p>

          <p className="text-gray-400 text-sm italic">
            *Les étoiles murmurent des noms oubliés, et parfois, le murmure devient porte...*
          </p>
        </div>
      </main>
    </>
  );
}
