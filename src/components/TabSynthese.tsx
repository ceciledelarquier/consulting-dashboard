import { ArrowRight, CheckCircle2, AlertTriangle, Clock, Users, GraduationCap, Mail, TrendingUp } from 'lucide-react';


interface TabSyntheseProps {
    onNavigate?: (tabId: string) => void;
}

export const TabSynthese = ({ onNavigate }: TabSyntheseProps) => {
    return (
        <div className="p-8 max-w-6xl mx-auto space-y-16">

            {/* SECTION 1: Où vous en êtes */}
            <section className="space-y-8">
                <div className="border-l-4 border-purple-600 pl-4 flex items-center gap-3">
                    <TrendingUp className="text-purple-600" size={32} />
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">1. Forméa Santé</h2>
                        <p className="text-lg text-purple-600 font-medium">Un BTS reconnu et une entreprise en croissance.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl shadow-sm border border-purple-100">
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            <span className="font-bold text-purple-700">FORMEA Santé</span>, c'est aujourd'hui une réussite incontestable :
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-700">
                                <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                                <span><span className="font-bold">250 apprenants</span> suivis sur 2 à 5 ans</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                                <span>Une équipe d'une <span className="font-bold">douzaine de personnes</span></span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                                <span>Un <span className="font-bold">BTS diététique à distance</span> qui fonctionne très bien</span>
                            </li>
                        </ul>
                        <div className="mt-6 p-4 bg-white/80 rounded-lg border-l-4 border-purple-600">
                            <p className="text-gray-700 italic font-medium">
                                Votre modèle a fait ses preuves et vous êtes devenue une référence en formation à distance en diététique.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                            <span className="text-4xl font-extrabold text-purple-600 mb-2">250+</span>
                            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Apprenants suivis</span>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                            <span className="text-4xl font-extrabold text-purple-600 mb-2">≈ 12</span>
                            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Personnes équipe</span>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                            <GraduationCap className="text-purple-600 mb-2" size={40} />
                            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">BTS Reconnu</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Votre situation actuelle */}
            <section className="space-y-8">
                <div className="border-l-4 border-orange-500 pl-4">
                    <h2 className="text-2xl font-bold text-gray-900">2. Votre situation actuelle</h2>
                    <p className="text-lg text-gray-500 font-medium">Vous arrivez à un plafond de verre.</p>
                </div>

                <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 flex items-start gap-4">
                    <AlertTriangle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                    <p className="text-orange-800 font-semibold text-lg">
                        Vous arrivez à un plafond de verre : <span className="font-bold">votre croissance est limitée par votre temps disponible.</span>
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Bloc A */}
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <Clock className="text-pink-500" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Ce qui se passe au quotidien</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-600">
                                <span className="w-2 h-2 rounded-full bg-pink-400 mt-2.5 flex-shrink-0" />
                                <span>Vous avez tout construit vous-même, et l'équipe est arrivée à saturation.</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <span className="w-2 h-2 rounded-full bg-pink-400 mt-2.5 flex-shrink-0" />
                                <span>Vous passez vos journées sur l'administratif : mails, stages, financements, suivi des dossiers…</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <span className="w-2 h-2 rounded-full bg-pink-400 mt-2.5 flex-shrink-0" />
                                <span>Vous avez moins de temps pour ce qui fait vraiment votre valeur : le temps avec les apprenants et la qualité pédagogique.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Bloc B */}
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <AlertTriangle className="text-orange-500" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Concrètement</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-600">
                                <span className="w-2 h-2 rounded-full bg-orange-400 mt-2.5 flex-shrink-0" />
                                <span>Le BTS long est difficile à maintenir dans ces conditions.</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <span className="w-2 h-2 rounded-full bg-orange-400 mt-2.5 flex-shrink-0" />
                                <span>Votre nouvelle offre de formation reste bloquée faute de temps.</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <span className="w-2 h-2 rounded-full bg-orange-400 mt-2.5 flex-shrink-0" />
                                <span>Vous avez testé plusieurs outils, mais malgré le temps passé, tous ne sont pas adaptés.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECTION 3: L’opportunité */}
            <section className="space-y-8">
                <div className="border-l-4 border-green-500 pl-4">
                    <h2 className="text-2xl font-bold text-gray-900">3. L'opportunité</h2>
                    <p className="text-lg text-green-600 font-medium">Structurer pour scaler.</p>
                </div>

                <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
                    L’idée, ce n’est pas d’ajouter une couche de complexité, mais de <span className="font-bold text-green-600">remettre de l’ordre</span> pour vous faire gagner du temps au quotidien.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-100 transition-colors">
                            <Clock className="text-blue-600" size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Repenser vos processus</h3>
                        <p className="text-gray-600 text-center">Enlever les tâches répétitives qui consomment votre énergie.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                        <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-100 transition-colors">
                            <Users className="text-purple-600" size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Utiliser l'IA là où ça compte</h3>
                        <p className="text-gray-600 text-center">Placer l'IA uniquement là où elle apporte un vrai gain de temps.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                        <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-green-100 transition-colors">
                            <Users className="text-green-600" size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Redonner de l'air à l'équipe</h3>
                        <p className="text-gray-600 text-center">Vous permettre de vous concentrer sur le pédagogique et le temps de qualité avec les apprenants.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Transition & CTAs */}
            <section className="pt-12 pb-8 border-t border-gray-200">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <p className="text-2xl font-medium text-gray-900 leading-relaxed">
                        "La question n’est plus : « Est-ce que l’IA peut m’aider ? »<br />
                        mais : <span className="font-bold text-[#3C39C4]">« Où est-ce qu’elle me fait vraiment gagner du temps dès maintenant ? »</span>"
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => onNavigate?.('roadmap')}
                        className="group flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-[#3C39C4] text-[#3C39C4] rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-sm hover:shadow-md"
                    >
                        Découvrir l’accompagnement
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </button>

                    <a
                        href="mailto:cdelarquier@gmail.com?subject=Validation%20de%20l%E2%80%99offre%20%E2%80%93%20Audit%20%26%20IA%20FORMEA%20Sant%C3%A9&body=Bonjour%20C%C3%A9cile%2C%20%0A%0AJe%20vous%20confirme%20ma%20volont%C3%A9%20de%20valider%20l%E2%80%99offre%20'Audit%20%2B%20Accompagnement%20IA'%20pour%20FORMEA%20Sant%C3%A9.%20%0A%0A%5BCompl%C3%A9ments%20%C3%A0%20pr%C3%A9ciser%20ici%5D"
                        className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#3C39C4] text-white rounded-xl font-bold text-lg hover:bg-[#322f9e] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        <Mail size={20} />
                        Valider l’offre
                    </a>
                </div>
            </section>
        </div>
    );
};

