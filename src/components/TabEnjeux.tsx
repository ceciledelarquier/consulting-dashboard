import { AlertTriangle, Layers, TrendingUp } from 'lucide-react';

interface ChallengeCardProps {
    number: number;
    title: string;
    icon: React.ElementType;
    colorClass: string;
    description: string;
}

const ChallengeCard = ({ number, title, icon: Icon, colorClass, description }: ChallengeCardProps) => {
    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6">
            <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-opacity-10 ${colorClass.replace('text-', 'bg-')}`}>
                    <Icon size={24} className={colorClass} />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-bold text-gray-400">#{number}</span>
                        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                    </div>
                </div>
            </div>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
};

export const TabEnjeux = () => {
    const challenges = [
        {
            number: 1,
            title: "Empilement d'Outils Inefficaces",
            icon: AlertTriangle,
            colorClass: "text-orange-600",
            description: "Depuis 2021, l'équipe a testé de nombreux outils qui semblaient prometteurs en théorie mais échouent en situation réelle. Cette accumulation d'essais-erreurs a généré une perte considérable de temps et d'énergie sans aboutir à un système efficace. Les tâches critiques — suivi des stages, accompagnement des stagiaires sur des cycles de 2 à 5 ans, constitution des dossiers, gestion des plans de formation et coordination avec les financeurs — restent manuelles et chronophages."
        },
        {
            number: 2,
            title: "Déperdition du Cœur de Métier : la Présence Pédagogique",
            icon: Layers,
            colorClass: "text-blue-600",
            description: "Le temps en direct avec les apprenants, l'accompagnement à toutes les étapes et le retravail pédagogique des livrables sont devenus secondaires. L'équipe de 2 collaborateurs permanents (auxquels s'ajoutent 12 professionnels freelances) ne peut plus suivre en temps réel où en sont les 250 élèves. Cette impossibilité d'assurer le suivi personnalisé — pourtant au cœur de votre proposition de valeur — crée une frustration profonde, d'autant que l'ambition de lancer une seconde offre de formation reste bloquée par ces contraintes opérationnelles."
        },
        {
            number: 3,
            title: "Modèle Non-Scalable sans Automatisation",
            icon: TrendingUp,
            colorClass: "text-purple-600",
            description: "L'équipe actuelle est déjà saturée à 100% de sa capacité. Toute croissance — que ce soit l'augmentation du nombre d'élèves ou le lancement de nouvelles formations — nécessiterait des recrutements massifs ou l'effondrement du niveau de service. Sans automatisation des processus répétitifs, le modèle économique reste prisonnier d'une croissance linéaire en ressources humaines, alors que votre ambition stratégique exige de libérer 4 à 5 heures par semaine pour piloter cette expansion."
        }
    ];

    return (
        <div className="p-8 max-w-6xl mx-auto space-y-12">
            {/* Introduction Section */}
            <section className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight text-center">
                        Notre Compréhension de Votre Situation
                    </h2>

                    <div className="prose prose-lg text-gray-600 mx-auto">
                        <p className="leading-relaxed">
                            En 4 ans, FORMEA Santé a réussi un pari audacieux : devenir une référence de la formation à distance en diététique avec <span className="font-semibold text-gray-900">250 apprenants par an</span> accompagnés sur des cycles longs (2 à 5 ans) par une équipe de <span className="font-semibold text-gray-900">12 professionnels</span>. Ce succès repose sur trois piliers : une spécialisation claire (100% nutrition/diététique), une pédagogie orientée employabilité et un accompagnement ultra-personnalisé à chaque étape.
                        </p>
                        <p className="leading-relaxed">
                            Cependant, ce succès a révélé <span className="font-semibold text-[#3C39C4]">trois défis opérationnels structurants</span> qui menacent aujourd'hui votre capacité à tenir votre promesse pédagogique et à vous développer :
                        </p>
                    </div>
                </div>
            </section>

            {/* Challenges Section */}
            <section className="space-y-6">
                {challenges.map((challenge, index) => (
                    <ChallengeCard key={index} {...challenge} />
                ))}
            </section>

            {/* Aspirational Conclusion */}
            <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-10 border border-gray-200">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        L'objectif de notre accompagnement est de <span className="font-bold text-[#3C39C4]">structurer et automatiser intelligemment</span> vos processus administratifs pour que votre équipe retrouve sa mission première : la <span className="font-bold text-gray-900">présence pédagogique auprès des apprenants</span>.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Cette transformation vous permettra de sécuriser la pérennité du BTS, de lancer sereinement votre seconde offre de formation, et de redevenir acteur stratégique plutôt qu'exécutant administratif.
                    </p>
                </div>
            </section>
        </div>
    );
};
