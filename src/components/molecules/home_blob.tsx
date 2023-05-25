import Image from "next/image";

export default function HomeBlob() {
  return (
    <div
      id="home-blob"
      className="relative grid h-[290px] w-[200px] place-items-center justify-self-center rounded-[6.25rem] border-2 border-[var(--text-color-light)] bg-[var(--body-color)]"
    >
      <div
        id="home-perfil"
        className="flex h-[260px] w-[170px] items-end justify-center overflow-hidden rounded-[5.5rem] bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400"
      >
        <Image
          priority
          src="/images/perfil.png"
          alt="home perfil"
          className="h-auto w-[150px]"
          width={150}
          height={243}
        />
      </div>
      <Image
        priority
        src="/images/shape_waves.svg"
        alt="shape waves"
        className="absolute -left-6 top-20 w-[50px] opacity-10"
        width={200}
        height={140}
      />
      <Image
        priority
        src="/images/shape_circle.svg"
        alt="shape circle"
        className="absolute -bottom-8 -right-12 -z-1 w-[150px] rotate-15 opacity-10"
        width={300}
        height={300}
      />
    </div>
  );
}
