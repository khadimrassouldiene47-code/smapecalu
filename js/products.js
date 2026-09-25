// =========================================
// SMAPEC - Gestionnaire de Produits & Catalogue
// 26 Réalisations & Ouvrages Authentiques Dakar
// =========================================

const DEFAULT_PRODUCTS = [
  // --- 1. PORTES ---
  {
    id: "porte-blindee-prestige",
    name: "Porte Blindée Haute Sécurité Prestige",
    category: "portes",
    categoryLabel: "Portes",
    price: 195000,
    height: 2.15,
    width: 0.95,
    thickness: 8,
    material: "Acier galvanisé 20/10 + Serrure 5 points A2P",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754519/photo_2026-09-18_17-20-23_nqtvp6.jpg",
    description: "Porte d'entrée blindée anti-effraction avec isolation phonique et thermique renforcée. Finition thermolaquée résistante à l'air marin.",
    badge: "Populaire"
  },
  {
    id: "porte-vitree-alu-noire",
    name: "Porte Vitrée Aluminium Profilé Noir",
    category: "portes",
    categoryLabel: "Portes",
    price: 150000,
    height: 2.10,
    width: 0.90,
    thickness: 6,
    material: "Aluminium thermolaqué noir + Verre feuilleté 44.2",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754080/photo_11_2026-09-18_17-53-40_sbyyqf.jpg",
    description: "Design moderne et épuré pour villas et bureaux contemporains. Étanchéité renforcée avec joints EPDM haute résistance.",
    badge: "Nouveau"
  },
  {
    id: "porte-metallique-laser",
    name: "Porte Métallique Motif Laser Personnalisé",
    category: "portes",
    categoryLabel: "Portes",
    price: 165000,
    height: 2.15,
    width: 0.90,
    thickness: 5,
    material: "Tôle découpée au laser 2mm + Cadre tube acier 50x30",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754077/photo_13_2026-09-18_17-53-40_e5prwm.jpg",
    description: "Motifs géométriques exclusifs découpés au laser. Traitement anticorrosion avec sous-couche époxy et peinture de finition au choix.",
    badge: "Tendance"
  },
  {
    id: "porte-double-vantaux-luxe",
    name: "Porte Entrée Principale Double Vantaux",
    category: "portes",
    categoryLabel: "Portes",
    price: 260000,
    height: 2.20,
    width: 1.40,
    thickness: 8,
    material: "Acier lourd + Poignées forgées + Serrure multipoints",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754089/photo_10_2026-09-18_17-53-40_bmtcfo.jpg",
    description: "Majestueuse porte à deux battants pour entrées de villa et résidences de standing. Charnières à billes ultra-robustes.",
    badge: "Haut de Gamme"
  },
  {
    id: "porte-service-technique",
    name: "Porte Métallique Pleine de Service & Sécurité",
    category: "portes",
    categoryLabel: "Portes",
    price: 110000,
    height: 2.05,
    width: 0.85,
    thickness: 5,
    material: "Tôle d'acier 15/10 galvanisée + Serrure encastrée",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754064/photo_18_2026-09-18_17-53-40_ik0yfx.jpg",
    description: "Idéale pour portes de cuisine, cours arrière, garages et locaux techniques. Résistance maximale aux chocs et intempéries.",
    badge: null
  },

  // --- 2. FENÊTRES & BAIES ---
  {
    id: "baie-vitree-anthracite",
    name: "Grande Baie Vitrée Coulissante Anthracite",
    category: "fenetres",
    categoryLabel: "Fenêtres",
    price: 220000,
    height: 2.20,
    width: 2.40,
    thickness: 8,
    material: "Aluminium rupture de pont thermique + Verre trempé 6mm",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754212/photo_2026-09-18_17-20-46_sfuxeh.jpg",
    description: "Apport maximal de lumière naturelle pour salons et terrasses. Roulettes à billes silencieuses inox et fermeture multipoints.",
    badge: "Best-Seller"
  },
  {
    id: "fenetre-coulissante-moustiquaire",
    name: "Fenêtre Coulissante 2 Vantaux + Moustiquaire",
    category: "fenetres",
    categoryLabel: "Fenêtres",
    price: 75000,
    height: 1.20,
    width: 1.20,
    thickness: 5,
    material: "Aluminium blanc/gris + Vitrage clair + Toile inox",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754053/photo_22_2026-09-18_17-53-40_s75w8g.jpg",
    description: "Fenêtre aluminium coulissante étanche à l'eau et à la poussière. Intègre un cadre moustiquaire coulissant amovible.",
    badge: "Populaire"
  },
  {
    id: "chassis-fixe-lumineux",
    name: "Châssis Vitré Fixe & Imposte Haute",
    category: "fenetres",
    categoryLabel: "Fenêtres",
    price: 55000,
    height: 0.60,
    width: 1.20,
    thickness: 6,
    material: "Aluminium anodisé + Double vitrage phonique",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754083/photo_12_2026-09-18_17-53-40_zo4d06.jpg",
    description: "Parfait pour cages d'escalier, couloirs et halls d'entrée apportant un éclairage naturel zénithal constant.",
    badge: null
  },
  {
    id: "fenetre-soufflet-sanitaire",
    name: "Fenêtre Basculante / Soufflet Aluminium",
    category: "fenetres",
    categoryLabel: "Fenêtres",
    price: 48000,
    height: 0.60,
    width: 0.80,
    thickness: 5,
    material: "Aluminium thermolaqué + Vitrage dépoli intimité",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754069/photo_17_2026-09-18_17-53-40_akho4f.jpg",
    description: "Ouverture à soufflet pour ventilation des salles d'eau, buanderies et sanitaires. Vitrage opaque préservant l'intimité.",
    badge: null
  },
  {
    id: "fenetre-coulissante-3v",
    name: "Grande Fenêtre Coulissante 3 Vantaux",
    category: "fenetres",
    categoryLabel: "Fenêtres",
    price: 115000,
    height: 1.40,
    width: 2.10,
    thickness: 6,
    material: "Profilés alu 3 rails + Vitrage sécurit teinté",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754061/photo_19_2026-09-18_17-53-40_h8ugaj.jpg",
    description: "Ouverture sur 2 tiers pour une aération optimale. Vitrage teinté réduisant l'échauffement solaire dakarais.",
    badge: "Confort"
  },

  // --- 3. GRILLES & BALCONS ---
  {
    id: "grille-anti-intrusion-forge",
    name: "Grille de Protection Fenêtre Fer Forgé",
    category: "grilles",
    categoryLabel: "Grilles & Balcons",
    price: 45000,
    height: 1.20,
    width: 1.20,
    thickness: 16,
    material: "Fer forgé carré plein 16mm scellé dans la maçonnerie",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754515/photo_2026-09-18_17-20-31_dkwued.jpg",
    description: "Protection anti-effraction certifiée pour fenêtres et baies du rez-de-chaussée. Décors forgés main et peinture antirouille.",
    badge: "Sécurité +"
  },
  {
    id: "garde-corps-balcon-design",
    name: "Garde-Corps Balcon & Terrasse Inox / Fer",
    category: "grilles",
    categoryLabel: "Grilles & Balcons",
    price: 60000,
    height: 1.05,
    width: 1.00,
    thickness: 10,
    material: "Main courante inox + Barreaudage acier thermolaqué",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754050/photo_23_2026-09-18_17-53-40_g5lswr.jpg",
    description: "Tarif calculé au mètre linéaire (1m). Conforme aux normes de sécurité contre les chutes pour villas et immeubles R+.",
    badge: "Sur Mesure"
  },
  {
    id: "grille-securite-renforcee",
    name: "Grille Anti-Intrusion Barreaudage Renforcé",
    category: "grilles",
    categoryLabel: "Grilles & Balcons",
    price: 50000,
    height: 1.30,
    width: 1.20,
    thickness: 18,
    material: "Acier rond plein 18mm + Traverses massives 40x8",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754072/photo_14_2026-09-18_17-53-40_qvmc5k.jpg",
    description: "Protection maximale pour façades et arrières de cour. Inattaquable au coupe-boulon standard.",
    badge: "Ultra Robuste"
  },
  {
    id: "garde-corps-escalier-moderne",
    name: "Rampe d'Escalier Métallique Design Moderne",
    category: "grilles",
    categoryLabel: "Grilles & Balcons",
    price: 65000,
    height: 0.95,
    width: 1.00,
    thickness: 8,
    material: "Lisses horizontales inox + Poteaux acier profilé",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754092/photo_8_2026-09-18_17-53-40_sxc91j.jpg",
    description: "Prix au mètre linéaire rampant. Ligne architecturale contemporaine sublimant l'escalier intérieur ou extérieur.",
    badge: "Tendance"
  },
  {
    id: "balustrade-verre-alu",
    name: "Balustrade Terrasse Aluminium & Verre Trempé",
    category: "grilles",
    categoryLabel: "Grilles & Balcons",
    price: 85000,
    height: 1.05,
    width: 1.00,
    thickness: 12,
    material: "Profil alu anodisé bord de mer + Verre sécurit 10mm",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754047/photo_1_2026-09-18_17-53-40_aq2knc.jpg",
    description: "Vue panoramique dégagée sans barreaux. Conçu spécialement pour résister aux embruns marins des Almadies et Ouakam.",
    badge: "Prestige"
  },

  // --- 4. PORTAILS ---
  {
    id: "portail-coulissant-motorise",
    name: "Grand Portail Coulissant Motorisable",
    category: "portails",
    categoryLabel: "Portails",
    price: 450000,
    height: 2.20,
    width: 4.50,
    thickness: 40,
    material: "Tubes acier galvanisé 80x40 + Peinture époxy cuite",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754503/photo_2026-09-18_17-20-37_fburgd.jpg",
    description: "Grand portail coulissant robuste pour entrée de propriété ou hangar. Rail inox avec butées et pré-câblage moteur.",
    badge: "Robuste"
  },
  {
    id: "portail-battant-2v-deco",
    name: "Portail Battant 2 Vantaux Ornemental",
    category: "portails",
    categoryLabel: "Portails",
    price: 380000,
    height: 2.10,
    width: 3.50,
    thickness: 30,
    material: "Fer forgé artisanal + Traitement anticorrosion marin",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754066/photo_16_2026-09-18_17-53-40_a3kik6.jpg",
    description: "Finition haut de gamme résistante à l'air marin dakarais. Pivots renforcés à roulement à billes et serrure de sûreté.",
    badge: "Best-Seller"
  },
  {
    id: "portillon-pietonnier-assorti",
    name: "Portillon d'Entrée Piétonne Sécurisé",
    category: "portails",
    categoryLabel: "Portails",
    price: 120000,
    height: 2.10,
    width: 1.00,
    thickness: 25,
    material: "Acier galvanisé + Gâche électrique intégrable",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754098/photo_7_2026-09-18_17-53-40_a9sy3i.jpg",
    description: "Accès piéton pratique assorti au portail principal. Compatible avec les visiophones et interphones du marché.",
    badge: null
  },
  {
    id: "portail-garage-basculant",
    name: "Porte de Garage Métallique Basculante",
    category: "portails",
    categoryLabel: "Portails",
    price: 320000,
    height: 2.15,
    width: 2.60,
    thickness: 35,
    material: "Tôle nervurée galvanisée + Ressorts de compensation",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754040/photo_5_2026-09-18_17-53-40_vffxi9.jpg",
    description: "Fermeture sécurisée et équilibrée de garage. Manœuvre manuelle fluide ou raccordement à un moteur électrique.",
    badge: null
  },

  // --- 5. STRUCTURES MÉTALLIQUES ---
  {
    id: "charpente-industrielle-hangar",
    name: "Charpente Métallique Hangar & Entrepôt",
    category: "structures",
    categoryLabel: "Structures Métalliques",
    price: 32000,
    height: 5.00,
    width: 1.00,
    thickness: 10,
    material: "Poutrelles acier IPE / HEA / Profilés laminés à chaud",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754101/photo_4_2026-09-18_17-53-40_rbaf1s.jpg",
    description: "Prix indicatif au m² couvert. Fabrication industrielle et pose sur site avec calculs de descente de charges et boulonnerie HR.",
    badge: "Industriel"
  },
  {
    id: "escalier-metallique-limon",
    name: "Escalier Métallique sur Limon Central",
    category: "structures",
    categoryLabel: "Structures Métalliques",
    price: 140000,
    height: 3.00,
    width: 0.90,
    thickness: 12,
    material: "Poutre tubulaire 150x150 + Marches tôle pliée antidérapante",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754209/photo_2026-09-18_17-20-53_x2tbgs.jpg",
    description: "Escalier architectural autoportant alliant solidité et légèreté visuelle. Fabrication sur mesure selon la hauteur sous plafond.",
    badge: "Sur Mesure"
  },
  {
    id: "claustra-brise-soleil-alu",
    name: "Claustra Architectural & Brise-Soleil Métal",
    category: "structures",
    categoryLabel: "Structures Métalliques",
    price: 70000,
    height: 2.00,
    width: 1.20,
    thickness: 8,
    material: "Lames aluminium thermo-laquées orientables ou fixes",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754054/photo_20_2026-09-18_17-53-40_kuybjp.jpg",
    description: "Prix au m². Protection thermique élégante des façades exposées au soleil dakarais tout en conservant la ventilation.",
    badge: "Design"
  },
  {
    id: "mezzanine-abri-voiture",
    name: "Abri Voiture & Mezzanine Métallique",
    category: "structures",
    categoryLabel: "Structures Métalliques",
    price: 190000,
    height: 2.80,
    width: 3.00,
    thickness: 15,
    material: "Structure poteaux acier + Couverture bac alu isolé",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754045/photo_3_2026-09-18_17-53-40_repvym.jpg",
    description: "Protection efficace contre le soleil et les intempéries pour vos véhicules ou aménagement de stockage en hauteur.",
    badge: null
  },

  // --- 6. VERRES & MIROIRS ---
  {
    id: "verriere-atelier-loft",
    name: "Grande Verrière d'Intérieur Style Loft",
    category: "verres",
    categoryLabel: "Verres & Miroirs",
    price: 180000,
    height: 2.00,
    width: 2.20,
    thickness: 6,
    material: "Acier fin noir mat + Vitrage transparent trempé 6mm",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754075/photo_15_2026-09-18_17-53-40_cn0x5z.jpg",
    description: "Cloison vitrée style verrière d'atelier d'artiste pour séparer salon, cuisine ou chambre avec élégance et luminosité.",
    badge: "Tendance"
  },
  {
    id: "cloison-vitree-bureau",
    name: "Cloison Vitrée Bureau Profilé Aluminium",
    category: "verres",
    categoryLabel: "Verres & Miroirs",
    price: 135000,
    height: 2.20,
    width: 1.50,
    thickness: 8,
    material: "Aluminium brossé ou noir + Verre feuilleté phonique 44.2",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754086/photo_9_2026-09-18_17-53-40_i2gmyv.jpg",
    description: "Idéale pour l'aménagement d'open-spaces et bureaux de direction. Excellente insonorisation tout en gardant la transparence.",
    badge: "Pro"
  },
  {
    id: "verriere-puits-lumiere",
    name: "Puits de Lumière & Verrière de Toit Sécurit",
    category: "verres",
    categoryLabel: "Verres & Miroirs",
    price: 210000,
    height: 1.50,
    width: 1.50,
    thickness: 10,
    material: "Ossature étanche alu + Double vitrage anti-effraction",
    image: "https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754041/photo_2_2026-09-18_17-53-40_lkeljs.jpg",
    description: "Éclairage zénithal naturel étanche pour couloirs et pièces sombres. Vitrage à contrôle solaire pour réduire la chaleur.",
    badge: "Innovant"
  }
];

