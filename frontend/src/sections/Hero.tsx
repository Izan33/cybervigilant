import ArrowIcon from "@/assets/arrow-right.svg";
import Image from "next/image";
import shieldImage from "@/assets/shield.png";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center bg-[radial-gradient(ellipse_150%_80%_at_bottom_left,#183EC2,#EAEEFE_66%)]">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center w-full">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight bg-white/20 backdrop-blur-md">
                        La version Beta est là
                    </div>
                    <h1 className="text-6xl font-extrabold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 leading-tight">
                        Protégez votre entreprise des cybermenaces.
                    </h1>
                    <p className="text-lg text-[#010D3E] mt-6">
                        CyberSentinelle détecte les fuites de données, surveille vos équipements et vous aide à respecter les normes RGPD et ISO 27001.
                    </p>
                    <div className="flex gap-4 items-center mt-8 justify-center md:justify-start">
                        <button className="btn btn-primary">
                            Essayer gratuitement
                        </button>
                        <button className="btn btn-text gap-1">
                            <span>En apprendre plus</span>
                            <ArrowIcon className="h-5 w-5"/>
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
                    <Image src={shieldImage} alt="Shield image" className="w-[80%] md:w-[500px] lg:w-[600px] xl:w-[700px] animate-fade-in"
                    />
                </div>
            </div>
        </section>
    );
};
