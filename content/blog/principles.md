+++
title = "Principles"
description = "Legium is a commonplace book for your phone."
date = 2026-10-18

[taxonomies]
tags = ["principles"]
+++

Legium is a commonplace book for your phone. Since ancient times, people would keep collections of passages from books that they found useful. Legium brings this to your iPhone and makes it easy to capture, curate, and search your compendium of quotes and wisdom. I built Legium to solve a concrete problem: my photo roll was littered with screenshots of interesting passages from books, but I never looked at them again. I had thousands of highlights in my ebook collection, but they were also difficult to wrangle. So I built Legium to be a commonplace book that could fit in my pocket. It handles capturing passages from physical books, ebooks, and websites and lets you add notes and tags, as well as providing AI-driven search to make your collection easier to use. Crucially, this all happens on **your** phone. There's no subscription, no ads, no data harvesting. Here are the founding principles that have guided development. I'm writing them up to clarify my thinking and to keep myself honest after I publish the app. 

## The product is the product
Legium will be a single up-front purchase. I'm not selling user data or trying to squeeze you for recurring revenue every month. I'll never run ads in the app or feed your passages to some model-training business. Once you buy it, it's yours on your iPhone and iPad.

## Privacy before convenience
All processing happens on your phone. My bet is that models are now good enough to be useful locally for this project. I can't be tempted to monetize your data if I never have it!

Your data is yours. You can export it at any time as an archive of plain JSON files you can read in a text editor. I also built in iCloud sync so your library follows you between your iPad and iPhone, but that's your choice, and it goes through your iCloud account, not through me.

This principle means no telemetry, so I'll have less insight into how people use the app and will have to rely on design judgement rather than data. Very old-fashioned, but I'm doing it anyway. I will accept Apple's crash reports if you opt in, since they have technical content but nothing from your data. There's also a diagnostics switch for bug reports, but that's something you have to turn on, export and email to me yourself.

## Stay small and focused
Legium is a digital commonplace book and that's what it should be great at. **In Legium, it will be quick to add new passages, efficient to search, and rewarding to browse.** It's not a generic note-taking app, it's not a replacement for Obsidian, it's not the nerve center for your business, and it's not going to blog for you.

## It's all in the app
Everything lives in the app. **Every function should work with your phone in airplane mode.** OK so here are the carve-outs: adding a passage from a website needs the website, and the first time Apple's language models are used, the system downloads them. The last one is to keep the app size down as an initial convenience. 

## Build for one user
If I'm the only user but I use it every day, this will have been a success. However, I'm open to ideas! If you use Legium and have a feature you'd like to see, let me know! I may not add it, but I'll at least think about it. 

## No social
There are no friends, no feed, no scrolling. I think social media is mostly bad and I don't want to build something that encourages more of it. There is a Share button for when you need to copy a passage quickly, but it isn't a social-media-ready snapshot. You're not getting a "Legium Wrapped" at the end of the year, but you can rest assured that a data science intern isn't laughing at your research notes for your caveman-meets-cyborg romance.

## Useful AI
AI is more than chatbots, and a commonplace book has some good uses for it. Embeddings, for instance, make search by meaning possible: you remember roughly what a passage said, and Legium finds it. But all of it has to run on the device.

I also use AI to build the app; the code isn't handcrafted. Whether that actually makes me more productive, or just leads to more bikeshedding, is a question for a post of its own.

## OK but where do I get it???
I'm testing the beta build right now. If you have an iPhone or iPad running iOS 26+, write to {{<email subject="Legium beta" />}} and I'll add you to the beta.
