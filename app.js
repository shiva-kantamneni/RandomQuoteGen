let url="https://quotes-api-self.vercel.app/quote";
let btn=document.querySelector(".generate");
btn.addEventListener("click",async()=>{
    let p=document.querySelector(".para");
    let quote=await quotegen();
    p.innerText=quote.quote;
})
async function quotegen() {
    try{
        let quote=await axios.get(url);
        console.log(quote.data);
        return quote.data;
    }catch(error){
        console.log(error);
    }
    
}