const Discord = require("discord.js");
const yt = require('ytdl-core');
const client = new Discord.Client()
const config = require("./config.json");
const embed = new Discord.RichEmbed()
const ce = require("embed-creator");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setGame(`호랑이굴입니다!`);
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`호랑이굴입니다!`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame(`호랑이굴입니다!`);
});



client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  
 if(command === "퐁") {
   
   message.channel.send("핑!"); 
  }
  
 if(command === "테스트") {
    request.get(message.content.substr(11)).pipe(fs.createWriteStream('./setavatar.png'));
    client.user.setAvatar(fs.readFileSync('./setavatar.png')).then(user => { message.channel.send('✔ Operation successful'); console.log('New Avatar set!'); })
        .catch((error) => { message.channel.send('× Operation failed'); console.log('Error on setavatar command:', error); });
    
    return;
}
  
  
  if(command === "핑") {
   
    const m = await message.channel.send("핑이요?");
    m.edit(`퐁! 대기 시간은 ${m.createdTimestamp - message.createdTimestamp}ms 입니다. API 대기 시간은 ${Math.round(client.ping)}ms 입니다. ^^7`);
  }
  

  
  if(command === "낮") {

    message.delete().catch(O_o=>{});
  
   msg.channel.send(ce(
  "#FEAFEA", {"name": "호랑이굴", "icon_url": msg.author.displayAvatarURL(), "url": "https://www.google.com"}, "Title", "Description",
  [
  {"name": "사진", "value": "당신의 프로필은!"}],
  {"text": "뀨!", "icon_url": msg.guild.iconURL()}, 
  {"thumbnail": msg.guild.iconURL(), "image": msg.author.displayAvatarURL()}, false
));
     {"thumbnail": msg.guild.iconURL(), "image": ("https://cdn.discordapp.com/attachments/384356885970812928/385089929539223566/goodmoring0.5s.gif");
  }, false
    ))
    }

  
  
  if(command === "아바타") {
  message.channel.send
   message.reply(message.author.avatarURL);
}
   
  if(command === "밤") {

    message.delete().catch(O_o=>{});
  
    message.channel.send("https://cdn.discordapp.com/attachments/384356885970812928/385089929539223562/goodnight0.5s.gif");
  
   }
  
  
  if(command === "말") {

    const sayMessage = args.join(" ");
   
    message.delete().catch(O_o=>{}); 

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
          value: "현제 이 봇은 24시간 호스팅을 받는중입니다. (속도확인은 ~핑으로)"
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
  
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("죄송하지만 백청자여러분은 권한이 없습니다");
    
  
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("이 서버의 유효한 회원을 언급하십시오.");
    if(!member.kickable) 
      return message.reply("저보다 높은권한은 강퇴가 안되요!");
    
    
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("킥 이유를 밝혀주세요!");
    
   
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} 님이 ${message.author.tag}에게 강퇴당하셨습니다 사유 : ${reason}`);

  }
  
  if(command === "밴") {
   
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
 
    const deleteCount = parseInt(args[0], 10);
    
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("2에서 100중 숫자를 같이 써주세요! (예 ~청소)()( 99)");
    
    
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`삭제불가 이유 : ${error}`));
  }

  });

client.login(process.env.BOT_TOKEN);
