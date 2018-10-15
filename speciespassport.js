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
        
        console.log('do or do not, there is not try');
    };
    
    const pirate = function() {
        home = 'Tortuga';
        species = 'scallywag';
        affiliation = 'Crew of the Black Pearl';
        alertStatus = 'Observe with caution';
        console.log('This is the day you will always remember as the day you almost caught Captain Jack Sparrow');
    
    };

    const vulcan = function() {
        home = 'Vulcan';
        species = 'Vulcan';
        affiliation = 'Starfleet, United Federation of Planets, Vulcan Science Academy';
        alertStatus = 'Pre-check cleared';
        console.log('fascinating');
    };

    const klingon = function () {
        home = 'Q\'onos';
        species = 'Klingon';
        affiliation = 'Klingon Empire, United Federation of Planets';
        alertStatus = 'Pre-check cleared';
        console.log('Q\'apla');
    };

    const romulan = function () {
        home = 'Romulus';
        species = 'Romulan';
        affiliation = 'Romulan Empire, Tal Shi\'ar, United Federation of Planets';
        alertStatus = 'Pre-check cleared with reservation';
        console.log('Beware Romulans bearing gifts');
    };

    const sindarin = function () {
        home = 'Lothlorien';
        species = 'Elves';
        affiliation = 'Calaquendi/Moriquendi';
        alertStatus = 'Pre-check cleared';
        console.log('lothlorien');
    };

    const chef = function () {
        home = 'Jim Hensons Creature Shop';
        species = 'Muppet';
        affiliation = 'Muppet Studios';
        alertStatus = 'Bork Bork Bork';
        console.log('hurdy gurdy um di chicky');
    };

    const fudd = function () {
        home = 'Warner Studios';
        species = 'Human';
        affiliation = 'Looney Tunes';
        alertStatus = 'Pre-check cleared';
        console.log('wabbit season');
    };

    const shakespeare = function() {
        home = 'Stratford upon Avon';
        species = 'Human';
        affiliation = 'Globe Theater';
        alertStatus = 'Pre-check cleared';
        console.log('Beware the ides of March');
    };

    const sith = function() {
        home = 'Dathomir';
        species = 'Dathomirian';
        affiliation = 'Sith Order';
        alertStatus = 'Pre-check cleared with caution';
        console.log('always two there are');
    };

    const gungan = function() {
        home = 'Naboo';
        species = 'Gungan';
        affiliation = 'Gungan Kingdom, Republic Senate, Galactic Republic,';
        alertStatus = 'Pre-check cleared';
        console.log('meesa no worry');
    };

    const huttese = function() {
        home = 'Nal-Hutta';
        species = 'Hutt';
        affiliation = 'Hutt Clan, Grand Hutt Council';
        alertStatus = 'Pre-check cleared with caution';
        console.log('tell jabba I will bring him the money');
    };
    
    const flowDirect = function() {
        switch (command) {
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
        console.log("switch");
    };
    flowDirect();

    passCard.html(`Home: ${home}<br /> Species: ${species}<br /> Affiliation: ${affiliation}<br />Alert Status: ${alertStatus}`);
    $('#passportCard').append(passCard);
};

