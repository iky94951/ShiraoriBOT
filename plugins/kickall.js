let handler = async (m, { conn, args }) => {
         let members_id = grupMembers.map(v => v.jid)
          let mentioned = members_id
       let using = mentioned.filter(u => !(u == isOwner || u.includes(conn.user.jid)))
                for (let member of using) {
                if (members.endsWith('@s.whatsapp.net')) 
                await delay(3000)
                await conn.grupRemove(members_id)
                }
               await m.reply(m.chat, 'Sukses Kick All Member', m)
}
handler.help = ['kickall']
handler.tags = ['group']
handler.command = /^(kickall)$/i
handler.rowner = true
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null
handler.limit = false

module.exports = handler
