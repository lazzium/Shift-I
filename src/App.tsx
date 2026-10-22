import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUp, Users, FileText, ShieldCheck, Eye, Menu, X, Plus } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from 'framer-motion';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Footer } from './components/Footer';
import { LegalModal, LegalDocType } from './components/LegalModal';
import ThomasLImg from '../assets/Section 1 : Lancez votre boutique e-commerce clé en main/Thomas L.jpg';
import YassineMImg from '../assets/Section 1 : Lancez votre boutique e-commerce clé en main/Yassine M.jpg';
import SarahKImg from '../assets/Section 1 : Lancez votre boutique e-commerce clé en main/Sarah K.jpg';
import SarahLImg from '../assets/Section 1 : Lancez votre boutique e-commerce clé en main/Sarah L.jpg';
import AminaRImg from '../assets/Section 1 : Lancez votre boutique e-commerce clé en main/Amina R.jpg';
import ShopifyImg from '../assets/Section 2 : Conçu pour ceux qui veulent vraiment réussir en e-commerce/Sites e-commerce Shopify.jpg';
import ProjetsImg from '../assets/Section 2 : Conçu pour ceux qui veulent vraiment réussir en e-commerce/Projets clé en main.jpg';
import ShopifyImg4 from "../assets/Section 4 : Des services pensés pour accélérer votre lancement/Sites e-commerce Shopify.jpg";
import ProjetsImg4 from "../assets/Section 4 : Des services pensés pour accélérer votre lancement/Projets clé en main.png";
import EchangeStratImg from "../assets/Section 5 : Un processus e-commerce pour passer de l'idée au lancement/Échange stratégique.jpg";
import LancementAccImg from "../assets/Section 5 : Un processus e-commerce pour passer de l'idée au lancement/Lancement & accompagnement.jpg";

// Section 5 Slideshow Images
import keyskin from "../assets/Section 5 : Un processus e-commerce pour passer de l'idée au lancement/On construit votre projet/keyskin.png";
import nordicsculpt from "../assets/Section 5 : Un processus e-commerce pour passer de l'idée au lancement/On construit votre projet/nordicsculpt.png";
import rebornbeauty from "../assets/Section 5 : Un processus e-commerce pour passer de l'idée au lancement/On construit votre projet/rebornbeauty.png";
import sianalashes from "../assets/Section 5 : Un processus e-commerce pour passer de l'idée au lancement/On construit votre projet/sianalashes.png";
import welcometobob from "../assets/Section 5 : Un processus e-commerce pour passer de l'idée au lancement/On construit votre projet/welcometobob.png";

const constructionImages = [keyskin, nordicsculpt, rebornbeauty, sianalashes, welcometobob];

// Section 4 Videos
import CreativeVid1 from "../assets/Section 4 : Des services pensés pour accélérer votre lancement/Créatives publicitaires 1.mov";
import CreativeVid2 from "../assets/Section 4 : Des services pensés pour accélérer votre lancement/Créatives publicitaires 2.mov";

import EntrepDepImg from "../assets/Section 3 : À QUI S'ADRESSE COSMIC DIGITAL/Entrepreneurs débutants.jpg";
import EcomRecImg from "../assets/Section 3 : À QUI S'ADRESSE COSMIC DIGITAL/E-commerçants en reconversion.jpg";
import DropAmbImg from "../assets/Section 3 : À QUI S'ADRESSE COSMIC DIGITAL/Dropshippers ambitieux.jpg";
import CreatMarqImg from "../assets/Section 3 : À QUI S'ADRESSE COSMIC DIGITAL/Créateurs de marque.jpg";
import KarimBImg6 from "../assets/Section 6 : Ce que nos clients obtiennent/Karim B.jpg";
import SarahLImg6 from "../assets/Section 6 : Ce que nos clients obtiennent/Sarah L.jpg";
import ThomasDImg6 from "../assets/Section 6 : Ce que nos clients obtiennent/Thomas D.jpg";

const WHATSAPP_URL = "https://wa.me/2290151713934";

const successStories = [
  {
    name: "Karim B.",
    role: "Fondateur, Boutique fitness",
    image: KarimBImg6,
    quote: "« J'avais zéro compétence en e-commerce. SHIFT a tout construit : site, produit, pubs. Résultat : 9 600€ de CA le premier mois. Un investissement qui s'est remboursé en 2 semaines. »",
    stats: [
      { value: "+9 600€", label: "CA premier mois" },
      { value: "14 jours", label: "ROI atteint" }
    ]
  },
  {
    name: "Sarah L.",
    role: "Créatrice, Boutique Mode & Design",
    image: SarahLImg6,
    quote: "« Une équipe passionnée qui comprend les enjeux de la vente en ligne. Ils m'ont accompagnée de l'idée jusqu'aux premières ventes avec une réactivité exemplaire. »",
    stats: [
      { value: "+310%", label: "Taux de conversion" },
      { value: "4.8/5", label: "Note clients" }
    ]
  },
  {
    name: "Thomas D.",
    role: "E-commerçant spécialisé, Accessoires",
    image: ThomasDImg6,
    quote: "« SHIFT a transformé ma vision en réalité. Leur expertise e-commerce nous a permis de structurer notre offre et d'automatiser nos processus dès le départ. »",
    stats: [
      { value: "20 800€", label: "Chiffre d'affaires" },
      { value: "21 jours", label: "Délai de rentabilité" }
    ]
  }
];

const audiences = [
  {
    title: "Entrepreneurs débutants",
    image: EntrepDepImg
  },
  {
    title: "E-commerçants en reconversion",
    image: EcomRecImg
  },
  {
    title: "Dropshippers ambitieux",
    image: DropAmbImg
  },
  {
    title: "Créateurs de marque",
    image: CreatMarqImg
  }
];

