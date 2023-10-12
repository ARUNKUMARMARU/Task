let form = document.getElementById("gitaForm")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let chapterNumber = document.getElementById("chapterNumber").value;

    getShloka(chapterNumber);
});

async function getShloka(chapterNumber) {
    
    const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNumber}/`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e9d242fd51msh34fd66a87c18044p11d459jsndce74ad39674',
            'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        let summary = document.getElementById("summary")
        summary.append(result.chapter_summary);
        let span1=document.getElementById("span1")
        span1.append(chapterNumber)
        let span2=document.getElementById("span2")
       span2.append(result.verses_count);
       let span3=document.getElementById("span3")
       span3.append(result.verses_count);

    } catch (error) {
        console.error(error);
    }
}

let versesForm=document.getElementById("versesForm")

versesForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    let verseNumber = document.getElementById("verseNumber").value;

    getVerse(verseNumber);
});
async function getVerse(verseNumber) {
    console.log(verseNumber)
    let chapterNumber2 = document.getElementById("chapterNumber").value;
    const url2 = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNumber2}/verses/${verseNumber}/`;
const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e9d242fd51msh34fd66a87c18044p11d459jsndce74ad39674',
		'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url2, options2);
	const result = await response.json();
	console.log(result);
    let verse = document.getElementById("verse")
        verse.append(result.text);
} catch (error) {
	console.error(error);
}
}