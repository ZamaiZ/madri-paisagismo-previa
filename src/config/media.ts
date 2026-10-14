export interface SiteImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  source: "Corredo e Garcia";
}

// Imagens de ambientação publicadas no site do grupo, não registros de obras da Madri.
export const media: Record<"hero" | "aerial" | "garden" | "safety", SiteImage> = {
  hero: {
    src: "https://static.wixstatic.com/media/78e40700dbdb478e997aa3cbcbe2e8aa.jpg/v1/fill/w_1345,h_660,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/78e40700dbdb478e997aa3cbcbe2e8aa.jpg",
    width: 1345,
    height: 660,
    alt: "Floresta iluminada por luz difusa",
    source: "Corredo e Garcia",
  },
  aerial: {
    src: "https://static.wixstatic.com/media/601a6af8c44541c0a785579bc4f1dacf.jpg/v1/fill/w_1345,h_560,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/601a6af8c44541c0a785579bc4f1dacf.jpg",
    width: 1345,
    height: 560,
    alt: "Vista aérea de mata e água",
    source: "Corredo e Garcia",
  },
  garden: {
    src: "https://static.wixstatic.com/media/144994_ddbe82673f6b47f9afb41391c4a98ce0~mv2.png/v1/fill/w_374,h_440,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/144994_ddbe82673f6b47f9afb41391c4a98ce0~mv2.png",
    width: 374,
    height: 440,
    alt: "Vegetação junto a uma área com água",
    source: "Corredo e Garcia",
  },
  safety: {
    src: "https://static.wixstatic.com/media/6ea33cd5b203488dbbc347e290648b2c.jpg/v1/fill/w_374,h_440,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6ea33cd5b203488dbbc347e290648b2c.jpg",
    width: 374,
    height: 440,
    alt: "Guindaste em canteiro de obras",
    source: "Corredo e Garcia",
  },
};
