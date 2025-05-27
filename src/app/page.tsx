"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [highlightProduits, setHighlightProduits] = useState(false);
  const [highlightHistoire, setHighlightHistoire] = useState(false);
  const [highlightContact, setHighlightContact] = useState(false);
  const [inputBuffer, setInputBuffer] = useState("");
  const [showMagic, setShowMagic] = useState(false);

  const secretCode = "kinks";

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#produits") {
        setHighlightProduits(true);
        setTimeout(() => setHighlightProduits(false), 2000);
      } else if (hash === "#histoire") {
        setHighlightHistoire(true);
        setTimeout(() => setHighlightHistoire(false), 2000);
      } else if (hash === "#contact") {
        setHighlightContact(true);
        setTimeout(() => setHighlightContact(false), 2000);
      }
    };

    const handleKeydown = (e: KeyboardEvent) => {
      const nextBuffer = (inputBuffer + e.key.toLowerCase()).slice(-secretCode.length);
      setInputBuffer(nextBuffer);
      if (nextBuffer === secretCode) {
        setShowMagic(true);
        setTimeout(() => {
          router.push("/secret");
        }, 1500);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("keydown", handleKeydown);
    handleHashChange(); // Pour activer dès le chargement

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [inputBuffer, router]);

  return (
    <>
      {/* Animation magique quand le mot est tapé */}
      {showMagic && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="w-48 h-48 rounded-full bg-violet-500 opacity-70 animate-ping" />
        </div>
      )}

      {/* Header avec logo rond */}
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
          <div className="space-x-6">
            <a href="#produits" className="hover:text-amber-300 transition">Nos produits</a>
            <a href="#histoire" className="hover:text-amber-300 transition">Qui sommes-nous</a>
            <a href="#contact" className="hover:text-amber-300 transition">Nous contacter</a>
          </div>
        </nav>
      </header>

      {/* Contenu principal */}
      <main className="min-h-screen bg-gradient-to-b from-purple-950 to-black text-white px-6 py-12 pt-28">
        <div className="max-w-5xl mx-auto text-center">
          <Image
            src="/logo-sanarellia.png"
            alt="Logo Sanarellia"
            width={100}
            height={100}
            className="mx-auto mb-6"
            priority
          />

          <h1 className="text-5xl md:text-6xl font-bold mb-2">Sanarellia</h1>
          <p className="text-amber-300 italic text-lg md:text-xl mb-10">
            Herboristerie mystique – Encens lunaires – Alchimie ancestrale
          </p>

          {/* Histoire */}
          <section
            id="histoire"
            className={`bg-purple-900/40 p-6 rounded-2xl shadow-lg mb-16 max-w-3xl mx-auto transition-all duration-300 ${
              highlightHistoire ? "ring-4 ring-amber-400 animate-pulse" : ""
            }`}
          >
            <p className="text-md md:text-lg leading-relaxed text-gray-200">
              Nichée au cœur de l'île de la Lune, la boutique Sanarellia propose des remèdes oubliés,
              des baumes enchanteurs et des élixirs distillés à la lueur d’étoiles anciennes.
              Chaque flacon renferme une histoire, chaque herbe est bénie par les anciens.
            </p>
          </section>

          {/* Produits vedettes */}
          <section
            id="produits"
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-300 ${
              highlightProduits ? "ring-4 ring-amber-400 animate-pulse rounded-xl" : ""
            }`}
          >
            {[
              { nom: "Baume de Sève Dorée", type: "Baume" },
              { nom: "Encens Lunaire", type: "Encens" },
              { nom: "Cristaux de Respiration", type: "Objet" },
            ].map((prod, index) => (
              <div
                key={index}
                className="bg-purple-800/80 backdrop-blur p-6 rounded-xl shadow-xl hover:scale-105 transition-transform"
              >
                <h2 className="text-xl font-semibold text-amber-200">{prod.nom}</h2>
                <p className="text-sm text-gray-300 mt-2 italic">{prod.type}</p>
              </div>
            ))}
          </section>

          <Link href="/produits">
            <button className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-purple-900 text-lg font-bold rounded-full shadow-lg transition-all duration-200">
              Explorer la boutique
            </button>
          </Link>

          {/* Contact */}
          <section
            id="contact"
            className={`mt-20 text-center text-gray-300 text-sm max-w-xl mx-auto transition-all duration-300 ${
              highlightContact ? "ring-4 ring-amber-400 animate-pulse rounded-xl p-4" : ""
            }`}
          >
            <p className="mb-2">Une question ? Une commande spéciale ?</p>
            <p>
              Contactez <span className="text-amber-400 font-medium">Ilyndra</span> avec l'intercom sur le mur de la boutique (discord)
            </p>
          </section>

          {/* Footer */}
          <footer className="mt-20 border-t border-purple-700 pt-6 text-sm text-gray-400 text-center">
            <p>
              © {new Date().getFullYear()} Sanarellia — Boutique mystique fondée sur l'Île de la Lune.
            </p>
            <p className="italic text-xs mt-1">
              Chaque élixir est testé par les anciens. Aucun dragon n’a été blessé durant l’enchantement des fioles.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
