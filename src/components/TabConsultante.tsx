
import { Briefcase, TrendingUp, BrainCircuit, Map, Zap, GraduationCap } from 'lucide-react';

export const TabConsultante = () => {
    const philosophyBlocks = [
        {
            icon: Map,
            title: "Terrain",
            description: "Je m'immerge à vos côtés (audit, documents, outils) pour comprendre votre réalité, pas la théorie."
        },
        {
            icon: Zap,
            title: "Pragmatisme",
            description: "Pas de 'Grand Soir' de l'IA. On commence par des cas d'usage concrets qui libèrent du temps immédiatement."
        },
        {
            icon: GraduationCap,
            title: "Autonomie",
            description: "Je ne crée pas de dépendance. Vous repartez avec les clés (méthode, prompting, roadmap) pour piloter la suite."
        }
    ];

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
            <section className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-10 shadow-sm border border-purple-100">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-shrink-0">
                        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <img
                                src="/formea-sante_Audit-IA/images/cecile-photo.png"
                                alt="Cécile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left space-y-6">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Cécile de Larquier</h2>
                            <p className="text-xl text-purple-700 font-medium">Consultante Stratégie & Transformation</p>
                        </div>

                        <div className="bg-white/80 p-6 rounded-2xl border-l-4 border-purple-600 shadow-sm">
                            <p className="text-gray-800 text-lg leading-relaxed font-medium italic">
                                "L'IA est une transformation avant tout métier : comprendre les processus, identifier les goulots d'étranglement, soutenir les processus avec les bons outils."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ma Philosophie */}
            <section>
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Ma Philosophie</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Une approche de terrain, structurée et tournée vers votre autonomie.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {philosophyBlocks.map((block, index) => {
                        const Icon = block.icon;
                        return (
                            <div key={index} className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-all">
                                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-5 mx-auto shadow-sm">
                                    <Icon className="text-purple-600" size={28} />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-3">{block.title}</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    {block.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Expertise Blocks */}
            <section>
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Une Transformation Cohérente</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Allier la rigueur du conseil, l'agilité opérationnelle et l'accompagnement humain.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {expertiseBlocks.map((block, index) => {
                        const Icon = block.icon;
                        return (
                            <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${block.colorClass.replace('text-', 'bg-').replace('50', '100')}`}>
                                    <Icon className={block.colorClass.split(' ')[1]} size={28} />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-1">{block.title}</h4>
                                <p className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide">{block.subtitle}</p>
                                <p className="text-gray-600 leading-relaxed">
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
