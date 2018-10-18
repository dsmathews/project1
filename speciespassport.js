const speciesPassport = function() {
    $('#passportCard').empty();
    let command = alienChosen;

    // build area
    const passCard = $('<div>');
    passCard.addClass('card-body');

    let home ='';
    let species = '';
    let affiliation = '';
    let alertStatus = '';


    const yoda = function () {
        home = 'Dagobah';
        species = 'unknown';
        affiliation = 'Jedi Order, Galactic Republic';
        alertStatus = 'Pre-check cleared';
    };
    
    const pirate = function() {
        home = 'Tortuga';
        species = 'scallywag';
        affiliation = 'Crew of the Black Pearl';
        alertStatus = 'Observe with caution';
    };

    const vulcan = function() {
        home = 'Vulcan';
        species = 'Vulcan';
        affiliation = 'Starfleet, United Federation of Planets, Vulcan Science Academy';
        alertStatus = 'Pre-check cleared';
    };

    const klingon = function () {
        home = 'Q\'onos';
        species = 'Klingon';
        affiliation = 'Klingon Empire, United Federation of Planets';
        alertStatus = 'Pre-check cleared';
    };

    const romulan = function () {
        home = 'Romulus';
        species = 'Romulan';
        affiliation = 'Romulan Empire, Tal Shi\'ar, United Federation of Planets';
        alertStatus = 'Pre-check cleared with reservation';
    };

    const sindarin = function () {
        home = 'Lothlorien';
        species = 'Elves';
        affiliation = 'Calaquendi/Moriquendi';
        alertStatus = 'Pre-check cleared';
    };

    const chef = function () {
        home = 'Jim Hensons Creature Shop';
        species = 'Muppet';
        affiliation = 'Muppet Studios';
        alertStatus = 'Bork Bork Bork';
    };

    const fudd = function () {
        home = 'Warner Studios';
        species = 'Human';
        affiliation = 'Looney Tunes';
        alertStatus = 'Pre-check cleared';
    };

    const shakespeare = function() {
        home = 'Stratford upon Avon';
        species = 'Human';
        affiliation = 'Globe Theater';
        alertStatus = 'Pre-check cleared';
    };

    const sith = function() {
        home = 'Dathomir';
        species = 'Dathomirian';
        affiliation = 'Sith Order';
        alertStatus = 'Pre-check cleared with caution';
    };

    const gungan = function() {
        home = 'Naboo';
        species = 'Gungan';
        affiliation = 'Gungan Kingdom, Republic Senate, Galactic Republic,';
        alertStatus = 'Pre-check cleared';
    };

    const huttese = function() {
        home = 'Nal-Hutta';
        species = 'Hutt';
        affiliation = 'Hutt Clan, Grand Hutt Council';
        alertStatus = 'Pre-check cleared with caution';
    };
    
    const flowDirect = function() {
        switch (command) {
            case 'yoda':
                yoda();
                break;
            case 'pirate':
                pirate ();
                break;
            case 'vulcan':
                vulcan();
                break;
            case 'klingon':
                klingon();
                break;
            case 'romulan':
                romulan();
                break;
            case 'sindarin':
                sindarin();
                break;
            case 'chef':
                chef();
                break;
            case 'fudd':
                fudd();
                break;
            case 'shakespeare':
                shakespeare();
                break;
            case 'sith':
                sith();
                break;
            case 'gungan':
                gungan();
                break;
            case 'huttese':
                huttese();
                break;
        }
    };
    flowDirect();

    passCard.html(`Home: ${home}<br /> Species: ${species}<br /> Affiliation: ${affiliation}<br />Alert Status: ${alertStatus}`);
    $('#passportCard').append(passCard);
};

