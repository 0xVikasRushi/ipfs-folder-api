const apiKeys = process.env.Moralis_API_KEY;

const Moralis = require("moralis").default;
const fs = require("fs");

async function uploadToIpfs() {
  await Moralis.start({
    apiKey: apiKeys,
  });

  const uploadArray = [
    {
      path: "cat.png",
      content: fs.readFileSync("./Cat.png", { encoding: "base64" }),
    },
    {
      path: "info.json",
      content: {
        name: "vikas",
        age: "19",
        sex: "m",
      },
    },
  ];

  const response = await Moralis.EvmApi.ipfs.uploadFolder({
    abi: uploadArray,
  });

  console.log(response.result);
}

uploadToIpfs();
