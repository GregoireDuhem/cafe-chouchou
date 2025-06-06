import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function Footer() {
  return (
    <div className="h-[643px] w-screen">
      <div className="relative h-full w-full px-4 sm:px-6 lg:px-[120px] grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-5 items-start text-white">
        <div className="pt-[16px] flex gap-[14px] col-span-2">
          <Icon icon="pajamas:twitter" className="size-6" />
          <Icon icon="uil:instagram" className="size-6" />
          <Icon icon="uil:youtube" className="size-6" />
        </div>
        <FooterInfos
          Title="About us"
          body={["Legal information", "Cookie policy", "General terms and conditions", "Privacy policy", "Contact"]}
        />
        <FooterInfos Title="Categories" body={["Menu", "Shop", "Gallery", "About us"]} />
        <FooterInfos
          Title="Customer Service"
          body={["Feedback and discussion", "Payment", "Shipping conditions", "Privacy policy", "Guarantee"]}
        />
      </div>
    </div>
  );
}

function FooterInfos({ Title, body }: { Title?: string; body?: string[] }) {
  return (
    <div className="pt-[81px] w-full col-span-3 flex flex-col gap-[28px]">
      <span className="text-lg font-bold">{Title}</span>
      <div className="flex flex-col gap-3 text-sm">
        {body?.map((item, index) => (
          <span key={index} className="cursor-pointer hover:underline">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
