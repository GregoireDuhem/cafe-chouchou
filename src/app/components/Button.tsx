import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function Button({ Title }: { Title: string }) {
  return (
    <button className="relative h-fit group">
      <Icon
        icon="lsicon:triangle-right-filled"
        className="size-6 absolute top-[45%] -translate-y-1/2 -left-12 group-hover:text-pink text-transparent group-hover:pulse-x"
      />
      <div className="absolute inset-0 -inset-x-2 -translate-x-1 inset-y-1 bg-transparent group-hover:bg-pink z-0"></div>
      <Link className="relative z-10" href={`/${Title.toLowerCase().replace(/\s+/g, "-")}`}>
        {Title}
      </Link>
    </button>
  );
}
