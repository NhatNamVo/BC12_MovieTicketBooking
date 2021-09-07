export const findSlickDotActive = (lists)=>{
    for(let i = 0; i < lists.length; i++) {
        if(lists[i].classList.contains('slick-active')){
            return i;
        }
    }
    return 0;
}
export default findSlickDotActive;