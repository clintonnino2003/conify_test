const toggle_btn = document.getElementById('toggle_btn');
const link1 = document.getElementById('links1');
const link2 = document.getElementById('links2');
const over = document.getElementById('over');
const scrollTracker = document.querySelector('.scroll-tracker')
const sc = document.getElementById('sc')


const links = [link1, link2] 

toggle_btn.addEventListener('click', () =>{
    if (toggle_btn.textContent == 'clear_all') {
        toggle_btn.textContent = 'close';
        // toggle_btn.className += ' animate1'
        // console.log(toggle_btn.className)


        links.forEach((link) =>{
            link.style.display = 'flex'
            
            over.style.display = 'none';
        })
        

    }else{
        toggle_btn.textContent = 'clear_all';

        links.forEach((link) =>{
            link.style.display = 'none'
            over.style.display = 'block';
        })  

    }

})

window.addEventListener('scroll', () =>{
    // console.log('scrolled')
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;

    const scrolled = window.scrollY;
    // const scrolled_percent = scrolled
    
    //console.log(scrolled_percent)
    //console.log(scrolled)

    // if (Math.ceil(scrolled) == scrollable) {
    //     const scrolled_percent = scrolled * 6.25
    //     //scrollTracker.style.width = scrolled_percent;
    //     sc.style.display = 'block'
    // }

    if (scrolled) {
        const scrolled_percent = scrolled
        sc.style.width = `${scrolled_percent}px`;
    }else{
        sc.style.width = `${0}px`;
    }
})