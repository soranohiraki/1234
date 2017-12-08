module.exports.run = async (client, message, args) => {

    let msg = await message.channel.send("투표");
    await msg.react(agree);
    await msg.react(disagree)
    }
    
    const reactions =await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 15000});
    message.channel.send('투표결과 \n\n${agree}: ${reactons.get(agree).count-1}\n${disagree}: $reactions.get(disagree).count-1}')
  }
