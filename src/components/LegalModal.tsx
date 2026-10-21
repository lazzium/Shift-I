import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText, Scale } from 'lucide-react';

export type LegalDocType = 'privacy' | 'terms' | 'legal';

interface LegalModalProps {
  isOpen: boolean;
  docType: LegalDocType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  docType: initialDocType,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<LegalDocType>(initialDocType);

  // Sync active tab when initialDocType changes
  useEffect(() => {
    setActiveTab(initialDocType);
  }, [initialDocType]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl max-h-[88vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 border border-[#f1d8ee]"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-[#f3e3f0] flex items-center justify-between bg-[#fdf8fc]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#fbe7f7] flex items-center justify-center text-[#d20090] shrink-0">
                  {activeTab === 'privacy' && <ShieldCheck className="w-5 h-5" />}
                  {activeTab === 'terms' && <Scale className="w-5 h-5" />}
                  {activeTab === 'legal' && <FileText className="w-5 h-5" />}
                </div>
                <div>
                  <h3 id="legal-modal-title" className="font-sans font-bold text-[18px] text-[#46004e] tracking-tight">
                    {activeTab === 'privacy' && 'Politique de Confidentialité'}
                    {activeTab === 'terms' && 'Conditions Générales d’Utilisation'}
                    {activeTab === 'legal' && 'Mentions Légales'}
                  </h3>
                  <p className="text-[12px] text-[#6b4e71]">
                    SHIFT · Dernière mise à jour : Mars 2026
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Fermer la fenêtre"
                className="w-9 h-9 rounded-full bg-[#f4e6f1] text-[#46004e] hover:bg-[#ebd2e6] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Document Selector Tabs */}
            <div className="flex border-b border-[#f3e3f0] bg-[#faf3f8] px-4 pt-2 gap-2 overflow-x-auto text-[13px] font-medium">
              <button
                type="button"
                onClick={() => setActiveTab('privacy')}
                className={`px-4 py-2.5 rounded-t-xl transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'privacy'
                    ? 'bg-white text-[#46004e] font-semibold border-t-2 border-[#d20090] shadow-sm'
                    : 'text-[#6b4e71] hover:text-[#46004e]'
                }`}
              >
                Confidentialité
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('terms')}
                className={`px-4 py-2.5 rounded-t-xl transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'terms'
                    ? 'bg-white text-[#46004e] font-semibold border-t-2 border-[#d20090] shadow-sm'
                    : 'text-[#6b4e71] hover:text-[#46004e]'
                }`}
              >
                Conditions Générales (CGU)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('legal')}
                className={`px-4 py-2.5 rounded-t-xl transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'legal'
                    ? 'bg-white text-[#46004e] font-semibold border-t-2 border-[#d20090] shadow-sm'
                    : 'text-[#6b4e71] hover:text-[#46004e]'
                }`}
              >
                Mentions Légales
              </button>
            </div>

            {/* Content Body */}
            <div className="px-6 sm:px-8 py-6 overflow-y-auto space-y-6 text-[#4a3249] text-[14px] leading-relaxed">
              {activeTab === 'privacy' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-[#46004e] text-[15px] mb-2">1. Engagement pour la vie privée</h4>
                    <p>
                      SHIFT accorde une importance primordiale à la protection et à la confidentialité des données personnelles de ses clients et des visiteurs de son site. Cette politique décrit la manière dont nous collectons, utilisons et protégeons vos informations personnelles conformément au Règlement Général sur la Protection des Données (RGPD 2016/679).
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#46004e] text-[15px] mb-2">2. Données collectées</h4>
                    <p>Dans le cadre de nos échanges et services, nous pouvons recueillir :</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-[#5b405a]">
                      <li>Données d'identification : Nom, prénom, adresse email, numéro de téléphone (WhatsApp).</li>
                      <li>Informations professionnelles : Nom de boutique, secteur d'activité, budget estimé, objectifs e-commerce.</li>
                      <li>Données techniques : Données de navigation anonymisées et journaux de connexion serveur.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#46004e] text-[15px] mb-2">3. Finalité des traitements</h4>
                    <p>
                      Les informations recueillies sont exclusivement utilisées pour la préparation et la transmission de devis personnalisés, la réalisation de prestations e-commerce (boutiques Shopify, créatives publicitaires), ainsi que le suivi client personnalisé. Vos données ne sont jamais vendues, louées ou cédées à des tiers à des fins publicitaires.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#46004e] text-[15px] mb-2">4. Durée de conservation</h4>
                    <p>
                      Les données relatives aux demandes de devis et prospects sont conservées pendant une durée maximale de trois (3) ans à compter du dernier contact émanant du client. Les données contractuelles des clients sont archivées conformément aux obligations légales et comptables en vigueur.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#46004e] text-[15px] mb-2">5. Vos droits (RGPD)</h4>
                    <p>
                      Vous disposez d'un droit d'accès, de rectification, de portabilité, de limitation et d'effacement de l'ensemble de vos données. Pour exercer l'un de ces droits, vous pouvez contacter notre délégué à la protection des données par email à : <strong className="text-[#46004e]">contact@shiftagency.com</strong>.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'terms' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-[#46004e] text-[15px] mb-2">1. Objet et champ d'application</h4>
                    <p>
                      Les présentes Conditions Générales d’Utilisation ont pour objet de définir les modalités et conditions dans lesquelles SHIFT met à la disposition de ses utilisateurs les informations de sa plateforme et propose ses services de conception et d'accélération e-commerce.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#46004e] text-[15px] mb-2">2. Prestations et livrables</h4>
                    <p>
                      SHIFT propose la création de boutiques e-commerce clés en main (Shopify), la production de créatives publicitaires (vidéos, visuels), la recherche de produits à fort potentiel et l'accompagnement stratégique au lancement. Chaque projet fait l'objet d'un accord préalable formalisant le périmètre exact des livrables et les délais prévus.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#46004e] text-[15px] mb-2">3. Propriété intellectuelle</h4>
                    <p>
                      Tous les éléments composant le site SHIFT (textes, graphismes, vidéos, logos, maquettes) sont protégés par le Code de la Propriété Intellectuelle. À la finalisation et au paiement intégral des prestations commandées, les droits d’exploitation des boutiques et créatives réalisées pour le compte du client lui sont intégralement transférés.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#46004e] text-[15px] mb-2">4. Responsabilité & résultats</h4>
                    <p>
                      SHIFT est soumis à une obligation de moyens pour fournir un travail d'excellence, conforme aux standards actuels du e-commerce. Les témoignages et chiffres de chiffre d'affaires présentés sur le site reflètent des réalisations réelles de clients passés, sans constituer pour autant une garantie automatique de résultats futurs, ces derniers dépendant de multiples facteurs de marché et de la gestion par le client.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#46004e] text-[15px] mb-2">5. Droit applicable et attribution de juridiction</h4>
                    <p>
                      Les présentes conditions sont régies par le droit français. En cas de contestation ou de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire. À défaut, compétence expresse est attribuée aux tribunaux compétents.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'legal' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-[#46004e] text-[15px] mb-2">1. Éditeur du site</h4>
                    <p>
                      Le site est édité par <strong className="text-[#46004e]">SHIFT</strong>, agence spécialisée dans la création de boutiques e-commerce et l'accompagnement d'entrepreneurs digitaux.
                    </p>
                    <p className="mt-1 text-[#6b4e71]">
                      Email de contact : <span className="text-[#46004e] font-medium">contact@shiftagency.com</span>
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#46004e] text-[15px] mb-2">2. Direction de la publication</h4>
                    <p>
                      Responsable de publication : Équipe de Direction SHIFT.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#46004e] text-[15px] mb-2">3. Hébergement</h4>
                    <p>
                      Le site et ses contenus sont hébergés sur des serveurs sécurisés situés au sein de l'Union Européenne, garantissant une haute disponibilité et le respect des normes européennes de protection des données.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#46004e] text-[15px] mb-2">4. Cookies et traceurs</h4>
                    <p>
                      Ce site utilise uniquement des traceurs techniques indispensables au bon fonctionnement de la navigation et des mesures d'audience anonymisées. Vous pouvez configurer votre navigateur pour bloquer les cookies techniques à tout moment.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="px-6 py-4 border-t border-[#f3e3f0] bg-[#fdf8fc] flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 bg-[#46004e] text-white rounded-xl text-[14px] font-medium hover:bg-[#34003a] transition-colors cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
