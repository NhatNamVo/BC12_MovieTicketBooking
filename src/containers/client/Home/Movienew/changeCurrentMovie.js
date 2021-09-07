const changeCurrentMovie = (idx,li) => {
    for(let i=0;i<li.length;i++) {
        if(li[i].classList.contains('slick-active')){
            li[i].classList.remove('slick-active');
            break;
        }
    }
    li[idx].classList.add('slick-active');
}

export default changeCurrentMovie;