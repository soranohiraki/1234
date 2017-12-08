const Discord = require("discord.js");
const yt = require('ytdl-core');
const client = new Discord.Client()
const config = require("./config.json");
const embed = new Discord.RichEmbed()
const agree = "✅";
const disagree = "❎";



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
  
 if(command === "투표") {
   const agree = "✅";
   const disagree = "❎";
   
   

    let msg = await message.channel.send("투표");
    await msg.react(agree);
    await msg.react(disagree)
    
    
    const reactions =await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 15000});
    message.channel.send('투표결과 \n\n${agree}: ${reactons.get(agree).count-1}\n${disagree}: $reactions.get(disagree).count-1}');
  }
  
  
  if(command === "도움말") {
        message.channel.send({embed: {
      color: 3447003,
      author: {
        name: 서버관리자봇,
        icon_url: client.user.avatarURL
      },
      title: "봇설명입니다(클릭시 초대링크)",
      url: "https://discord.gg/h4GCDTa",
      description: "봇에 대한 명령어들입니다. 추가되거나 변경될시 이곳에 나옵니다^^",
      fields: [{
          name: "~핑",
          value: "봇의 핑이 확인됩니다."
        },
        {
          name: "~퐁",
          value: "핑이라 대답합니다."
        },
        {
          name: "~낮",
          value: "낮에대한 사진을 업로드합니다. (아침에 사용해주세요.)"
        },
               
               {
                 name: "~밤",
                 vale: "밤에대한 사진을 업로드합니다. (밤에 사용해주세요.)"
               },
               {
               name: "~아바타",
                 vale: "당신의 프로필을 보여줍니다.!"
               },
               {
                 name: "~말 (하고싶은말)",
                 vale: "~말 이후에 한말을 다시 말합니다."
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
  
  
  
  if(command === "아침") {
     message.channel.sendMessage({
        "embed": {
                title: '좋은아침이에요!!^^',
                url: 'https://cdn.discordapp.com/attachments/384356885970812928/385089929539223566/goodmoring0.5s.gif/',
                "image": {
                "url": "https://cdn.discordapp.com/attachments/384356885970812928/385089929539223566/goodmoring0.5s.gif",
                }
            }
        });
    
  }
  
  if(command === "아바타") {
  message.channel.send
message.reply(message.author.avatarURL);
}
   
  if(command === "밤") {
     message.channel.sendMessage({
        "embed": {
                title: '좋은밤이에요!!^^',
                url: 'https://cdn.discordapp.com/attachments/384356885970812928/385089929539223562/goodnight0.5s.gif/',
                "image": {
                "url": "https://cdn.discordapp.com/attachments/384356885970812928/385089929539223562/goodnight0.5s.gif",
                }
            }
        });
     
   }
  
  
  
  
  if(command === "방송시작") {

    if(!message.member.roles.some(r=>["또라이", "멤버", "매니저", "ADMIN", "봇 개발자"].includes(r.name)) )
      return message.reply("죄송하지만 백청자여러분은 권한이 없습니다");
    
    message.delete().catch(O_o=>{});
message.channel.send("백호님의 방송이 시작되었습니다. 공지방에 유튜브링크가있으니 확인해주시길바랍니다.(찡긋)", { tts: true });
    message.delete().catch(O_o=>{});
    message.channel.send("https://www.youtube.com/user/yhjh1260")
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
          value: "이봇은 백호유튜브를 위해 만들어 졌습니다[백호유튜브 바로가기](https://www.youtube.com/user/yhjh1260)"
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
  
    if(!message.member.roles.some(r=>["또라이", "멤버", "매니저", "ADMIN", "봇 개발자"].includes(r.name)) )
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
   
    if(!message.member.roles.some(r=>["또라이", "멤버", "매니저", "ADMIN", "봇 개발자"].includes(r.name)) )
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
  
  if(command === "청소") {
 
    const deleteCount = parseInt(args[0], 10);
    
    if(!message.member.roles.some(r=>["또라이", "멤버", "매니저", "ADMIN", "봇 개발자"].includes(r.name)) )
      return message.reply("죄송하지만 백청자여러분은 권한이 없습니다");
    
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("2에서 100중 숫자를 같이 써주세요! (예 ~청소)()( 99)");
    
    
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`삭제불가 이유 : ${error}`));
  }

  });

client.login(process.env.BOT_TOKEN);
