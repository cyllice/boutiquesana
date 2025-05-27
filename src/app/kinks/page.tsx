"use client";

import Image from "next/image";
import Link from "next/link";

export default function KinksPage() {
  return (
    <>
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

      <main className="min-h-screen bg-gradient-to-b from-purple-950 to-black text-white px-6 pt-28 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/logo-sanarellia.png"
            alt="Logo Sanarellia"
            width={80}
            height={80}
            className="mx-auto mb-6 rounded-full shadow-md"
          />

          <h1 className="text-4xl font-bold text-amber-400 mb-4">Page en cours de création</h1>
          <p className="text-gray-300 text-lg">
            Cette section du grimoire est encore scellée. Revenez plus tard...
          </p>
        </div>
      </main>

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
