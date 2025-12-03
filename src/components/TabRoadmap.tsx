import { Mail, CheckCircle2, Clock, Target, Sparkles, TrendingUp, FileCheck, Database, User } from 'lucide-react';

interface TabRoadmapProps {
    onNavigate?: (tabId: string) => void;
}

export const TabRoadmap = ({ onNavigate }: TabRoadmapProps) => {
    return (
        <div className="p-8 max-w-6xl mx-auto space-y-16">

            {/* SECTION INTRO */}
            <section className="space-y-6">
                <div className="border-l-4 border-purple-600 pl-4">
                    <h2 className="text-3xl font-bold text-gray-900">Ce que je vous propose</h2>
                </div>

                <div className="bg-purple-50 border border-purple-100 rounded-xl p-8">
                    <p className="text-2xl font-medium text-gray-900 text-center mb-6">
                        Un package simple en deux temps : <span className="font-bold text-purple-700">un audit flash + une journée de formation</span>.
                    </p>
                    <div className="bg-white rounded-lg p-6 border-l-4 border-purple-600 flex items-start gap-4">
                        <Target className="text-purple-600 flex-shrink-0 mt-1" size={32} />
                        <p className="text-lg text-gray-700">
                            <span className="font-bold text-purple-700">Objectif :</span> identifier les <span className="font-semibold">opportunités de gain de temps</span>, prioriser les projets et vous proposer les <span className="font-semibold">outils les plus adaptés</span>.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 1: AUDIT FLASH */}
            <section className="space-y-8">
                <div className="border-l-4 border-green-500 pl-4">
                    <h2 className="text-2xl font-bold text-gray-900">1) Audit Flash (4-5 jours au total)</h2>
                    <p className="text-lg text-gray-600 font-medium mt-2">
                        Objectif : <span className="text-gray-900 font-semibold">savoir où vous perdez du temps et combien vous pouvez en récupérer.</span>
                    </p>
                </div>

                {/* Timeline Steps */}
                <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="flex gap-6 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-700 font-bold text-lg">1</span>
                        </div>
                        <div className="flex-1 bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative">
                            <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                PRÉSENTIEL
                            </span>
                            <p className="text-gray-700 text-lg font-bold mb-3">1 journée sur place :</p>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                                    <span><span className="font-semibold">Interviews individuelles</span> avec les 2 collaboratrices</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                                    <span><span className="font-semibold">Accès aux outils</span> et documents de travail</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                                    <span><span className="font-semibold">Observation du quotidien</span> ("vis ma vie") pour voir où ça coince vraiment</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-6 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-700 font-bold text-lg">2</span>
                        </div>
                        <div className="flex-1 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <p className="text-gray-700 text-lg font-bold mb-4">2 à 3 jours de travail en coulisses :</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-gray-600">
                                    <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                                    <span><span className="font-semibold">tests d'outils d'IA</span> sur vos vrais cas (mails, dossiers financeurs, suivi stagiaires, etc.),</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-600">
                                    <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                                    <span><span className="font-semibold">identifications des outils d'IA les plus efficaces</span>,</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-600">
                                    <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                                    <span>construction d'une <span className="font-semibold">banque de prompts FORMEA</span> prête à l'emploi,</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-600">
                                    <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                                    <span><span className="font-semibold">catégorisation des cas d'usage / processus en 3</span> : <span className="font-semibold">quick win</span> (vous pouvez les mettre en place immédiatement), <span className="font-semibold">petites automatisations</span> (et quel outil sera le plus adapté pour vous - réalisable à moyen terme), et <span className="font-semibold">développement d'outil sur mesure</span>.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Deliverable Box */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Target className="text-green-600" size={24} />
                        Une restitution claire :
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-gray-700">
                            <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                            <span>un <span className="font-semibold">espace Notion structuré</span>,</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                            <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                            <span>une <span className="font-semibold">banque de prompts adaptée à FORMEA</span>,</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                            <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                            <span><span className="font-semibold">accès à tous les documents de formation</span>,</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                            <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                            <span><span className="font-semibold">liste des meilleurs outils d'IA</span> sur le marché.</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* SECTION 2: FORMATION */}
            <section className="space-y-8">
                <div className="border-l-4 border-purple-500 pl-4">
                    <h2 className="text-2xl font-bold text-gray-900">2) Journée de Formation (2 à 10 personnes)</h2>
                    <p className="text-lg text-gray-600 font-medium mt-2">
                        Objectif : <span className="text-gray-900 font-semibold">maîtriser les fondamentaux de l'IA générative pour pouvoir gagner du temps immédiatement</span>.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm relative">
                    <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        PRÉSENTIEL
                    </span>
                    <p className="text-lg font-bold text-gray-900 mb-6">En une journée, on voit :</p>

                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <Sparkles className="text-purple-600" size={20} />
                            </div>
                            <p className="text-gray-700 text-lg pt-1">
                                <span className="font-semibold">Apprendre à prompter</span> pour gagner en efficience dans ses utilisations de l'IA.
                            </p>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <Target className="text-purple-600" size={20} />
                            </div>
                            <p className="text-gray-700 text-lg pt-1">
                                <span className="font-semibold">Travailler sur des cas d'usage de votre quotidien</span> pour comprendre où vous pouvez injecter de l'IA.
                            </p>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <Database className="text-purple-600" size={20} />
                            </div>
                            <p className="text-gray-700 text-lg pt-1">
                                <span className="font-semibold">Connaître les meilleurs outils disponibles</span> en fonction de ce que vous avez à faire : rédiger (visuel et textes), analyser ou chercher des informations.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
                        <p className="text-gray-700 italic">
                            La formation vise à permettre à <span className="font-semibold">toutes et tous de pouvoir comprendre les fondamentaux de l'IA</span> et à commencer à se construire le <span className="font-semibold">toolkit IA qui permet de gagner du temps rapidement</span>.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 3: RÉSULTAT ATTENDU */}
            <section className="space-y-8">
                <div className="border-l-4 border-orange-500 pl-4">
                    <h2 className="text-2xl font-bold text-gray-900">5. Le résultat attendu</h2>
                </div>

                <p className="text-lg text-gray-700 font-medium">À l'issue de la mission, vous avez :</p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Clock className="text-orange-600" size={24} />
                            </div>
                            <p className="text-gray-700 pt-2">
                                le <span className="font-bold">nombre d'heures en moyenne libérées par semaine</span> pour vous et vos bras droits (objectif 4-5h),
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <FileCheck className="text-green-600" size={24} />
                            </div>
                            <p className="text-gray-700 pt-2">
                                une <span className="font-bold">décision</span> sur votre capacité à maintenir un <span className="font-bold">BTS sécurisé sur le long terme</span>,
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <TrendingUp className="text-blue-600" size={24} />
                            </div>
                            <p className="text-gray-700 pt-2">
                                de la <span className="font-bold">visibilité sur vos perspectives d'automatisation</span>, de gain de temps et surtout sur le <span className="font-bold">stack d'outils IA le plus adapté</span> à vos besoins,
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Sparkles className="text-purple-600" size={24} />
                            </div>
                            <p className="text-gray-700 pt-2">
                                un <span className="font-bold">espace de connaissance et des prompts</span> pour gagner du temps immédiatement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: CE QUI N'EST PAS INCLUS */}
            <section className="space-y-8">
                <div className="border-l-4 border-gray-400 pl-4">
                    <h2 className="text-2xl font-bold text-gray-900">6. Ce qui n'est pas inclus</h2>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                    <p className="text-gray-700 text-lg mb-6">
                        Pour rester sur un <span className="font-semibold">format rapide et abordable</span>, ne sont pas inclus :
                    </p>

                    <ul className="space-y-3 mb-8">
                        <li className="flex items-start gap-3 text-gray-600">
                            <span className="w-2 h-2 rounded-full bg-gray-400 mt-2.5 flex-shrink-0" />
                            <span>le développement d'outils sur mesure,</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-600">
                            <span className="w-2 h-2 rounded-full bg-gray-400 mt-2.5 flex-shrink-0" />
                            <span>la mise en place technique complète d'automatisations complexes.</span>
                        </li>
                    </ul>

                    <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600">
                        <p className="text-gray-900 font-medium text-lg italic">
                            L'objectif de ce package, c'est :<br />
                            <span className="text-purple-700 font-bold not-italic">
                                "Vous montrer où vous gagnez du temps, avec quels outils, et comment commencer très concrètement, sans vous rajouter une usine à gaz."
                            </span>
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="pt-12 pb-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => onNavigate?.('consultante')}
                        className="group flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-purple-600 text-purple-700 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all shadow-sm hover:shadow-md"
                    >
                        <User size={20} />
                        Mon profil
                    </button>

                    <a
                        href="mailto:cdelarquier@gmail.com?subject=Validation%20de%20l%E2%80%99offre%20%E2%80%93%20Audit%20%26%20Formation%20FORMEA%20Sant%C3%A9&body=Bonjour%20C%C3%A9cile%2C%0A%0AJe%20vous%20confirme%20ma%20volont%C3%A9%20de%20valider%20l%E2%80%99offre%20%27Audit%20flash%20%2B%20journ%C3%A9e%20de%20formation%27%20pour%20FORMEA%20Sant%C3%A9.%0A%0A%5BPr%C3%A9cisions%20%C3%A0%20compl%C3%A9ter%20ici%5D%0A%0ABien%20%C3%A0%20vous%2C%0A%5BNom%20%2F%20Fonction%5D"
                        className="group flex items-center justify-center gap-3 px-8 py-4 bg-purple-600 text-white rounded-xl font-bold text-lg hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        <Mail size={20} />
                        Valider l'offre
                    </a>
                </div>
            </section>
        </div>
    );
};
