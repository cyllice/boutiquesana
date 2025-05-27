"use client";

import Link from "next/link";

export default function JambonPage() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-pink-950/80 backdrop-blur z-50 border-b border-pink-800">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white text-sm md:text-base">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo-sanarellia.png"
              alt="Logo Sanarellia"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-bold text-pink-400 text-lg">Retour à l’accueil</span>
          </Link>
          <Link
            href="/produits"
            className="text-pink-300 hover:text-pink-200 transition font-medium"
          >
            Aller vers la boutique
          </Link>
        </nav>
      </header>

      <main className="min-h-screen bg-gradient-to-b from-pink-900 to-black text-white px-6 pt-28 pb-16 flex flex-col items-center justify-center">
        <img
          src="https://www.photofunky.net/output/image/a/f/c/c/afcc44/photofunky.gif"
          alt="Jambon sacré"
          width={200}
          height={200}
          className="mb-6 rounded-full"
        />

        <h1 className="text-4xl font-bold text-pink-400 mb-4">
          🐖 Tu as invoqué... le Jambon Mystique
        </h1>
        <p className="text-center text-pink-200 text-lg mb-4 max-w-xl">
          L'univers n'était pas prêt. Toi non plus. Mais Era, lui, savait.
        </p>
        <p className="italic text-sm text-pink-300">✨ C’est cadeau, Era. T’as gagné le jambon cosmique.</p>
      </main>

      <footer className="mt-20 border-t border-pink-700 pt-6 text-sm text-pink-400 text-center">
        <p>© {new Date().getFullYear()} Sanarellia — Département Culinaire Dimensionnel</p>
        <p className="italic text-xs mt-1">Ce jambon est certifié RP sans gluten.</p>
      </footer>
    </>
  );
}
