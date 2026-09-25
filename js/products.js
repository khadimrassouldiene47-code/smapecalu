// =========================================
// SMAPEC - Gestionnaire de Produits & Catalogue
// =========================================

const DEFAULT_PRODUCTS = [
  {
    id: "porte-blindee-luxe",
    name: "Porte Blindée Haute Sécurité",
    category: "portes",
    categoryLabel: "Portes",
    price: 185000,
    height: 2.15,
    width: 0.95,
    thickness: 8,
    material: "Acier galvanisé 20/10 + Serrure 5 points",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754205/photo_2026-09-18_17-21-04_i1mftz.jpg",
    description: "Porte d'entrée blindée anti-effraction avec isolation phonique et thermique renforcée. Finition peinture thermolaquée au choix.",
    badge: "Populaire"
  },
  {
    id: "porte-vitree-alu",
    name: "Porte Vitrée Aluminium Contemporaine",
    category: "portes",
    categoryLabel: "Portes",
    price: 145000,
    height: 2.10,
    width: 0.90,
    thickness: 6,
    material: "Aluminium profilé 45mm + Verre trempé",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754203/photo_2026-09-18_17-21-01_1_i8btyl.jpg",
    description: "Idéale pour entrées de villa et bureaux d'entreprise. Esthétique épurée avec vitrage sécurit clair ou dépoli.",
    badge: "Nouveau"
  },
  {
    id: "porte-metallique-design",
    name: "Porte Métallique Motif Laser",
    category: "portes",
    categoryLabel: "Portes",
    price: 165000,
    height: 2.15,
    width: 0.90,
    thickness: 5,
    material: "Tôle découpée au laser 2mm + Cadre tube acier",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754070/photo_13_2026-09-18_17-53-40_dffc6p.jpg",
    description: "Motifs géométriques personnalisables. Résistance maximale aux intempéries avec traitement anticorrosion.",
    badge: "Tendance"
  },
  {
    id: "fenetre-coulissante-2v",
    name: "Fenêtre Coulissante 2 Vantaux",
    category: "fenetres",
    categoryLabel: "Fenêtres",
    price: 75000,
    height: 1.20,
    width: 1.20,
    thickness: 5,
    material: "Aluminium blanc/gris + Vitrage clair",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754200/photo_2026-09-18_17-20-49_w52fof.jpg",
    description: "Fenêtre coulissante étanche à l'eau et à la poussière. Équipée de roulettes à billes silencieuses et fermeture crémone.",
    badge: "Best-Seller"
  },
  {
    id: "baie-vitree-galandage",
    name: "Grande Baie Vitrée Coulissante",
    category: "fenetres",
    categoryLabel: "Fenêtres",
    price: 210000,
    height: 2.20,
    width: 2.40,
    thickness: 8,
    material: "Aluminium rupture de pont thermique + Verre feuilleté",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754075/photo_15_2026-09-18_17-53-40_cn0x5z.jpg",
    description: "Maximum de lumière naturelle pour salon et terrasse. Excellente isolation acoustique contre les bruits urbains.",
    badge: "Haut de Gamme"
  },
  {
    id: "chassis-fixe-imposte",
    name: "Châssis Fixe & Imposte Vitrée",
    category: "fenetres",
    categoryLabel: "Fenêtres",
    price: 55000,
    height: 0.60,
    width: 1.20,
    thickness: 6,
    material: "Aluminium anodisé + Double vitrage",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754064/photo_17_2026-09-18_17-53-40_f85i5h.jpg",
    description: "Parfait pour cages d'escalier, couloirs et salles de bain apportant luminosité continue.",
    badge: null
  },
  {
    id: "grille-anti-intrusion",
    name: "Grille de Protection Fenêtre",
    category: "grilles",
    categoryLabel: "Grilles & Balcons",
    price: 45000,
    height: 1.20,
    width: 1.20,
    thickness: 16,
    material: "Fer forgé carré plein 16mm soudé",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754207/photo_2026-09-18_17-21-06_xaxzjh.jpg",
    description: "Protection anti-effraction certifiée pour fenêtres et ouvertures. Design sobre ou traditionnel forgé main.",
    badge: "Sécurité +"
  },
  {
    id: "garde-corps-balcon",
    name: "Garde-Corps Balcon & Terrasse",
    category: "grilles",
    categoryLabel: "Grilles & Balcons",
    price: 55000,
    height: 1.05,
    width: 1.00,
    thickness: 10,
    material: "Aluminium inoxydable ou acier galvanisé",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754066/photo_16_2026-09-18_17-53-40_a3kik6.jpg",
    description: "Tarif calculé au mètre linéaire (1m). Conforme aux normes de sécurité contre les chutes pour villas et immeubles R+.",
    badge: "Sur Mesure"
  },
  {
    id: "portail-coulissant-motorise",
    name: "Portail Coulissant Motorisable",
    category: "portails",
    categoryLabel: "Portails",
    price: 420000,
    height: 2.10,
    width: 4.00,
    thickness: 40,
    material: "Acier galvanisé 60x40 + Peinture époxy cuite",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754089/photo_10_2026-09-18_17-53-40_bmtcfo.jpg",
    description: "Grand portail coulissant robuste pour entrée de propriété ou hangar. Rail inox avec butées et pré-câblage moteur.",
    badge: "Robuste"
  },
  {
    id: "portail-battant-2v",
    name: "Portail Battant 2 Vantaux Décoratif",
    category: "portails",
    categoryLabel: "Portails",
    price: 360000,
    height: 2.00,
    width: 3.50,
    thickness: 30,
    material: "Fer forgé d'art + Traitement anticorrosion marin",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754079/photo_14_2026-09-18_17-53-40_j52n0b.jpg",
    description: "Finition haut de gamme résistante à l'air marin dakarais. Pivots renforcés à roulement à billes.",
    badge: null
  },
  {
    id: "charpente-hangar-acier",
    name: "Charpente Métallique Hangar / Toiture",
    category: "structures",
    categoryLabel: "Structures Métalliques",
    price: 28000,
    height: 4.00,
    width: 1.00,
    thickness: 5,
    material: "Poutrelles IPE / HEA / Tubes rectangulaires",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754209/photo_2026-09-18_17-20-53_x2tbgs.jpg",
    description: "Prix indicatif au m² couvert. Fabrication industrielle et pose sur site avec calculs de descente de charges.",
    badge: "Industriel"
  },
  {
    id: "verriere-cloison-atelier",
    name: "Verrière Style Atelier d'Artiste",
    category: "verres",
    categoryLabel: "Verres & Miroirs",
    price: 95000,
    height: 1.50,
    width: 1.80,
    thickness: 6,
    material: "Acier fin noir mat + Vitrage transparent feuilleté",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754093/photo_9_2026-09-18_17-53-40_eap5m2.jpg",
    description: "Cloison vitrée intérieure pour séparer cuisine, salon ou bureau tout en préservant la perspective et la luminosité.",
    badge: "Tendance"
  }
];

