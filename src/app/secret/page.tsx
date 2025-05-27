"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SecretConsole() {
  const [history, setHistory] = useState<string[]>([
    "Connexion au réseau mystique en cours...",
    "Canal synchronisé.",
    "Console Sanarellia > accès partiel accordé.",
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase();
    let response = "";

    if (cmd === "help") {
      response = "Commandes disponibles : help, whoami, clear";
    } else if (cmd === "whoami") {
      response = "Voyageur mystique non identifié. Signature énergétique instable.";
    } else if (cmd === "clear") {
      setHistory([]);
      return;
    } else if (cmd === "kinks") {
      setHistory((prev) => [...prev, `> ${command}`, "Connexion à l’archive karmique..."]);
      setTimeout(() => {
        router.push("/kinks");
      }, 1500);
      return;
    } else if (cmd === "jambon") {
      setHistory((prev) => [
        ...prev,
        `> ${command}`,
        "Analyse du cochon mystique...",
        "Connexion aux cuisines d’Era...",
        "Préparation du sortilège de fumaison divine...",
        "Redirection en cours...",
      ]);
      setTimeout(() => {
        router.push("/jambon");
      }, 3000);
      return;
    } else {
      response = `Commande inconnue : "${command}" — essayez "help"`;
    }

    setHistory((prev) => [...prev, `> ${command}`, response]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== "") {
      handleCommand(input.trim());
      setInput("");
    }
  };

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

      {/* Console mystique */}
      <main className="min-h-screen bg-gradient-to-b from-purple-950 to-black text-green-400 font-mono px-4 pt-28 pb-12">
        <div className="max-w-4xl mx-auto bg-black/60 border border-purple-800 rounded-lg p-6 shadow-xl backdrop-blur">
          <h1 className="text-xl md:text-2xl mb-4 text-amber-400">
            ◈ Console Magique Sanarellia
          </h1>

          <div className="h-[400px] overflow-y-auto text-sm md:text-base mb-4 whitespace-pre-wrap space-y-1 scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-transparent">
            {history.map((line, idx) => (
              <div key={idx} className="text-green-300">
                {line}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span className="text-green-400">&gt;</span>
            <input
              ref={inputRef}
              type="text"
              className="w-full bg-transparent border-none outline-none text-green-200 placeholder-green-500"
              placeholder="Entrez une commande (help)"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoComplete="off"
            />
          </form>
        </div>
      </main>
    </>
  );
}
