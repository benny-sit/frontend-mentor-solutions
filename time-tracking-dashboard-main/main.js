'use strict';

import data from './data.json' assert { type: 'json'};

const btns = document.getElementsByClassName('btn-timeline');

function newSelected(timeline){
    Array.from(btns).forEach(b => {
        if(b.getAttribute('data-json') == timeline) {
            b.classList.add('selected');
        } else {
            b.classList.remove('selected');
        }
    })
}

function changeData(e) {
    console.log(e.currentTarget.getAttribute('data-json'))

    const timeline = e.currentTarget.getAttribute('data-json');

    data.forEach(card => {
        const cardHtml = document.getElementById(`${card.title.toLowerCase()}-stats`)
        
        try {
            cardHtml.children[0].textContent = card?.timeframes[timeline].current + 'hrs';
            cardHtml.children[1].textContent = `Last Week - ${card?.timeframes[timeline].previous}hrs`;
        } catch (error) {
            console.log("Cannot refresh data for " + card.title);
            return
        }
    })

    newSelected(timeline);
}

Array.from(btns).forEach(btn => {
    btn.addEventListener('click', changeData);
})