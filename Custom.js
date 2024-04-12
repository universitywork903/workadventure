
const totalUsers = WA.room.users.length;
let usersEntered = {};

const myLayerSubscriber = WA.room.onEnterLayer("pbd_E").subscribe(() => {
  const user = WA.player.getPlayerName();
  usersEntered[user] = true;
  console.log(`${user} entered the layer`);

  if (Object.keys(usersEntered).length === totalUsers) {
    WA.chat.sendChatMessage("Hello!", "Mr Robot");
    console.log("Message sent");
  }
});

const myLayerExitSubscriber = WA.room.onExitLayer("pbd_E").subscribe(() => {
  const user = WA.player.getPlayerName();
  delete usersEntered[user];
  console.log(`${user} exited the layer`);
});

const myLayerSubscriber1 = WA.room.onEnterLayer("FCV1_E").subscribe(() => {
    WA.room.hideLayer("FCV1");


});


const myLayerSubscriber2 = WA.room.onEnterLayer("FCV3_E").subscribe(() => {
    WA.room.hideLayer("FCV3");


});

const myLayerSubscriber3 = WA.room.onEnterLayer("FCV2_E").subscribe(() => {
    WA.room.hideLayer("FCV2");


});

const myLayerSubscriber4 = WA.room.onEnterLayer("PAB_E").subscribe(() => {
    WA.room.hideLayer("PAB");


});

const myLayerSubscriber5 = WA.room.onEnterLayer("A_E").subscribe(() => {
    WA.room.hideLayer("A");


});

const myLayerSubscriber6 = WA.room.onEnterLayer("SP_E").subscribe(() => {
    WA.room.hideLayer("SP");

                                                                                                                    
});

WA.nav.openTab('https://play.workadventu.re/_/6ukak91w97n/suryakalvakolu4.github.io/MapV2/map.json');
WA.nav.openTab('https://play.workadventu.re/_/6ukak91w97n/suryakalvakolu4.github.io/MapV2/second_level.json');
WA.nav.openTab('https://play.workadventu.re/_/6ukak91w97n/suryakalvakolu4.github.io/MapV2/third_level.json');

WA.chat.sendChatMessage('These are the important steps to follow.');
WA.chat.sendChatMessage('1.Follow the Green_Lane to reach 3rd floor as the process starts from there.');
WA.chat.sendChatMessage('2.Visit all the Numbered stations.');
WA.chat.sendChatMessage('3.Do not skip any Question you face during the exploration.');
WA.chat.sendChatMessage('4. To change the Floor, WOKA must reach the URL Zone.');
WA.chat.sendChatMessage('5. To know the score, reach the SCORE Zone available in each floor.');