const PRODUCTS_STORAGE_KEY = 'smapec_products_v3';

// Vérifie si un produit stocké contient des URL 404 connues du passé
function hasBrokenImageUrl(prod) {
  if (!prod || !prod.image) return true;
  const broken = [
    'v1789754200', 'v1789754203', 'v1789754205', 'v1789754207',
    'f85i5h', 'dffc6p', 'j52n0b', 'eap5m2'
  ];
  return broken.some(b => prod.image.includes(b));
}

// Charger les produits (Supabase en priorité, fallback LocalStorage, puis catalogue usine)
async function loadProducts() {
  // Nettoyer les anciens caches invalides
  try {
    localStorage.removeItem('smapec_products_db');
    localStorage.removeItem('smapec_products_v2');
  } catch(e) {}

  // 1. Essayer Supabase si configuré
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
        if (Array.isArray(data) && data.length >= 10) {
          // Filtrer les éventuels liens brisés
          const clean = data.filter(p => !hasBrokenImageUrl(p));
          if (clean.length >= 10) {
            localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(clean));
            return clean;
          }
        }
      }
    } catch (e) {
      console.warn("Supabase fetch failed, using local storage fallback", e);
    }
  }

  // 2. LocalStorage v3
  const local = localStorage.getItem(PRODUCTS_STORAGE_KEY);
  if (local) {
    try {
      const parsed = JSON.parse(local);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const hasBroken = parsed.some(hasBrokenImageUrl);
        if (!hasBroken && parsed.length >= 20) {
          return parsed;
        }
      }
    } catch(e) {}
  }

  // 3. Catalogue complet 26 produits vérifiés
  localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(DEFAULT_PRODUCTS));
  return DEFAULT_PRODUCTS;
}

// Récupérer les produits en synchrone depuis le cache local
function getLocalProducts() {
  const local = localStorage.getItem(PRODUCTS_STORAGE_KEY);
  if (local) {
    try {
      const parsed = JSON.parse(local);
      if (Array.isArray(parsed) && parsed.length > 0 && !parsed.some(hasBrokenImageUrl)) {
        return parsed;
      }
    } catch(e){}
  }
  return DEFAULT_PRODUCTS;
}

// Sauvegarder les produits localement et essayer Supabase
async function saveProductToDB(product) {
  const products = getLocalProducts().slice();
  const idx = products.findIndex(p => p.id === product.id);
  if (idx >= 0) {
    products[idx] = product;
  } else {
    products.unshift(product);
  }
  localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));

  // Tenter sauvegarde Supabase si disponible
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
