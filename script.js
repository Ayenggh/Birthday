const happyBirthdaySong = document.getElementById('bgMusic');
const sweetLetterMusic = document.getElementById('letterMusic');

// ✍️ TYPE YOUR ENTIRE EMOTIONAL BISAYA MESSAGE HERE INSIDE THE QUOTES:
const letterMessage = `To my Sisteret,

I’m writing this because sometimes words are not enough to tell you how much you mean to us (and as someone na di vocal hehe). You have never been just an older sister, you became my strength, and my safe place.
 
You carried us through everything. You gave so much of yourself, gisakripisyo nimo ang tanan, and never asked for anything in return. You worked so hard, stayed strong, and loved us endlessly even when the burden was heavy. You always put us first, una pa sa imong kaugalingon, before your own wants and needs.
 
I saw everything. I watched you carry so much weight alone. I saw you fight battles by yourself, stand tall even when you were exhausted, and keep going just to make sure we were okay. You never showed us how hard it was, you just kept giving and giving.
 
Ayaw kabalaka ate hapit na jud ko mu graduate, gamay nalang kuwang I will definitely pay back everything. I will make sure you experience the beautiful, comfortable life you truly deserve. You sacrificed so much for us, and now it’s your turn to receive everything good. You deserve nothing but the best.
 
You are the strongest, kindest, and most selfless person I know. Everything good in our lives, every part of who we are now, it is all because of you. We see every sacrifice, we feel every effort, and we are so, so proud of you.
 
Thank you for being my hero. Salamat sa tanan. Thank you for loving us unconditionally. Thank you for everything, Ate.
 
We love you more than words can say. You are truly the best sister in the world.
 
Happy Birthday!`;

// STEP A: Triggers immediately when she taps the introductory cover page
function unlockCakeAndMusic() {
    // Hide the touch gate overlay smoothly
    const gate = document.getElementById('audio-gate');
    gate.style.opacity = '0';
    setTimeout(() => { gate.style.display = 'none'; }, 500);

    // Bypasses phone auto-play restrictions instantly on her tap
    happyBirthdaySong.play().catch(err => console.log("Audio kickstart caught:", err));

    // Start the cake building animations at a slow, controlled pace
    document.querySelectorAll('.cake-layer').forEach(layer => layer.classList.add('animate-layer'));
    document.querySelectorAll('.candle').forEach(candle => candle.classList.add('animate-candle'));
    document.querySelectorAll('.flame').forEach(flame => flame.classList.add('animate-flame'));
}

// STEP B: Runs when she clicks the "Open your surprise" button
function revealSurprise() {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('content-screen').style.display = 'block';
    window.scrollTo({ top: 0 });
}

// STEP C: Runs when she clicks the "Open your letter" button at the bottom of the timeline
function revealLetter() {
    document.getElementById('content-screen').style.display = 'none';
    document.getElementById('letter-screen').style.display = 'flex';
    window.scrollTo({ top: 0 });
    
    // Smooth music transition: Fade out the cheerful track and start the emotional track
    happyBirthdaySong.pause();
    sweetLetterMusic.play().catch(err => console.log("Letter music fallback loader:", err));
    
    const today = new Date();
    const options = { month: 'long', year: 'numeric' };
    document.getElementById('currentDate').innerText = today.toLocaleDateString('en-US', options);

    // Fire typewriter letter generator script
    typeWriter(letterMessage, 0, function() {
        const wishRow = document.getElementById('wishContainer');
        wishRow.style.display = 'flex';
        setTimeout(() => { wishRow.style.opacity = '1'; }, 50);
    });
}

function typeWriter(text, i, callback) {
    if (i < text.length) {
        document.getElementById('typedMessage').innerHTML = text.substring(0, i + 1);
        setTimeout(function() {
            typeWriter(text, i + 1, callback);
        }, 45);
    } else if (typeof callback == 'function') {
        callback();
    }
}

// STEP D: Runs when she touches the final candle flame to make a wish
function blowOutCandle() {
    const flame = document.getElementById('wishFlame');
    flame.style.transform = 'scale(0)';
    flame.style.opacity = '0';
    
    // Stop all audio to transition to real-life hugs
    sweetLetterMusic.pause();

    const blessingPanel = document.getElementById('finalBlessing');
    blessingPanel.style.display = 'block';
    setTimeout(() => { blessingPanel.style.opacity = '1'; }, 100);
}
