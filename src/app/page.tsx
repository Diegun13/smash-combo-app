import Homepage from "./_componets/Homepage";
import GetChar from "./api/Combos/route"


export default async function Home() {
  let res = await GetChar()
  console.log(res)

  return (
    <main>
      {res[1].name}
      <Homepage/>
    </main>
  );
}
