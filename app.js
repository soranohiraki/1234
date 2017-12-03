const Discord = require("discord.js");
const yt = require('ytdl-core');
const client = new Discord.Client();
const config = require("./config.json");
const embed = new Discord.RichEmbed();


client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setGame(`호랑이굴입니다!`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`호랑이굴입니다!`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame(`호랑이굴입니다!`);
});


client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "핑") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`퐁! 대기 시간은 ${m.createdTimestamp - message.createdTimestamp}ms 입니다. API 대기 시간은 ${Math.round(client.ping)}ms 입니다`);
  }
  
  if(command === "말") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }


  if(command === "공지") {
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "봇설명입니다",
      url: "https://discord.gg/h4GCDTa",
      description: "이 봇은 현제 나이트 BOT에 의해 실행되고있습니다",
      fields: [{
          name: "서버 관리봇",
          value: "현제 이 봇은 24시간이 되기위해 노력중입니다."
        },
        {
          name: "백호 유튜브",
          value: "이봇은 백호유튜브를 위해 만들어 졌습니다[백호유튜브 바로가기](https://www.youtube.com/user/yhjh1260)가서 구독좀 눌러줘영!."
        },
        {
          name: "부탁",
          value: "싸우지 말고!**__모두 행복하게__** 잘 지내봅시다 ^^."
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "©나이트 봇"
      }
    }
  })

  }
  
  if(command === "킥") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("죄송하지만 백청자여러분은 권한이 없습니다");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("이 서버의 유효한 회원을 언급하십시오.");
    if(!member.kickable) 
      return message.reply("저보다 높은권한은 강퇴가 안되요!");
    
    // slice(1) removes the first part, which here should be the user mention!
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("킥 이유를 밝혀주세요!");
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} 님이 ${message.author.tag}에게 강퇴당하셨습니다 사유 : ${reason}`);

  }
  
  if(command === "밴") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("죄송하지만 백청자여러분은 권한이 없습니다");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("이 서버의 유효한 회원을 언급하십시오.");
    if(!member.bannable) 
      return message.reply("저보다 높은권한은 강퇴가 안되요!");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("밴 사유를 적어주세요!");
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} 님이 ${message.author.tag} 님에게 밴당하셨습니다 사유 : ${reason}`);
  }
  
  if(command === "청소)()(") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("2에서 100중 숫자를 같이 써주세요! (예 +purge 99)");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`삭제불가 이유 : ${error}`));
  }

  });

client.login(process.env.BOT_TOKEN);
