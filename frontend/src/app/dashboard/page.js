export default function DashboardPage() {
  const items = [
    "Father of the Quincy",
    "Emperor of the Wandenreich",
    "Schrift: «A» (The Almighty)",
    "Omniscient Future Sight",
    "Auswählen (Holy Selection)",
  ];

  return (
    <div className="w-full py-8 flex items-center justify-center p-6 transition-colors duration-300">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="https://imgs.search.brave.com/cbuIGSENWk_kpSDwq-duDkh94mCP-LYu9AzxJim7aUk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2IyL2I2/L2EzL2IyYjZhMzNh/ZWJiNTc4MDk2NmRi/MGM1NjVlZWYyMTJh/LmpwZw"
          alt="Yhwach"
          width={500}
          height={500}
          className="rounded-full w-[500px] h-[500px] object-cover border-4 border-zinc-200 dark:border-zinc-800 shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Yhwach Almighty
          </h1>
          <ul className="mt-6 space-y-3 text-xl text-zinc-700 dark:text-zinc-300 list-disc list-inside">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}