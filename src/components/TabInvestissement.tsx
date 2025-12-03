import { Mail, CheckCircle2, Calendar, CreditCard, Info } from 'lucide-react';

export const TabInvestissement = () => {
    return (
        <div className="p-8 max-w-6xl mx-auto space-y-16">

            {/* SECTION INTRO - INVESTISSEMENT */}
            <section className="space-y-6">
                <div className="border-l-4 border-[#9CBF9F] pl-4">
                    <h2 className="text-3xl font-bold text-gray-900">Investissement & modalités</h2>
                </div>

                <div className="bg-gradient-to-br from-[#9CBF9F]/20 to-blue-50 border border-[#9CBF9F]/20 rounded-3xl p-10 text-center shadow-sm">
                    <div className="space-y-4">
                        <p className="text-6xl font-extrabold text-[#9CBF9F]">4 500 € HT</p>
                        <p className="text-xl font-medium text-gray-700">Forfait global</p>
                        <div className="inline-block bg-white/80 px-8 py-4 rounded-2xl border-l-4 border-[#9CBF9F] mt-6 shadow-sm">
                            <p className="text-gray-800 font-bold text-lg">4 jours d'audit + 1 journée de formation</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION - CE FORFAIT COMPREND */}
            <section className="space-y-8">
                <div className="border-l-4 border-green-500 pl-4">
                    <h2 className="text-2xl font-bold text-gray-900">Ce forfait comprend</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="text-green-600" size={20} />
                        </div>
                        <p className="text-gray-700 font-medium pt-2">Formation d'acculturation des équipes à l'IA</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="text-green-600" size={20} />
                        </div>
                        <p className="text-gray-700 font-medium pt-2">Audit & cartographie des processus sur le périmètre administratif</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="text-green-600" size={20} />
                        </div>
                        <p className="text-gray-700 font-medium pt-2">Identification des outils IA adaptés à vos besoins</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="text-green-600" size={20} />
                        </div>
                        <p className="text-gray-700 font-medium pt-2">Analyse de l'implémentabilité des processus IA</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="text-green-600" size={20} />
                        </div>
                        <p className="text-gray-700 font-medium pt-2">Rédaction d'une banque de prompts prête à l'emploi</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="text-green-600" size={20} />
                        </div>
                        <p className="text-gray-700 font-medium pt-2">Livrables stratégiques & Roadmap 2025 pour déployer les actions priorisées</p>
                    </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 flex items-start gap-4">
                    <Info className="text-blue-600 flex-shrink-0 mt-0.5" size={24} />
                    <p className="text-blue-900 font-medium">
                        📝 Les frais de déplacement sont en supplément, facturés sur justificatif.
                    </p>
                </div>
            </section>

            {/* SECTION - DÉLAIS & CALENDRIER */}
            <section className="space-y-8">
                <div className="border-l-4 border-[#9CBF9F] pl-4">
                    <h2 className="text-2xl font-bold text-gray-900">Délais & calendrier</h2>
                </div>

                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-start gap-4 mb-6">
                        <Calendar className="text-[#9CBF9F] flex-shrink-0" size={32} />
                        <div>
                            <p className="text-xl font-bold text-gray-900 mb-2">Mission finalisée avant le 23 décembre</p>
                            <p className="text-gray-600">Afin de :</p>
                        </div>
                    </div>

                    <ul className="space-y-4 ml-4">
                        <li className="flex items-start gap-3 text-gray-700">
                            <span className="w-2 h-2 rounded-full bg-[#9CBF9F] mt-2.5 flex-shrink-0" />
                            <span>vous donner une <span className="font-semibold">vision claire des scénarios possibles</span>,</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                            <span className="w-2 h-2 rounded-full bg-[#9CBF9F] mt-2.5 flex-shrink-0" />
                            <span>vous aider à prendre une <span className="font-semibold">décision éclairée sur la pérennité du BTS longue durée</span> dès la rentrée suivante.</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* SECTION - MODALITÉS DE PAIEMENT */}
            <section className="space-y-8">
                <div className="border-l-4 border-orange-500 pl-4">
                    <h2 className="text-2xl font-bold text-gray-900">Modalités de paiement</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-orange-50/50 to-red-50/50 p-8 rounded-2xl border border-orange-100 shadow-sm">
                        <div className="flex items-center gap-6 mb-6">
                            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <CreditCard className="text-orange-600" size={32} />
                            </div>
                            <div>
                                <p className="text-4xl font-extrabold text-orange-600">30%</p>
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">Avant le lancement</p>
                            </div>
                        </div>
                        <p className="text-gray-700 font-medium text-lg">
                            30 % du montant de la mission à régler avant le lancement.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50/50 to-red-50/50 p-8 rounded-2xl border border-orange-100 shadow-sm">
                        <div className="flex items-center gap-6 mb-6">
                            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <CreditCard className="text-orange-600" size={32} />
                            </div>
                            <div>
                                <p className="text-4xl font-extrabold text-orange-600">70%</p>
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">Dans les 30 jours</p>
                            </div>
                        </div>
                        <p className="text-gray-700 font-medium text-lg">
                            70 % restants à régler dans les 30 jours suivant la fin de la mission.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="pt-12 pb-8 border-t border-gray-200">
                <div className="text-center">
                    <a
                        href="mailto:cdelarquier@gmail.com?subject=Validation%20de%20l%E2%80%99offre%20%E2%80%93%20Investissement%20%26%20modalit%C3%A9s%20FORMEA%20Sant%C3%A9&body=Bonjour%20C%C3%A9cile%2C%0A%0AJe%20vous%20confirme%20ma%20volont%C3%A9%20de%20valider%20l%E2%80%99offre%20pr%C3%A9sent%C3%A9e%20(forfait%20global%204%20500%20%E2%82%AC%20HT)%20pour%20FORMEA%20Sant%C3%A9.%0A%0A%5BPr%C3%A9cisions%20%C3%A0%20compl%C3%A9ter%20ici%5D%0A%0ABien%20%C3%A0%20vous%2C%0A%5BNom%20%2F%20Fonction%5D"
                        className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#9CBF9F] text-white rounded-xl font-bold text-lg hover:bg-[#8ba88e] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        <Mail size={20} />
                        Valider l'offre
                    </a>
                </div>
            </section>
        </div>
    );
};
