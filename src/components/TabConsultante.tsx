
import { Briefcase, TrendingUp, BrainCircuit } from 'lucide-react';

export const TabConsultante = () => {
    const expertiseBlocks = [
        {
            icon: Briefcase,
            title: "Rigueur Stratégique",
            subtitle: "Ex-BearingPoint",
            description: "4 ans en conseil stratégie et transformation digitale. Je structure votre projet avec la méthode des grands groupes, adaptée à votre agilité.",
            colorClass: "bg-blue-50 text-blue-600"
        },
        {
            icon: TrendingUp,
            title: "Réalité Opérationnelle",
            subtitle: "Ex-Head of Ops",
            description: "J'ai piloté le scale de Hosman (Start-up). Résultats : -20% de coûts, +30% satisfaction client. Je connais la réalité du terrain.",
            colorClass: "bg-emerald-50 text-emerald-600"
        },
        {
            icon: BrainCircuit,
            title: "Expertise IA & Coach",
            subtitle: "Formatrice & Coach certifiée",
            description: "Formatrice IA et Coach certifiée. J'accompagne la transformation tech sans oublier l'humain.",
            colorClass: "bg-purple-50 text-purple-600"
        }
    ];

    const logos = [
        { src: "/formea-sante_Audit-IA/images/bearingpoint-logo.jpg", alt: "BearingPoint" },
        { src: "/formea-sante_Audit-IA/images/hosman-logo.png", alt: "Hosman" },
        { src: "/formea-sante_Audit-IA/images/logo-drone.png", alt: "Drone Expertise" },
        { src: "/formea-sante_Audit-IA/images/logo-durand.png", alt: "Durand Montouché" },
        { src: "/formea-sante_Audit-IA/images/logo-di.jpg", alt: "DI" },
        { src: "/formea-sante_Audit-IA/images/logo-cfd.jpg", alt: "CFD" },
        { src: "/formea-sante_Audit-IA/images/logo-icade.jpg", alt: "Icade" },
        { src: "/formea-sante_Audit-IA/images/logo-maison-cadres.png", alt: "Maison des Cadres" },
        { src: "/formea-sante_Audit-IA/images/logo-notaires.png", alt: "Notaires de France" },
        { src: "/formea-sante_Audit-IA/images/logo-ministere-armees.png", alt: "Ministère des Armées" },
        { src: "/formea-sante_Audit-IA/images/logo-vinci.png", alt: "Vinci" },
        { src: "/formea-sante_Audit-IA/images/logo-tepsa.png", alt: "Tepsa" }
    ];

    return (
        <div className="p-8 max-w-6xl mx-auto space-y-12">
            {/* Profile Section */}
            <section className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#3C39C4] shadow-lg">
                            <img
                                src="/formea-sante_Audit-IA/images/cecile-photo.png"
                                alt="Cécile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Cécile de Larquier</h2>
                        <p className="text-xl text-[#3C39C4] font-medium mb-6">Consultante Stratégie & Transformation</p>
                        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                            <p className="text-gray-700 text-lg leading-relaxed italic">
                                "Je ne suis pas une agence d'automatisation technique. Je suis une partenaire stratégique capable de comprendre votre P&L et de mettre les mains dans le moteur. <strong>L'IA est le moyen, pas la finalité.</strong>"
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Blocks */}
            <section>
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Une Transformation Cohérente</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Toutes les transformations doivent être en cohérence pour structurer durablement votre entreprise.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {expertiseBlocks.map((block, index) => {
                        const Icon = block.icon;
                        return (
                            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className={`inline-flex p-3 rounded-xl mb-4 ${block.colorClass}`}>
                                    <Icon size={28} />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">{block.title}</h4>
                                <p className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wide">{block.subtitle}</p>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {block.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Logo Carousel */}
            <section className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h4 className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
                    Ils m'ont fait confiance
                </h4>
                <div className="relative overflow-hidden">
                    <div className="flex animate-scroll gap-12 items-center">
                        {[...logos, ...logos].map((logo, index) => (
                            <div key={index} className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};
