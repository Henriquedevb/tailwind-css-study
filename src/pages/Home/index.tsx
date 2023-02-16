import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />

      {/* the space bellow should have 100vh */}
      <main className="h-[calc(100vh-50px)] flex flex-col">
        <div className="flex flex-col justify-center items-center m-auto">
          <h1 className="text-center text-6xl">FRONT END DEVELOPER</h1>

          <h3 className="text-center mt-11 ">
            Desvendando o mundo da programação!
          </h3>

          <div className="flex justify-center items-center mt-12 max-w-3xl m-auto gap-8">
            <Button className="w-40 h-14 border border-pink-700 rounded-md hover:text-gray-50 hover:bg-zinc-900">
              Projects
            </Button>
            <Button className="w-40 h-14 border border-pink-700 rounded-md hover:text-gray-50 hover:bg-zinc-900">
              Meu CV
            </Button>
          </div>
        </div>
      </main>

      <section>
        <h1 className="flex w-[980px] m-auto text-6xl p-8">SOBRE MIM</h1>
        <div className="flex w-[980px] m-auto">
          <img src="https://github.com/Henriquedevb.png" alt="" />

          <div className="flex flex-col m-h-full gap-8 m-4">
            <h1 className="text-3xl">Henrique Fontenele De Jesus</h1>

            <p className="flex justify-end flex-1 items-end">Isso ai!</p>

            <div className="flex justify-end flex-1 items-end">
              <Button className="w-40 h-14 border border-pink-700 rounded-md hover:text-gray-50 hover:bg-zinc-900">
                Saiba mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <form className="border-gray-50 border flex flex-col mt-32 w-[980px] m-auto text-2xl p-8 gap-4 rounded-3xl">
          <h3>Fala comigo ae!</h3>

          <label className="block text-pink-900 font-bold md:text-left mb-1 md:mb-0 pr-4 mt-4">
            Nome
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-700"
            id="inline-full-name"
            type="text"
          />

          <label className="block text-pink-900 font-bold md:text-left mb-1 md:mb-0 pr-4 mt-4">
            Assunto
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-700"
            id="inline-full-name"
            type="text"
          />

          <Button className="mt-8 w-40 h-14 border border-pink-700 rounded-md hover:text-gray-50 hover:bg-zinc-900">
            Enviar
          </Button>
        </form>
      </section>

      <Footer />
    </>
  );
}
