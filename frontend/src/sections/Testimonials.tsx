import avatar1 from "@/assets/avatar-1.jpg"
import avatar2 from "@/assets/avatar-2.jpg"
import avatar3 from "@/assets/avatar-3.jpg"
import avatar4 from "@/assets/avatar-4.jpg"
import avatar5 from "@/assets/avatar-5.jpg"
import Image from "next/image"

const testimonials = [
    {
        text: "Grâce à CyberVigilant, nous avons identifié plusieurs failles critiques et mis en place des correctifs en moins de 48h. C’est devenu notre outil de référence pour la conformité RGPD.",
        imageSrc: avatar1.src,
        name: "Marie Lefèvre",
        entreprise: "DPO @ Medisoft",
    },
    {
        text: "La veille automatisée sur les CVE nous fait gagner un temps précieux. On reçoit des alertes ciblées sans être noyés dans l’info.",
        imageSrc: avatar2.src,
        name: "Ahmed B.",
        entreprise: "Responsable IT @ Pharmatech",
    },
    {
        text: "J’ai adoré la simulation de phishing intégrée. Elle a permis à nos équipes d’éviter plusieurs attaques réelles.",
        imageSrc: avatar3.src,
        name: "Julien C.",
        entreprise: "CISO @ NexaCom",
    },
    {
        text: "L’interface est simple, les modules puissants, et le support très réactif. Une solution complète pour une PME comme la nôtre.",
        imageSrc: avatar4.src,
        name: "Clara Dubois",
        entreprise: "Dir. Générale @ Axelya",
    },
    {
        text: "On a intégré CyberVigilant avec notre SIEM, et depuis, on dort un peu mieux la nuit.",
        imageSrc: avatar5.src,
        name: "Thomas R.",
        entreprise: "Analyste SOC @ CyberSec Partners",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);

export const Testimonials = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="tag">Témoignages</div>
                </div>
                <h2 className="section-title mt-5">Ce que disent nos clients</h2>
                <p className="section-description mt-5">
                    De la conformité RGPD à la protection contre les cybermenaces, CyberVigilant est devenu un outil essentiel pour les entreprises soucieuses de leur sécurité.
                </p>
                <div className="flex justify-center gap-6">
                    <div className="flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
                        {firstColumn.map(({ text, imageSrc, name, entreprise })=>(
                            <div className="card">
                                <div>{text}</div>
                                <div className="flex items-center gap-2 mt-5">
                                    <Image src={imageSrc} alt={name} width={40} height={40} className="h-10 w-10 rounded-full"/>
                                    <div className="flex flex-col">
                                        <div className="font-medium tracking-tight leading-5">{name}</div>
                                        <div>{entreprise}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
                        {secondColumn.map(({ text, imageSrc, name, entreprise })=>(
                            <div className="card">
                                <div>{text}</div>
                                <div className="flex items-center gap-2 mt-5">
                                    <Image src={imageSrc} alt={name} width={40} height={40} className="h-10 w-10 rounded-full"/>
                                    <div className="flex flex-col">
                                        <div className="font-medium tracking-tight leading-5">{name}</div>
                                        <div>{entreprise}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};