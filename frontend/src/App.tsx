import React from "react";
import { LayerCard } from "./components/LayerCard";
import { layers as layerData } from "../data/layers";
import { Layer } from "../types/layer";

export default function App() {
  return (
    <div className="min-h-screen p-8 bg-gray-900 text-white">
      <header className="mb-8">
        <h1 className="text-4xl font-semibold">systema — Layers of Computing</h1>
        <p className="mt-2 text-gray-300">Interactive, color-driven animations from transistor → cloud.</p>
      </header>

      <main className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {layerData.map((l: Layer, i: number) => (
          <LayerCard key={l.id} title={l.title} active={i === 0} />
        ))}
      </main>
    </div>
  );
}