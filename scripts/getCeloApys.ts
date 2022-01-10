// import { getUbeswapCeloApys } from "../src/api/stats/celo/getubeswapCeloApys";
import { getSushiCeloApys } from "../src/api/stats/celo/getSushiCeloApys";

async function main() {
  const celoApys = await getSushiCeloApys();
  console.log("celoApys", celoApys);
}

main();
