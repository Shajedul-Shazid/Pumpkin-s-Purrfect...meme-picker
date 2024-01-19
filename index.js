import { catsData } from '/data.js'

const emotionRadios = document.getElementById("emotion-radios")

// target-id-by-event
emotionRadios.addEventListener("change", function(e){
    console.log(e.target.id)
})

const emotionArray = []
function getEmotionsArray(cats){
    for(let cat of cats){
        for(let emotion of cat.emotionTags){
            // remove duplicates from an array
         if(!emotionArray.includes(emotion)){
            emotionArray.push(emotion)
         }             
        }
    }
    return emotionArray
}

function renderEmotionsRadios(cats){
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for(let emotion of emotions){
        radioItems += `
        <div class="radio">
            <label for="emotion">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"            
            >
        </div>
        `
    }
    emotionRadios.innerHTML = radioItems
    console.log(emotions)
}

renderEmotionsRadios(catsData)



