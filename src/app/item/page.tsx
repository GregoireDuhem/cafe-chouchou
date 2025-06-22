/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../Header";
import Link from "next/link";
import Footer from "../Footer";
import { Icon } from "@iconify/react/dist/iconify.js";
import ScrambleLink from "../components/ScrambleLink";

export default function page() {
  return (
    <>
      <div className="min-h-dvh w-screen bg-white">
        <Header />
        <div className="px-4 sm:px-6 lg:px-[120px] grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-5 text-primary text-center min-h-screen">
          <div className="col-span-12 flex items-start justify-between pt-6">
            <Link className="text-[16px] underline" href="/">
              <ScrambleLink href="/" label="Home > Item" />
            </Link>
          </div>

          <div className="col-span-12 flex items-start pt-[64px]">
            <div className="grid md:grid-cols-12 gap-5">
              <div className="col-span-12 md:col-span-7 w-full h-full bg-black/1 relative">
                <img src="/img/shop-1.webp" alt="item" />
              </div>
              <div className="col-span-12 md:col-span-5 flex flex-col md:gap-8">
                <div>
                  <div className="flex justify-between flex-col md:flex-row">
                    <div className="font-coolvetica text-[32px]">Chouchou shirt</div>
                    <div className="flex justify-center items-center gap-2">
                      <div className="flex">
                        <Icon icon="iconamoon:star-fill" className="size-5" />
                        <Icon icon="iconamoon:star-fill" className="size-5" />
                        <Icon icon="iconamoon:star-fill" className="size-5" />
                        <Icon icon="iconamoon:star-fill" className="size-5" />
                        <Icon icon="iconamoon:star-fill" className="size-5" />
                      </div>
                      <div className="font-coolvetica text-[15px] text-black flex items-end gap-1">
                        4.8 <span className="text-[#484646]">(30)</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-5 flex flex-col justify-start items-start gap-2">
                    <span className="font-coolvetica-cond text-[24px]">100% Vegan Coton</span>
                    <span className="font-coolvetica text-[16px] text-[#757575]">REF: 64798-297763</span>
                  </div>
                  <div className="col-span-5 flex justify-start pt-4 items-center h-fit gap-2">
                    <span className="font-coolvetica text-[64px]">29</span>
                    <span className="text-[40px]">€</span>
                  </div>
                </div>
                {/*  */}
                <div className="col-span-5 pb-[152px] gap-y-4 flex flex-col items-start">
                  <div className="font-coolvetica text-[16px]">Taille :</div>
                  <div className="flex gap-[13px]">
                    <button className="size-10 border">S</button>
                    <button className="size-10 border">M</button>
                    <button className="size-10 border">L</button>
                    <button className="size-10 border">XL</button>
                  </div>
                  <div className="font-coolvetica text-[16px] text-[#10732A] text-start">
                    En stock, préparation et expédition sous 3/5 jours ouvrés
                  </div>
                  <div className="w-full grid grid-cols-5 gap-8 h-full gap-x-5">
                    <div className="flex col-span-2">
                      <button className="w-[57px] border h-[40px]">-</button>
                      <input
                        type="text"
                        value="1"
                        className="w-[57px] border-t-[1px] border-b-[1px] text-center h-[40px]"
                      />
                      <button className="w-[57px] border h-[40px]">+</button>
                    </div>
                    <Link
                      href="/cart"
                      className="col-span-3 size-full rounded-lg bg-[#1E1E1E] text-white flex text-center items-center justify-center
                    hover:bg-pink hover:text-primary transition duration-500 ease-in-out group"
                    >
                      Add to Cart
                      <Icon
                        icon="ph:shopping-bag"
                        className="size-5 ml-2 group-hover:text-primary text-white transition duration-500 ease-in-out"
                      />
                    </Link>
                    <div className="col-span-5 text-start h-full font-coolvetica text-[16px]">
                      T-shirt 100 % coton – Confort essentiel, style intemporel <br />
                      <br />
                      Découvrez le t-shirt parfait pour toutes vos journées : doux, respirant et durable. Confectionné
                      en coton 100 % biologique, ce basique incontournable vous offre un confort naturel sans compromis
                      sur le style. <br />
                      <br />
                      Sa coupe ajustée mais décontractée met en valeur toutes les morphologies, tandis que son tissu
                      résistant conserve sa forme lavage après lavage. Idéal à porter seul ou sous une veste, il
                      s’adapte à tous vos looks – du casual au plus habillé. <br />
                      <br />
                      ✔️ Tissu 100 % coton peigné – doux et agréable sur la peau <br />
                      ✔️ Coutures renforcées – durabilité maximale <br />
                      ✔️ Disponible du S au XL <br />
                      ✔️ Unisexe – coupe pensée pour toutes et tous
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
