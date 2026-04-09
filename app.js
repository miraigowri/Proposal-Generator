let bg = [
  "p1.jpg",
  "p2.jpg",
  "p3.jpg",
  "p4.jpg",
  "p5.jpg",
  "p6.jpg",
  "p7.jpg",
  "p8.jpg",
  "p9.jpg",
  "p10.jpg",
  "p11.jpg",
  "p12.jpg",
  "p13.jpg",
  "p14.jpg",
  "p15.jpg",
  "p16.jpg",
  "p17.jpg",
  "p18.jpg",
  "p19.jpg",
  "p20.jpg",
  "p21.jpg",
  "p22.webp",
  "p23.jpg",
  "p24.jpg",
  "p25.jpg",
  "p26.jpg",
  "p27.jpg",
  "p28.jpg",
  "p29.jpg",
  "p30.jpg",
  "p31.jpg",
  "p32.jpg",
  "p33.jpg",
  "p34.jpg",
  "p35.jpg",
  "p36.jpg",
  "p37.jpg",
  "p38.jpg",
  "p39.jpg",
  "p40.jpg",
  "p41.jpg",
  "  p42.jpg",
];

let templates = [
  "{name}, Na unna virumbale.. Un mele asai padale.. Nee alazga irukane Nenaikala... ana..Ithu ellam Nadanthudumonu.. Bayama iruku!!! Yosichi sollu....",
  "{name}, Nan idha soliye aagnum, nee… avalo azhagu. And, I am in {emotion} with you",
  "I saw God in you and I {feeling}... {name}",
  "{name}, enna solladrathu therila but i know one thing nee illama ennala vazha mudiyathu",
  "Love is like {adjective} ... every corner is not easy, but with you {name}, everything feels right",
  "There is so much hatred in the world ... but still there is {emotion} in the hearts ... {name}, you are my {emotion}",
  "Love is friendship ... {name}, if you can't be my best friend, then I cannot fall in {emotion} with you",
  "We live once, we die once, we get married once ... and {emotion} also happens only once ... {name}, I want it to be with you",
  "There are no conditions in {emotion} ... {name}, hence there should be no repenting",
  "If the bet is about {emotion}.. {name}, then put whatever you want on the line ... why fear ... if you win then nothing like it",

  "For a girl like you, {name}, to have a guy like me ... is very important",
  "When i first saw you {name}, i {feeling}",
  "When I close my eyes I see you {name} ... when I open my eyes then I want to see you ... if you're not around then I feel you everywhere",
  "I am scared of a lot of things ... but the thing that scares me the most is the thought of losing you, {name}",
  "Remember {name}, in some corner of the world there is a person who is very happy ... because you are happy",
  "To recognize true {emotion} you don't need eyes ... you need a heart ... and {name}, you have captured mine",
  "Either he (God) has to kill me ... or else he has to lose and send you to me, {name}",
  "Have you ever ... even for a day ... {name} ... {feeling}?",
  "A river is not a river without water in it ... and {name}, you are my {emotion}",
  "{name}, A lot of people are in {emotion} ... but no one can love like me because they don't have you",
  "No fool can snatch you away from me by putting a ring on you {name} ... you are mine, just mine",
  "I'll {emotion} you forever {name} and I'll love you till I die ... and even after that",
  "{name}, I love this distance the most ... because if this distance isn't there ... then I won't have a reason to come near you",
  "Life is like a jigsaw puzzle {name} ... people like me can only help you in finding the pieces ... but only you can complete it",
  "{name}, ennaku propose la panna theriyadhu i {emotion} u",
  "Will you marry me, {name}?",
  "You make my world better {name} — will you be mine?",
  "I want to spend {adjective} with you {name}. Will you say yes?",
  "Every day with you {name} feels like a {emotion}. Marry me.",
  "You're my person {name}. Let's make it {adjective}.",
];

