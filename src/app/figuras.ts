export interface Figuras {
  id: number;
  nome: string;
  pathOrig: string;
  pathMin: string;
  sigla: string;
  qte: number;
}

export const figuras = [
  {
    id: 1,
    nome: 'BAILARINA',
    pathOrig: '../assets/estampas/orig/BAILARINA/',
    pathMin: '../assets/estampas/min/BAILARINA/',
    sigla: 'BAI',
    qte: 35,
  },
  {
    id: 2,
    nome: 'BEBE',
    pathOrig: '../assets/estampas/orig/BEBE/',
    pathMin: '../assets/estampas/min/BEBE/',
    sigla: 'BEBE',
    qte: 78,
  },
  {
    id: 3,
    nome: 'CACTOS',
    pathOrig: '../assets/estampas/orig/CACTOS/',
    pathMin: '../assets/estampas/min/CACTOS/',
    sigla: 'CAC',
    qte: 10,
  },
];