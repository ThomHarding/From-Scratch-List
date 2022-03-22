export function renderVtuberCard(vtuber) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('vtuber-card');

    p.textContent = vtuber.first_name + ' ' + vtuber.last_name;
    img.src = `./assets/${vtuber.last_name}.png`;
    img.classList.add('vtuberImg');
    a.href = `./detail/?id=${vtuber.id}`; 
    
    div.append(p, img);

    a.append(div);

    return a;
}

export function renderVtuberDetail(vtuber) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const descriptionEl = document.createElement('p');
    const nameEl = document.createElement('p');

    div.classList.add('vtuber-detail');

    nameEl.textContent = vtuber.first_name + ' ' + vtuber.last_name;
    nameEl.classList.add('name');

    descriptionEl.textContent = vtuber.description;
    descriptionEl.classList.add('description');

    //rest of the elements here

    img.src = `../assets/${vtuber.last_name}.png`;
    img.classList.add('vtuberBigImg');
    
    div.append(nameEl, img, descriptionEl);
    return div;

}
