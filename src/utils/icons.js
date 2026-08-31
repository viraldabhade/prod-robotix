import {
  Bot, Cpu, Layers, BrainCircuit, Calculator, BookOpen, Code2, Puzzle,
  Printer, GraduationCap, Sparkles,
} from "lucide-react";

/** Picks a lucide icon for a program card based on its category/name. */
export function iconFor(category, program) {
  const p = (program || "").toLowerCase();
  if (p.includes("lego") && p.includes("advanced")) return Layers;
  if (p.includes("lego")) return Bot;
  if (p.includes("vex") && p.includes("advanced")) return BrainCircuit;
  if (p.includes("vex")) return Cpu;
  if (category === "Robotics") return Bot;
  if (p.includes("math")) return Calculator;
  if (p.includes("read")) return BookOpen;
  if (category === "Coding") return Code2;
  if (category === "Chess") return Puzzle;
  if (category === "3D Printing") return Printer;
  if (category === "After School") return GraduationCap;
  return Sparkles;
}
