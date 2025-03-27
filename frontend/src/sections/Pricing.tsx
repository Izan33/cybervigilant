import CheckIcon from '@/assets/check-mark.svg'
import {twMerge} from "tailwind-merge"

const pricingTiers=[
    {
        title: "Starter",
        monthlyPrice: "79",
        buttonText: "Commencer maintenant",
        popular: false,
        inverse: false,
        features: [
            "Audit de conformité RGPD, ISO 27001",
            "Génération de rapports mensuels",
            "Alertes sur les vulnérabilités critiques (CVE)",
            "Support par e-mail"
        ]
    },
    {
        title: "Pro",
        monthlyPrice: "149",
        buttonText: "S'inscrire maintenant",
        popular: true,
        inverse: true,
        features: [
            "Audit RGPD, ISO 27001, NIS2, HDS",
            "Rapports automatiques et exportables",
            "Surveillance continue des fuites de données",
            "Détection des comptes compromis",
            "Support prioritaire (e-mail + chat)"
        ]
    },
    {
        title: "Entreprise",
        monthlyPrice: "À partir de 299",
        buttonText: "Nous contacter",
        popular: false,
        inverse: false,
        features: [
            "Audit personnalisé (RGPD, ISO, NIS2…)",
            "Rapports illimités + accès API",
            "Surveillance avancée (Dark Web, SIEM/SOC)",
            "Gestion automatisée des équipements",
            "Formation cybersécurité + simulations de phishing",
            "Support VIP (e-mail + chat + téléphone)"
        ],
    },
];

export const Pricing = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto">
                <h2 className="section-title">Tarifs et Abonnements - Sécurisez votre entrerise contre les cybermenaces</h2>
                <p className="section-description mt-5">Choisissez la meilleure solution de cybersécurité pour protéger vos données, garantir votre conformité et anticiper les menaces numériques.</p>
                <div className='flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center'>
                    {pricingTiers.map( ({title, monthlyPrice, buttonText, popular, inverse,
                        features
                    }) => (
                        <div className={twMerge('p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full', inverse === true && 'border-black bg-black text-white')}>
                            <div className='flex justify-between'>
                                <h3 className={twMerge('text-lg font-bold text-black/50', inverse === true && 'text-white/60')}>{title}</h3>
                                {popular === true && (
                                    <div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20'>
                                        <span className='bg-[linear-gradient(to_right,#DD7DDF,#E1CD8,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] bg-clip-text font-medium'>Populaire</span>
                                    </div>
                                )}
                                
                            </div>
                            <div className='flex items-baseline gap-1 mt-[30px]'>
                                <span className='text-4xl font-bold tracking-tighter leading-none'>{ monthlyPrice }€</span>
                                <span className={twMerge('tracking-tight font-bold text-black/50', inverse === true && 'text-white/50')}>/mois</span>
                            </div>
                            <button className={twMerge('btn btn-primary w-full mt-[30px]', inverse === true && 'bg-white text-black')}>{buttonText}</button>
                            <ul className='flex flex-col gap-5 mt-8'>
                                {features.map((feature) =>(
                                    <li className='text-sm flex items-center gap-4'>
                                        <CheckIcon className="h-5 w-5 flex-shrink-0 stroke-current text-black dark:text-white"/>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};