let template = `
    <div>
        {{mess}}
    </div>
`;

export let vChat = {
    template,
    name: 'v-chat',
    data() {
        return {
            mess: 'test chat'
        }
    }
}