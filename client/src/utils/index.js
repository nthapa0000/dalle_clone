// in utils we create functions which will be reused in future
import  supriseMePrompts  from '../constant/index'

export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random() *supriseMePrompts.length);
    const randomPrompt = supriseMePrompts[randomIndex];
    
    if(randomPrompt === prompt){
        return getRandomPrompt(prompt);
    }

    return randomPrompt;
    
}