const PRODUCTS_STORAGE_KEY = 'smapec_products_db';

// Charger les produits (Supabase en priorité, fallback LocalStorage, puis défaut)
async function loadProducts() {
  // 1. Essayer Supabase si disponible
  if (typeof SUPABASE_URL !== 'undefined' && typeof SUPABASE_ANON_KEY !== 'undefined') {
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/products?select=*&order=category.asc`, {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(data));
          return data;
        }
      }
    } catch (e) {
      console.warn("Supabase fetch failed, using local storage fallback", e);
    }
  }

  // 2. LocalStorage
  const local = localStorage.getItem(PRODUCTS_STORAGE_KEY);
  if (local) {
    try {
      const parsed = JSON.parse(local);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch(e) {}
  }

  // 3. Produits par défaut
  localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(DEFAULT_PRODUCTS));
  return DEFAULT_PRODUCTS;
}

// Récupérer les produits en synchrone depuis le cache local
function getLocalProducts() {
  const local = localStorage.getItem(PRODUCTS_STORAGE_KEY);
  if (local) {
    try { return JSON.parse(local); } catch(e){}
  }
  return DEFAULT_PRODUCTS;
}

// Sauvegarder les produits localement et essayer Supabase
async function saveProductToDB(product) {
  const products = getLocalProducts();
  const idx = products.findIndex(p => p.id === product.id);
  if (idx >= 0) {
    products[idx] = product;
  } else {
    products.push(product);
  }
  localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));

  // Tenter sauvegarde Supabase
  if (typeof SUPABASE_URL !== 'undefined' && typeof SUPABASE_ANON_KEY !== 'undefined') {
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/products`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify(product)
      });
    } catch (e) {
      console.warn("Could not sync to Supabase:", e);
    }
  }
  return products;
}

// Supprimer un produit
async function deleteProductFromDB(id) {
  let products = getLocalProducts().filter(p => p.id !== id);
  localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));

  if (typeof SUPABASE_URL !== 'undefined' && typeof SUPABASE_ANON_KEY !== 'undefined') {
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/products?id=eq.${id}`, {
        method: 'DELETE',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        }
      });
    } catch(e) {}
  }
  return products;
}

// Réinitialiser au catalogue usine
function resetToDefaultProducts() {
  localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(DEFAULT_PRODUCTS));
  return DEFAULT_PRODUCTS;
}
