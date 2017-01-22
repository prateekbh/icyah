const RegistrationFeesData = [
    {
        code: 'A',
        currency: 'INR',
        name: 'PROFESSIONAL',
        fees: ['4000','5000','6000'],
        preconffees: '3000',
    },
    {
        code: 'B',
        currency: 'INR',
        name: 'STUDENTS',
        fees: ['1500','2000','2500'],
        preconffees: '1000',
    },
    {
        code: 'C',
        currency: 'USD',
        name: 'International Professionals',
        fees: ['500','600','700'],
        preconffees: '200',
    },
    {
        code: 'D',
        currency: 'USD',
        name: 'International Students',
        fees: ['200','300','400'],
        preconffees: '100',
    },
    {
        code: 'E',
        currency: 'USD',
        name: 'International Professional (LMIC)',
        fees: ['300','400','500'],
        preconffees: '100',
    },
    {
        code: 'F',
        currency: 'USD',
        name: 'International Students (LMIC)',
        fees: ['100','200','300'],
        preconffees: '50',
    },
];

function calcFees(occupation, attendingConf, attendingWorkshop){
    let fees = 0;
    RegistrationFeesData.forEach(e=>{
        if (e.name === occupation) {
            attendingConf && e.currency ==='INR' && (fees += e.fees[0]);
            attendingConf && e.currency ==='USD' && (fees += e.fees[0] * 67);
            attendingWorkshop && Number.isInteger(e.preconffees) &&(fees += e.preconffees);
        }
    });
    return parseInt(fees);
}

export {
    RegistrationFeesData,
    calcFees,
}