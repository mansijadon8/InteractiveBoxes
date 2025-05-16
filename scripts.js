
//to get all product option boxes
const boxes = document.querySelectorAll('.box-container');
const totalPriceElement = document.getElementById('total-price');

//adding click event to each box to handle selection
boxes.forEach(box => {
    box.addEventListener('click', (e) => {
        if (e.target.tagName === 'SELECT' || e.target.closest('.options')) {
            return; 
        }
    
        boxes.forEach(b => b.classList.remove('active'));
        box.classList.add('active');

    const price = box.querySelector('.price-section strong').textContent;
    totalPriceElement.textContent = `Total : ${price}`;
    
    const optionsDiv = box.querySelector('.options');
    optionsDiv.innerHTML = '';

    const unitCount = parseInt(box.dataset.units);
    const header = document.createElement('div');
    header.className = 'option-header';
    header.innerHTML = '<span></span><span>Size</span><span>Colour</span>';
    optionsDiv.appendChild(header);
    

    for (let i = 1; i <= unitCount; i++) {
        const row = document.createElement('div');
        row.className = 'option-row';
        const label = document.createElement('span');
        label.textContent = `#${i}`;
        label.classList.add('option-label');
        const sizeSelect = document.createElement('select');
        ['S', 'M', 'L'].forEach(size => {
        const opt = document.createElement('option');
        opt.value = size;
        opt.textContent = size;
        sizeSelect.appendChild(opt);
        });

        const colorSelect = document.createElement('select');
        ['Black', 'Red', 'Blue'].forEach(color => {
        const opt = document.createElement('option');
        opt.value = color;
        opt.textContent = color;
        colorSelect.appendChild(opt);
        });
        row.appendChild(label);
        row.appendChild(sizeSelect);
        row.appendChild(colorSelect);
        optionsDiv.appendChild(row);
    }
    });
});

//for automatically trigger click on the "2 Units" box to show it as selected by default
document.querySelector('.box-container[data-units="2"]').click();
