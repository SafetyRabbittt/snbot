const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require("./config.json");
const bot = new Discord.Client();
















bot.on('ready', () => {
  console.log(`成功登入 ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'sn!hi') {
    msg.reply({embed:{
        title: "hi，我是超新星的AI",
        description: "有什麼事想找我幫忙可以打指令哦\
                      輸入sn!help了解更多",
        color:0xFFFF00
    }})
  }
});

















bot.on('message', msg => {
  if (msg.content === 'sn!despise') {
    msg.reply(".                        /´ /)")
    msg.reply('                      /¯ ../')
    msg.reply('                   /... ./')

    msg.reply("         /´¯/' ...'/´¯`.¸")
    msg.reply("      /'/.../... ./... ....--")
    msg.reply("   ('(...´(...  .......  ,~/'...')")
    msg.reply('      \\\.......... ..... ..\\ /..../')
    msg.reply("       ''...  .... ..... . _..´")
    msg.reply('          \\\....... ..... ..(')
    msg.reply("            \\\..... ..... ...\\ ")
  }
});

bot.on('message', msg => {
  if (msg.content === 'sn!toxic') {
    msg.channel.send("ez")
    msg.channel.send("bruh ez")
    msg.channel.send("bruh ez")
    msg.channel.send("noob lol")
    msg.channel.send("ez haha")
    msg.channel.send("ez ez ez")
    msg.channel.send("ez lol")
    msg.channel.send("bruhhhhhhhh")
  }
});



bot.on('message', async msg => {
  let tokens = msg.cleanContent.split(" ");

  if (tokens[0] === 'sn!gif') {
    msg.channel.send('你的GIF已送到')

    let keywords = "exciting";
    if (tokens.length > 1) {
      keywords = tokens.slice(1, tokens.length).join(" ");
    }



    let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${config.tenorkey}&contentfilter=high`
    let response = await fetch(url);
    let json = await response.json();
    console.log(json);
    let index = Math.floor(Math.random() * json.results.length)

    const gif = new Discord.MessageEmbed()
  .setColor('#FFFF00')
  .setTitle('關鍵字:')
  .setDescription(keywords)
  .setURL('https://discord.js.org/')
	.setAuthor('GIF', 'https://img.nga.178.com/attachments/mon_202012/19/i2Q5-5o4vZ1oT3cSjg-jg.png', 'https://discord.js.org')
	.setThumbnail(msg.author.displayAvatarURL({ format: "png", dynamic: true }))
	.addFields(
		{ name: '網址:', value: String(json.results[index].url)},


	)

	.setTimestamp()


    msg.channel.send(gif);
    msg.channel.send(json.results[index].url);

  }
});







bot.on('message', msg => {
  if (msg.content === 'sn!help') {
    const help = new Discord.MessageEmbed()
  .setColor('#FFFF00')
  .setTitle('前綴:sn!')
  .setURL('https://discord.js.org/')
	.setAuthor('Commands', 'https://img.nga.178.com/attachments/mon_202012/19/i2Q5-5o4vZ1oT3cSjg-jg.png', 'https://discord.js.org')
	.setThumbnail(msg.author.displayAvatarURL({ format: "png", dynamic: true }))
	.addFields(
    { name: 'hi', value: '開始使用bot'},
    { name: 'help', value: '顯示所有指令'},

    { name: 'infouser', value: '顯示使用者的資訊'},
    { name: 'infoserver', value: '顯示伺服器資訊'},
    { name: 'despise', value: '舉中指'},
    { name: 'toxic', value: 'toxic人'},
    { name: 'gif', value: '發送gif'},
    { name: 'gif keyword', value: '發送關鍵字gif'},
    { name: '\u200B', value: '\u200B' },

	)

	.setTimestamp()


    msg.channel.send(help);
  }
});

bot.on('message', msg => {
  if (msg.content === 'sn!infoserver') {
    const server = new Discord.MessageEmbed()
  .setColor('#FFFF00')
  .setTitle(msg.guild.name)
  .setURL('https://discord.js.org/')
	.setAuthor('伺服器資訊', 'https://img.nga.178.com/attachments/mon_202012/19/i2Q5-5o4vZ1oT3cSjg-jg.png', 'https://discord.js.org')
	.setThumbnail(msg.guild.iconURL({ format: "png", dynamic: true }) )
	.addFields(
		{ name: '成員數量', value: msg.guild.memberCount },
    { name: '創建日期', value: msg.guild.createdAt },
    { name: '伺服器位置', value: msg.guild.region},


    { name: '\u200B', value: '\u200B' },

	)
  .setTimestamp()


    msg.channel.send(server);
  }
});

bot.on('message', msg => {
  if (msg.content === 'sn!infouser') {
    const server = new Discord.MessageEmbed()
  .setColor('#FFFF00')
  .setTitle(msg.author.username)
  .setURL('https://discord.js.org/')
	.setAuthor('使用者資訊', 'https://img.nga.178.com/attachments/mon_202012/19/i2Q5-5o4vZ1oT3cSjg-jg.png', 'https://discord.js.org')
	.setThumbnail(msg.author.displayAvatarURL({ format: "png", dynamic: true }))
	.addFields(
		{ name: '使用者ID', value: msg.author.id },
    { name: '創建日期', value: 'unknown' },
    { name: '\u200B', value: '\u200B' },
  )

	.setTimestamp()


    msg.channel.send(server);
  }
});

bot.login(config.token);
