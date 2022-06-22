
// var element = document.getElementById('calculate-button');
// element.onclick = bishBosh();

// function bishBosh(bishTal, boshTal, loopTal) {
function bishBosh() {

    let bishTal = document.getElementById('bishTal').value;
    let boshTal = document.getElementById('boshTal').value;
    let loopTal = document.getElementById('loopTal').value;

    if(bishTal < 0 || boshTal < 0 || loopTal < 0) {
        document.getElementById('output').innerHTML = 'Inga negativa värden tillåts!';
        exit;
    }

    let x = calcBishBosh(bishTal, boshTal, loopTal);
    // console.log(x);

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



// var x = calcBishBosh(3, 4, 100);
// console.log(x);



// const output = [100];

// for(let i = 1; i<=100; i++) {

//     let bbResult = '', bish = '', bosh = '';

//     if((i % 4) === 0) { bosh = 'Bosh'; };
//     if((i % 3) === 0) { bish = 'Bish'; };

//     if(bish === 'Bish') {
//         bbResult = bish;
//         if(bosh === 'Bosh') { bbResult = `${bbResult}-`; };
//     };

//     if(bosh === 'Bosh') {
//         bbResult = `${bbResult}${bosh}`;
//     };

//     if(bbResult === '') { bbResult = `${i}`; };

//     output[i] = `${bbResult}`;

//     console.log(output[i]);
        
// };
