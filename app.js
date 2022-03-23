import { getVtubers } from './fetch-utils.js';
import { renderVtuberCard } from './render-utils.js';

const vtuberListContainer = document.getElementById('vtuber-list-container');

window.addEventListener('load', async () => {
    await loadAllVtubers();
});

async function loadAllVtubers() {
    let vtuberList = await getVtubers();
    for (let vtuber of vtuberList) {
        let vtuberDiv = renderVtuberCard(vtuber);
        vtuberListContainer.appendChild(vtuberDiv);
    }
}