const processSteps = [
  {
    number: "01",
    title: "Échange",
    fullTitle: "Échange stratégique",
    description: "On commence par comprendre votre projet, votre budget et vos ambitions. Un échange rapide pour cerner vos besoins et définir la meilleure approche pour votre lancement.",
    results: "Un plan d'action clair, un devis personnalisé et une roadmap précise pour votre projet.",
    image: EchangeStratImg,
  },
  {
    number: "02",
    title: "Construction",
    fullTitle: "On construit votre projet",
    description: "Sélection du produit, création du site Shopify, rédaction des fiches produit, mise en place du tunnel de vente, production des créatives publicitaires. Tout est fait pour vous.",
    results: "Un projet e-commerce complet, prêt à être lancé : boutique live, produit validé, ads prêtes.",
    image: constructionImages,
  },
  {
    number: "03",
    title: "Lancement",
    fullTitle: "Lancement & accompagnement",
    description: "Votre boutique est live. On vous accompagne pour lancer vos premières campagnes, analyser les résultats et optimiser vos performances. Vous ne restez jamais seul.",
    results: "Un business e-commerce opérationnel avec un suivi continu pour maximiser vos ventes.",
    image: LancementAccImg,
  }
];

const testimonials = [
  {
    name: "THOMAS L.",
    quote: "Première vente 48h après le lancement. Le ROI a été immédiat.",
    image: ThomasLImg
  },
  {
    name: "YASSINE M.",
    quote: "En 7 jours, j'avais ma boutique live avec mes premières commandes.",
    image: YassineMImg
  },
  {
    name: "SARAH K.",
    quote: "Ils ont trouvé le produit, créé le site et lancé les ads. Tout était prêt.",
    image: SarahKImg
  },
  {
    name: "SARAH L.",
    quote: "J'ai essayé seul pendant 6 mois. En 10 jours avec SHIFT, j'ai enfin vendu.",
    image: SarahLImg
  },
  {
    name: "AMINA R.",
    quote: "Un accompagnement qui va bien au-delà d'un simple site. C'est un vrai système.",
    image: AminaRImg
  }
];

const Slideshow = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            current === i ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