let emotions =["love", "happiness","peace","dream","home","madly in love","deeply attached"];
let feelings = ["i fell for you","everything changed","i smiled in the mirror","my heart stopped","i found my soulmate"];
let adjectives = ["everything", "dream", "forever", "world", "wonderful","eternity","my whole life"];

let recent = [];
let uploadedImage = null;
let typingInterval = null;

//img upload
document.getElementById("imageInput").addEventListener("change",function(e){
    let file = e.target.files[0];

    if(file) {
        uploadedImage = URL.createObjectURL(file);
    }
});

//bg

function getBg() {
    let image;
    do {
        image = bg[Math.floor(Math.random() * bg.length)];
    } while (recent.includes(image));

    recent.push(image);
    if(recent.length >5 ) recent.shift();
    return image;
}

 //text generation

 function generateText() {
    let t = templates[Math.floor(Math.random() * templates.length)];
    return t;
 }


 // Type effect
 function typeText(text) {
    let el = document.getElementById("proposalText");
    
    // Clear previous interval if still running
    if(typingInterval) clearInterval(typingInterval);
    
    el.innerHTML = "";
    let i = 0;

    typingInterval = setInterval (() => {
        if(i < text.length) {
            el.innerHTML += text[i];
            i++;
        } else {
            clearInterval(typingInterval);
            typingInterval = null;
        }
    }, 30);
 }


 //font
 function changeFont() {
    let font = document.getElementById("fontSelect").value ;
    document.getElementById("proposalText").style.fontFamily = font;
 }
 //overlays
 let overlays = [
    "rgba(0,0,0,0.4)",
    "rgba(255,0,100,0.2)",
    "rgba(0,0,255,0.2)",
 ];

 // generate
 function generate  () {
    let name = document.getElementById("nameInput").value || "Boo";

    let text = generateText();
    text = text
    .replace(/{name}/g, name)
    .replace(/{emotion}/g, emotions[Math.floor(Math.random() * emotions.length)])
    .replace(/{feeling}/g, feelings[Math.floor(Math.random() * feelings.length)])
    .replace(/{adjective}/g, adjectives[Math.floor(Math.random() * adjectives.length)]);

    let overlay = overlays[Math.floor(Math.random() * overlays.length)];
    let zoom = 100 + Math.random() * 10;

    let  card = document.getElementById("card");

    let image = uploadedImage ?  uploadedImage : getBg();
     
    card.style.backgroundImage = `linear-gradient(${overlay},${overlay}), url(${image})`;
    
    card.style.backgroundSize = zoom + "%";
    typeText(text);
 }

 //download

 function downloadImage() {
    let card = document.getElementById("card");

    html2canvas(card,{scale:3,useCORS:true}).then(canvas => {
        let link = document.createElement("a");
        link.download = "love_card_" + Date.now() +".png" ;
        link.href = canvas.toDataURL("image/png");
        link.click();
    })
 }

 //share

 function share() {
    let textElement = document.getElementById("proposalText");
    let text = textElement.innerText.trim();

    // Check if text is empty
    if(!text || text === "click\" Get proposal\"") {
        alert("Generate a proposal first! 💖");
        return;
    }

    let card = document.getElementById("card");
    alert("📸 Creating beautiful image... Please wait! 💖");

    // Convert card to image
    html2canvas(card, {scale: 3, useCORS: true}).then(canvas => {
        canvas.toBlob(blob => {
            // Create a file from blob
            let file = new File([blob], `love_card_${Date.now()}.png`, {type: "image/png"});
            
            // Try to use Web Share API (modern browsers on mobile)
            if(navigator.share) {
                navigator.share({
                    title: "Love Card 💖",
                    text: text,
                    files: [file]
                }).then(() => {
                    alert("✅ Shared successfully! 💖");
                }).catch(err => {
                    console.log("Share cancelled or failed:", err);
                });
            } else {
                // Desktop fallback: open WhatsApp with message
                let message = `${text} 💖`;
                let waUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
                window.open(waUrl, "_blank");
                alert("📱 Open WhatsApp and share the downloaded image! 💖");
            }
        }, "image/png");
    });
 }