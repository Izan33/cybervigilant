export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <header className="w-full p-5 text-center text-3xl font-bold">
        Bienvenue sur CyberVigilant 🛡️
      </header>

      <section className="w-full max-w-4xl text-center p-10">
        <h1 className="text-5xl font-extrabold mb-5">Surveillez les menaces, restez protégé</h1>
        <p className="text-lg text-gray-300">
          CyberVigilant vous aide à suivre les dernières menaces en cybersécurité et à sécuriser vos systèmes.
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg">
          Découvrir →
        </button>
      </section>
    </div>
  );
}
