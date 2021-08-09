

function click1(){
    memeArray[onStage1][2]+=1;
    updateMemeStage();
}
function click2(){
    memeArray[onStage2][2]+=1;
    updateMemeStage();
}
function updateMemeStage(){
    let randomNumber1 = Math.floor(Math.random()*totalMemesCount+1);
    let randomNumber2 = randomNumber1;
    while (randomNumber1===randomNumber2 ){
    randomNumber2 = Math.floor(Math.random()*totalMemesCount+1);
    }
    console.log(randomNumber2,randomNumber1)
    onStage1 = randomNumber1-1;
    onStage2 = randomNumber2-1;
    url1 = memeArray[onStage1][1];
    url2 = memeArray[onStage2][1];
    memeImg1.setAttribute("src",url1);
    memeImg2.setAttribute("src",url2);
    console.log(memeArray)
    console.log("lil baby my fave rapper");
    leaderboardUpdate();

}
function leaderboardUpdate(){
    var leaderboardArray = memeArray;
    leaderboardArray.sort(compareThirdColumn);
    console.log(leaderboardArray);
    for (let i=1;i<4;i++){
        console.log(`iteration: ${i}`);
        arrayPos = totalMemesCount - i;
        console.log(i,arrayPos);
        console.log(`"${leaderboardArray[arrayPos][1]}"`);
        document.getElementById(`rank${i}-bar`).style.width = `${leaderboardArray[arrayPos][2]*20}px`;
        document.getElementById(`rank${i}-bar`).innerHTML = leaderboardArray[arrayPos][2];
        document.getElementById(`rank${i}-image`).setAttribute("src",`${leaderboardArray[arrayPos][1]}`);
    }
}

function rank1Mouseover(){
    document.getElementById("rank1-image").style.display = "block";
    document.getElementById("meme-1").style.opacity = 0;
    document.getElementById("meme-2").style.opacity = 0;
}
function rank1Mouseout(){
    document.getElementById("rank1-image").style.display = "none";
    document.getElementById("meme-1").style.opacity = 1;
    document.getElementById("meme-2").style.opacity = 1;
}
function rank2Mouseover(){
    document.getElementById("rank2-image").style.display = "block";
    document.getElementById("meme-1").style.opacity = 0;
    document.getElementById("meme-2").style.opacity = 0;
}
function rank2Mouseout(){
    document.getElementById("rank2-image").style.display = "none";
    document.getElementById("meme-1").style.opacity = 1;
    document.getElementById("meme-2").style.opacity = 1;
}
function rank3Mouseover(){
    document.getElementById("rank3-image").style.display = "block";
    document.getElementById("meme-1").style.opacity = 0;
    document.getElementById("meme-2").style.opacity = 0;
}
function rank3Mouseout(){
    document.getElementById("rank3-image").style.display = "none";
    document.getElementById("meme-1").style.opacity = 1;
    document.getElementById("meme-2").style.opacity = 1;
}


function compareThirdColumn(a, b) {
    if (a[2] === b[2]) {
        return 0;
    }
    else {
        return (a[2] < b[2]) ? -1 : 1;
    }
}


let memeImg1 = document.getElementById("image-1");
let memeImg2 = document.getElementById("image-2");
let btn1st = document.getElementById("vote-1st");
btn1st.addEventListener("click", click1);
let btn2nd = document.getElementById("vote-2nd");
btn2nd.addEventListener("click", click2);

let rank1Container = document.getElementById("rank1-bar");
rank1Container.addEventListener("mouseover",rank1Mouseover);
rank1Container.addEventListener("mouseout",rank1Mouseout);

let rank2Container = document.getElementById("rank2-bar");
rank2Container.addEventListener("mouseover",rank2Mouseover);
rank2Container.addEventListener("mouseout",rank2Mouseout);

let rank3Container = document.getElementById("rank3-bar");
rank3Container.addEventListener("mouseover",rank3Mouseover);
rank3Container.addEventListener("mouseout",rank3Mouseout);



let onStage1 = 0;
let onStage2 = 1;
let totalMemesCount = 5;
var memeArray = new Array(totalMemesCount);
for (let i=0; i<totalMemesCount;i++){
    memeArray[i] = new Array(3);
    memeArray[i][0] = i;
    memeArray[i][1] = `images/${ i+1 }-meme.png`
    memeArray[i][2] = 0;
}

let arrayPos;
let score;
console.log(memeArray)