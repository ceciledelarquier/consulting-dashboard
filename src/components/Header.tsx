
export const Header = () => {
    return (
        <header className="bg-[#3C39C4] text-white py-8 px-6 shadow-md">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Bienvenue, Lauriane !</h1>
                    <p className="text-blue-100 text-lg">
                        Voici la proposition détaillée pour structurer le passage à l'échelle de votre BTS.
                    </p>
                </div>
                <img
                    src="/formea-sante_Audit-IA/images/formea-logo.png"
                    alt="Forméa Santé"
                    className="h-16 w-auto bg-white rounded-lg p-2"
                />
            </div>
        </header>
    );
};
