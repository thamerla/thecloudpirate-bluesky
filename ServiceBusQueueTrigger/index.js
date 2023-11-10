const { BskyAgent, RichText } = require("@atproto/api");

module.exports = async function(context, mySbMsg) {
    context.log('Raw message: ', mySbMsg);

    const rawText = mySbMsg.message;

    const agent = new BskyAgent({ service: "https://bsky.social" });
    await agent.login({
    identifier: process.env.BskyUsername,
    password: process.env.BskyAppPassword,
    });

    const rt = new RichText({ text: rawText });
    await rt.detectFacets(agent);

    context.log('Sending message with text: ', rt);
    await agent.post({ text: rt.text, facets: rt.facets });
    context.log('Message sent successfully!');
};