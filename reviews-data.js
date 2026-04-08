/*  ============================================================
    InvestCore — 937 Pre-seeded User Reviews
    Generated with realistic names, varied ratings, readable text,
    occasional emojis, helpful counts, and company replies.
    ============================================================ */

var REVIEWS_DATA = (function () {

    /* ---------- name pools ---------- */
    var firstNames = [
        'James','Mary','Robert','Patricia','John','Jennifer','Michael','Linda','David','Elizabeth',
        'William','Barbara','Richard','Susan','Joseph','Jessica','Thomas','Sarah','Christopher','Karen',
        'Charles','Lisa','Daniel','Nancy','Matthew','Betty','Anthony','Margaret','Mark','Sandra',
        'Donald','Ashley','Steven','Kimberly','Paul','Emily','Andrew','Donna','Joshua','Michelle',
        'Kenneth','Carol','Kevin','Amanda','Brian','Dorothy','George','Melissa','Timothy','Deborah',
        'Ronald','Stephanie','Edward','Rebecca','Jason','Sharon','Jeffrey','Laura','Ryan','Cynthia',
        'Jacob','Kathleen','Gary','Amy','Nicholas','Angela','Eric','Shirley','Jonathan','Anna',
        'Stephen','Brenda','Larry','Pamela','Justin','Emma','Scott','Nicole','Brandon','Helen',
        'Benjamin','Samantha','Samuel','Katherine','Raymond','Christine','Gregory','Debra','Frank','Rachel',
        'Alexander','Carolyn','Patrick','Janet','Jack','Catherine','Dennis','Maria','Jerry','Heather',
        'Tyler','Diane','Aaron','Ruth','Jose','Julie','Adam','Olivia','Nathan','Joyce',
        'Henry','Virginia','Douglas','Victoria','Zachary','Kelly','Peter','Lauren','Kyle','Christina',
        'Aisha','Omar','Yuki','Hiroshi','Priya','Raj','Wei','Mei','Carlos','Sofia',
        'Ahmed','Fatima','Lars','Ingrid','Marco','Giulia','Ivan','Natasha','Kenji','Sakura',
        'Hassan','Amira','Diego','Valentina','Andrei','Elena','Kofi','Ama','Tariq','Layla',
        'Sven','Astrid','Luca','Chiara','Ravi','Ananya','Chen','Xiao','Jamal','Zara',
        'Viktor','Olga','Mateo','Isabella','Youssef','Nour','Finn','Freya','Arjun','Deepa',
        'Dmitri','Svetlana','Emeka','Ngozi','Takeshi','Hana','Ali','Leila','Bram','Sophie',
        'Felix','Clara','Hugo','Eva','Oscar','Mia','Leo','Lily','Max','Ruby'
    ];

    var lastInitials = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'.split(' ');

    /* ---------- review templates (readable, natural) ---------- */
    var fiveStarTexts = [
        "Honestly one of the best investment platforms I've used. The AI does a great job spreading risk across crypto, stocks, and commodities. My portfolio has been growing steadily for months now.",
        "I was skeptical at first, but after three months my returns have been really solid. The dashboard is clean and I can see exactly where my money is going. Very impressed overall.",
        "Love this platform! Set it up, deposited, and the AI just handles everything. I check in once a week and it's consistently in the green. Exactly what I was looking for.",
        "The multi-asset approach really works. When crypto dips, my stock and real estate holdings keep things balanced. Smart system and easy to use. 👏",
        "Started using InvestCore about six months ago and I'm really happy with the results. The AI trading is transparent and the fee structure is fair — you only pay when you profit.",
        "Fantastic platform for hands-off investing. I don't have time to watch markets all day, so having an AI manage my portfolio across different asset classes is perfect.",
        "My friend recommended this to me and I'm glad they did. The onboarding was quick, the interface is intuitive, and my returns have been better than what I was getting on my own.",
        "Really solid experience so far. The AI caught some great trades during the last market dip. Customer support is also responsive when I had questions about withdrawals.",
        "Been investing for years and this is genuinely one of the better tools out there. The diversification across forex, crypto, and commodities is smart and the execution is fast.",
        "What I like most is the transparency. I can see every trade the AI makes, the fees are clear, and there are no hidden charges. Finally a platform I actually trust. 🙌",
        "This has completely changed how I invest. Instead of spending hours researching, the AI handles asset allocation across five different markets. My portfolio is up significantly.",
        "Impressive technology. The way it balances between crypto volatility and stable real estate REITs is exactly the kind of risk management I needed. Five stars from me.",
        "Very happy with my decision to join InvestCore. The AI rebalances my portfolio automatically and I've seen consistent monthly growth. The 20% performance fee is totally reasonable.",
        "I tried a few other AI trading platforms before this one and InvestCore is by far the most polished. Great UI, solid returns, and the support team actually knows what they're talking about.",
        "Signed up two weeks ago and already seeing positive results. The forex and commodity trades have been especially good. Looking forward to seeing how it performs long-term.",
        "The platform overview video really helped me understand how everything works. After that I was confident enough to start and it's been a great experience since day one.",
        "My portfolio is diversified across crypto, stocks, forex, commodities, and real estate — all managed automatically. I never thought investing could be this effortless. Highly recommend! 🚀",
        "Really clean interface and the AI trading decisions are surprisingly smart. It sold my crypto positions right before a dip last month. I was genuinely impressed.",
        "I appreciate that they only charge fees on profits. That alignment of incentives makes me trust the platform much more than others that charge flat management fees.",
        "The 7-day minimum period is very reasonable. Some platforms lock your money for months. Here I feel like I'm in control while still getting professional-grade AI management.",
        "Great experience overall. Set up took about 10 minutes, deposited funds, and the AI started trading within hours. Dashboard updates in real-time which I love.",
        "I've been telling everyone about InvestCore. The combination of AI trading across multiple markets with a fair fee structure is hard to beat. Seriously good platform.",
        "Works exactly as advertised. Stable returns, diversified across asset classes, and the withdrawal process was smooth when I needed to pull some funds out.",
        "The AI seems to be really good at timing crypto trades. I've noticed it buys during dips and takes profits at the right moments. Better than I could do manually for sure.",
        "Customer support deserves a shoutout. Had a question about tax reporting and they responded within a few hours with detailed information. That kind of service matters.",
        "Invested in January and my portfolio is up nicely. The mix of traditional stocks and crypto gives me exposure to growth while keeping things relatively stable.",
        "I love that I can see the breakdown of how my portfolio is allocated. Full transparency into which assets the AI is holding and why. This is how investing should be.",
        "Super smooth experience from start to finish. Registration, KYC, deposit, and the AI took it from there. Checking my returns has become the highlight of my mornings. ☕",
        "The real estate REIT exposure is something I haven't seen on other AI platforms. It adds a layer of stability that makes the overall portfolio feel much safer.",
        "After losing money trying to day-trade on my own, InvestCore has been a breath of fresh air. Consistent, steady growth without the stress. Thank you!",
        "Excellent platform with genuine results. The multi-asset strategy is well thought out and the technology behind it is clearly sophisticated. Highly recommend to anyone.",
        "Five months in and no complaints. The AI adapts to market conditions, the fees are transparent, and withdrawals are processed on time. Everything you'd want.",
        "This is what fintech should look like. Easy to use, smart AI, diversified portfolio, and honest pricing. I wish I had found this sooner.",
        "The commodity trading has been a nice surprise. Gold and oil positions have been timed really well. Combined with crypto and stocks, the overall returns are great.",
        "My wife and I both use InvestCore now. We started at different times but both have had positive experiences. The AI consistently finds good opportunities across markets.",
        "I was nervous about letting an AI manage my money but the transparency won me over. Every trade is logged, fees are clear, and the results speak for themselves.",
        "Platform works great on mobile too. I check my portfolio on my phone a few times a week and everything loads fast and looks clean. Nice work on the UX.",
        "Been through a couple of market corrections since I started and the AI handled them well. It reduced exposure to volatile assets before things got rough. Smart system.",
        "Deposited more last month because I'm so happy with the results. The diversification across five asset classes gives me peace of mind that no single market can wreck my portfolio.",
        "The forex trading results have been particularly strong for me. The AI seems to have a good read on currency movements. Combined with crypto gains, it's been a great year.",
        "Exactly the kind of investment tool I was looking for. Professional-grade AI management without needing a massive portfolio. Accessible and effective.",
        "I've recommended InvestCore to three colleagues already. All of them have been happy with it. The product just works and the results are consistent.",
        "What sets this apart is the risk management. The AI doesn't just chase returns — it actively manages downside risk across all asset classes. That's huge for me.",
        "Started small to test it out and was impressed enough to increase my investment significantly. Six months later and it's been one of my best financial decisions.",
        "The dashboard gives you everything you need at a glance. Portfolio performance, asset allocation, recent trades, and fee breakdown. Very well designed. 👍",
        "I'm a conservative investor and was worried about the crypto exposure, but the AI balances it perfectly with bonds and REITs. My overall risk level feels comfortable.",
        "Profits have been steady and the withdrawal process was smooth — got my money within 4 business days. No hidden fees, no surprises. Just a solid platform.",
        "The AI trading across commodities has been really interesting to watch. It seems to pick up on trends in oil and gold before they become obvious. Impressive tech.",
        "Joined after watching the platform overview video and reading the fee structure. Everything was clear and upfront, which I really appreciate. Results have been great.",
        "I used to spend hours every day watching charts. Now the AI handles everything and I have my time back. Better returns too, honestly. Win-win situation.",
        "The multi-asset diversification is the real star here. My portfolio doesn't swing wildly because the AI keeps everything balanced. Exactly what I needed.",
        "Outstanding platform. The technology is clearly cutting edge but they've made it accessible for everyday investors. The onboarding experience was seamless.",
        "Really good returns over the past quarter. The mix of crypto, forex, and stocks has been performing well. Looking forward to adding more to my investment.",
        "Trustworthy and transparent — those are the two words I'd use to describe InvestCore. No gimmicks, no hidden fees, just solid AI-driven portfolio management.",
        "The fact that they only take 20% of profits means they're motivated to actually make me money. That alignment is rare in this industry and I respect it.",
        "Everything about this platform exceeds my expectations. The AI is smart, the interface is beautiful, the support is helpful, and my money is growing. What more could you want?",
        "I've been investing for 20 years and this AI genuinely outperforms most of my manual strategies. The cross-market analysis it does is something no human could replicate at this speed.",
        "Quick shoutout to the support team who walked me through the whole setup process. Patient and knowledgeable. The platform itself has been excellent. Very satisfied customer.",
        "The real-time portfolio tracking is a nice touch. I can see exactly what the AI is doing at any moment. Transparency like this builds real trust.",
        "Withdrew profits last week and the process was fast and painless. The money was in my bank account within three business days. No issues whatsoever.",
        "I can't say enough good things about this platform. The AI caught a huge commodity swing last month and timed the exit perfectly. My portfolio jumped and I literally cheered at my screen. 🎉",
        "After years of mediocre returns with traditional brokers, InvestCore has been a game changer. The multi-asset AI is genuinely smart and the results have been consistently above my expectations.",
        "Just completed my first full year with InvestCore and I'm blown away. My portfolio grew more in one year than it did in three years with my previous platform. The AI diversification really works.",
        "My parents were skeptical when I told them about AI investing, so I showed them my dashboard. Now they both have accounts too. That's the best endorsement I can give. 😂",
        "The way the AI balances between aggressive crypto trades and stable REIT positions is brilliant. It's like having a financial advisor who never sleeps and doesn't charge outrageous fees.",
        "I used to lose sleep over my investments. Since switching to InvestCore, I check my portfolio once a week and it's consistently growing. The stress reduction alone is worth it.",
        "What really won me over was the transparency. I questioned a particular trade and support explained the AI's reasoning in detail. That level of openness is refreshing in this industry.",
        "Started with the minimum and kept adding more as I saw results. Nine months in and my portfolio is looking healthier than ever. The cross-market diversification is the secret sauce.",
        "The AI predicted a forex dip before it happened and moved my funds accordingly. I was skeptical about AI trading but moments like that make you a believer. Seriously impressed.",
        "Best platform I've used in my 15 years of investing. The technology is next level, but what I appreciate most is that it's accessible to regular people, not just finance nerds.",
        "My sister recommended InvestCore to me six months ago and I owe her a huge thank you. Portfolio is up, stress is down, and I actually understand where my money is going.",
        "The combination of crypto, stocks, forex, commodities, and REITs in one AI-managed portfolio is exactly what modern investing should look like. No other platform offers this level of diversification.",
        "Just referred my third friend. Every single one of them has messaged me to say thanks within the first month. The platform speaks for itself once people try it.",
        "I've tried Betterment, Wealthfront, and several crypto bots. InvestCore beats them all for me because of the multi-asset approach. It's not just stocks or just crypto — it's everything, managed smartly.",
        "The AI trading performance during the last market correction was incredible. While everyone was panicking, my portfolio barely dipped because the AI had already repositioned. 🙌",
        "Love the real-time dashboard updates. I can see exactly when the AI makes a trade and what the reasoning is. It's educational and profitable at the same time.",
        "Turned $5,000 into significantly more in 8 months without touching it or stressing about it. This is the future of investing, I'm convinced.",
        "Honestly, the only regret I have is not finding InvestCore sooner. The time and money I wasted trying to trade manually was not worth it when something like this exists.",
        "The user experience is top-notch. Everything from registration to the dashboard to making withdrawals is smooth and intuitive. You can tell the team cares about the details.",
        "My portfolio has been consistently green for months. The AI handles everything from crypto to commodities and I just sit back and watch it grow. Living the dream. ☕",
        "Security was a big concern for me but after researching the platform thoroughly, I feel very confident. The returns have been a very welcome bonus on top of that peace of mind.",
        "I showed my financial advisor my InvestCore returns and he was genuinely surprised. The AI outperformed his manually managed portfolio by a significant margin. That says it all.",
        "The fee structure is genius. They only make money when I make money. That alignment means they're always working to optimize returns. Every platform should work this way.",
        "As someone who works 60+ hours a week, I don't have time to manage investments. InvestCore gives me professional-grade portfolio management without any of the time commitment. Perfect solution.",
        "The community of users seems genuinely happy — you can tell from the reviews. I'm adding my voice to say yes, this platform delivers on its promises. Very satisfied.",
        "Eight months in and my portfolio is more diversified and profitable than it's ever been. The AI makes adjustments I wouldn't have thought of, and they consistently pay off.",
        "The customer support team went above and beyond when I had questions about tax reporting for my gains. They even provided formatted statements. That level of service is rare.",
        "Downloaded the platform overview out of curiosity, ended up investing the same day. Zero regrets. The AI is doing things with my portfolio that I simply couldn't do on my own.",
        "What I love is that the AI adapts. During bullish markets it's more aggressive, during bearish markets it shifts to stability. It's like it reads the market mood perfectly.",
        "The multi-asset approach isn't just marketing — it genuinely protects your downside while capturing upside across different markets. My returns have been remarkably steady."
    ];

    var fourStarTexts = [
        "Good platform overall. The AI trading works well and I've seen decent returns. My only wish is for more detailed analytics on individual trades. Still worth it though.",
        "Solid experience so far. Returns have been consistent and the interface is nice. Would love to see a mobile app eventually, but the web version works fine on my phone.",
        "The AI does a good job with diversification. My one complaint is that withdrawal processing could be a bit faster — took about 5 days. Everything else is great though.",
        "Really like the multi-asset approach. Crypto and forex have been strong performers in my portfolio. I'd give it five stars if they added more customization options.",
        "Happy with my investment so far. The platform is easy to use and returns are solid. I just wish there was more educational content about how the AI makes its decisions.",
        "Been using it for two months and things are looking good. The fee structure is fair and transparent. Docking one star because the onboarding could be a little smoother.",
        "Good platform with solid fundamentals. The diversification across five asset classes is smart. Only missing a few features like custom allocation preferences, but otherwise great.",
        "Returns have been above my expectations. The AI handles market volatility better than I expected. Would appreciate more frequent portfolio reports though.",
        "I'm impressed with the technology. The AI picks are generally solid across all markets. Only reason it's not five stars is I'd like to see a referral program.",
        "Very professional platform. My portfolio has been growing steadily. The 7-day minimum period is fair. Would love to see more communication about market outlook.",
        "The AI trading is genuinely good. My returns have been consistent over four months. I'd like to see more granular control over which asset classes I'm exposed to.",
        "Mostly positive experience. The forex and stock trading results have been excellent. Crypto has been a bit more volatile but that's expected. Good overall.",
        "Nice platform with clean design. The AI rebalancing works well and my portfolio is up. Just wish the dashboard had more advanced charting tools for power users.",
        "Four stars because the core product is excellent — AI trading across multiple assets with transparent fees. Losing one star for the occasional slow customer support response.",
        "The real estate and commodity exposure sets this apart from other platforms. Returns are solid. Would be five stars with a more comprehensive mobile experience.",
        "Invested a moderate amount and have been pleased with the steady growth. The AI avoids big risky moves which I appreciate. More reporting features would make it perfect.",
        "Good concept and decent execution. The multi-asset AI trading works well in practice. I'd love to see performance benchmarks compared to standard index funds.",
        "The platform does what it promises. My portfolio is diversified and growing. Minor gripe — the withdrawal process has a few more steps than I'd like.",
        "Reliable and transparent. I can see every trade and fee. The AI makes sensible decisions across markets. Just needs a bit more polish in the UI department.",
        "Solid investment platform. I've had good returns from the crypto and commodity trading. Would appreciate more options for risk tolerance settings.",
        "The AI is clearly sophisticated. It rebalances my portfolio at the right times and the diversification is excellent. I'd love push notifications for major portfolio changes.",
        "Happy with the results so far. The multi-asset approach smooths out the usual volatility. Could use more transparency about the specific AI models being used.",
        "Good returns over the past three months. The 20% fee on profits is fair — I prefer that to a flat management fee. Would like to see more withdrawal options.",
        "The platform is clean and the AI is smart. My portfolio has performed well across different market conditions. Just wish there were more asset classes available.",
        "I trust InvestCore with a good portion of my investment funds. Returns have been steady and the team seems competent. A few UI improvements would make it perfect.",
        "Four months in and my experience has been largely positive. The AI handles diversification well. Would be nice to have the option to exclude certain asset classes.",
        "Really like the concept and the execution is mostly great. The transparency about fees and trades is refreshing. Just needs a few more features for advanced users.",
        "The AI trading has outperformed my own manual investing by a decent margin. The platform is straightforward and honest. Wish there was a community forum though.",
        "Steady returns and a well-designed dashboard. The multi-asset strategy works as promised. I'd give five stars once they add more customization for risk preferences.",
        "Good platform, good returns, good support. Everything works well but doesn't quite wow me. The AI makes smart trades though, so I'm sticking around for sure.",
        "I like InvestCore a lot. The crypto and forex results have been strong. My only issue is I wish there were more options to customize how much goes into each asset class. Otherwise solid.",
        "The AI is clearly doing something right because my portfolio is growing. Would love to see a dark mode toggle and maybe some push notifications for big trades. Small things, but they'd help.",
        "Four months in and I have no real complaints. Returns are steady, withdrawals work fine, and the dashboard is clean. Just wish they had a proper mobile app instead of only the web version.",
        "Really appreciate the transparency of this platform. Every trade is visible and fees are clear. The AI does well across markets. I'm docking one star just because the onboarding tutorial could be more thorough.",
        "Good experience overall. The commodity and REIT portions of my portfolio have been surprisingly strong. Would give five stars if the customer support response time was a bit faster.",
        "The AI rebalancing is smart and I've seen it save me from some market dips. My one critique is that the platform could offer more educational resources about the strategies being used.",
        "Solid platform with real results. I've been happy with my returns over the past five months. A referral bonus program would be nice though — I've already told several people about it.",
        "The forex trading has been excellent for me. Stock picks are solid too. The only reason for four stars instead of five is I'd like more detailed monthly performance breakdowns.",
        "Everything about the trading is great. The AI knows what it's doing across markets. I just think the UI could use a refresh — it's functional but could be more visually engaging.",
        "Returns have been consistently above what I was getting with my previous broker. The multi-asset approach works. Would love an option to set monthly auto-deposits though.",
        "The platform is trustworthy and the results speak for themselves. My only wish is for a feature that lets me set specific goals, like retirement or a home purchase, and have the AI optimize for that.",
        "Happy investor here. The AI caught some great trades during a volatile week. Four stars because I think the withdrawal minimum could be lower — but that's a minor thing.",
        "I've been recommending this to colleagues. The concept is proven and the execution is solid. Just needs a few quality-of-life improvements like better email notifications about portfolio performance.",
        "Strong platform for hands-off investing. The diversification across five markets is exactly what I wanted. Giving four stars because the 7-day minimum hold could be shortened in my opinion."
    ];

    var threeStarTexts = [
        "Decent platform overall. The AI trading is okay — some months are better than others, which I get is normal for markets. I did notice things stabilized after the first couple months. Would like to see more consistent returns before I put in more, but it's not bad.",
        "The concept is great and the dashboard looks fantastic. Had some slow loading issues early on but they seem to have fixed that in a recent update. Returns are okay, not mind-blowing, but I can see the diversification working. Still watching it closely.",
        "Mixed feelings honestly. The forex and stock trading results have been genuinely good — I was impressed with some of those picks. But the crypto trades have been a bit hit or miss. Hoping the AI improves on that side over time because the rest is solid.",
        "It's an okay platform with a nice design. The diversification is great in theory, and I do appreciate seeing my money spread across different assets. Returns haven't blown me away compared to index funds, but the AI seems to be learning and the last month was actually better.",
        "Average experience so far but I'm sticking with it. The platform works fine, fees are fair, and I like the transparency. My returns just haven't been as strong as I hoped yet. A friend told me it took a few months for his to really pick up, so I'm giving it more time.",
        "The idea is solid — AI managing a multi-asset portfolio across five markets. The actual returns have been modest for me, but I appreciate that they're honest about the fees and the customer support has been genuinely helpful when I had questions.",
        "Three stars for now. The platform is professional and the fees are transparent, which I respect. My returns haven't fully justified the 20% performance fee yet, but I can see the AI making smarter trades recently. Hoping for a better next quarter.",
        "Some good trades, some not so great. The AI isn't perfect but honestly it's probably still better than me trying to time the market myself 😅. The stock and forex picks have been decent. Room for improvement on the crypto side though.",
        "The interface is nice and the concept is sound. My only real concern is the AI plays it a bit too safe for my taste sometimes. I'd love more aggressive options for people with higher risk tolerance. But for conservative investors this would probably be a 4 or 5 star experience.",
        "Fine for what it is. The multi-asset approach is interesting and I like seeing real estate and commodities in the mix. Hasn't dramatically outperformed a basic strategy for me yet, but I've only been on it a few months so keeping my investment small while I watch.",
        "Withdrawal took about 6 days which was longer than I expected, but it did come through fine. The trading results have been okay — the stock and commodity side did well, crypto less so. I think the platform has real potential, just needs a bit more time to mature.",
        "The AI made some questionable crypto trades last month that ate into my profits a bit. But here's the thing — the forex and stock trades were actually really solid and more than made up for it. Hoping the crypto algorithm gets smarter because the rest of the platform is legitimately good.",
        "Not bad, not great. The platform works smoothly and the fee structure is honest, which I appreciate. Just haven't seen the impressive returns that some other reviewers mention. Maybe it takes more time or maybe I started during a tougher market period.",
        "I like the concept of AI-managed multi-asset investing. My actual results have been just average so far, but the dashboard is really well done and support responds quickly when you have questions. I feel like the foundation is there, just need the results to catch up.",
        "It does what it says — diversifies across multiple markets and the AI actively manages things. The returns feel similar to what I could achieve with a few ETFs, but the convenience factor is real. I think with some more optimization it could really stand out.",
        "The platform is solid technology-wise but my experience has been a bit up and down. Had a great second month, then a flat third month. The AI seems to cycle through strategies. I'm curious to see how it plays out over a longer period.",
        "I think InvestCore works better for some market conditions than others. During the recent bull run it did great, but during the pullback it was just average. To be fair, that's probably true of most platforms. Still watching.",
        "Decent overall. The forex and stock trades are consistently okay. The crypto side is where I've seen the most variance — some weeks brilliant, some weeks questionable. But my overall portfolio is slightly up so it's not bad.",
        "I've been using it for about four months and I'd say it's fine. Not the life-changing experience some reviewers describe, but definitely not bad either. The AI makes reasonable trades and the fees are fair. I just expected more impressive returns based on the tech behind it.",
        "The onboarding was smooth and the dashboard looks great. My concern is that the AI sometimes seems to overtrade in crypto — lots of small buys and sells that don't always add up. The other asset classes have been more stable and profitable for me.",
        "Three stars because I'm genuinely on the fence. Some aspects are excellent — the interface, the transparency, the support team. But my returns have been just okay. I want to give it a full six months before I make a final judgment.",
        "The platform itself is well built and I appreciate the team behind it. My returns haven't been spectacular but they haven't been bad either. I think the AI needs more time to learn market patterns. Cautiously optimistic.",
        "Good for people who want set-and-forget investing. The AI handles everything which is convenient. My only issue is the returns feel modest for the level of technology they're advertising. Maybe I just need more patience."
    ];

    var twoStarTexts = [
        "I tried the platform for a couple of months and honestly the returns were pretty slow at first. The AI seemed to play it super safe with my funds. That said, the interface is clean and the fee structure is fair — I just wish the performance picked up sooner. I've heard from others it gets better over time, so I'm giving it a bit longer.",
        "The platform looks really professional and I like the concept, but the crypto side gave me some rough weeks early on. Lost a bit and the recovery was slower than I expected. The forex trades were actually decent though, so it's not all bad. Hoping the AI learns and improves because the idea behind it is solid.",
        "So my withdrawal took longer than I expected — about 8 days — which was a bit annoying. I reached out to support and they were polite and explained the process, so that helped. The actual trading results were okay, not amazing. The stock picks were fine but crypto was up and down. I think they need to speed up the withdrawal side of things.",
        "The concept is genuinely good and I like the multi-asset approach, but the commodity trades didn't hit well for me in the first few weeks. My portfolio barely moved. On the plus side, the dashboard is nice and the team did push an update that seemed to improve things towards the end. I just wish my early experience was better.",
        "I came in with high expectations because the platform looked so polished. The reality was a bit underwhelming at first — my returns were modest compared to what I hoped. But I will say the transparency is real, you can see every trade. And the stock and forex side actually did okay. It's really the crypto that dragged things down for me initially.",
        "Mixed bag for me. The first month was rough — I was seeing losses mostly in crypto and commodities. By the second month the AI seemed to adjust and things stabilized. The dashboard and support are both nice, I just wish I didn't have to go through that initial rough patch. Makes you wonder if the AI needs a warmup period or something.",
        "I like the idea behind InvestCore and the platform is clearly well made. But my returns have been pretty flat over six weeks. Some weeks up a little, some weeks down a little. The stock picks were okay but the crypto and forex trades seemed to cancel each other out. I'm not giving up yet but I expected more movement by now.",
        "The app looks great and the team seems responsive, but my portfolio hasn't done much in two months. I had one really good week in crypto that got me excited, then a few mediocre weeks that brought me back to earth. The REIT and commodity trades were steady at least. I want to believe in it but need to see more consistent growth."
    ];

    var oneStarTexts = [
        "My first month was rough, I'm not going to lie. I saw some losses especially on the crypto side during a turbulent week in the market. It was stressful watching it go down. The AI did recover some of it later and the forex trades were actually okay, but that early experience really shook my confidence. I pulled most of my funds out for now. Might come back and try again with a smaller amount.",
        "I had a tough start — my portfolio dipped for about three weeks straight which was really discouraging. I know markets fluctuate but it was hard to watch. The thing is, the platform itself is well built and the dashboard is great, I just didn't get the results I was hoping for in my timeframe. Maybe I needed to be more patient but it was hard when you're seeing red.",
        "The withdrawal process took longer than I was comfortable with — close to two weeks. Support did eventually get back to me and sorted it out, but the wait was nerve-wracking. The trading side was mixed for me, some decent stock trades but the crypto and commodity picks didn't work out well in my case. I think the platform has potential but my personal experience wasn't great.",
        "I started during what was apparently a bad market week and the AI took some heavy crypto positions right before a dip. Lost a noticeable amount in the first two weeks. The platform itself is well designed and the dashboard is nice, but when you're watching your money go down it's hard to appreciate the UI. I pulled out most of my funds. Maybe the timing was just unlucky but it left a bad taste.",
        "The thing that frustrated me most was the lack of communication during a rough patch. My portfolio was dipping for over a week and I heard nothing from the platform about what was happening. When I reached out to support they were helpful and explained the AI was adjusting, but I wish that communication was proactive. The forex trades were fine, it was mainly crypto that hurt me."
    ];

    /* ---------- reply templates ---------- */
    var positiveReplies = [
        "Thank you for the wonderful review! We're glad the AI is delivering consistent results for you. If you ever need anything, don't hesitate to reach out.",
        "Thanks for sharing your experience! We work hard to make investing accessible and effective. Happy to have you as part of the InvestCore community!",
        "We really appreciate this feedback! Our team is always working to improve the platform. Glad to hear you're seeing great results across your portfolio.",
        "Thank you! We're thrilled to hear about your positive experience. The multi-asset approach is designed to provide exactly the kind of balanced growth you're describing.",
        "Thanks for the kind words! We believe in transparency and fair fees, so it's great to hear that resonates with our users. Wishing you continued success!",
        "Really appreciate you taking the time to share this! Our AI is continuously learning and improving. Happy to hear it's working well for your portfolio.",
        "Thank you for the great review! We're committed to providing the best AI-driven investment experience. Glad you're enjoying the platform!",
        "Thanks so much! Feedback like this motivates our team. We're constantly working to make InvestCore even better."
    ];

    var neutralReplies = [
        "Thank you for the honest feedback! We're always looking to improve. Some of the features you mentioned are on our development roadmap — stay tuned!",
        "We appreciate your candid review! We're working on several improvements including faster withdrawals and more customization options. Thanks for your patience.",
        "Thanks for sharing your experience. We hear you on the feature requests and our team is actively working on enhancements. We hope to earn that fifth star soon!",
        "We appreciate your feedback! Market performance can vary, and our AI is constantly optimizing. We're also working on the improvements you mentioned.",
        "Thank you for the constructive feedback! We take all suggestions seriously and are working on better analytics and reporting features."
    ];

    var negativeReplies = [
        "Thank you for sharing your honest experience. We understand the early period can be bumpy as the AI calibrates to market conditions. We've been rolling out updates that improve early-stage performance, and we'd love for you to give it another look. Our support team is always here if you need anything!",
        "We really appreciate you taking the time to share this. You're right that withdrawals have sometimes taken longer than we'd like — we've since streamlined that process significantly. We're also continuously improving our AI models for better consistency. Hope you'll consider giving us another try!",
        "Thanks for the candid feedback — we hear you. Market conditions can be tough, especially during volatile periods, and we know that's stressful. Our team has pushed several AI updates recently that address exactly the kind of issues you described. We'd love the chance to show you the improvements.",
        "We appreciate your honest review and we're sorry your early experience wasn't what you hoped for. We've been actively working on improving both the AI performance and the withdrawal process. If you ever want to give it another shot, our support team would be happy to walk you through the recent improvements."
    ];

    /* ---------- helpers ---------- */
    // Mulberry32 — a robust, portable 32-bit PRNG that gives
    // identical sequences on every JS engine (no Math.sin drift).
    function mulberry32(a) {
        return function () {
            a |= 0; a = (a + 0x6D2B79F5) | 0;
            var t = Math.imul(a ^ (a >>> 15), 1 | a);
            t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    }

    // Create a single PRNG instance seeded with a fixed value.
    // Every call to rng() advances the sequence deterministically.
    var rng = mulberry32(123456789);

    // Pre-roll the full sequence we need so every review field is
    // assigned from the same deterministic stream.
    // We need ~10 random numbers per review × 500 reviews = 5000,
    // but we'll just call rng() inline — order is fixed because
    // the generation loop is fixed.

    function pick(arr) {
        return arr[Math.floor(rng() * arr.length)];
    }

    function generateDate() {
        // Spread reviews over the past 14 months
        var baseTime = new Date(2026, 2, 7).getTime(); // March 7, 2026
        var daysAgo = Math.floor(rng() * 420) + 1; // 1-420 days ago
        var d = new Date(baseTime - daysAgo * 86400000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        return months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
    }

    /* ---------- generate 937 reviews ---------- */
    var reviews = [];

    // Rating distribution: ~55% 5-star, ~25% 4-star, ~12% 3-star, ~5% 2-star, ~3% 1-star
    // That gives ~4.26 avg → we'll tweak to aim for ~4.6
    // 60% 5-star, 24% 4-star, 10% 3-star, 4% 2-star, 2% 1-star → ~4.36
    // Let's do: 65% 5-star, 22% 4-star, 8% 3-star, 3% 2-star, 2% 1-star → ~4.45
    // Actually for 4.6: 70% 5, 18% 4, 7% 3, 3% 2, 2% 1 → 4.51
    // 72% 5, 17% 4, 6% 3, 3% 2, 2% 1 → 4.54
    // 75% 5, 15% 4, 6% 3, 2.5% 2, 1.5% 1 → 4.60 ✓

    // Avatar color palette for initials-based placeholders
    var avatarColors = [
        '#6366f1','#8b5cf6','#a855f7','#d946ef','#ec4899',
        '#f43f5e','#ef4444','#f97316','#eab308','#22c55e',
        '#14b8a6','#06b6d4','#0ea5e9','#3b82f6','#6d28d9',
        '#be185d','#b45309','#047857','#1d4ed8','#7c3aed'
    ];

    for (var i = 0; i < 937; i++) {
        var r = rng();
        var rating, textPool;
        if (r < 0.75) { rating = 5; textPool = fiveStarTexts; }
        else if (r < 0.90) { rating = 4; textPool = fourStarTexts; }
        else if (r < 0.96) { rating = 3; textPool = threeStarTexts; }
        else if (r < 0.985) { rating = 2; textPool = twoStarTexts; }
        else { rating = 1; textPool = oneStarTexts; }

        var name = pick(firstNames) + ' ' + pick(lastInitials) + '.';
        var text = pick(textPool);
        var helpful = rng() < 0.35 ? Math.floor(rng() * 80) + 1 : 0;
        var date = generateDate();

        // ~35% of reviewers have a profile picture — the rest show initials.
        // This mirrors real-world review listings where most people don't
        // bother uploading an avatar.
        var hasAvatarRoll = rng();
        var hasAvatar = hasAvatarRoll < 0.35;
        var avatarId = hasAvatar ? (i % 70) + 1 : 0; // pravatar supports img=1..70
        var avatarColor = avatarColors[i % avatarColors.length];

        var reply = null;
        var replyChance = rng();
        if (rating >= 4 && replyChance < 0.25) {
            reply = pick(positiveReplies);
        } else if (rating === 3 && replyChance < 0.4) {
            reply = pick(neutralReplies);
        } else if (rating <= 2 && replyChance < 0.6) {
            reply = pick(negativeReplies);
        }

        reviews.push({
            id: i + 1,
            name: name,
            rating: rating,
            text: text,
            helpful: helpful,
            hasAvatar: hasAvatar,
            avatarId: avatarId,
            avatarColor: avatarColor,
            date: date,
            reply: reply
        });
    }

    function normalizeReview(review) {
        if (!review) return null;
        var normalized = Object.assign({}, review);
        normalized.id = String(normalized.id != null ? normalized.id : ('static-' + Math.random().toString(36).slice(2)));
        normalized.name = normalized.name || 'Anonymous';
        normalized.rating = Math.max(1, Math.min(5, Number(normalized.rating || 0) || 5));
        normalized.text = normalized.text || '';
        normalized.helpful_count = Number(
            normalized.helpful_count != null
                ? normalized.helpful_count
                : (normalized.helpful != null ? normalized.helpful : 0)
        ) || 0;
        normalized.helpful = normalized.helpful_count;
        normalized.created_at = normalized.created_at || normalized.date || new Date().toISOString();
        normalized.date = normalized.date || normalized.created_at;
        normalized.source = normalized.source || 'static';
        normalized.approved = normalized.approved !== false;
        return normalized;
    }

    function getStaticReviews() {
        return reviews.map(function (review) {
            return normalizeReview(Object.assign({}, review, {
                id: String(review.id),
                source: 'static',
                approved: true,
                created_at: review.date
            }));
        });
    }

    function mergeReviews(staticReviews, dynamicReviews) {
        var merged = [];
        var seen = {};

        function pushUnique(review, fallbackPrefix) {
            var normalized = normalizeReview(review);
            if (!normalized) return;
            var originalId = String(normalized.id || '');
            var dedupeKey = (normalized.source || fallbackPrefix || 'review') + ':' + originalId;
            if (seen[dedupeKey]) {
                normalized.id = (fallbackPrefix || normalized.source || 'review') + '-' + originalId;
                dedupeKey = (normalized.source || fallbackPrefix || 'review') + ':' + normalized.id;
            }
            seen[dedupeKey] = true;
            merged.push(normalized);
        }

        (dynamicReviews || []).forEach(function (review) {
            pushUnique(Object.assign({}, review, { source: review && review.source ? review.source : 'supabase' }), 'dynamic');
        });

        (staticReviews || []).forEach(function (review) {
            pushUnique(Object.assign({}, review, { source: review && review.source ? review.source : 'static' }), 'static');
        });

        return merged.sort(function (a, b) {
            var aTime = new Date(a.created_at || a.date || 0).getTime() || 0;
            var bTime = new Date(b.created_at || b.date || 0).getTime() || 0;
            return bTime - aTime;
        });
    }

    return {
        rawReviews: reviews,
        normalizeReview: normalizeReview,
        getStaticReviews: getStaticReviews,
        mergeReviews: mergeReviews
    };

})();

window.REVIEWS_DATA = REVIEWS_DATA;
window.InvestCoreStaticReviews = REVIEWS_DATA.getStaticReviews();
window.InvestCoreReviews = Object.assign({}, window.InvestCoreReviews || {}, REVIEWS_DATA);
console.log('Static reviews loaded:', window.InvestCoreStaticReviews.length);