const VideoSlideshow = ({ videos }: { videos: string[] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [videos.length]);

  return (
    <div className="relative w-full h-full bg-black">
      {videos.map((vid, i) => (
        <video
          key={i}
          src={vid}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            current === i ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

interface BlurWordProps {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  isHighlight?: boolean;
}

const BlurWord: React.FC<BlurWordProps> = ({ children, progress, range, isHighlight }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const blurVal = useTransform(progress, range, [8, 0]);
  const yVal = useTransform(progress, range, [5, 0]);
  const filter = useTransform(blurVal, (v) => `blur(${v}px)`);

  return (
    <motion.span
      style={{ opacity, filter, y: yVal }}
      className={`inline-block mr-[0.22em] transition-colors ${
        isHighlight 
          ? "font-dynalight text-[#d20090] text-[1.22em] sm:text-[1.32em] md:text-[1.42em] font-normal tracking-normal align-baseline" 
          : "text-[#2b1c20]"
      }`}
    >
      {children}
    </motion.span>
  );
};

const manifestoTokens = [
  { text: "90%", isHighlight: false },
  { text: "des", isHighlight: false },
  { text: "boutiques", isHighlight: false },
  { text: "e-commerce", isHighlight: false },
  { text: "échouent", isHighlight: true },
  { text: "avant", isHighlight: false },
  { text: "leur", isHighlight: false },
  { text: "premier", isHighlight: false },
  { text: "trimestre.", isHighlight: false },
  { text: "Elles", isHighlight: false },
  { text: "gaspillent", isHighlight: false },
  { text: "leur", isHighlight: false },
  { text: "temps", isHighlight: false },
  { text: "sur", isHighlight: false },
  { text: "des", isHighlight: false },
  { text: "produits", isHighlight: false },
  { text: "sans demande,", isHighlight: true },
  { text: "bâtissent", isHighlight: false },
  { text: "un", isHighlight: false },
  { text: "site", isHighlight: false },
  { text: "qui", isHighlight: false },
  { text: "ne convertit pas,", isHighlight: true },
  { text: "et", isHighlight: false },
  { text: "brûlent", isHighlight: false },
  { text: "leur", isHighlight: false },
  { text: "budget", isHighlight: false },
  { text: "dans", isHighlight: false },
  { text: "des", isHighlight: false },
  { text: "publicités", isHighlight: false },
  { text: "sans retour.", isHighlight: true },
  { text: "Nous", isHighlight: false },
  { text: "éliminons", isHighlight: false },
  { text: "l'improvisation", isHighlight: false },
  { text: "pour", isHighlight: false },
  { text: "bâtir", isHighlight: false },
  { text: "un", isHighlight: false },
  { text: "business", isHighlight: false },
  { text: "rentable", isHighlight: true },
  { text: "et", isHighlight: false },
  { text: "durable.", isHighlight: false },
];

const faqItems = [
  {
    question: "Quels types de boutiques e-commerce créez-vous ?",
    answer: "Nous concevons des boutiques Shopify clés en main : des concepts mono-produit optimisés pour une conversion maximale ou des boutiques de marque multi-produits. Chaque projet inclut un design mobile-first sur mesure, une identité visuelle soignée, un tunnel de vente fluide et des pages produits axées sur le passage à l'action."
  },
  {
    question: "Combien de temps prend la création et livraison de mon projet ?",
    answer: "La livraison complète de votre boutique prend en moyenne 5 à 10 jours ouvrés selon vos options. Tout est livré 100% prêt à l'emploi : sélection et validation du produit gagnant, boutique Shopify configurée, tunnel de paiement sécurisé, fiches produits rédigées et créatives publicitaires prêtes à diffuser."
  },
  {
    question: "Dois-je avoir des connaissances techniques pour travailler avec vous ?",
    answer: "Aucune compétence technique n'est requise. Nous prenons en charge la totalité de la chaîne : configuration technique du site, intégration des passerelles de paiement, optimisation SEO, copywriting et création visuelle. Nous vous fournissons ensuite un tutoriel vidéo personnalisé pour gérer vos commandes en toute simplicité."
  },
  {
    question: "Comment sélectionnez-vous les produits à fort potentiel ?",
    answer: "Nous utilisons des outils d'analyse de marché avancés pour identifier des opportunités concrètes : tendances d'achat émergentes, analyse des publicités concurrentes sur TikTok et Meta, marges brutes confortables et fournisseurs certifiés avec délais de livraison rapides."
  },
  {
    question: "Que se passe-t-il après la mise en ligne de la boutique ?",
    answer: "Vous n'êtes jamais livré à vous-même. Nous vous accompagnons pour le lancement de vos premières campagnes publicitaires, le paramétrage du tracking de conversion, l'analyse des premiers résultats et l'optimisation continue de vos performances de vente."
  },
  {
    question: "Quel retour sur investissement (ROI) puis-je espérer ?",
    answer: "Grâce à notre approche axée sur la conversion directe, la majorité de nos clients enregistrent leurs premières ventes dans les 48 à 72 heures suivant le lancement de leurs publicités, avec pour objectif de rentabiliser l'intégralité du projet dès le premier mois."
  }
];

export default function App() {
  const [activeAudience, setActiveAudience] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const storiesScrollRef = useRef<HTMLDivElement>(null);
  const statementRef = useRef<HTMLElement>(null);
  const { scrollYProgress: statementProgress } = useScroll({
    target: statementRef,
    offset: ["start 85%", "center 45%"],
  });

  // Initialize Lenis smooth scroll engine
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      infinite: false,
    });

    lenisRef.current = lenis;

    let animId: number;
    function raf(time: number) {
      lenis.raf(time);
      animId = requestAnimationFrame(raf);
    }
    animId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Pause / resume Lenis when modal opens or closes
  useEffect(() => {
    if (activeLegalDoc) {
      lenisRef.current?.stop();
    } else {
      lenisRef.current?.start();
    }
  }, [activeLegalDoc]);

  // Intercept anchor link clicks for fluid Lenis transitions
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          setIsMobileMenuOpen(false);
          const offset = href === '#accueil' ? 0 : -90;
          if (lenisRef.current) {
            lenisRef.current.scrollTo(targetElement as HTMLElement, {
              offset,
              duration: 1.25,
            });
          } else {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Synchronize active step highlight with scroll position across the 3 step blocks
  useEffect(() => {
    const handleScroll = () => {
      if (!stepRefs.current.length) return;
      const viewportTrigger = window.innerHeight * 0.42;
      let closestIdx = 0;
      let minDistance = Infinity;

      stepRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const dist = Math.abs(elementCenter - viewportTrigger);
        if (dist < minDistance) {
          minDistance = dist;
          closestIdx = idx;
        }
      });

      setActiveStep(closestIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const jumpToStep = (index: number) => {
    setActiveStep(index);
    const targetEl = stepRefs.current[index];
    if (targetEl) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(targetEl, { offset: -110, duration: 1.25 });
      } else {
        const navOffset = 110;
        const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navOffset,
          behavior: 'smooth'
        });
      }
    }
  };

  const duplicatedStories = Array(60).fill(successStories).flat();

  const scrollStories = (direction: 'left' | 'right') => {
    if (storiesScrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 1150 : Math.min(window.innerWidth - 48, 600);
      storiesScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.25 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (storiesScrollRef.current) {
      // Set to middle roughly, allowing scroll in both directions
      requestAnimationFrame(() => {
        if (storiesScrollRef.current) {
          storiesScrollRef.current.scrollLeft = storiesScrollRef.current.scrollWidth / 2;
        }
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Detect when scrolled past the hero section
      const heroElement = document.getElementById('accueil');
      const threshold = heroElement ? Math.min(heroElement.offsetHeight * 0.7, 500) : 400;
      setShowBackToTop(window.scrollY > threshold);

      // Mobile active step tracking via position if screen is narrow
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        const viewportsCenter = window.innerHeight / 2;
        let closestIdx = activeStep;
        let minDistance = Infinity;

        stepRefs.current.forEach((ref, idx) => {
          if (ref) {
            const rect = ref.getBoundingClientRect();
            const elemCenter = rect.top + rect.height / 2;
            const distance = Math.abs(viewportsCenter - elemCenter);
            if (distance < minDistance) {
              minDistance = distance;
              closestIdx = idx;
            }
          }
        });
        
        if (closestIdx !== activeStep) {
          setActiveStep(closestIdx);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeStep]);

  // Multiply the array by 4 so it is long enough to seamlessly scroll 50%
  const duplicatedTestimonials = [
    ...testimonials, 
    ...testimonials, 
    ...testimonials, 
    ...testimonials
  ];

  return (
    <div className="min-h-screen font-sans text-brand-text flex flex-col items-center relative overflow-x-hidden" style={{ backgroundColor: '#fcefff' }}>
      
      {/* Background Vector Organic Wave with Soft Light Sheen Reflection */}
      <div 
        className="absolute top-0 left-0 right-0 w-full h-[880px] lg:h-[980px] pointer-events-none overflow-hidden select-none z-0" 
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Soft subtle pastel gradient for the wave area */}
            <linearGradient id="headerWaveAreaGrad" x1="0" y1="0" x2="1440" y2="900" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f3e2f5" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#faeaf8" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#f4def3" stopOpacity="0.75" />
              <stop offset="75%" stopColor="#fbeffb" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#f2dcf3" stopOpacity="0.7" />
            </linearGradient>

            {/* Light reflection sheen gradient across the wave */}
            <linearGradient id="headerLightReflectGrad" x1="280" y1="40" x2="1150" y2="780" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65" />
              <stop offset="25%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="55%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="85%" stopColor="#fcefff" stopOpacity="0" />
            </linearGradient>

            {/* Radiant specular highlight bloom */}
            <radialGradient id="headerGlowBloom" cx="42%" cy="28%" r="48%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
              <stop offset="35%" stopColor="#faecf9" stopOpacity="0.35" />
              <stop offset="80%" stopColor="#fcefff" stopOpacity="0" />
            </radialGradient>

            {/* Delicate rim light on contour edges */}
            <linearGradient id="headerRimLight" x1="0" y1="0" x2="1440" y2="600" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="20%" stopColor="#ffffff" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#d20090" stopOpacity="0.2" />
              <stop offset="80%" stopColor="#ffffff" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
            </linearGradient>

            {/* Soft atmospheric blur for organic edge transition */}
            <filter id="ambientSoftBlur" x="-15%" y="-15%" width="130%" height="130%">
              <feGaussianBlur stdDeviation="32" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            <filter id="diffuseGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="45" />
            </filter>
          </defs>

          {/* Diffuse ambient glow layer */}
          <path
            d="M-60,0 
               L360,0 
               C420,130 460,260 440,370 
               C420,480 370,540 350,680 
               C335,780 345,850 355,920 
               L1440,920 
               L1440,120 
               C1280,170 1120,270 940,380 
               C760,490 580,590 440,580 
               C370,575 340,520 360,440 
               C380,360 410,270 370,160 
               C340,80 200,30 -60,0 Z"
            fill="url(#headerWaveAreaGrad)"
            filter="url(#diffuseGlow)"
            opacity="0.65"
          />

          {/* Main Organic Wave Area Zone */}
          <path
            d="M-50,-20 
               L340,-20 
               C410,120 450,250 430,370 
               C410,480 360,540 340,680 
               C325,780 335,850 345,920 
               L1440,920 
               L1440,130 
               C1280,180 1120,280 940,390 
               C760,500 580,590 440,580 
               C370,575 340,520 360,440 
               C380,360 410,270 370,160 
               C340,80 180,20 -50,-20 Z"
            fill="url(#headerWaveAreaGrad)"
            filter="url(#ambientSoftBlur)"
          />

          {/* Light Reflection Sheen Area */}
          <path
            d="M-30,-20 
               L310,-20 
               C380,110 420,230 400,350 
               C375,470 325,550 310,700 
               L1440,700 
               L1440,160 
               C1250,220 1070,320 890,430 
               C710,540 530,580 410,530 
               C350,500 340,420 370,330 
               C400,240 390,140 290,50 
               L-30,-20 Z"
            fill="url(#headerLightReflectGrad)"
            opacity="0.8"
          />

          {/* Central Radial Light Reflection (Soft Specular Pool) */}
          <ellipse cx="640" cy="240" rx="460" ry="260" fill="url(#headerGlowBloom)" />

          {/* Left Flow Contour Rim Light */}
          <path
            d="M-20,-10 
               L320,-10 
               C390,120 430,260 410,380 
               C390,500 340,570 330,720 
               C320,810 330,870 340,920"
            stroke="url(#headerRimLight)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.65"
          />

          {/* Right Upward Wave Crest Rim Light */}
          <path
            d="M360,780 
               C530,640 730,520 910,410 
               C1090,300 1270,190 1450,130"
            stroke="url(#headerRimLight)"
            strokeWidth="1.75"
            strokeLinecap="round"
            opacity="0.55"
          />
        </svg>
      </div>
      
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.85, 
          ease: [0.16, 1, 0.3, 1], 
          delay: 0.1 
        }}
        className={`fixed top-6 z-50 flex items-center justify-between p-1.5 bg-white/70 backdrop-blur-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05),0_10px_20px_-2px_rgba(0,0,0,0.02)] border border-white/40 mx-4 lg:mx-auto lg:w-max left-0 right-0 ${isMobileMenuOpen ? 'flex-col rounded-[2rem]' : 'rounded-[1.625rem]'}`}
      >
        
        {/* Top Header Row (Desktop & Mobile) */}
        <div className="flex w-full lg:w-auto items-center justify-between bg-transparent">
          {/* Desktop Logo */}
          <a href="#accueil" className="hidden lg:flex items-center pl-6 shrink-0 hover:opacity-85 transition-opacity" aria-label="Accueil SHIFT">
            <img 
              src="/assets/aistudio/Logo_Principal__1__f096069a.png" 
              alt="SHIFT" 
              className="h-7 md:h-8 w-auto object-contain" 
            />
          </a>
          {/* Mobile Logo */}
          <a href="#accueil" className="flex items-center pl-4 lg:hidden shrink-0 hover:opacity-85 transition-opacity" aria-label="Accueil SHIFT">
            <img 
              src="/assets/aistudio/Logo_Principal__1__f096069a.png" 
              alt="SHIFT" 
              className="h-6 w-auto object-contain" 
            />
          </a>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8 text-[13px] font-medium tracking-wide ml-12 mr-12">
            <a href="#pourquoi-nous" className="hover:opacity-60 transition-opacity whitespace-nowrap">Pourquoi nous</a>
            <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
            <a href="#processus" className="hover:opacity-60 transition-opacity">Processus</a>
            <a href="#resultats" className="hover:opacity-60 transition-opacity">Résultats</a>
            <a href="#faq" className="hover:opacity-60 transition-opacity">FAQ</a>
          </div>

          {/* Desktop CTA */}
          <a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden lg:inline-block bg-brand-pink text-[#372130] px-10 py-4 rounded-[1.25rem] text-[15px] font-semibold hover:opacity-90 transition-opacity"
          >
            Lancer mon projet
          </a>

          {/* Mobile Burger Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 mr-1 rounded-full text-[#372130] hover:bg-black/5 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="flex flex-col w-full lg:hidden px-5 pt-6 pb-3 space-y-6">
            <div className="flex flex-col space-y-5 text-[16px] font-medium text-center">
              <a href="#pourquoi-nous" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-60 transition-opacity">Pourquoi nous</a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-60 transition-opacity">Services</a>
              <a href="#processus" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-60 transition-opacity">Processus</a>
              <a href="#resultats" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-60 transition-opacity">Résultats</a>
              <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-60 transition-opacity">FAQ</a>
            </div>
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center bg-brand-pink text-[#372130] py-4 rounded-[1.25rem] text-[16px] font-semibold shadow-sm hover:opacity-90 transition-opacity"
            >
              Lancer mon projet
            </a>
          </div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        id="accueil" 
        className="w-full pt-36 pb-32 flex flex-col items-center text-center px-6 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="font-inclusive font-normal text-[38px] md:text-[63px] leading-[1.1] md:leading-[68px] mb-6 text-brand-text tracking-[-0.036em] w-[280px] md:w-auto max-w-[60rem]">
          Lancez votre boutique<br />
          <span className="font-dynalight font-normal text-[52px] md:text-[84px] text-[#d20090] tracking-normal">e-commerce</span><br className="md:hidden" /> clé en main
        </h1>
        
        <p className="text-[17px] md:text-[19px] font-sans text-brand-text/75 max-w-[42rem] mb-10 leading-relaxed font-medium">
          Nous aidons les e-commerçants à créer des boutiques performantes, trouver les bons produits et scaler leurs ventes rapidement.
        </p>

        <div className="flex flex-row flex-wrap items-center gap-4 w-full px-4 justify-center">
          <a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-auto bg-white text-brand-text pl-6 md:pl-10 pr-4 py-4 md:py-4 rounded-[1.25rem] text-[15px] font-semibold shadow-[0_2px_10px_0_rgba(0,0,0,0.05)] transition-all duration-300 flex items-center justify-between md:justify-start space-x-5"
          >
            <span>Voir nos chefs-d'œuvre</span>
            <div className="bg-[#f89ecd] w-8 h-8 rounded-full flex items-center justify-center shrink-0 hidden sm:flex">
              <ArrowRight className="w-4 h-4 text-brand-text" />
            </div>
          </a>
          

        </div>
      </motion.section>

      {/* Testimonials Marquee */}
      <motion.section 
        className="w-full relative overflow-hidden mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex px-4 items-center">
          <div className="flex gap-4 pr-4 animate-marquee w-max hover:[animation-play-state:paused]">
            {duplicatedTestimonials.map((t, i) => (
              <div key={i} className="relative w-[320px] h-[480px] shrink-0 rounded-[1.25rem] overflow-hidden group shadow-lg cursor-pointer">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                {/* Gradient overlay to make text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1417]/90 via-[#1a1417]/20 to-transparent transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase mb-4 opacity-80 group-hover:opacity-100">
                    {t.name}
                  </div>
                  <p className="text-[17px] font-sans font-medium leading-[1.3] text-white">
                    « {t.quote} »
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section: Conçu pour ceux qui veulent vraiment réussir */}
      <motion.section 
        className="w-[calc(100%-36px)] mx-auto rounded-[2.5rem] mt-12 mb-16 pt-[120px] pb-[100px] flex flex-col items-center shadow-[0_20px_50px_rgba(0,0,0,0.1)]" 
        style={{ backgroundColor: '#ffb1e2' }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-inclusive font-normal text-[38px] md:text-[63px] text-[#46004e] leading-[1.1] md:leading-[68px] tracking-[-0.036em] text-center max-w-[65rem] px-6 mb-16">
          Conçu pour ceux qui veulent<br />
          <span className="font-dynalight font-normal text-[52px] md:text-[84px] text-[#d20090] tracking-normal">vraiment</span> réussir en e-commerce
        </h2>
        
        <div className="flex flex-col md:flex-row gap-6 px-6 md:px-12 w-full max-w-[1560px] h-[800px] md:h-[500px]">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative group flex-1 hover:flex-[1.5] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-[1.5rem] overflow-hidden cursor-pointer"
          >
            <img 
              src={ShopifyImg} 
              alt="Sites e-commerce Shopify" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1417]/80 via-[#1a1417]/10 to-transparent transition-opacity duration-500"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-[22px] font-sans font-bold tracking-tight">Sites e-commerce Shopify</h3>
            </div>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative group flex-1 hover:flex-[1.5] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-[1.5rem] overflow-hidden cursor-pointer"
          >
            <img 
              src={ProjetsImg} 
              alt="Projets clé en main" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1417]/80 via-[#1a1417]/10 to-transparent transition-opacity duration-500"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-[22px] font-sans font-bold tracking-tight">Projets clé en main</h3>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section: Diagnostic & Pourquoi la plupart échouent (Style texte avec reveal au scroll & progressive blur) */}
      <section 
        id="pourquoi-nous" 
        ref={statementRef}
        className="w-full pt-24 md:pt-36 pb-20 md:pb-32 px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center bg-transparent relative overflow-hidden"
      >
        <div className="max-w-[62rem] w-full flex flex-col items-center text-center">
          {/* Statement with scroll progressive blur and word-by-word reveal */}
          <h2 
            className="text-[26px] sm:text-[34px] md:text-[44px] lg:text-[48px] font-medium leading-[63.8px] tracking-tight text-[#2b1c20] max-w-[65rem]"
            style={{ lineHeight: '63.8px' }}
          >
            {manifestoTokens.map((item, idx) => {
              const start = (idx / manifestoTokens.length) * 0.72;
              const end = Math.min(start + 0.28, 1);
              return (
                <BlurWord
                  key={idx}
                  progress={statementProgress}
                  range={[start, end]}
                  isHighlight={item.isHighlight}
                >
                  {item.text}
                </BlurWord>
              );
            })}
          </h2>
        </div>
      </section>

      {/* Section: À qui s'adresse SHIFT */}
      <motion.section 
        className="w-[calc(100%-36px)] m-[18px] px-2 py-[12px] md:p-[18px] pb-16 md:pb-24 rounded-[36px] md:rounded-[58px]" 
        style={{ backgroundColor: '#ffb1e2' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24 items-stretch mb-20 md:mb-28">
          
          {/* Left: Dynamic Image */}
          <motion.div 
            className="w-full md:w-[45%] h-[450px] md:h-auto md:min-h-[90vh] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative shadow-2xl shrink-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {audiences.map((audience, idx) => (
              <img
                key={idx}
                src={audience.image}
                alt={audience.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${activeAudience === idx ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </motion.div>

          {/* Right: Text List */}
          <div className="w-full flex-1 flex flex-col justify-center py-12 md:py-24 pr-4 md:pr-12 lg:pr-24">
            <div className="inline-flex px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.15em] text-[#46004e] mb-10 w-max uppercase backdrop-blur-sm" style={{ backgroundColor: '#fde1ff' }}>
              À qui s'adresse SHIFT
            </div>
            
            <div className="flex flex-col gap-0">
              {audiences.map((audience, idx) => {
                const isActive = activeAudience === idx;
                return (
                  <motion.div 
                    key={idx}
                    onMouseEnter={() => setActiveAudience(idx)}
                    onClick={() => setActiveAudience(idx)}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="cursor-pointer py-1.5 transition-all duration-300 select-none"
                  >
                    <span 
                      className={`text-[32px] sm:text-[42px] md:text-[56px] font-serif tracking-tight leading-[1.1] transition-all duration-300 block ${
                        isActive 
                          ? 'text-[#46004e] opacity-100' 
                          : 'text-[#46004e]/25 hover:text-[#46004e]/60'
                      }`}
                    >
                      {audience.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Section: Une approche concrète (Merged) */}
        <div className="max-w-[1560px] mx-auto flex flex-col items-center px-6 md:px-12">
          
          <h2 className="font-inclusive font-normal text-[38px] md:text-[63px] text-[#46004e] leading-[1.1] md:leading-[68px] tracking-[-0.036em] text-center mb-12 md:mb-16 max-w-[65rem]">
            Une approche <span className="font-dynalight font-normal text-[52px] md:text-[84px] text-[#d20090] tracking-normal">concrète</span> derrière chaque projet que nous livrons
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
            {/* Card 1 */}
            <motion.div 
              className="bg-white/40 backdrop-blur-sm p-8 md:p-10 rounded-[24px] flex flex-col h-full hover:bg-white/60 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-[44px] h-[44px] p-[12px] rounded-full border border-[#46004e]/20 flex items-center justify-center mb-8">
                <ShieldCheck className="w-5 h-5 text-[#46004e]"/>
              </div>
              <h3 className="font-serif text-[28px] md:text-[32px] text-[#372130] mb-6 tracking-tight">Résultats d'abord</h3>
              <p className="font-sans text-[#372130]/70 text-[16px] md:text-[18px] leading-relaxed mt-auto">
                Nous ne vendons pas des promesses. Chaque site, chaque produit, chaque créative est conçu pour générer des ventes réelles dès le lancement.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="bg-white/40 backdrop-blur-sm p-8 md:p-10 rounded-[24px] flex flex-col h-full hover:bg-white/60 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-[44px] h-[44px] p-[12px] rounded-full border border-[#46004e]/20 flex items-center justify-center mb-8">
                <Users className="w-5 h-5 text-[#46004e]"/>
              </div>
              <h3 className="font-serif text-[28px] md:text-[32px] text-[#372130] mb-6 tracking-tight">100% clé en main</h3>
              <p className="font-sans text-[#372130]/70 text-[16px] md:text-[18px] leading-relaxed mt-auto">
                Vous n'avez rien à gérer. Nous prenons en charge la totalité du projet : du choix du produit à la mise en ligne de vos publicités.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="bg-white/40 backdrop-blur-sm p-8 md:p-10 rounded-[24px] flex flex-col h-full hover:bg-white/60 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-[44px] h-[44px] p-[12px] rounded-full border border-[#46004e]/20 flex items-center justify-center mb-8">
                <Eye className="w-5 h-5 text-[#46004e]"/>
              </div>
              <h3 className="font-serif text-[28px] md:text-[32px] text-[#372130] mb-6 tracking-tight">Stratégie sur mesure</h3>
              <p className="font-sans text-[#372130]/70 text-[16px] md:text-[18px] leading-relaxed mt-auto">
                Pas de template. Pas de copier-coller. Chaque projet est construit autour de votre niche, votre audience et vos objectifs.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 4: Des services pensés pour accélérer votre lancement */}
      <motion.section 
        id="services" 
        className="w-full pt-20 md:pt-28 pb-12 md:pb-16 px-6 md:px-12 lg:px-24" 
        style={{ backgroundColor: '#fcefff' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-[1560px] mx-auto flex flex-col items-center">
          <h2 className="font-inclusive font-normal text-[38px] md:text-[63px] text-[#46004e] leading-[1.1] md:leading-[68px] tracking-[-0.036em] text-center mb-12 md:mb-16 w-[340px] md:w-auto max-w-full md:max-w-[65rem]">
            Des services pensés pour <br className="md:hidden" />
            <span className="font-dynalight font-normal text-[52px] md:text-[84px] text-[#d20090] tracking-normal">accélérer</span> votre lancement
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
            {/* Card 1: Sites e-commerce Shopify */}
            <motion.div 
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 shadow-sm">
                <img 
                  src={ShopifyImg4} 
                  alt="Sites e-commerce Shopify" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <h3 className="font-sans font-bold text-[20px] text-[#2b1c20] mb-4">Sites e-commerce Shopify</h3>
              <p className="font-sans text-[#2b1c20]/70 text-[16px] leading-relaxed mb-6 flex-grow">
                Un site e-commerce premium, optimisé conversion : pages produit percutantes, tunnel de vente fluide, intégration des moyens de paiement, design mobile-first.
              </p>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-max font-sans font-bold text-[15px] text-[#2b1c20] border-b-2 border-[#2b1c20] pb-0.5 hover:opacity-70 transition-opacity"
              >
                Voir le service
              </a>
            </motion.div>

            {/* Card 2: Projets clé en main */}
            <motion.div 
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 shadow-sm">
                <img 
                  src={ProjetsImg4} 
                  alt="Projets clé en main" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <h3 className="font-sans font-bold text-[20px] text-[#2b1c20] mb-4">Projets clé en main</h3>
              <p className="font-sans text-[#2b1c20]/70 text-[16px] leading-relaxed mb-6 flex-grow">
                Nous identifions les produits à fort potentiel grâce à notre méthode d'analyse data-driven. Fini les tests à l'aveugle — chaque produit est validé avant d'être lancé.
              </p>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-max font-sans font-bold text-[15px] text-[#2b1c20] border-b-2 border-[#2b1c20] pb-0.5 hover:opacity-70 transition-opacity"
              >
                Voir le service
              </a>
            </motion.div>

            {/* Card 3: Créatives publicitaires */}
            <motion.div 
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 shadow-sm">
                <VideoSlideshow videos={[CreativeVid1, CreativeVid2]} />
              </div>
              <h3 className="font-sans font-bold text-[20px] text-[#2b1c20] mb-4">Créatives publicitaires</h3>
              <p className="font-sans text-[#2b1c20]/70 text-[16px] leading-relaxed mb-6 flex-grow">
                Des visuels et vidéos ads conçus pour TikTok et Meta. Formats natifs, hooks puissants, UGC-style — optimisés pour le scroll et la conversion.
              </p>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-max font-sans font-bold text-[15px] text-[#2b1c20] border-b-2 border-[#2b1c20] pb-0.5 hover:opacity-70 transition-opacity"
              >
                Voir le service
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Section 5: Un processus e-commerce pour passer de l'idée au lancement */}
      <section 
        id="processus" 
        className="w-full pt-20 md:pt-28 pb-16 md:pb-24 px-6 md:px-12 lg:px-24" 
        style={{ backgroundColor: '#fcefff' }}
      >
        <div className="max-w-[1560px] mx-auto flex flex-col items-center">
          
          {/* Section Header */}
          <div className="flex flex-col items-center mb-8 md:mb-12 text-center shrink-0">
            <h2 className="font-inclusive font-normal text-[38px] md:text-[63px] text-[#46004e] leading-[1.1] md:leading-[68px] tracking-[-0.036em] mb-3 max-w-[65rem]">
              Un processus <span className="font-dynalight font-normal text-[52px] md:text-[84px] text-[#d20090] tracking-normal">e-commerce</span> pour passer de l'idée au lancement
            </h2>
            <p className="font-sans text-[#2b1c20]/65 text-[15px] md:text-[18px] max-w-[560px] leading-relaxed">
              Un accompagnement structuré, orienté résultats, pour que votre projet e-commerce soit live et prêt à vendre en quelques jours seulement.
            </p>
          </div>

          {/* 3 Step Blocks Listed One Below the Other */}
          <div className="flex flex-col gap-8 md:gap-12 w-full max-w-[1240px]">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                ref={(el) => (stepRefs.current[idx] = el)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col md:flex-row gap-6 lg:gap-8 items-stretch w-full rounded-[36px] md:rounded-[40px] p-3 md:p-4 transition-all duration-500 border ${
                  activeStep === idx
                    ? 'bg-white/75 shadow-xl border-[#d20090]/25 ring-1 ring-[#d20090]/20'
                    : 'bg-white/40 border-[#2b1c20]/8 hover:bg-white/65 shadow-sm'
                }`}
              >
                {/* Visual Media Showcase */}
                <div className="w-full md:flex-1 h-[260px] sm:h-[320px] md:h-[400px] lg:h-[430px] bg-white rounded-[24px] border border-[#2b1c20]/10 overflow-hidden shadow-sm relative shrink-0">
                  {Array.isArray(step.image) ? (
                    <Slideshow images={step.image as string[]} />
                  ) : (
                    <img
                      src={step.image as string}
                      className="absolute inset-0 w-full h-full object-cover"
                      alt={step.fullTitle}
                    />
                  )}
                </div>

                {/* Step Details */}
                <div className="w-full md:w-[360px] lg:w-[420px] bg-[#f2f3ed] rounded-[24px] p-6 lg:p-8 flex flex-col justify-between shrink-0 shadow-xs border border-[#2b1c20]/5">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold tracking-[0.2em] text-[#2b1c20]/40 uppercase">
                        Étape {step.number}
                      </span>
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full transition-colors ${
                        activeStep === idx ? 'bg-[#ffd5fd] text-[#46004e]' : 'bg-[#2b1c20]/5 text-[#2b1c20]/50'
                      }`}>
                        {step.title}
                      </span>
                    </div>
                    <h3 className="font-sans font-semibold text-[20px] lg:text-[23px] text-[#2b1c20] leading-[1.25] tracking-tight">
                      {step.fullTitle}
                    </h3>
                  </div>

                  <p className="font-sans text-[#2b1c20]/75 text-[15px] lg:text-[16px] leading-relaxed mt-6">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 6: Ce que nos clients obtiennent vraiment */}
      <motion.section 
        id="resultats" 
        className="w-full pt-20 md:pt-28 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-inclusive font-normal text-[38px] md:text-[63px] text-[#46004e] leading-[1.1] md:leading-[68px] tracking-[-0.036em] text-center mb-12 md:mb-16 px-6">
          Ce que nos clients <br className="md:hidden" />
          <span className="font-dynalight font-normal text-[52px] md:text-[84px] text-[#d20090] tracking-normal">obtiennent</span> vraiment
        </h2>

        <div 
          ref={storiesScrollRef} 
          data-lenis-prevent="true"
          className="flex overflow-x-auto gap-4 md:gap-[24px] px-6 md:px-[6vw] lg:px-[10vw] snap-x snap-mandatory pb-12 w-full hide-scrollbar"
        >
          {duplicatedStories.map((story, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-[8px] shrink-0 snap-center md:snap-start">
              {/* Image Card */}
              <div className="w-[320px] md:w-[495px] h-[480px] md:h-[600px] relative rounded-[24px] overflow-hidden shadow-sm">
                <img src={story.image} alt={story.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-8 md:p-10">
                  <h3 className="text-white font-bold text-[16px] md:text-[18px] mb-1">{story.name}</h3>
                  <p className="text-white/80 text-[14px]">{story.role}</p>
                </div>
              </div>

              {/* Quote Card */}
              <div className="w-[320px] md:w-[622px] h-[480px] md:h-[600px] bg-[#ffe9fd] rounded-[24px] p-8 md:p-12 flex flex-col justify-between shadow-sm">
                <h3 className="font-sans font-normal text-[20px] md:text-[26px] text-[#46004e] leading-snug">
                  {story.quote}
                </h3>
                <div className="flex gap-12 mt-8">
                  {story.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="font-bold text-[20px] md:text-[24px] text-[#46004e] mb-1">{stat.value}</div>
                      <div className="text-[13px] text-[#2b1c20]/60">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button 
            onClick={() => scrollStories('left')}
            className="w-14 h-14 rounded-2xl bg-[#e5e5dd] flex items-center justify-center hover:bg-[#d5d5cd] transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-[#2b1c20]" />
          </button>
          <button 
            onClick={() => scrollStories('right')}
            className="w-14 h-14 rounded-2xl bg-[#e5e5dd] flex items-center justify-center hover:bg-[#d5d5cd] transition-colors"
          >
            <ArrowRight className="w-6 h-6 text-[#2b1c20]" />
          </button>
        </div>

        {/* Final CTA Part */}
        <div className="mt-20 md:mt-28 w-full flex flex-col items-center text-center px-6 pt-20 md:pt-28 pb-20 md:pb-28" style={{ background: 'linear-gradient(180deg, #fcefff 0.16%, #ffa4df 100%)' }}>
          <h2 className="font-inclusive font-normal text-[38px] md:text-[63px] text-[#46004e] leading-[1.1] md:leading-[68px] tracking-[-0.036em] mb-10 max-w-[55rem]">
            Prêt à lancer votre <br />
            <span className="font-dynalight font-normal text-[52px] md:text-[84px] text-[#d20090] tracking-normal">business e-commerce</span> ?
          </h2>
          <div className="flex flex-row flex-wrap items-center gap-4 w-full px-4 justify-center">
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-auto px-6 md:px-10 py-4 bg-white text-[#46004e] rounded-[1.25rem] font-sans font-bold text-[14px] md:text-[15px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)] transition-all"
            >
              Obtenir un devis gratuit
            </a>
          </div>
        </div>
      </motion.section>

      {/* Section FAQ (Foire Aux Questions) */}
      <motion.section 
        id="faq" 
        className="w-[calc(100%-36px)] max-w-[1240px] mx-auto rounded-[36px] md:rounded-[52px] my-14 md:my-20 mb-20 md:mb-28 py-16 md:py-24 px-5 sm:px-8 md:px-14 lg:px-20 flex flex-col items-center relative shadow-[0_20px_60px_-15px_rgba(70,0,78,0.07)] border border-white/70 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #fff4fd 100%)' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
      >
        {/* Section Heading */}
        <h2 className="font-inclusive font-normal text-[36px] sm:text-[44px] md:text-[63px] text-[#46004e] leading-[1.1] md:leading-[68px] tracking-[-0.036em] text-center mb-4 md:mb-5 max-w-[65rem]">
          Questions <span className="font-dynalight font-normal text-[50px] md:text-[84px] text-[#d20090] tracking-normal">fréquentes</span>
        </h2>

        <p className="font-sans text-[#2b1c20]/65 text-[15px] md:text-[18px] max-w-[560px] text-center mb-12 md:mb-16 leading-relaxed">
          Tout ce qu'il faut savoir avant de lancer votre boutique e-commerce clé en main avec l'équipe SHIFT.
        </p>

        {/* Accordion Stack */}
        <div className="flex flex-col gap-3.5 md:gap-4 w-full max-w-[880px]">
          {faqItems.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className={`w-full rounded-[22px] md:rounded-[28px] transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white shadow-[0_12px_36px_-6px_rgba(70,0,78,0.12)] border border-[#d20090]/35 ring-1 ring-[#d20090]/25'
                    : 'bg-[#fbf7fa]/80 hover:bg-white border border-[#2b1c20]/6 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer transition-colors select-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 md:gap-5 pr-4">
                    {/* Number Badge */}
                    <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-[12px] sm:text-[13px] font-sans font-semibold shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#ffe8f8] text-[#d20090] border border-[#d20090]/20'
                        : 'bg-white border border-black/5 text-[#2b1c20]/60 group-hover:text-[#2b1c20]'
                    }`}>
                      {idx + 1}
                    </span>
                    <h3 className={`font-sans text-[16px] sm:text-[18px] md:text-[19px] tracking-tight leading-snug transition-colors ${
                      isOpen ? 'font-bold text-[#2b1c20]' : 'font-medium text-[#2b1c20]/90 group-hover:text-[#2b1c20]'
                    }`}>
                      {item.question}
                    </h3>
                  </div>

                  {/* Circle Action Button */}
                  <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? 'bg-white text-[#2b1c20] border border-black/10 shadow-sm hover:bg-[#fff0fa]' 
                      : 'bg-[#1b1218] text-white shadow-sm group-hover:scale-105'
                  }`}>
                    {isOpen ? (
                      <X className="w-4 h-4 md:w-4.5 md:h-4.5 text-[#2b1c20]" />
                    ) : (
                      <Plus className="w-4 h-4 md:w-4.5 md:h-4.5 text-white" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-6 pt-1 text-[#2b1c20]/75 font-sans text-[15px] sm:text-[16px] leading-relaxed pl-14 sm:pl-16 md:pl-19 max-w-[50rem]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Help Contact Link */}
        <div className="mt-12 md:mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-2 font-sans text-[15px] text-[#2b1c20]/65">
          <span>Vous avez d'autres questions ?</span>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-[#46004e] hover:text-[#d20090] underline underline-offset-4 decoration-[#46004e]/30 hover:decoration-[#d20090] transition-colors"
          >
            <span>Échanger avec un conseiller</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.section>

      {/* Navigation Footer */}
      <Footer onOpenLegal={(doc) => setActiveLegalDoc(doc)} />

      {/* Interactive Legal Modal */}
      <LegalModal
        isOpen={activeLegalDoc !== null}
        docType={activeLegalDoc || 'privacy'}
        onClose={() => setActiveLegalDoc(null)}
      />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 16 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#2b1c20] text-white shadow-[0_8px_25px_rgba(43,28,32,0.25)] border border-white/10 hover:border-[#f89ecd]/50 flex items-center justify-center hover:bg-[#3f2a36] transition-colors cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f89ecd] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fcefff]"
            aria-label="Retour en haut de page"
            title="Retour en haut de page"
          >
            <ArrowUp className="w-5 h-5 text-white group-hover:text-[#f89ecd] group-hover:-translate-y-0.5 transition-all duration-200" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
