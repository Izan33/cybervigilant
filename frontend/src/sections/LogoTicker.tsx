import apexLogo from "@/assets/apex.png"
import cloudsentinelLogo from "@/assets/cloudsentinel.png"
import cybernovaLogo from "@/assets/cybernova.png"
import forticoreLogo from "@/assets/forticore.png"
import hexasecureLogo from "@/assets/hexasecure.png"
import netguardLogo from "@/assets/netguard.png"
import quantumLogo from "@/assets/quantum.png"
import sentinelLogo from "@/assets/sentinel.png"
import Image from "next/image"

export const LogoTicker = () => {
    return (
        <div className="py-8 md:py-12 bg-white">
            <div className="container">
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <div className="flex gap-14 flex-none">
                        <Image src={apexLogo} alt="apex Logo" className="logo-ticker-image" />
                        <Image src={cloudsentinelLogo} alt="cloudesentinel Logo" className="logo-ticker-image" />
                        <Image src={cybernovaLogo} alt="cybernova Logo" className="logo-ticker-image" />
                        <Image src={forticoreLogo} alt="forticore Logo" className="logo-ticker-image" />
                        <Image src={hexasecureLogo} alt="hexasecure Logo" className="logo-ticker-image" />
                        <Image src={netguardLogo} alt="netguard Logo" className="logo-ticker-image" />
                        <Image src={quantumLogo} alt="quantum Logo" className="logo-ticker-image" />
                        <Image src={sentinelLogo} alt="sentinel Logo" className="logo-ticker-image" />
                    </div>
                </div>
            </div>
        </div>
    );
};