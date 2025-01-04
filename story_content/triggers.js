function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6OrRvj8nz9d":
        Script1();
        break;
      case "678mE9YNE15":
        Script2();
        break;
      case "6naqCl4KjIB":
        Script3();
        break;
      case "5r3UHz5oru3":
        Script4();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('6m2TV1Q0Lka');
const duration = 1000;
const easing = 'ease-out';
const id = '5g8cblYzaTw';
const teeterAmount = 10;
const signs = ['', '-', ''];

const delay = 1109;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('6bKcuOnSbcr');
const duration = 750;
const easing = 'ease-out';
const id = '5cRAhIAytbG';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5xGY4Y18iCC');
const duration = 750;
const easing = 'ease-out';
const id = '6ZwqCnAWpY2';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6ajxEil8vRX');
const duration = 750;
const easing = 'ease-out';
const id = '6C9UcbycMy6';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
