
const btn = document.getElementById('calculate-button');
btn.addEventListener('click', bishBosh)

function bishBosh() {

    let bishTal = parseInt(document.getElementById('bishTal').value);
    let boshTal = parseInt(document.getElementById('boshTal').value);
    let loopTal = parseInt(document.getElementById('loopTal').value);
    
    let err = '';
    if(bishTal < 0 || boshTal < 0 || loopTal < 0) { err = 'Inga negativa värden tillåts. '; };
    if(bishTal < 2) { err += 'Bish-nr måste vara minst 2. '; };
    if(boshTal < 3) { err += 'Bosh-nr måste vara minst 3. '; };
    if(boshTal <= bishTal) { err += 'Bosh-nr måste större än Bish-nr.'; };
    if((bishTal >= loopTal) || (boshTal >= loopTal)) { err += 'Bish-nr och Bosh-nr måste vara mindre än Loop-nr. '; };
    if(!Number.isInteger(bishTal) || !Number.isInteger(boshTal) || !Number.isInteger(loopTal)) { err += 'Endast heltal tillåts.'; };
    if(err !== '') { document.getElementById('output').innerHTML = err; return; };

    const x = calcBishBosh(bishTal, boshTal, loopTal);

    let html = '', del = ', ';
    for(let i = 0; i <= x.length - 1; i++) {
        if(i === x.length - 1) { del = '' }
        html += `<li>${x[i]}</li>${del}`;
    }
    document.getElementById('output').innerHTML = html;
    
}

function calcBishBosh(bishTal, boshTal, loopTal) {

    const output = [loopTal];

    for(let i = 1; i <= loopTal; i++) {

        let bbResult = '', bish = '', bosh = '';

        if((i % bishTal) === 0) { bish = 'Bish'; };
        if((i % boshTal) === 0) { bosh = 'Bosh'; };

        if(bish === 'Bish') {
            bbResult = bish;
            if(bosh === 'Bosh') { bbResult = `${bbResult}-`; };
        };
        if(bosh === 'Bosh') {
            bbResult = `${bbResult}${bosh}`;
        };
        if(bbResult === '') { bbResult = `${i}`; };

        output[i - 1] = `${bbResult}`;

    }

    return output;

}
