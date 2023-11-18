# The Cloud Pirate

The Cloud Pirate is an AI-powered cloud community content aggregator: it fetches the content, creates posts with GPT4 and puts them on social media.

## This repo

Message put on the Service Bus Queue -> processing using Azure Functions + post to Bluesky

- Key Vault: to store Bluesky credentials
- Service Bus Queue: message in the JSON format, a sample message is provided
- Azure Functions: JavaScript, v3 programming model, Service Bus Queue trigger, Bus connection string to auth with the Service Bus, Bluesky credentials as Key Vault References in App Settings

Azure Functions application settings:
- BusConn <- connection string of the service bus
- BskyUsername <- as Key Vault Reference
- BskyAppPassword <- as Key Vault Reference

## Deployment

at [here](https://bsky.app/profile/thecloudpirate.bsky.social)
