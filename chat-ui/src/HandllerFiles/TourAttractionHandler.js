export const trips = [
    {
      id: 1,
      name: 'Ski',
      url: 'https://th.bing.com/th/id/R.2216a048c44be7292652d57e58fb71d0?rik=YHnb2LH1RGhXzA&riu=http%3a%2f%2fwww.10wallpaper.com%2fwallpaper%2f1920x1200%2f1106%2fPhoto_of_Skier_Jumping_Skiing_in_Alps_-_Alps_Ski_Vacation_1920x1200.jpg&ehk=CyOt6ZPBfGs2X33M%2bifCpdCGHrMR9%2fSitS2TenoE4VY%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      id: 2,
      name: 'Beach',
      url: 'https://th.bing.com/th/id/R.8a1dd886ade4941ef3b36c9d894e1558?rik=YXWdJ2NrwsGqqw&riu=http%3a%2f%2fmedia.cntraveler.com%2fphotos%2f5970dfbc5613850539d634c3%2fmaster%2fpass%2fMaui-SecretBeach-4x3-GettyImages-127067237.jpg&ehk=41FEpxx%2f2R%2fAcF9pi7YsO03IJYEDfPFJlh30AMHk9XU%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      id: 3,
      name: 'Mountain',
      url: 'https://th.bing.com/th/id/OIP.FXBuJ8RmUJkOTSC-qd-M6wHaEK?rs=1&pid=ImgDetMain',
    },
  ];


const tourAttractionHandler = async (message) => {
    try {
        const response = await fetch(`https://api.example.com/messages`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: message }),
        });
        const data = await response.json();
        return{ type: "api", content: data.response };
      } catch (error) {
        return { type: "api", content: trips };
      }
}

export default tourAttractionHandler