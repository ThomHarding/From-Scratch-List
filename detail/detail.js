import { getVtuber } from '../fetch-utils.js';
import { renderVtuberDetail } from '../render-utils.js';

const vtuberDetailContainer = document.getElementById('vtuber-detail-container');

window.addEventListener('load', async() => {
    const data = new URLSearchParams(window.location.search);
    let id = data.get('id');
    let vtuber = await getVtuber(id);
    let vtuberDetailEl = renderVtuberDetail(vtuber);
    vtuberDetailContainer.append(vtuberDetailEl);
});