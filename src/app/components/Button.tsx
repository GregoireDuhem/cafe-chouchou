import { Icon } from "@iconify/react/dist/iconify.js";

export default function Button({ Title }: { Title: string }) {
  return (
    <button className="relative h-fit group">
      <Icon
        icon="lsicon:triangle-right-filled"
        className="size-6 absolute top-[45%] -translate-y-1/2 -left-12 group-hover:text-pink text-transparent group-hover:pulse-x"
      />
      <div className="absolute inset-0 -inset-x-2 -translate-x-1 inset-y-1 bg-transparent group-hover:bg-pink z-0"></div>
      <span className="relative z-10">{Title}</span>
    </button>
  );
}
