module.exports = class FirebaseUtil {
    
    constructor(client){
        this.client = client
    }
    async checkAndSaveNewChat(chat){
        try{
            var docRef = await this.client.collection('chat_'+chat.type).doc(chat.id.toString());
            var doc = await docRef.get()
            if(!doc.createTime){
                docRef.set(chat);
            }
        }catch(ex){
            console.log(ex)
        }
    }

    async getChatsPrivate() {
        var docRef = await this.client.collection('chat_private');
        return docRef.get()
    }
    async getChatsGroup() {
        var docRef = await this.client.collection('chat_group');
        return docRef.get()
    }
    async getChatsGroupAndSuperGroup() {
        var docRefGroup = await this.client.collection('chat_group');
        var docRefSuperGroup = await this.client.collection('chat_supergroup');
        
        var groups = await docRefGroup.get()
        var supergroups = await docRefSuperGroup.get()
        
        return groups.concat(supergroups)
    }
}