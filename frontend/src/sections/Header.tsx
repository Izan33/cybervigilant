import Logo from "@/assets/CyberNormShiel-logo.png"
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg"

export const Header = () =>{
    return (
        <header className="sticky top-0 backdrop-blur-sm">
            <div className="py-5">
                <div className="container">
                    <div className="flex items-center justify-between"> 
                        <Image src={Logo} alt="Saas logo" height={40} width={40}/>
                        <MenuIcon className="h-5 w-5 md:hidden"  />
                        <nav className="hidden md:flex gap-6 text-black/60 items-center">
                            <a href="#">Fonctionnalitées</a>
                            <a href="#">Tarifs</a>
                            <a href="#">A propos</a>
                            <a href="#">Support</a>
                            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">Connexion</button>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}