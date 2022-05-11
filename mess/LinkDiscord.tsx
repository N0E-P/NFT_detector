import { useNewMoralisObject } from "react-moralis";

export default function LinkDiscord() {
  const walletObject = useNewMoralisObject("Wallet");
  const discordObject = useNewMoralisObject("Discord");


  const linkWalletAndDiscord = async () => {
    const walletData = {
      title: ,
    };

    const discordData = {
      content: "Let's do Sushirrito.",
      parent: await walletObject.save(walletData),
    };

    discordObject.save(discordData, {
      onSuccess: (comment) => console.log(comment),
      onError: (error) => console.log(error),
    });
  };


  return <button onClick={linkWalletAndDiscord}>
    Send your discord tag
  </button>;
}
