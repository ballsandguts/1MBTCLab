import { en } from "../src/lib/translations-en";
import { es } from "../src/lib/translations-es";

const NUM = /\d+/g;

function collect(obj: unknown, path = "", out: [string, string][] = []) {
  if (typeof obj === "string") {
    const m = obj.match(NUM);
    if (m) out.push([path, m.join(",")]);
    return out;
  }
  if (Array.isArray(obj)) {
    obj.forEach((v, i) => collect(v, `${path}[${i}]`, out));
    return out;
  }
  if (obj && typeof obj === "object") {
    for (const k of Object.keys(obj as object)) {
      collect((obj as Record<string, unknown>)[k], `${path}.${k}`, out);
    }
  }
  return out;
}

const a = collect(en);
const b = collect(es);
let ok = true;
for (const [p, v] of a) {
  const w = b.find(([p2]) => p2 === p);
  if (!w || w[1] !== v) {
    ok = false;
    console.log("MISMATCH", p, `en=${v}`, `es=${w ? w[1] : "(missing)"}`);
  }
}
console.log("en numeric entries:", a.length, "| es numeric entries:", b.length);
console.log(ok ? "ALL NUMBERS IDENTICAL BETWEEN LANGUAGES" : "DIFFERENCES FOUND");

// Structural parity (keys) — also enforced by TypeScript, double-checked here.
function keys(obj: unknown, path = "", out: string[] = []) {
  if (Array.isArray(obj)) {
    obj.forEach((v, i) => keys(v, `${path}[${i}]`, out));
  } else if (obj && typeof obj === "object") {
    for (const k of Object.keys(obj as object)) {
      keys((obj as Record<string, unknown>)[k], `${path}.${k}`, out);
    }
  }
  return out;
}
const ka = keys(en).filter((k) => !/\[\d+\]/.test(k));
const kb = keys(es).filter((k) => !/\[\d+\]/.test(k));
console.log("object key parity:", ka.join() === kb.join() ? "OK" : "MISMATCH");
