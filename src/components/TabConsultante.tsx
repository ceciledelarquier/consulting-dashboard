
import { Award } from 'lucide-react';

export const TabConsultante = () => {
    return (
        <div className="p-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                <div className="grid md:grid-cols-5">
                    {/* Left Column: Photo & Quick Stats */}
                    <div className="md:col-span-2 bg-gray-50 p-8 flex flex-col items-center text-center border-r border-gray-100">
                        <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md">
                            <img
                                src="/formea-sante_Audit-IA/images/cecile-photo.png"
                                alt="Cécile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Cécile</h2>
                        <p className="text-[#3C39C4] font-medium mb-6">Senior Product Designer & Strategy</p>

                        <div className="w-full space-y-4 text-left">
                            <div className="flex items-center gap-3 text-gray-600">
                                <div className="w-8 h-8 flex-shrink-0 rounded-full overflow-hidden bg-white border border-gray-200 flex items-center justify-center">
                                    <img src="/formea-sante_Audit-IA/images/bearingpoint-logo.jpg" alt="BearingPoint" className="w-full h-full object-contain" />
                                </div>
                                <span>Ex-BearingPoint</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <div className="w-8 h-8 flex-shrink-0 rounded-full overflow-hidden bg-white border border-gray-200 flex items-center justify-center">
                                    <img src="/formea-sante_Audit-IA/images/hosman-logo.png" alt="Hosman" className="w-full h-full object-contain" />
                                </div>
                                <span>Ex-Head of Ops (Hosman)</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <Award size={20} className="text-[#3C39C4]" />
                                <span>Expertise IA & No-Code</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Value Prop & Story */}
                    <div className="md:col-span-3 p-8 flex flex-col justify-center">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-8 h-1 bg-[#3C39C4] rounded-full"></span>
                                Pourquoi moi ?
                            </h3>
                            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                                <p className="text-gray-800 text-lg leading-relaxed font-medium">
                                    "Je ne suis pas une agence d'automatisation technique. Je suis une partenaire stratégique capable de comprendre votre P&L (Ex-BearingPoint) et de mettre les mains dans le moteur (Ex-Head of Ops). L'IA est le moyen, pas la finalité."
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-bold text-gray-900">Mon approche :</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Mon objectif n'est pas de vous vendre des outils, mais de construire avec vous un système pérenne. Je combine la rigueur du conseil en stratégie avec l'agilité des solutions modernes (No-Code/IA) pour délivrer de la valeur dès la première semaine.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
