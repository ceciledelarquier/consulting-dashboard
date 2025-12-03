import { Mail, CheckCircle2, Clock, Users, Lightbulb, Target } from 'lucide-react';

export const TabRoadmap = () => {
    return (
        <div className="p-8 max-w-6xl mx-auto space-y-16">

            {/* SECTION INTRO */}
            <section className="space-y-6">
                <div className="border-l-4 border-[#3C39C4] pl-4">
                    <h2 className="text-3xl font-bold text-gray-900">Ce que je vous propose</h2>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center">
                    <p className="text-2xl font-medium text-gray-900">
                        Un package simple en deux temps : <span className="font-bold text-[#3C39C4]">un audit flash + une journée de formation</span>.
                    </p>
                </div>
            </section>

            {/* SECTION 1: AUDIT FLASH */}
            <section className="space-y-8">
                <div className="border-l-4 border-green-500 pl-4">
                    <h2 className="text-2xl font-bold text-gray-900">1) Audit Flash (4 jours au total)</h2>
                    <p className="text-lg text-gray-600 font-medium mt-2">
                        Objectif : <span className="text-gray-900">savoir où vous perdez du temps et combien vous pouvez en récupérer.</span>
                    </p>
                </div>

                {/* Timeline Steps */}
                <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="flex gap-6 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-700 font-bold text-lg">1</span>
                        </div>
                        <div className="flex-1 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <p className="text-gray-700 text-lg">
                                <span className="font-bold">1h de kick-off en visio</span> pour cadrer les priorités.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-6 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-700 font-bold text-lg">2</span>
                        </div>
                        <div className="flex-1 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <p className="text-gray-700 text-lg">
                                <span className="font-bold">1 journée sur place</span> : je vous suis dans votre quotidien ("vis ma vie") pour voir où ça coince vraiment.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-6 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-700 font-bold text-lg">3</span>
                        </div>
                        <div className="flex-1 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <p className="text-gray-700 text-lg font-bold mb-4">2,5 jours de travail en coulisses :</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-gray-600">
                                    <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                                    <span>tests d'outils d'IA sur vos vrais cas (mails, dossiers financeurs, suivi stagiaires, etc.),</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-600">
                                    <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                                    <span>sélection des solutions réalistes,</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-600">
                                    <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                                    <span>construction d'une banque de prompts FORMEA prête à l'emploi.</span>
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
                            <span>cartographie des flux ("qui fait quoi, où ça bloque"),</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                            <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                            <span>liste priorisée des tâches à automatiser,</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                            <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                            <span>roadmap 90 jours avec les actions concrètes à mener.</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* SECTION 2: FORMATION */}
            <section className="space-y-8">
                <div className="border-l-4 border-purple-500 pl-4">
                    <h2 className="text-2xl font-bold text-gray-900">2) Journée de Formation (2 à 10 personnes)</h2>
                    <p className="text-lg text-gray-600 font-medium mt-2">
                        Objectif : <span className="text-gray-900">que votre équipe puisse gagner du temps dès la semaine suivante.</span>
                    </p>
                </div>

                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-lg font-bold text-gray-900 mb-6">En une journée, on voit :</p>

                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <Lightbulb className="text-purple-600" size={20} />
                            </div>
                            <p className="text-gray-700 text-lg pt-1">
                                Comment parler à l'IA pour qu'elle vous aide vraiment (prompting simple).
                            </p>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <Users className="text-purple-600" size={20} />
                            </div>
                            <div className="pt-1">
                                <p className="text-gray-700 text-lg mb-2">
                                    Comment rédiger, synthétiser, organiser plus vite à partir de vos propres documents :
                                </p>
                                <p className="text-gray-600 italic pl-4">
                                    mails types, grilles de stages, dossiers stagiaires, contenus de cours…
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <Clock className="text-purple-600" size={20} />
                            </div>
                            <p className="text-gray-700 text-lg pt-1">
                                Comment identifier vos futurs cas d'usage sans dépendre d'un consultant à chaque fois.
                            </p>
                        </div>
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
                                <span className="font-bold">4 à 5 heures stratégiques libérées</span> par semaine pour vous et vos bras droits,
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <CheckCircle2 className="text-green-600" size={24} />
                            </div>
                            <p className="text-gray-700 pt-2">
                                un <span className="font-bold">BTS sécurisé sur le long terme</span>,
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Target className="text-blue-600" size={24} />
                            </div>
                            <p className="text-gray-700 pt-2">
                                une <span className="font-bold">base solide pour lancer votre nouvelle offre</span> sans épuiser les équipes,
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Lightbulb className="text-purple-600" size={24} />
                            </div>
                            <p className="text-gray-700 pt-2">
                                des <span className="font-bold">outils et des prompts adaptés à FORMEA</span>, pas des solutions génériques.
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
                        Pour rester sur un format rapide et abordable, ne sont pas inclus :
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

                    <div className="bg-white p-6 rounded-lg border-l-4 border-[#3C39C4]">
                        <p className="text-gray-900 font-medium text-lg italic">
                            L'objectif de ce package, c'est :<br />
                            <span className="text-[#3C39C4] font-bold not-italic">
                                "Vous montrer où vous gagnez du temps, avec quels outils, et comment commencer très concrètement, sans vous rajouter une usine à gaz."
                            </span>
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="pt-12 pb-8 border-t border-gray-200">
                <div className="text-center">
                    <a
                        href="mailto:cdelarquier@gmail.com?subject=Validation%20de%20l%E2%80%99offre%20%E2%80%93%20Audit%20%26%20Formation%20FORMEA%20Sant%C3%A9&body=Bonjour%20C%C3%A9cile%2C%0A%0AJe%20vous%20confirme%20ma%20volont%C3%A9%20de%20valider%20l%E2%80%99offre%20%27Audit%20flash%20%2B%20journ%C3%A9e%20de%20formation%27%20pour%20FORMEA%20Sant%C3%A9.%0A%0A%5BPr%C3%A9cisions%20%C3%A0%20compl%C3%A9ter%20ici%5D%0A%0ABien%20%C3%A0%20vous%2C%0A%5BNom%20%2F%20Fonction%5D"
                        className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#3C39C4] text-white rounded-xl font-bold text-xl hover:bg-[#322f9e] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        <Mail size={24} />
                        Valider l'offre
                    </a>
                </div>
            </section>
        </div>
    );
};
